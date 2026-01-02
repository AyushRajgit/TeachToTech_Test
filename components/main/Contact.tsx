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
      
      {/* Main Glass Card */}
      <div className="w-full max-w-5xl bg-blue-950/30 backdrop-blur-md border border-cyan-500/30 rounded-3xl shadow-[0_0_60px_rgba(59,130,246,0.2)] overflow-hidden flex flex-col md:flex-row relative z-20">
        
        {/* --- BACKGROUND DECORATIONS (Pointer Events None is Critical) --- */}
        <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-sky-600/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* --- LEFT SIDE: Contact Info --- */}
        <div className="w-full md:w-[45%] relative overflow-hidden p-10 text-white flex flex-col justify-between z-10">
          
          {/* Background Gradients for Left Side */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-indigo-950/80 to-slate-900/80 z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">
              Get in Touch
            </h2>
            <p className="text-blue-200 mb-10 text-lg font-light leading-relaxed">
              Orbiting around an idea? We&apos;re ready to help you launch it. Reach out across the cosmos.
            </p>

            <div className="space-y-6">
              
              {/* Phone Link */}
              <a href="tel:+91XXXXXXXXXX" className="flex items-center space-x-5 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/20 rounded-xl group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-sky-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider group-hover:text-cyan-300">Phone</p>
                  <p className="text-white text-lg">+91 XXXXXXXXXX</p>
                </div>
              </a>

              {/* Email Link */}
              <a href="mailto:xyz123@gmail.com" className="flex items-center space-x-5 group cursor-pointer p-2 rounded-xl hover:bg-white/5 transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/20 rounded-xl group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 transition-all duration-300">
                  <svg className="w-6 h-6 text-cyan-300 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider group-hover:text-cyan-300">Email</p>
                  <p className="text-white text-lg">xyz123@gmail.com</p>
                </div>
              </a>

            </div>
          </div>

          <div className="relative z-10 mt-12 md:mt-0">
               <a href="#" className="inline-block px-6 py-2 bg-blue-900/30 border border-blue-500/30 hover:border-cyan-400 rounded-full text-blue-100 hover:text-white transition-all duration-300 backdrop-blur-md">
                 TeachToTech
               </a>
          </div>
        </div>

        {/* --- RIGHT SIDE: The Form --- */}
        <div className="w-full md:w-[55%] p-8 md:p-12 bg-transparent relative z-20">
          <form onSubmit={handleSubmit} className="space-y-6 relative z-30">
            
            {/* Name Input */}
            <div className="group relative z-30">
              <label className="block text-sm font-medium text-blue-200 mb-2 ml-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="relative z-30 w-full px-5 py-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-white placeholder-blue-400/50 focus:bg-blue-900/60 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
            <div className="group relative z-30">
              <label className="block text-sm font-medium text-blue-200 mb-2 ml-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="relative z-30 w-full px-5 py-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-white placeholder-blue-400/50 focus:bg-blue-900/60 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none transition-all duration-300"
                placeholder="Enter your email..."
              />
            </div>

            {/* Message Input */}
            <div className="group relative z-30">
              <label className="block text-sm font-medium text-blue-200 mb-2 ml-1">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="relative z-30 w-full px-5 py-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-white placeholder-blue-400/50 focus:bg-blue-900/60 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400 outline-none transition-all duration-300 resize-none"
                placeholder="How can we help you?"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`relative z-30 w-full py-4 px-6 rounded-xl text-white font-bold text-lg tracking-wider uppercase transition-all duration-500 transform hover:-translate-y-1
                ${status === 'success' 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-emerald-500/30 shadow-lg' 
                  : 'bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 hover:shadow-cyan-500/30 hover:shadow-lg'}
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