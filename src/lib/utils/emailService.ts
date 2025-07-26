// Email service utilities for L.W. Barker Transport Services website
// This file is kept for potential future use but the main email functionality
// is now handled directly in the API route at /api/contact

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Email configuration constants
export const EMAIL_CONFIG = {
  to: process.env.CONTACT_EMAIL || 'lee@lwbarkertransport.com',
  subject: 'New Contact Form Submission - L.W. Barker Transport Services',
  replyTo: 'noreply@lwbarkertransport.com',
}; 