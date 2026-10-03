// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Hero = () => {
//   const [activeMood, setActiveMood] = useState('Wild');
//   const moods = ['Wild', 'Slow', 'Contrast', 'Social'];

//   const destinations = [
//     { name: 'Lisbon', dates: 'Apr 3 - 8', image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=60&h=60&fit=crop' },
//     { name: 'Madeira', dates: 'Apr 10 - 20', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=60&h=60&fit=crop' },
//     { name: 'Morocco', dates: 'Apr 21 - 27', image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=60&h=60&fit=crop' },
//   ];

//   return (
//     <section className="pt-32 pb-16 px-6 bg-cream overflow-hidden min-h-screen">
//       <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="font-[var(--font-main)] text-[clamp(2.5rem,5vw,4.2rem)] font-bold leading-[1.1] text-dark mb-4 tracking-tight"
//           >
//             GO SOMEWHERE<br />YOU HAVEN&apos;T BEEN.
//           </motion.h1>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="font-[var(--font-main)] text-[1.05rem] text-gray leading-relaxed mb-8"
//           >
//             Trips designed around your mood,<br />not a checklist.
//           </motion.p>

//           {/* Mood Selector */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="bg-white rounded-2xl p-5 mb-6 shadow-[0_2px_20px_rgba(0,0,0,0.06)] max-w-[420px]"
//           >
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <circle cx="12" cy="12" r="10" />
//                   <path d="M8 14s1.5 2 4 2 4-2 4-2" />
//                   <line x1="9" y1="9" x2="9.01" y2="9" />
//                   <line x1="15" y1="9" x2="15.01" y2="9" />
//                 </svg>
//               </div>
//               <div>
//                 <p className="font-semibold text-[0.95rem] text-dark">How do you want to feel?</p>
//                 <p className="text-xs text-gray">Pick a vibe, and we&apos;ll craft your journey.</p>
//               </div>
//             </div>
//             <div className="flex gap-2 flex-wrap">
//               {moods.map((mood) => (
//                 <button
//                   key={mood}
//                   className={`px-4 py-2 rounded-full border-[1.5px] text-sm font-medium cursor-pointer transition-all ${
//                     activeMood === mood
//                       ? 'bg-primary border-primary text-white'
//                       : 'border-gray-300 text-gray hover:border-primary hover:text-primary bg-transparent'
//                   }`}
//                   onClick={() => setActiveMood(mood)}
//                 >
//                   {mood}
//                 </button>
//               ))}
//             </div>
//           </motion.div>

//           <motion.button 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-flex items-center gap-2 px-7 py-3 bg-dark text-white rounded-full text-[0.95rem] font-medium cursor-pointer mb-8 border-none"
//           >
//             Build my route
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
//           </motion.button>

//           {/* Route Info */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8 }}
//             className="flex items-center gap-8 flex-wrap"
//           >
//             <div className="flex gap-6">
//               {destinations.map((dest, i) => (
//                 <motion.div 
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.8 + i * 0.1 }}
//                   key={dest.name} 
//                   className="flex items-center gap-2"
//                 >
//                   <img src={dest.image} alt={dest.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md" />
//                   <div className="flex flex-col">
//                     <span className="font-semibold text-[0.85rem] text-dark">{dest.name}</span>
//                     <span className="text-[0.72rem] text-gray">{dest.dates}</span>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="flex gap-4 pl-6 border-l border-gray-300">
//               <span className="text-[0.8rem] text-gray">~2,340 km</span>
//               <span className="text-[0.8rem] text-gray">12 days</span>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Right Visual */}
//         <div className="relative h-[600px] lg:h-[600px] max-lg:h-[400px] max-lg:order-first">
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="relative w-full h-full overflow-hidden"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=800&fit=crop"
//               alt="Hiker on mountain"
//               className="w-full h-full object-cover"
//               style={{ clipPath: 'polygon(5% 0%, 95% 2%, 100% 45%, 92% 100%, 8% 98%, 0% 50%)' }}
//             />
//           </motion.div>

//           <motion.div 
//             initial={{ opacity: 0, rotate: -20, scale: 0.5 }}
//             animate={{ opacity: 1, rotate: -5, scale: 1 }}
//             transition={{ delay: 0.8, type: "spring" }}
//             className="absolute top-[5%] right-[15%] flex flex-col font-[var(--font-hand)] text-lg text-dark leading-snug"
//           >
//             <span>Different</span><span>places.</span><span>Same you.</span>
//           </motion.div>

//           <motion.div 
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ delay: 0.6, type: "spring" }}
//             className="absolute top-[3%] right-[25%] w-12 h-12 rounded-full bg-orange"
//           />

//           {/* Stamp Card */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50, rotate: 20 }}
//             animate={{ opacity: 1, x: 0, rotate: 5 }}
//             transition={{ delay: 0.9, type: "spring", stiffness: 100 }}
//             className="absolute top-0 right-0 w-[100px] h-[120px] bg-white border-[3px] border-primary rounded p-1.5 z-10 max-lg:hidden"
//           >
//             <div className="w-full h-full flex flex-col items-center justify-center gap-1">
//               <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=150&h=150&fit=crop" alt="Madeira" className="w-[60px] h-[60px] object-cover rounded-sm" />
//               <span className="font-[var(--font-main)] text-[0.65rem] font-bold tracking-widest text-primary">MADEIRA</span>
//             </div>
//           </motion.div>

//           {/* Destination Card */}
//           <motion.div 
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1, type: "spring" }}
//             className="absolute right-[-10px] top-[45%] bg-white rounded-xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.12)] w-[220px] z-10 max-lg:hidden"
//           >
//             <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=120&fit=crop" alt="Madeira" className="w-full h-20 object-cover rounded-lg" />
//             <h4 className="font-semibold text-base mt-2 mb-0.5 text-dark">Madeira</h4>
//             <p className="text-xs text-gray mb-1.5">Volcanic, ocean, magic</p>
//             <div className="flex gap-3 text-[0.7rem] text-gray">
//               <span>📅 Apr 16 - 20</span>
//               <span>🌡 800 km</span>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-8 py-12 flex flex-col lg:flex-row items-center">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-6"
        >
          Go Somewhere<br/>You Haven't Been.
        </motion.h1>
        <p className="text-lg mb-8 max-w-md font-medium text-gray-700">
          Trips designed around your mood, not a checklist.
          <span className="block w-48 h-1 bg-teal-400 mt-2"></span>
        </p>

        {/* Glassmorphism Interactive Card */}
        <motion.div 
          className="bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-3xl shadow-xl max-w-md"
          whileHover={{ y: -5 }}
        >
          <h3 className="font-bold text-lg mb-4">How do you want to feel?</h3>
          <p className="text-sm text-gray-500 mb-4">Pick a vibe, and we'll craft your journey.</p>
          <div className="flex space-x-3 mb-6">
            <button className="px-4 py-2 bg-teal-500 text-white rounded-full text-sm font-semibold shadow-md">Wild</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm shadow-sm hover:bg-gray-50">Slow</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm shadow-sm hover:bg-gray-50">Curious</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm shadow-sm hover:bg-gray-50">Social</button>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            className="w-full bg-gray-900 text-white py-3 rounded-full font-medium flex justify-between px-6 items-center"
          >
            <span>Build my route</span>
            <span>→</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Right Content - 3D Collage */}
      <div className="w-full lg:w-1/2 relative h-[600px] mt-12 lg:mt-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 clip-torn-paper overflow-hidden shadow-2xl"
        >
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80" alt="Explorer" className="w-full h-full object-cover" />
        </motion.div>
        
        {/* Floating Stamp */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-10 -right-4 w-32 h-32 rotate-12"
        >
          <div className="w-full h-full bg-green-100 rounded-md border-2 border-dashed border-green-500 p-2 flex items-center justify-center relative shadow-lg">
             <div className="absolute top-[-20px] right-[-10px] w-12 h-12 bg-orange-500 rounded-full mix-blend-multiply"></div>
             <span className="text-green-700 font-bold uppercase rotate-[-15deg]">Madeira</span>
          </div>
        </motion.div>

        {/* 3D Floating Location Card */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-16 right-[-2rem] bg-white/80 backdrop-blur-lg p-4 rounded-2xl shadow-2xl w-64 border border-white/50"
          style={{ perspective: 1000 }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <img src="https://images.unsplash.com/photo-1542323062-8561f744e8c1?w=100" alt="Madeira" className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <h4 className="font-bold">Madeira</h4>
              <p className="text-xs text-gray-500">Mountains, ocean, magic.</p>
            </div>
          </div>
          <div className="text-xs text-gray-600 space-y-1">
            <p>🗓 Apr 16 - 20</p>
            <p>✈️ 680 km</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}