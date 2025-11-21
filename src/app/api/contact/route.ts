import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate inputs
        if (!name || !email || !subject || !message) {
            return NextResponse.json({
                success: false,
                error: 'All fields are required'
            }, { status: 400 });
        }

        // 1. Save to database
        const { data: contact, error: dbError } = await supabase
            .from('contacts')
            .insert([
                { name, email, subject, message, status: 'new' }
            ])
            .select()
            .single();

        if (dbError) {
            console.error('Database error:', dbError);
            return NextResponse.json({
                success: false,
                error: 'Failed to save your message. Please try again.'
            }, { status: 500 });
        }

        // 2. Send email notification to admin
        const adminEmail = process.env.ADMIN_EMAIL || 'admin@mut.ac.ke';

        try {
            await resend.emails.send({
                from: 'MUT Website <onboarding@resend.dev>',
                to: [adminEmail],
                subject: `New Contact Form: ${subject}`,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #003366; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">🎓 New Contact Form Submission</h1>
            </div>
            <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #003366; margin-top: 0;">Contact Details</h2>
              
              <div style="margin: 20px 0;">
                <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              </div>

              <div style="margin: 20px 0;">
                <h3 style="color: #006633; margin-bottom: 10px;">Message:</h3>
                <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; line-height: 1.6;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
              
              <p style="color: #666; font-size: 14px; margin: 0;">
                Submission ID: ${contact.id}<br>
                Received: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `,
            });
        } catch (emailError) {
            console.error('Admin email error:', emailError);
            // Don't fail the request if admin email fails
        }

        // 3. Send confirmation email to user
        try {
            await resend.emails.send({
                from: 'MUT Website <onboarding@resend.dev>',
                to: [email],
                subject: 'Thank you for contacting MUT',
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #003366; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
              <h1 style="margin: 0; font-size: 24px;">🎓 Murang'a University of Technology</h1>
            </div>
            <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #003366; margin-top: 0;">Thank You for Reaching Out!</h2>
              
              <p style="color: #333; line-height: 1.6;">Dear ${name},</p>
              
              <p style="color: #333; line-height: 1.6;">
                We have received your message and appreciate you taking the time to contact us. 
                Our team will review your inquiry and get back to you as soon as possible.
              </p>

              <div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #006633;">Your Message:</h3>
                <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                <p style="color: #666; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>

              <p style="color: #333; line-height: 1.6;">
                If you have any urgent concerns, please feel free to call us at <strong>+254 700 123 456</strong>.
              </p>

              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
              
              <p style="color: #666; font-size: 14px; text-align: center;">
                <strong>Murang'a University of Technology</strong><br>
                P.O. Box 75-10200, Murang'a, Kenya<br>
                Email: info@mut.ac.ke | Phone: +254 700 123 456
              </p>
            </div>
          </div>
        `,
            });
        } catch (emailError) {
            console.error('User confirmation email error:', emailError);
            // Don't fail the request if confirmation email fails
        }

        return NextResponse.json({
            success: true,
            message: 'Thank you! Your message has been sent successfully.',
            id: contact.id
        });

    } catch (err: any) {
        console.error('Contact form error:', err);
        return NextResponse.json({
            success: false,
            error: 'An unexpected error occurred. Please try again later.'
        }, { status: 500 });
    }
}
