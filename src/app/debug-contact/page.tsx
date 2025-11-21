"use client";
import { useState } from 'react';

export default function DebugContactPage() {
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const testContactAPI = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: 'Test User',
                    email: 'test@example.com',
                    subject: 'Test Subject',
                    message: 'This is a test message to debug the contact form.'
                })
            });

            const data = await response.json();
            setResult({
                status: response.status,
                data,
                timestamp: new Date().toISOString()
            });
        } catch (error: any) {
            setResult({
                error: true,
                message: error.message
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>🔍 Contact Form Debug</h1>
            <p>Click the button to test the contact API and see detailed error information:</p>

            <button
                onClick={testContactAPI}
                disabled={loading}
                style={{
                    padding: '15px 30px',
                    fontSize: '1.1rem',
                    background: loading ? '#ccc' : '#003366',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    marginTop: '20px'
                }}
            >
                {loading ? '⏳ Testing...' : '🧪 Test Contact API'}
            </button>

            {result && (
                <div style={{
                    marginTop: '30px',
                    padding: '20px',
                    background: result.error ? '#f8d7da' : '#d4edda',
                    borderRadius: '10px',
                    border: `2px solid ${result.error ? '#dc3545' : '#28a745'}`
                }}>
                    <h2>{result.error ? '❌ Error' : result.data?.success ? '✅ Success' : '❌ Failed'}</h2>
                    <pre style={{
                        background: '#f4f4f4',
                        padding: '15px',
                        borderRadius: '5px',
                        overflow: 'auto',
                        fontSize: '0.9rem'
                    }}>
                        {JSON.stringify(result, null, 2)}
                    </pre>
                </div>
            )}

            <div style={{
                marginTop: '30px',
                padding: '20px',
                background: '#fff3cd',
                borderRadius: '10px',
                border: '2px solid #ffc107'
            }}>
                <h3>📋 Debugging Checklist:</h3>
                <ol>
                    <li>Check that your <code>.env.local</code> file has all required variables</li>
                    <li>Make sure you restarted the dev server after adding env variables</li>
                    <li>Verify you ran the <code>database/schema.sql</code> in Supabase SQL Editor</li>
                    <li>Check Supabase credentials are correct</li>
                    <li>For production: Add environment variables in Vercel dashboard</li>
                </ol>
            </div>
        </div>
    );
}
