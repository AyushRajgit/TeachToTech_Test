"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div id="contact" className="flex justify-center items-center p-6 min-h-[700px] bg-transparent">
      
      {/* CHANGE 1: Main Card Blur
         Changed 'backdrop-blur-xl' to 'backdrop-blur-sm'
      */}
      <div className="w-full max-w-5xl bg-blue-950/50 backdrop-blur-sm border border-cyan-500/30 rounded-3xl shadow-[0_0_60px_rgba(59,130,246,0.4)] overflow-hidden flex flex-col md:flex-row relative">
        
        {/* Glow Orbs */}
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Left Side: Info Section */}
        <div className="w-full md:w-[45%] relative overflow-hidden p-12 text-white flex flex-col justify-between">
          
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-900 to-cyan-900 opacity-90 z-0"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 z-0 mix-blend-overlay"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">
              Get in Touch
            </h2>
            <p className="text-blue-200 mb-12 text-lg font-light leading-relaxed">
              Orbiting around an idea? We&apos;re ready to help you launch it. Reach out across the cosmos.
            </p>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-center space-x-5 group">
                {/* CHANGE 2: Icon Blur reduced to 'backdrop-blur-sm' */}
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/20 rounded-xl backdrop-blur-sm group-hover:border-cyan-400/50 transition-colors">
                  <svg className="w-6 h-6 text-sky-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Phone</p>
                  <p className="text-white text-lg">+91 XXXXXXXXXX</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-5 group">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/20 rounded-xl backdrop-blur-sm group-hover:border-cyan-400/50 transition-colors">
                  <svg className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Email</p>
                  <p className="text-white text-lg">xyz123@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 md:mt-0">
            <div className="flex space-x-4">
               <div className="w-32 h-15 bg-blue-900/30 border border-blue-500/30 hover:bg-cyan-900/30 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm">
                 <span className="text-xl font-bold text-blue-100">TeachToTech</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="w-full md:w-[55%] p-12 bg-transparent relative z-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Name Input */}
            <div className="group">
              <label className="block text-sm font-medium text-blue-200 mb-2 ml-1 tracking-wide">Name</label>
              {/* CHANGE 3: Inputs blur reduced to 'backdrop-blur-sm' */}
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-white placeholder-blue-400/50 focus:bg-blue-900/50 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="group">
              <label className="block text-sm font-medium text-blue-200 mb-2 ml-1 tracking-wide">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-white placeholder-blue-400/50 focus:bg-blue-900/50 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter your email..."
              />
            </div>

            {/* Message Input */}
            <div className="group">
              <label className="block text-sm font-medium text-blue-200 mb-2 ml-1 tracking-wide">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-white placeholder-blue-400/50 focus:bg-blue-900/50 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none transition-all duration-300 backdrop-blur-sm resize-none"
                placeholder="Initiating contact protocol..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`w-full py-4 px-6 rounded-xl text-white font-bold text-lg tracking-wider uppercase transition-all duration-500 transform hover:-translate-y-1
                ${status === 'success' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.5)]' 
                  : 'bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]'}
                ${status === 'submitting' ? 'opacity-80 cursor-wait' : ''}
              `}
            >
              {status === 'submitting' ? (
                 <span className="flex items-center justify-center">
                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                   Sending...
                 </span>
              ) : status === 'success' ? 'Transmission Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
