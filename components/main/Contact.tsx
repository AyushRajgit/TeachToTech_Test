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
    <div id="contact" className="flex justify-center items-center p-6 min-h-[700px] w-full relative z-20">
      
      {/* Main Card - PROFESSIONAL LOOK */}
      {/* CHANGED: Removed high transparency. Used solid bg-slate-950 for a sharp look. */}
      {/* CHANGED: Shadow is tighter and darker. */}
      <div className="w-full max-w-5xl bg-slate-950 border border-emerald-800 rounded-3xl shadow-2xl shadow-emerald-900/20 overflow-hidden flex flex-col md:flex-row relative z-20">
        
        {/* --- BACKGROUND DECORATIONS (Subtle, not blurry fog) --- */}
        {/* CHANGED: Darker colors (emerald-900) and lower opacity for a cleaner look */}
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[80px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-green-900/20 rounded-full blur-[80px] pointer-events-none z-0"></div>

        {/* --- LEFT SIDE: Contact Info --- */}
        <div className="w-full md:w-[45%] relative overflow-hidden p-10 text-white flex flex-col justify-between z-10 border-b md:border-b-0 md:border-r border-emerald-900/50">
          
          {/* Background - Solid Dark for contrast */}
          <div className="absolute inset-0 bg-slate-900 z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
              Get in Touch
            </h2>
            <p className="text-slate-400 mb-10 text-lg font-light leading-relaxed">
              Orbiting around an idea? We&apos;re ready to help you launch it. Reach out across the cosmos.
            </p>

            <div className="space-y-6">
              
              {/* Phone Link */}
              <a href="tel:+91XXXXXXXXXX" className="flex items-center space-x-5 group cursor-pointer p-3 rounded-xl hover:bg-slate-800 transition-all duration-300 border border-transparent hover:border-emerald-900">
                <div className="p-3 bg-slate-950 border border-emerald-900 rounded-xl group-hover:border-emerald-500/50 transition-all duration-300">
                  <svg className="w-6 h-6 text-emerald-500 group-hover:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider group-hover:text-emerald-400">Phone</p>
                  <p className="text-slate-200 text-lg font-medium">+91-1204480203</p>
                </div>
              </a>

              {/* Email Link */}
              <a href="mailto:xyz123@gmail.com" className="flex items-center space-x-5 group cursor-pointer p-3 rounded-xl hover:bg-slate-800 transition-all duration-300 border border-transparent hover:border-emerald-900">
                <div className="p-3 bg-slate-950 border border-emerald-900 rounded-xl group-hover:border-emerald-500/50 transition-all duration-300">
                   <svg className="w-6 h-6 text-emerald-500 group-hover:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider group-hover:text-emerald-400">Email</p>
                  <p className="text-slate-200 text-lg font-medium">posttoteachtotech@gmail.com</p>
                </div>
              </a>

            </div>
          </div>

          <div className="relative z-10 mt-12 md:mt-0">
               <a href="#" className="inline-block px-6 py-2 bg-emerald-950/50 border border-emerald-800 hover:border-emerald-500 rounded-full text-emerald-100 hover:text-white transition-all duration-300">
                 TeachToTech
               </a>
          </div>
        </div>

        {/* --- RIGHT SIDE: The Form --- */}
        {/* CHANGED: Solid background for the form area */}
        <div className="w-full md:w-[55%] p-8 md:p-12 bg-slate-950 relative z-20">
          <form onSubmit={handleSubmit} className="space-y-6 relative z-30">
            
            {/* Name Input */}
            <div className="group relative z-30">
              <label className="block text-sm font-bold text-slate-400 mb-2 ml-1 tracking-wide">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                // CHANGED: Solid bg-slate-900, sharp border, no transparency
                className="relative z-30 w-full px-5 py-4 rounded-xl bg-slate-900 border border-emerald-900/50 text-white placeholder-slate-600 focus:bg-slate-900 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="group relative z-30">
              <label className="block text-sm font-bold text-slate-400 mb-2 ml-1 tracking-wide">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="relative z-30 w-full px-5 py-4 rounded-xl bg-slate-900 border border-emerald-900/50 text-white placeholder-slate-600 focus:bg-slate-900 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="Enter your email..."
              />
            </div>

            {/* Message Input */}
            <div className="group relative z-30">
              <label className="block text-sm font-bold text-slate-400 mb-2 ml-1 tracking-wide">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="relative z-30 w-full px-5 py-4 rounded-xl bg-slate-900 border border-emerald-900/50 text-white placeholder-slate-600 focus:bg-slate-900 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200 resize-none"
                placeholder="How can we help you?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`relative z-30 w-full py-4 px-6 rounded-xl text-white font-bold text-lg tracking-wider uppercase transition-all duration-300 transform active:scale-[0.98] shadow-lg
                ${status === 'success' 
                  ? 'bg-gradient-to-r from-emerald-600 to-green-600 shadow-emerald-900/50' 
                  : 'bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-600 hover:to-green-500 shadow-emerald-900/30'}
                ${status === 'submitting' ? 'opacity-80 cursor-wait' : ''}
              `}
            >
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}