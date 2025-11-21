import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { to, subject, message } = await request.json();

        // Validate inputs
        if (!to || !subject || !message) {
            return NextResponse.json({
                success: false,
                error: 'Missing required fields: to, subject, message'
            }, { status: 400 });
        }

        // Check if Resend API key is configured
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({
                success: false,
                error: 'RESEND_API_KEY not configured in .env.local'
            }, { status: 500 });
        }

        // Send email
        const { data, error } = await resend.emails.send({
            from: 'MUT Website <onboarding@resend.dev>',
            to: [to],
            subject: subject,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #003366; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🎓 MUT Website</h1>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #003366; margin-top: 0;">Test Email</h2>
            <div style="color: #333; line-height: 1.6; margin: 20px 0;">
              ${message}
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              This is a test email from the MUT Website backend system.
            </p>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
            <p>Murang'a University of Technology</p>
            <p>Powered by Resend</p>
          </div>
        </div>
      `,
        });

        if (error) {
            return NextResponse.json({
                success: false,
                error: error.message,
                hint: 'Make sure your Resend API key is valid'
            }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            message: '✅ Email sent successfully!',
            emailId: data?.id,
            timestamp: new Date().toISOString()
        });

    } catch (err: any) {
        return NextResponse.json({
            success: false,
            error: err.message,
            hint: 'Check your Resend configuration'
        }, { status: 500 });
    }
}
