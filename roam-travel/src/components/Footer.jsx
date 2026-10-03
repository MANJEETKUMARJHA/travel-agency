// import React from 'react';

// const Footer = () => {
//   const socialIcons = [
//     { label: 'Instagram', path: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/></> },
//     { label: 'Twitter', path: <><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></> },
//     { label: 'Facebook', path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> },
//     { label: 'YouTube', path: <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.58 12 19.58 12 19.58s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></> },
//   ];

//   return (
//     <footer className="py-6 px-6 bg-cream border-t border-gray-light/50">
//       <div className="max-w-[1400px] mx-auto flex items-center justify-between max-md:flex-col max-md:gap-6 max-md:text-center">
//         <div className="flex items-center gap-6 max-md:flex-col max-md:gap-2">
//           <div className="flex items-baseline gap-1">
//             <span className="font-bold text-lg tracking-widest text-dark">ROAM</span>
//             <span className="text-gray">/</span>
//             <span className="text-sm text-gray">01</span>
//           </div>
//           <p className="text-[0.82rem] text-gray">More feelings. More places.</p>
//         </div>

//         <div className="flex gap-8 max-md:gap-6 max-md:flex-wrap max-md:justify-center">
//           {['Explore', 'Journeys', 'Journal', 'About'].map((link) => (
//             <a key={link} href={`#${link.toLowerCase()}`} className="text-dark text-sm font-medium hover:text-primary transition-colors">{link}</a>
//           ))}
//         </div>

//         <div className="flex gap-4">
//           {socialIcons.map((icon) => (
//             <a key={icon.label} href="#" aria-label={icon.label} className="text-dark hover:text-primary transition-colors flex items-center">
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon.path}</svg>
//             </a>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 mt-12">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div className="text-xl font-bold tracking-tighter">
          ROAM <span className="text-gray-400 font-light">/ 01</span>
        </div>
        <span className="text-xs text-gray-500 border-l border-gray-300 pl-4">More feelings. More places.</span>
      </div>
      
      <div className="flex space-x-8 text-sm font-medium text-gray-600 mb-4 md:mb-0">
        <a href="#" className="hover:text-black">Explore</a>
        <a href="#" className="hover:text-black">Journeys</a>
        <a href="#" className="hover:text-black">Journal</a>
        <a href="#" className="hover:text-black">About</a>
      </div>

      <div className="flex items-center space-x-4">
        {/* Social Icons Placeholders */}
        <div className="flex space-x-3 text-gray-500">
          <a href="#" className="hover:text-black">Instagram</a>
          <a href="#" className="hover:text-black">X</a>
          <a href="#" className="hover:text-black">Pinterest</a>
        </div>
        <button onClick={() => window.scrollTo(0,0)} className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
          ↑
        </button>
      </div>
    </footer>
  );
}