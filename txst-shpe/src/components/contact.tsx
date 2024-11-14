import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import {MapPin } from 'lucide-react';

const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (!serviceID || !templateID || !publicKey) {
      alert('Error: Missing EmailJS configuration.');
      setIsSending(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      to_name: 'TXST SHPE Team',
      to_email: 'SHPEtxst@gmail.com',
      message: formData.message,
    };

    try {
      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log('Email successfully sent to team:', result);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-texas-maroon to-texas-gold py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
            <p className="text-xl mb-8 text-white">Get in touch with TXST SHPE</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-texas-maroon">Send Us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shpe-blue"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shpe-blue"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-shpe-blue"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full bg-shpe-blue hover:bg-shpe-dark-blue text-white font-bold py-3 px-4 rounded transition duration-300 ${
                      isSending ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSending ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8 text-texas-maroon">Connect With Us</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="text-shpe-blue mr-4" size={24} />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p>Ingram School of Engineering</p>
                      <p>601 University Dr, San Marcos, TX 78666</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a href="https://linktr.ee/shpetxst" target="_blank" rel="noopener noreferrer" className="inline-block bg-shpe-blue hover:bg-shpe-dark-blue text-white font-bold py-2 px-4 rounded transition duration-300">
                      Visit our Linktree
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}