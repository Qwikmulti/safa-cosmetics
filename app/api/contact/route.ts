import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Create transporter
    // Configure with your SMTP credentials in .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to SAFA team (notification)
    const notificationMail = {
      from: `"SAFA Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@safacosmetics.co.uk',
      replyTo: email,
      subject: `New Enquiry: ${subject} — from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'DM Sans', Arial, sans-serif; background: #0a0a0a; color: #faf5f0; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { background: #e91e8c; padding: 30px; border-radius: 16px 16px 0 0; text-align: center; }
            .header h1 { color: white; font-size: 24px; margin: 0; letter-spacing: 0.1em; }
            .body { background: #1a1a1a; border: 1px solid #2a2a2a; padding: 30px; border-radius: 0 0 16px 16px; }
            .field { margin-bottom: 20px; }
            .label { color: #888888; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 6px; }
            .value { color: #faf5f0; font-size: 15px; }
            .message-box { background: #0a0a0a; border: 1px solid #2a2a2a; border-radius: 8px; padding: 16px; margin-top: 6px; }
            .footer { text-align: center; padding: 20px; color: #888888; font-size: 12px; }
            .divider { border: none; border-top: 1px solid #2a2a2a; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>SAFA Hair & Cosmetics</h1>
              <p style="color:rgba(255,255,255,0.7);margin:8px 0 0;font-size:13px;letter-spacing:0.15em">NEW WEBSITE ENQUIRY</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">From</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color:#e91e8c">${email}</a></div>
              </div>
              ${phone ? `<div class="field"><div class="label">Phone</div><div class="value">${phone}</div></div>` : ''}
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject}</div>
              </div>
              <hr class="divider">
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <hr class="divider">
              <p style="color:#888888;font-size:12px;text-align:center">
                Reply directly to this email to respond to ${name}
              </p>
            </div>
            <div class="footer">
              SAFA Hair & Cosmetics · 161 High Street, Chatham ME4 4BA
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Auto-reply to customer
    const autoReplyMail = {
      from: `"SAFA Hair & Cosmetics" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'We received your message — SAFA Hair & Cosmetics',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'DM Sans', Arial, sans-serif; background: #f9f9f9; color: #111; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { background: #0a0a0a; padding: 30px; border-radius: 16px 16px 0 0; text-align: center; }
            .logo { color: #e91e8c; font-size: 28px; font-weight: 900; letter-spacing: 0.2em; }
            .sub { color: #888888; font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; margin-top: 6px; }
            .body { background: white; border: 1px solid #e5e5e5; padding: 40px; border-radius: 0 0 16px 16px; }
            h2 { color: #111; font-size: 22px; margin-top: 0; }
            p { color: #555; line-height: 1.7; }
            .highlight { background: #fdf0f7; border-left: 3px solid #e91e8c; padding: 16px; border-radius: 0 8px 8px 0; margin: 20px 0; }
            .btn { display: inline-block; background: #e91e8c; color: white; padding: 12px 28px; border-radius: 50px; text-decoration: none; font-size: 13px; letter-spacing: 0.15em; text-transform: uppercase; margin-top: 10px; }
            .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">SAFA</div>
              <div class="sub">Hair & Cosmetics</div>
            </div>
            <div class="body">
              <h2>Thanks for reaching out, ${name}!</h2>
              <p>
                We've received your message and will get back to you within <strong>24 hours</strong>.
                Our team is ready to help you with all your beauty needs.
              </p>
              <div class="highlight">
                <strong>Your enquiry:</strong> ${subject}
              </div>
              <p>
                If you need a quicker response, you're always welcome to call us or visit the store:
              </p>
              <p>
                📞 <a href="tel:+441634790439" style="color:#e91e8c">+44 1634 790439</a><br>
                📍 161 High Street, Chatham ME4 4BA<br>
                🕐 Mon–Sat: 9am–7pm · Sunday: 10am–5pm
              </p>
              <a href="https://safacosmetics.co.uk/products" class="btn">Browse Products</a>
            </div>
            <div class="footer">
              © ${new Date().getFullYear()} SAFA HAIR & COSMETICS LTD · Chatham, Kent, UK
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(notificationMail);
    await transporter.sendMail(autoReplyMail);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
