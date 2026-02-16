
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../constants/animations';

const LandingPage: React.FC = () => {
  const [selectedAge, setSelectedAge] = useState('');

  const handleRegistration = (program: string) => {
    alert(`Starting registration for ${program}. Redirecting to secure form...`);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920')] bg-cover bg-center opacity-30"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#97B3D2]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-black uppercase tracking-[0.3em] mb-6"
            >
              Beyond the Game
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
            >
              THE ANTI-ELITE<br />
              <span className="text-[#97B3D2]">PROGRAM.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Street + Science + Soul. We're not just running plays; we're building the next generation of thinkers who happen to play basketball.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="#register"
                className="px-12 py-5 bg-[#97B3D2] hover:bg-white text-slate-900 font-black text-lg rounded-full transition-all transform hover:scale-105 shadow-xl"
              >
                REGISTER PLAYER
              </a>
              <button className="px-12 py-5 border-2 border-white/20 hover:border-[#97B3D2] hover:bg-white/5 font-black text-lg rounded-full transition-all transform hover:scale-105 backdrop-blur-sm">
                MEET THE COACHES
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Science - Progressive Play Model */}
      <section id="science" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
              THE <span className="text-[#97B3D2]">SCIENCE</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mastering the self before the team. Our proprietary training model.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block"></div>
            
            {[
              { step: 1, age: "5-6", title: "THE SELF", sub: "1v1 Focus", tag: "ME VS YOU", desc: "Mastering body control and the initial competitive spark." },
              { step: 2, age: "7-8", title: "PARTNERSHIP", sub: "2v2 Focus", tag: "ME + ONE", desc: "Learning to read a teammate and execute simple two-man games." },
              { step: 3, age: "9-10", title: "THE UNIT", sub: "3v3 Focus", tag: "UNIT THINK", desc: "Complex spacing and movement patterns without the chaos of 5v5." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#97B3D2] text-slate-900 flex items-center justify-center text-2xl font-black mb-8 group-hover:rotate-12 transition-transform">
                  {item.step}
                </div>
                <div className="text-[#97B3D2] font-black text-sm tracking-widest mb-2 uppercase">AGES {item.age}</div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.desc}</p>
                <div className="text-2xl font-black text-white/40 group-hover:text-[#97B3D2] transition-colors italic">"{item.tag}"</div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-20 text-center">
            <div className="inline-block backdrop-blur-xl bg-red-500/10 border border-red-500/20 rounded-3xl px-10 py-6">
              <span className="text-red-400 font-black tracking-widest uppercase text-sm block mb-2">Notice</span>
              <p className="text-xl font-bold">
                No 5v5 until basic unit literacy is established. Zero shortcuts.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Grid */}
      <section id="programs" className="py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                OUR <span className="text-[#97B3D2]">PROGRAMS</span>
              </h2>
              <p className="text-xl text-gray-400">Holistic development for every age bracket in the GTHA.</p>
            </div>
            <div className="flex gap-4">
               <div className="bg-white/5 border border-white/10 rounded-full px-6 py-2 text-sm font-bold">MISSISSAUGA</div>
               <div className="bg-white/5 border border-white/10 rounded-full px-6 py-2 text-sm font-bold">STONEY CREEK</div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: "MINI HOOPERS", age: "5-6", color: "blue" },
              { name: "ROOKIE HOOPERS", age: "7-8", color: "indigo" },
              { name: "HOOPERS", age: "9-10", color: "slate" }
            ].map((p, i) => (
              <motion.div 
                key={i}
                {...fadeInUp}
                className="group relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-[#97B3D2]/50 transition-all"
              >
                <div className="text-6xl font-black text-white/5 absolute -right-4 -bottom-4 group-hover:text-[#97B3D2]/10 transition-colors uppercase select-none">
                  {p.age}
                </div>
                <div className="text-[#97B3D2] font-black text-sm mb-4">AGES {p.age}</div>
                <h3 className="text-4xl font-black mb-6 tracking-tight">{p.name}</h3>
                <ul className="space-y-4 text-gray-400 mb-8">
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#97B3D2]"></span> Ball Handling Mechanics</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#97B3D2]"></span> Spatial Awareness Drills</li>
                  <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#97B3D2]"></span> Confidence Building</li>
                </ul>
                <button className="w-full py-4 bg-white/10 group-hover:bg-[#97B3D2] group-hover:text-slate-900 transition-all rounded-2xl font-black">VIEW DETAILS</button>
              </motion.div>
            ))}
          </div>

          {/* Premium Rep Team Spotlight */}
          <motion.div {...fadeInUp} className="mt-12 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-[3rem] blur-2xl group-hover:opacity-100 transition-opacity"></div>
            <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-20 overflow-hidden">
               <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-block px-4 py-1 rounded-full bg-pink-500 text-white text-xs font-black uppercase tracking-widest mb-6">Girls Only</div>
                    <h3 className="text-5xl md:text-6xl font-black mb-6 leading-tight">U14 GIRLS <br/><span className="text-[#97B3D2]">REP TEAM</span></h3>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">Elite training for 2012-born female athletes. We combine high-performance coaching with a supportive community that builds leaders on and off the court.</p>
                    <button className="px-10 py-5 bg-[#97B3D2] text-slate-900 font-black rounded-full hover:scale-105 transition-transform">RECRUITMENT DETAILS</button>
                  </div>
                  <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1544919982-b61976f0ba43?w=800" alt="Girls Basketball" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mental Health - The Soul */}
      <section id="soul" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                THE <span className="text-[#97B3D2]">SOUL</span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 text-2xl font-bold italic">R</div>
                  <div>
                    <h4 className="text-2xl font-black mb-2">Resilience Training</h4>
                    <p className="text-gray-400">Standard drills for handling turnovers and missed shots. Mental loops are part of the training.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 text-2xl font-bold italic">C</div>
                  <div>
                    <h4 className="text-2xl font-black mb-2">Community Safe-Space</h4>
                    <p className="text-gray-400">Quarterly check-ins and open dialogue. No "toughen up" rhetoric. Just support.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-300 text-2xl font-bold italic">G</div>
                  <div>
                    <h4 className="text-2xl font-black mb-2">Growth Tracking</h4>
                    <p className="text-gray-400">Success is measured by effort, kindness, and tactical IQ, not just point totals.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-[4rem] rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800" 
                alt="Basketball emotion" 
                className="relative z-10 w-full h-full object-cover rounded-[4rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="register" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            {...fadeInUp}
            className="backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#97B3D2]/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">STILL <br/><span className="text-[#97B3D2]">WAITING?</span></h2>
            <p className="text-xl text-gray-400 mb-12">The anti-elite revolution is here. Spots fill up fast. Join the movement.</p>
            
            <div className="space-y-6">
              <select 
                value={selectedAge}
                onChange={(e) => setSelectedAge(e.target.value)}
                className="w-full max-w-md px-8 py-5 bg-white/5 border border-white/20 rounded-2xl text-white font-black text-lg focus:outline-none focus:border-[#97B3D2] transition-colors appearance-none text-center"
              >
                <option value="" className="bg-slate-900">SELECT PLAYER AGE...</option>
                <option value="5-6" className="bg-slate-900">MINI HOOPERS (5-6)</option>
                <option value="7-8" className="bg-slate-900">ROOKIE HOOPERS (7-8)</option>
                <option value="9-10" className="bg-slate-900">HOOPERS (9-10)</option>
                <option value="U14" className="bg-slate-900">U14 GIRLS REP</option>
              </select>

              <div className="pt-4">
                <button 
                  onClick={() => selectedAge && handleRegistration(selectedAge)}
                  disabled={!selectedAge}
                  className="w-full max-w-md px-12 py-5 bg-[#97B3D2] hover:bg-white text-slate-900 font-black text-xl rounded-full transition-all transform hover:scale-105 shadow-2xl disabled:opacity-50 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  START REGISTRATION
                </button>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-8 font-bold tracking-widest uppercase">Mississauga • Stoney Creek • Hamilton</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
