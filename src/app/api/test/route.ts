import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Test 1: Check if we can connect to Supabase
        const { data, error } = await supabase
            .from('profiles')
            .select('count')
            .limit(1);

        if (error) {
            return NextResponse.json({
                success: false,
                message: 'Database connection failed',
                error: error.message,
                hint: 'Make sure you have run the schema.sql file in Supabase SQL Editor'
            }, { status: 500 });
        }

        // Test 2: Check other tables exist
        const tables = ['news_events', 'applications', 'contacts'];
        const tableChecks = await Promise.all(
            tables.map(async (table) => {
                const { error: tableError } = await supabase
                    .from(table)
                    .select('count')
                    .limit(1);
                return {
                    table,
                    exists: !tableError,
                    error: tableError?.message
                };
            })
        );

        return NextResponse.json({
            success: true,
            message: '✅ Backend is working!',
            connection: 'Connected to Supabase',
            tables: tableChecks,
            timestamp: new Date().toISOString()
        });

    } catch (err: any) {
        return NextResponse.json({
            success: false,
            message: 'Unexpected error',
            error: err.message,
            hint: 'Check your .env.local file has the correct Supabase credentials'
        }, { status: 500 });
    }
}
