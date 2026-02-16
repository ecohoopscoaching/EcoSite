
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-4xl font-black text-[#97B3D2] mb-6">ECOHOOPS</div>
            <p className="text-gray-400 max-w-sm mb-6">
              Building basketball players who think. We focus on the person, the process, and the potential. 
              GTHA's premier developmental program.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-sm text-gray-500">Navigation</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#" className="text-gray-300 hover:text-[#97B3D2] transition-colors">Programs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#97B3D2] transition-colors">AI Coaching</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#97B3D2] transition-colors">Mental Health</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#97B3D2] transition-colors">Coaches</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 uppercase tracking-widest text-sm text-gray-500">Locations</h4>
            <ul className="space-y-4 font-bold text-gray-300">
              <li>Mississauga Elite Ctr</li>
              <li>Stoney Creek Sports</li>
              <li>Hamilton Central</li>
              <li>Burlington North</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6 text-xs text-gray-500 font-bold uppercase tracking-widest">
          <div>© 2025 ECOHOOPS ELITE. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Safeguarding</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
