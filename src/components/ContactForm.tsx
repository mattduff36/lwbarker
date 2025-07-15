'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  loadDetails: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    loadDetails: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // For now, just simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        loadDetails: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg border border-lwb-grey-200 shadow-lg">
      <h2 className="text-2xl font-bold text-brand-black mb-6">Send us a Message</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">
            Thank you for your message! We'll get back to you as soon as possible.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            There was an error sending your message. Please try again or call us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 transition-colors ${
              errors.name ? 'border-red-500' : 'border-lwb-grey-300'
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 transition-colors ${
              errors.email ? 'border-red-500' : 'border-lwb-grey-300'
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-black mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 transition-colors ${
              errors.phone ? 'border-red-500' : 'border-lwb-grey-300'
            }`}
            placeholder="07967 176567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-brand-black mb-2">
            Service Type (Optional)
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-lwb-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500"
          >
            <option value="">Select a service...</option>
            <option value="local">Local Transport</option>
            <option value="long-distance">Long Distance</option>
            <option value="specialized">Specialized Loads</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 transition-colors ${
              errors.message ? 'border-red-500' : 'border-lwb-grey-300'
            }`}
            placeholder="Please provide details about your transport needs..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="loadDetails" className="block text-sm font-medium text-brand-black mb-2">
            Load Details (Optional)
          </label>
          <textarea
            id="loadDetails"
            name="loadDetails"
            value={formData.loadDetails}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-lwb-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500"
            placeholder="Size, weight, pickup/delivery locations, special requirements..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
              isSubmitting
                ? 'bg-lwb-grey-400 cursor-not-allowed'
                : 'bg-lwb-orange-500 hover:bg-lwb-orange-600 transform hover:scale-105'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          <a
            href="tel:07967176567"
            className="flex-1 px-6 py-3 rounded-lg font-semibold text-center border-2 border-lwb-orange-500 text-lwb-orange-500 hover:bg-lwb-orange-500 hover:text-white transition-all duration-200"
          >
            Call: 07967 176567
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm; 