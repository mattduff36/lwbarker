// Email service utilities for L.W. Barker Transport Services website

import { ContactFormData } from './formValidation';

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

export const sendContactEmail = async (data: ContactFormData): Promise<EmailResponse> => {
  try {
    // This would typically send to an API route that handles email sending
    // For now, we'll simulate the email service
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    const result = await response.json();
    return {
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon.',
    };
  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or contact us directly.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

export const formatEmailBody = (data: ContactFormData): string => {
  return `
New Contact Form Submission - L.W. Barker Transport Services

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service Type: ${data.service || 'Not specified'}

Message:
${data.message}

Load Details:
${data.loadDetails || 'Not provided'}

---
Sent from lwbarkertransport.com contact form
  `.trim();
};

export const EMAIL_CONFIG = {
  to: 'lee@lwbarkertransport.com',
  subject: 'New Contact Form Submission - L.W. Barker Transport Services',
  replyTo: 'noreply@lwbarkertransport.com',
}; 