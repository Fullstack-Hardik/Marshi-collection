"use client";

import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone, Clock, User } from 'lucide-react';
import { AnimatedButton } from '@/components/raw-form/AnimatedButton';
import { GradientBlobs } from '@/components/raw-form/GradientBlobs';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative min-h-screen w-full pt-32 pb-24 px-6 md:px-12 overflow-hidden animate-slide-up">
      <GradientBlobs />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="font-clash font-bold uppercase text-[10vw] md:text-[6vw] leading-[0.85] tracking-tighter mb-12">
          Get In <span className="text-[var(--accent-red)]">Touch</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <div className="flex flex-col gap-12">
            <p className="font-satoshi text-xl lg:text-2xl font-medium max-w-md opacity-80 leading-relaxed">
              Have a question about our collections or need styling advice? We are here to help. Reach out to us anytime.
            </p>

            <div className="flex flex-col gap-8 font-satoshi">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[var(--text-primary)] text-[var(--bg-base)] rounded-none group-hover:bg-[var(--accent-red)] transition-colors">
                  <User size={28} />
                </div>
                <div>
                  <h3 className="font-clash font-bold text-2xl uppercase tracking-wider mb-1">Owner</h3>
                  <p className="text-lg opacity-80">Areesha Waheed</p>
                  <p className="text-lg font-bold">Marshi Collection</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[var(--text-primary)] text-[var(--bg-base)] rounded-none group-hover:bg-[var(--accent-red)] transition-colors">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-clash font-bold text-2xl uppercase tracking-wider mb-1">Phone</h3>
                  <p className="text-lg opacity-80">+92 03108736356</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-[var(--text-primary)] text-[var(--bg-base)] rounded-none group-hover:bg-[var(--accent-red)] transition-colors">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-clash font-bold text-2xl uppercase tracking-wider mb-1">Hours</h3>
                  <p className="text-lg opacity-80">24 Hours / 7 Days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--text-primary)] text-[var(--bg-base)] p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-red)] rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 group-hover:opacity-80 transition-opacity duration-700"></div>
            
            <h2 className="font-clash font-bold uppercase text-4xl mb-8 relative z-10">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 font-satoshi">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest opacity-80">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-transparent border-b-2 border-[var(--bg-base)]/30 py-3 px-0 focus:outline-none focus:border-[var(--accent-red)] transition-colors text-lg"
                  placeholder="JOHN DOE"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-widest opacity-80">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-transparent border-b-2 border-[var(--bg-base)]/30 py-3 px-0 focus:outline-none focus:border-[var(--accent-red)] transition-colors text-lg"
                  placeholder="JOHN@EXAMPLE.COM"
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label className="text-sm font-bold uppercase tracking-widest opacity-80">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-transparent border-b-2 border-[var(--bg-base)]/30 py-3 px-0 focus:outline-none focus:border-[var(--accent-red)] transition-colors text-lg resize-none"
                  placeholder="HOW CAN WE HELP YOU?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="bg-[var(--accent-red)] text-white font-clash font-bold uppercase tracking-widest py-5 px-8 flex items-center justify-center gap-4 hover:bg-white hover:text-[var(--text-primary)] transition-colors duration-300 group/btn"
              >
                Submit Form
                <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
