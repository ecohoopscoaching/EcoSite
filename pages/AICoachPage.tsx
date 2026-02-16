
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCoachFeedback } from '../services/geminiService';
import { Message } from '../types';
import { fadeInUp } from '../constants/animations';

const AICoachPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "What's up, Hooper? I'm Coach Gemini. Need a breakdown on your shooting form, some drill ideas, or just need to level up your mental game? Talk to me." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;

    const userMessage: Message = { 
      role: 'user', 
      text: input, 
      image: selectedImage || undefined 
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    const currentImg = selectedImage;
    setSelectedImage(null);
    setLoading(true);

    try {
      const base64Data = currentImg ? currentImg.split(',')[1] : undefined;
      const feedback = await getCoachFeedback(userMessage.text || "Analyze this image for basketball coaching feedback.", base64Data);
      setMessages(prev => [...prev, { role: 'model', text: feedback || "Coach is stumped. Try again?" }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection to the bench lost. Try again in a bit." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">COACH <span className="text-[#97B3D2]">GEMINI</span></h1>
          <p className="text-xl text-gray-400 font-light italic">Street Wisdom + AI Precision</p>
        </motion.div>

        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col h-[70vh] shadow-2xl relative">
          {/* Chat Window */}
          <div className="flex-grow overflow-y-auto p-6 md:p-10 space-y-8">
            <AnimatePresence>
              {messages.map((m, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] md:max-w-[70%] p-6 rounded-3xl ${
                    m.role === 'user' 
                      ? 'bg-[#97B3D2] text-slate-900 font-bold' 
                      : 'bg-white/10 text-gray-100'
                  }`}>
                    {m.image && (
                      <img src={m.image} alt="User submission" className="w-full h-auto rounded-2xl mb-4 border border-black/10" />
                    )}
                    <p className="whitespace-pre-wrap leading-relaxed">{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {loading && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                <div className="bg-white/5 p-6 rounded-3xl flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#97B3D2] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#97B3D2] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-[#97B3D2] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  <span className="text-sm font-bold text-gray-400 ml-2 italic">Coach is thinking...</span>
                </div>
              </motion.div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-black/30 border-t border-white/10">
            {selectedImage && (
              <div className="mb-4 relative inline-block">
                <img src={selectedImage} className="w-24 h-24 object-cover rounded-xl border border-[#97B3D2]" />
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                >
                  ×
                </button>
              </div>
            )}
            <div className="flex gap-4 items-end">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors group"
                title="Upload photo for analysis"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-[#97B3D2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleImageChange} 
                  className="hidden" 
                  accept="image/*"
                />
              </button>
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
                placeholder="Ask about your shot, a drill, or mental health..."
                className="flex-grow bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#97B3D2] transition-colors resize-none h-14 min-h-[56px] max-h-32"
              />
              <button 
                onClick={handleSend}
                disabled={(!input.trim() && !selectedImage) || loading}
                className="p-4 bg-[#97B3D2] hover:bg-white text-slate-900 rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-500 mt-4 text-center uppercase tracking-widest font-bold">
              AI Coach powered by Gemini 3 Flash • Trained on EcoHoops Philosophy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICoachPage;
