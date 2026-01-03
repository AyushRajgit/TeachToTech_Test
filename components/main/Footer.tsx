import React from "react";
import {
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    // CHANGED: border-[#2A0E61] -> border-[#047857] (Emerald Green)
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-50 border-t border-[#047857] backdrop-blur-md">
        
        {/* Container */}
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-4 py-8">
            
            {/* Grid Layout: 3 Columns on Desktop, 1 on Mobile */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                
                {/* Column 1: Brand Identity */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    {/* CHANGED: Gradient from Purple -> Green/Emerald */}
                    <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 mb-4">
                        TeachToTech
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Empowering the next generation of developers with cutting-edge skills and hands-on experience.
                    </p>
                </div>

                {/* Column 2: Quick Links (About) */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="font-bold text-[14px] uppercase tracking-widest text-gray-400 mb-6">
                        Explore
                    </h4>
                    <ul className="flex flex-col gap-4 text-sm">
                        <li>
                            {/* CHANGED: Hover color to Emerald/Green */}
                            <a href="#" className="hover:text-emerald-400 transition-colors duration-200">
                                Become a Sponsor
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-emerald-400 transition-colors duration-200">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="mailto:xyz123@gmail.com" className="hover:text-emerald-400 transition-colors duration-200">
                                Contact Support
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Connect (Socials) */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="font-bold text-[14px] uppercase tracking-widest text-gray-400 mb-6">
                        Connect
                    </h4>
                    <div className="flex flex-col gap-4 text-sm">
                        <a href="https://www.instagram.com/teachtotech_edtech?igsh=eXY4NzBwaXgxdG8y" className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200 group">
                            <RxInstagramLogo className="text-lg group-hover:scale-110 transition-transform" />
                            <span>Instagram</span>    
                        </a>
                        {/* <a href="#" className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200 group">
                            <RxTwitterLogo className="text-lg group-hover:scale-110 transition-transform" />
                            <span>Twitter</span>    
                        </a> */}
                        <a href="https://www.linkedin.com/company/teachtotech/" className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200 group">
                            <RxLinkedinLogo className="text-lg group-hover:scale-110 transition-transform" />
                            <span>Linkedin</span>    
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright */}
            {/* CHANGED: Border color to Emerald */}
            <div className="w-full border-t border-[#047857] pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
                <div className="text-center md:text-left mb-2 md:mb-0">
                    &copy; {new Date().getFullYear()} TeachToTech. All rights reserved.
                </div>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer