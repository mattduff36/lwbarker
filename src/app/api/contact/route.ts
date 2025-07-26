import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Create transporter with Google SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Create HTML email template
const createEmailTemplate = (data: ContactFormData): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            background: #f9fafb;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            border: 1px solid #e5e7eb;
        }
        .field {
            margin-bottom: 20px;
        }
        .field-label {
            font-weight: bold;
            color: #374151;
            margin-bottom: 5px;
            display: block;
        }
        .field-value {
            background: white;
            padding: 12px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            margin-top: 5px;
        }
        .message-box {
            background: white;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #d1d5db;
            margin-top: 5px;
            white-space: pre-wrap;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 14px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">L.W. Barker Transport</div>
        <h1 style="margin: 0; font-size: 20px;">New Contact Form Submission</h1>
    </div>
    
    <div class="content">
        <p style="margin-bottom: 25px; color: #6b7280;">
            A new contact form submission has been received from your website.
        </p>
        
        <div class="field">
            <span class="field-label">Full Name:</span>
            <div class="field-value">${data.name}</div>
        </div>
        
        <div class="field">
            <span class="field-label">Email Address:</span>
            <div class="field-value">${data.email || 'Not provided'}</div>
        </div>
        
        <div class="field">
            <span class="field-label">Phone Number:</span>
            <div class="field-value">${data.phone}</div>
        </div>
        
        <div class="field">
            <span class="field-label">Message:</span>
            <div class="message-box">${data.message}</div>
        </div>
        
        <div class="footer">
            <p>This email was sent from the contact form on lwbarkertransport.com</p>
            <p>Submitted on: ${new Date().toLocaleString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}</p>
        </div>
    </div>
</body>
</html>
  `;
};

// Create plain text version for email clients that don't support HTML
const createTextTemplate = (data: ContactFormData): string => {
  return `
New Contact Form Submission - L.W. Barker Transport Services

Name: ${data.name}
Email: ${data.email || 'Not provided'}
Phone: ${data.phone}

Message:
${data.message}

---
Submitted on: ${new Date().toLocaleString('en-GB')}
Sent from lwbarkertransport.com contact form
  `.trim();
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message }: ContactFormData = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Email options
    const mailOptions = {
      from: `"L.W. Barker Transport Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email || process.env.SMTP_USER,
      subject: 'New Contact Form Submission - L.W. Barker Transport Services',
      html: createEmailTemplate({ name, email, phone, message }),
      text: createTextTemplate({ name, email, phone, message }),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
} 