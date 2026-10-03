import React from 'react';
import { motion } from 'framer-motion';

const feelings = [
  { name: 'WILD', description: 'Untamed places. Bigger you.', icon: '🏔️' },
  { name: 'SLOW', description: 'Less rush. More real.', icon: '🌿' },
  { name: 'AFTER DARK', description: 'New cities. New stories.', icon: '🌙' },
  { name: 'OFF-GRID', description: 'No WiFi. More life.', icon: '⛺' },
  { name: 'CULTURE', description: 'People. Food. Traditions.', icon: '🏛️' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50 }
  }
};

const PickAFeeling = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12 max-md:flex-col max-md:items-start max-md:gap-4"
        >
          <div>
            <p className="text-xs font-semibold tracking-[2px] text-gray-500 mb-2">✦ PICK A FEELING</p>
            <h2 className="font-sans text-[clamp(2rem,4vw,3.5rem)] font-bold text-dark tracking-tight">PICK A FEELING</h2>
          </div>
          <div>
            <p className="text-base text-gray-500 mb-2">Not just a place. A mood.</p>
            <a href="#" className="text-sm font-semibold text-dark hover:text-primary transition-colors">See all →</a>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-5 gap-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          {feelings.map((feeling) => (
            <motion.div
              key={feeling.name}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(0,208,156,0.15)", borderColor: "#00D09C" }}
              className="relative p-8 px-6 border-2 border-gray-200 rounded-2xl cursor-pointer transition-colors overflow-hidden min-h-[220px] flex flex-col group bg-white"
            >
              <div className="flex flex-col justify-between h-full">
                <h3 className="font-sans text-[clamp(1.8rem,3vw,2.8rem)] font-bold text-dark leading-none tracking-tight mb-4">
                  {feeling.name}
                </h3>
                <div className="mt-auto">
                  <p className="text-[0.82rem] text-gray-500 leading-snug mb-3">{feeling.description}</p>
                  <span className="text-2xl">{feeling.icon}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PickAFeeling;