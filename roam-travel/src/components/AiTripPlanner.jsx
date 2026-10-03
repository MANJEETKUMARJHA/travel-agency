import { motion } from 'framer-motion';

export default function AiTripPlanner() {
  return (
    <section className="w-full bg-[#080d12] text-white py-24 px-8 relative overflow-hidden font-sans">
      {/* Background Topography Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 250 50 500 150 T 1000 100 M0 200 Q 250 150 500 250 T 1000 200 M0 300 Q 250 250 500 350 T 1000 300' fill='none' stroke='%2300D09C' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center relative z-10 gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-[45%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D09C" strokeWidth="2">
                <path d="M4 12h16M12 4l8 8-8 8" />
              </svg>
              <p className="text-[#00D09C] text-xs font-bold tracking-[0.2em] uppercase">AI Trip Planner</p>
            </div>
            
            <h2 className="text-[5rem] lg:text-[7rem] font-black uppercase leading-[0.85] tracking-tighter mb-6 font-sans">
              Your Next<br/>Story
            </h2>
            
            <p className="text-gray-400 mb-8 max-w-[400px] text-[15px] leading-relaxed">
              Tell us what you're into, and our AI will craft a personalized journey with places, experiences and hidden gems — just for you.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#00D09C] text-black text-sm font-bold rounded-full hover:bg-[#00e6ab] transition-colors flex items-center gap-2"
            >
              MAKE THE MAP 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Right Visual - Globe & Card */}
        <div className="w-full lg:w-[55%] relative min-h-[500px] flex items-center justify-center">
          
          {/* Handwriting and Arrow */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-4 left-0 lg:-left-12 flex flex-col z-20"
          >
            <div className="font-handwriting text-2xl text-gray-200 -rotate-12 leading-tight">
              Real places.<br/>
              Personalized<br/>
              by AI.
            </div>
            <svg width="40" height="60" viewBox="0 0 50 80" className="absolute -bottom-16 left-8 -rotate-12">
              <path d="M10,10 Q30,40 20,70" fill="none" stroke="#a0aec0" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M15,65 L20,70 L25,60" fill="none" stroke="#a0aec0" strokeWidth="2" />
            </svg>
          </motion.div>
          
          {/* 3D Wireframe Globe */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-[450px] h-[450px] relative z-0"
          >
            {/* Dashed Orbit Line */}
            <div className="absolute inset-[-20%] rounded-[100%] border-2 border-dashed border-[#00D09C]/30 rotate-[-15deg] scale-y-[0.4] animate-[spin_20s_linear_infinite]"></div>

            <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_30px_rgba(0,208,156,0.15)]">
              <defs>
                <radialGradient id="globeGrad" cx="40%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#122a33" />
                  <stop offset="100%" stopColor="#081015" />
                </radialGradient>
                <clipPath id="globeClip"><circle cx="200" cy="200" r="180" /></clipPath>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#globeGrad)" stroke="#00D09C" strokeWidth="0.5" strokeOpacity="0.3" />
              
              {/* Latitude / Longitude lines */}
              <g clipPath="url(#globeClip)" opacity="0.2">
                <ellipse cx="200" cy="200" rx="180" ry="70" fill="none" stroke="#00D09C" strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="180" ry="130" fill="none" stroke="#00D09C" strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="70" ry="180" fill="none" stroke="#00D09C" strokeWidth="1" />
                <ellipse cx="200" cy="200" rx="130" ry="180" fill="none" stroke="#00D09C" strokeWidth="1" />
              </g>

              {/* Stylized Landmasses */}
              <g clipPath="url(#globeClip)" opacity="0.7">
                <path d="M80 120 Q130 90, 180 100 Q220 90, 260 130 Q290 170, 260 210 Q210 240, 160 220 Q110 200, 80 160 Z" fill="#2d585c" opacity="0.4" />
                <path d="M260 180 Q300 160, 340 200 Q360 250, 320 280 Q280 300, 250 260 Q230 220, 260 180 Z" fill="#2d585c" opacity="0.3" />
                <path d="M50 200 Q90 180, 130 220 Q150 270, 110 300 Q70 320, 40 280 Z" fill="#2d585c" opacity="0.2" />
              </g>

              {/* Nodes and Connection Lines */}
              <circle cx="150" cy="140" r="3" fill="#ffffff" />
              <circle cx="280" cy="190" r="4" fill="#FF8A00">
                 <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="180" cy="260" r="3" fill="#00D09C" />
              
              <path d="M150 140 Q 200 120 280 190" fill="none" stroke="#00D09C" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
              <path d="M280 190 Q 230 240 180 260" fill="none" stroke="#FF8A00" strokeWidth="1.5" opacity="0.8" />
            </svg>
          </motion.div>

          {/* AI Result Card - Dark Mode exactly like image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, type: "spring" }}
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-[#0f161c]/90 backdrop-blur-xl border border-gray-700/50 p-6 rounded-2xl w-[320px] shadow-2xl z-20"
          >
            <h4 className="text-[15px] font-bold text-white mb-2">Your journey is ready!</h4>
            
            <div className="flex items-center gap-2 mb-6">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="#00D09C">
                 <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
               </svg>
               <p className="text-xs text-gray-400">Based on your vibe: <span className="text-gray-200">Wild + Culture</span></p>
            </div>

            <ul className="flex flex-col gap-3 mb-6">
              <li className="text-[13px] text-gray-300 flex items-center gap-3">
                <span className="w-5 flex justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg></span>
                3 destinations
              </li>
              <li className="text-[13px] text-gray-300 flex items-center gap-3">
                <span className="w-5 flex justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
                5 unique experiences
              </li>
              <li className="text-[13px] text-gray-300 flex items-center gap-3">
                <span className="w-5 flex justify-center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg></span>
                1 epic journey
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <div className="w-[85%] h-16 rounded-lg overflow-hidden relative border border-gray-700/50">
                <img src="https://images.unsplash.com/photo-1542323062-8561f744e8c1?w=300" alt="Madeira Coast" className="w-full h-full object-cover" />
              </div>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-gray-200 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}