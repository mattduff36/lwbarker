'use client';

import React, { useState } from 'react';

interface ContactFormData {
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
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    loadDetails: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'local', label: 'Local Transport' },
    { value: 'long-distance', label: 'Long Distance Transport' },
    { value: 'specialized', label: 'Specialized Transport' },
    { value: 'other', label: 'Other / Not Sure' }
  ];

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
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.focus();
      }
      return;
    }
    
    setSubmitStatus('submitting');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        loadDetails: ''
      });
      setSubmitStatus('success');
      
      // Focus on success message
      setTimeout(() => {
        const successMessage = document.getElementById('success-message');
        if (successMessage) {
          successMessage.focus();
        }
      }, 100);
      
    } catch (error) {
      setSubmitStatus('error');
      
      // Focus on error message
      setTimeout(() => {
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
          errorMessage.focus();
        }
      }, 100);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg border border-lwb-grey-200 shadow-lg">
      <h2 className="text-2xl font-bold text-brand-black mb-6">Send us a Message</h2>
      
      {submitStatus === 'success' && (
        <div 
          id="success-message"
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
          role="alert"
          aria-live="polite"
          tabIndex={-1}
        >
          <p className="text-green-800">
            Thank you for your message! We'll get back to you as soon as possible.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div 
          id="error-message"
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
          role="alert"
          aria-live="polite"
          tabIndex={-1}
        >
          <p className="text-red-800">
            There was an error sending your message. Please try again or call us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:border-lwb-orange-500 transition-colors ${
              errors.name ? 'border-red-500' : 'border-lwb-grey-300'
            }`}
            placeholder="Your full name"
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
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
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:border-lwb-orange-500 transition-colors ${
              errors.email ? 'border-red-500' : 'border-lwb-grey-300'
            }`}
            placeholder="your.email@example.com"
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
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
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:border-lwb-orange-500 transition-colors ${
              errors.phone ? 'border-red-500' : 'border-lwb-grey-300'
            }`}
            placeholder="07967 176567"
            aria-required="true"
            aria-invalid={errors.phone ? 'true' : 'false'}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-brand-black mb-2">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-lwb-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:border-lwb-orange-500 transition-colors"
            aria-describedby="service-help"
          >
            {serviceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p id="service-help" className="mt-1 text-sm text-gray-600">
            Select the type of transport service you need
          </p>
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
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:border-lwb-orange-500 transition-colors ${
              errors.message ? 'border-red-500' : 'border-lwb-grey-300'
            }`}
            placeholder="Please provide details about your transport requirements..."
            aria-required="true"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : 'message-help'}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.message}
            </p>
          )}
          {!errors.message && (
            <p id="message-help" className="mt-1 text-sm text-gray-600">
              Include pickup/delivery locations, load details, and any special requirements
            </p>
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
            className="w-full px-3 py-2 border border-lwb-grey-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:border-lwb-orange-500 transition-colors"
            placeholder="Weight, dimensions, special handling requirements..."
            aria-describedby="load-details-help"
          />
          <p id="load-details-help" className="mt-1 text-sm text-gray-600">
            Help us provide a more accurate quote by including load specifications
          </p>
        </div>

        <button
          type="submit"
          disabled={submitStatus === 'submitting'}
          className={`w-full py-3 px-4 rounded-md font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-lwb-orange-500 focus:ring-offset-2 ${
            submitStatus === 'submitting'
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-lwb-orange-500 hover:bg-lwb-orange-600'
          }`}
          aria-describedby="submit-help"
        >
          {submitStatus === 'submitting' ? (
            <>
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
              Sending Message...
            </>
          ) : (
            'Send Message'
          )}
        </button>
        <p id="submit-help" className="text-sm text-gray-600 text-center">
          We'll respond to your inquiry within 24 hours
        </p>
      </form>
    </div>
  );
};

export default ContactForm; 