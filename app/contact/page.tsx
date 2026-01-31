'use client';

/**
 * Contact Page
 */

import { Mail, MessageSquare, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold optik-gradient-text mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-xl">We'd love to hear from you</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="optik-glass p-8 rounded-2xl border border-optik-blue/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-optik-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-optik-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-optik-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-optik-blue resize-none"
                  required
                />
              </div>
              <button type="submit" className="w-full optik-btn py-3 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="optik-glass p-6 rounded-2xl border border-optik-blue/20">
              <Mail className="w-8 h-8 text-optik-blue mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">support@optik.io</p>
              <p className="text-gray-400 text-sm mt-2">We typically respond within 24 hours</p>
            </div>

            <div className="optik-glass p-6 rounded-2xl border border-optik-blue/20">
              <MessageSquare className="w-8 h-8 text-optik-purple mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Discord</h3>
              <a href="https://discord.gg/optik" className="text-optik-blue hover:underline">
                Join our community
              </a>
              <p className="text-gray-400 text-sm mt-2">Get instant support from our team and community</p>
            </div>

            <div className="optik-glass p-6 rounded-2xl border border-optik-blue/20">
              <Twitter className="w-8 h-8 text-optik-blue mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Twitter</h3>
              <a href="https://twitter.com/optik_io" className="text-optik-blue hover:underline">
                @optik_io
              </a>
              <p className="text-gray-400 text-sm mt-2">Follow us for updates and announcements</p>
            </div>

            <div className="optik-glass p-6 rounded-2xl border border-optik-blue/20">
              <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
