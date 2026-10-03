// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <motion.nav 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-cream/95 backdrop-blur-md"
//     >
//       <div className="max-w-[1400px] mx-auto flex items-center justify-between">
//         <div className="flex items-baseline gap-1">
//           <span className="font-[var(--font-main)] font-bold text-xl tracking-widest text-dark">ROAM</span>
//           <span className="text-gray text-lg">/</span>
//           <span className="font-[var(--font-main)] text-sm text-gray">01</span>
//         </div>

//         <div className="hidden md:flex gap-10">
//           {['Explore', 'Journeys', 'Journal', 'About'].map((link, i) => (
//             <motion.a
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 + 0.3 }}
//               key={link}
//               href={`#${link.toLowerCase()}`}
//               className="text-dark text-[0.95rem] font-medium hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
//             >
//               {link}
//             </motion.a>
//           ))}
//         </div>

//         <motion.button 
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6 }}
//           whileHover={{ scale: 1.1 }}
//           className="w-11 h-11 rounded-full bg-dark hidden md:flex items-center justify-center cursor-pointer border-none"
//         >
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="10" /></svg>
//         </motion.button>

//         <button className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1" onClick={() => setMenuOpen(!menuOpen)}>
//           <span className={`w-[25px] h-0.5 bg-dark transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
//           <span className={`w-[25px] h-0.5 bg-dark transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
//           <span className={`w-[25px] h-0.5 bg-dark transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
//         </button>
//       </div>

//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden flex flex-col gap-6 p-6 bg-cream/98 absolute top-full left-0 right-0 overflow-hidden shadow-lg"
//           >
//             {['Explore', 'Journeys', 'Journal', 'About'].map((link) => (
//               <a key={link} href={`#${link.toLowerCase()}`} className="text-dark text-[0.95rem] font-medium hover:text-primary transition-colors">{link}</a>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-6 flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-xl font-bold tracking-tighter">
        ROAM <span className="text-gray-400 font-light">/ 01</span>
      </div>
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <a href="#" className="hover:text-gray-500 transition-colors">Explore</a>
        <a href="#" className="hover:text-gray-500 transition-colors">Journeys</a>
        <a href="#" className="hover:text-gray-500 transition-colors">Journal</a>
        <a href="#" className="hover:text-gray-500 transition-colors">About</a>
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </motion.button>
    </nav>
  );
}