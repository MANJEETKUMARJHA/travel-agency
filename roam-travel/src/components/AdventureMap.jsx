// import React from 'react';
// import { motion } from 'framer-motion';

// const AdventureMap = () => {
//   const stops = [
//     { name: 'Lisbon', day: 'Day 1', number: 1, color: '#00D09C' },
//     { name: 'Madeira', day: 'Day 3', number: 2, color: '#FF6B35' },
//     { name: 'Morocco', day: 'Day 6', number: 3, color: '#00D09C' },
//   ];

//   const pinPositions = ['left-[20%] top-[35%]', 'left-[55%] top-[30%]', 'left-[70%] top-[60%]'];

//   return (
//     <section className="py-24 px-6 bg-cream overflow-hidden">
//       <div className="max-w-[1400px] mx-auto">
//         <motion.h2 
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="flex flex-col mb-12"
//         >
//           <span className="font-[var(--font-hand)] text-[clamp(2rem,4vw,3.5rem)] text-dark leading-snug">Adventure</span>
//           <span className="font-[var(--font-hand)] text-[clamp(2rem,4vw,3.5rem)] text-dark leading-snug">has a map</span>
//           <span className="font-[var(--font-hand)] text-[clamp(2rem,4vw,3.5rem)] text-dark leading-snug">(But not a script!)</span>
//         </motion.h2>

//         <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
//           {/* Map */}
//           <div className="relative">
//             <motion.svg 
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               viewBox="0 0 800 400" 
//               className="w-full h-auto rounded-2xl"
//             >
//               <rect width="800" height="400" fill="#e8f4f0" rx="20" />
//               <path d="M50 150 Q100 80, 200 120 Q250 90, 300 130 Q350 100, 280 180 Q220 200, 150 190 Z" fill="#c8e6c9" stroke="#a5d6a7" strokeWidth="1" />
//               <path d="M400 100 Q500 60, 600 110 Q650 90, 700 140 Q720 180, 680 220 Q620 260, 550 240 Q480 210, 420 180 Q380 150, 400 100" fill="#c8e6c9" stroke="#a5d6a7" strokeWidth="1" />
//               <path d="M500 250 Q550 220, 620 260 Q660 280, 640 320 Q600 350, 540 330 Q490 310, 500 250" fill="#ffe0b2" stroke="#ffcc80" strokeWidth="1" />
              
//               <motion.path 
//                 initial={{ pathLength: 0 }}
//                 whileInView={{ pathLength: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
//                 d="M180 160 C250 140, 350 180, 450 150 C520 130, 580 200, 580 280" 
//                 fill="none" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="8 4" 
//               />
              
//               <circle cx="100" cy="300" r="3" fill="#00D09C" opacity="0.5" />
//               <circle cx="300" cy="350" r="2" fill="#00D09C" opacity="0.5" />
//               <circle cx="700" cy="100" r="4" fill="#FF6B35" opacity="0.4" />
//               <path d="M30 250 Q40 240, 50 250 Q60 260, 70 250" fill="none" stroke="#90caf9" strokeWidth="1" opacity="0.5" />
//               <path d="M350 300 Q360 290, 370 300 Q380 310, 390 300" fill="none" stroke="#90caf9" strokeWidth="1" opacity="0.5" />
//             </motion.svg>

//             {stops.map((stop, i) => (
//               <motion.div 
//                 key={stop.name} 
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 1 + (i * 0.4), type: "spring" }}
//                 className={`absolute flex flex-col items-center gap-1 z-10 ${pinPositions[i]}`}
//               >
//                 <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg" style={{ background: stop.color }}>
//                   {stop.number}
//                 </div>
//                 <div className="flex flex-col items-center bg-white px-2.5 py-1 rounded-lg shadow-md">
//                   <span className="text-xs font-semibold text-dark">{stop.name}</span>
//                   <span className="text-[0.65rem] text-gray">{stop.day}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Info Card */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="bg-white rounded-2xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.08)] max-lg:max-w-[400px]"
//           >
//             <div className="flex flex-col gap-3 mb-8">
//               {[['3', 'days'], ['2', 'moods'], ['1', 'route']].map(([num, text]) => (
//                 <div key={text} className="flex items-baseline gap-2">
//                   <span className="font-[var(--font-main)] text-4xl font-bold text-dark">{num}</span>
//                   <span className="font-[var(--font-main)] text-xl text-gray">{text}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="flex items-center gap-2 mb-4 flex-wrap">
//               {['Lisbon', 'Madeira', 'Morocco'].map((city, i, arr) => (
//                 <React.Fragment key={city}>
//                   <span className="text-sm font-medium text-dark">{city}</span>
//                   {i < arr.length - 1 && (
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D09C" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//             <div className="flex items-center gap-2 text-sm text-gray">
//               <span>📍 2,340 km</span><span>•</span><span>12 stops</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdventureMap;

import { motion } from 'framer-motion';

export default function AdventureMap() {
  return (
    <section className="relative w-full h-[600px] bg-topography flex items-center justify-center overflow-hidden py-24 border-t border-b border-gray-200">
      <div className="absolute top-10 left-20 font-handwriting text-xl -rotate-12 z-20">
        Adventure<br/>has a map.<br/>(But not a script.)
      </div>
      
      {/* Curved SVGs line representing the path */}
      <svg className="absolute w-full h-full z-0" style={{ pointerEvents: 'none' }}>
        <path d="M200 300 Q 400 100, 600 300 T 1000 300" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" className="opacity-30"/>
      </svg>

      <div className="relative w-full max-w-5xl mx-auto h-full flex items-center">
        {/* Location Nodes */}
        <motion.div whileHover={{ scale: 1.1 }} className="absolute left-[15%] top-[40%] flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=100" alt="Lisbon" className="w-16 h-16 rounded-xl border-2 border-white shadow-lg z-10" />
          <div className="mt-2 text-sm font-bold bg-white px-2 py-1 rounded-full shadow">1. Lisbon</div>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.1 }} className="absolute left-[45%] top-[60%] flex flex-col items-center">
          <img src="https://images.unsplash.com/photo-1542323062-8561f744e8c1?w=100" alt="Madeira" className="w-16 h-16 rounded-xl border-2 border-white shadow-lg z-10" />
          <div className="mt-2 text-sm font-bold bg-white px-2 py-1 rounded-full shadow">2. Madeira</div>
        </motion.div>

        {/* 3D Dashboard Card */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="absolute right-[5%] top-[20%] bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white max-w-sm"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-black leading-tight">3 days<br/>2 moods<br/>1 route</h3>
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">🎯</div>
          </div>
          <div className="text-sm font-medium mb-4">Lisbon → Madeira → Morocco</div>
          <div className="flex space-x-4 text-xs text-gray-500 mb-6">
            <span>🌍 2,340 km</span>
            <span>⏱️ 12 days</span>
          </div>
          <button className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center ml-auto">→</button>
        </motion.div>
      </div>
    </section>
  );
}