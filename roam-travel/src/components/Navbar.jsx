// import { motion } from 'framer-motion';

// export default function Navbar() {
//   return (
//     <nav className="w-full px-8 py-6 flex justify-between items-center max-w-7xl mx-auto">
//       <div className="text-xl font-bold tracking-tighter">
//         ROAM <span className="text-gray-400 font-light">/ 01</span>
//       </div>
//       <div className="hidden md:flex space-x-8 text-sm font-medium">
//         <a href="#" className="hover:text-gray-500 transition-colors">Explore</a>
//         <a href="#" className="hover:text-gray-500 transition-colors">Journeys</a>
//         <a href="#" className="hover:text-gray-500 transition-colors">Journal</a>
//         <a href="#" className="hover:text-gray-500 transition-colors">About</a>
//       </div>
//       <motion.button 
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white"
//       >
//         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//           <path d="M4 6h16M4 12h16M4 18h16"></path>
//         </svg>
//       </motion.button>
//     </nav>
//   );
// }

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navLinks = ['Explore', 'Journeys', 'Journal', 'About'];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      // Makes it a floating, blurred glass pill at the top of the screen
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-50 flex justify-between items-center bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full px-6 py-3"
    >
      {/* Logo */}
      <div className="text-[20px] font-black tracking-tight text-[#1a1a1a] flex items-baseline gap-1 pl-2 cursor-pointer">
        ROAM <span className="text-gray-400 font-light text-lg">/ 01</span>
      </div>

      {/* Center Links with Sliding Pill Animation */}
      <div className="hidden md:flex items-center space-x-1 relative">
        {navLinks.map((link, index) => (
          <motion.a
            key={link}
            href={`#${link.toLowerCase()}`}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative px-6 py-2.5 text-[14px] font-bold text-[#1a1a1a] rounded-full z-10 transition-colors"
          >
            {/* Sliding background element */}
            {hoveredIndex === index && (
              <motion.div
                layoutId="navHover"
                className="absolute inset-0 bg-white shadow-md border border-gray-100 rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className={hoveredIndex === index ? "text-[#00D09C]" : "text-gray-700"}>
              {link}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Added a stylish Call-To-Action button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex px-6 py-2.5 bg-[#1a1a1a] text-white text-[13px] font-bold tracking-wide uppercase rounded-full hover:bg-[#00D09C] transition-colors shadow-lg"
        >
          Plan Trip
        </motion.button>

        {/* Modern Asymmetrical Hamburger Menu */}
        <motion.button 
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 bg-white shadow-sm border border-gray-200 rounded-full flex flex-col items-center justify-center gap-[5px] group"
        >
          <span className="w-5 h-[2px] bg-[#1a1a1a] rounded-full transition-all group-hover:bg-[#00D09C]"></span>
          <span className="w-4 h-[2px] bg-[#1a1a1a] rounded-full mr-1 transition-all group-hover:bg-[#00D09C] group-hover:w-5 group-hover:mr-0"></span>
        </motion.button>
      </div>
    </motion.nav>
  );
}