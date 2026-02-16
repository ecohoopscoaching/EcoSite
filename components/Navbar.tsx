
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-[#97B3D2] hover:text-white transition-colors">
          ECOHOOPS
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-widest">
          <Link to="/" className={`hover:text-[#97B3D2] transition-colors ${location.pathname === '/' ? 'text-[#97B3D2]' : 'text-gray-300'}`}>
            Home
          </Link>
          <Link to="/ai-coach" className={`hover:text-[#97B3D2] transition-colors ${location.pathname === '/ai-coach' ? 'text-[#97B3D2]' : 'text-gray-300'}`}>
            AI Coach
          </Link>
          <a href="#programs" className="text-gray-300 hover:text-[#97B3D2] transition-colors">Programs</a>
          <a href="#register" className="bg-[#97B3D2] text-slate-900 px-6 py-2 rounded-full hover:bg-white transition-all transform hover:scale-105">
            Register
          </a>
        </div>

        {/* Mobile Toggle Placeholder */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
