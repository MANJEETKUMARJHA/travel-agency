import React from 'react';
import { motion } from 'framer-motion';

const RealStories = () => {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[2px] text-gray-500 mb-6">✦ REAL PLACES. REAL STORIES.</p>
          <h2 className="font-sans text-[clamp(2.5rem,4.5vw,4rem)] font-bold leading-[1.05] text-dark mb-6 tracking-tight">
            THE WORLD IS<br />NOT A GRID.
          </h2>
          <p className="text-[0.95rem] text-gray-500 leading-relaxed mb-8">
            We believe in messy itineraries,<br />
            unexpected detours and the kind<br />
            of moments that can&apos;t fit in a plan.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-transparent border-none text-dark text-[0.9rem] font-medium cursor-pointer hover:text-primary transition-colors group"
          >
            <div className="w-11 h-11 rounded-full border-2 border-dark flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" className="fill-dark group-hover:fill-white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            </div>
            Watch the story
          </motion.button>
        </motion.div>

        {/* Right - Gallery */}
        <div className="relative">
          <div className="grid grid-cols-[1fr_1.2fr_0.8fr] grid-rows-[auto_auto] gap-4 max-lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-xl h-[200px] clip-path-[polygon(0_0,100%_5%,95%_100%,5%_95%)]" 
            >
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop" alt="Beach scene" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 flex flex-col items-center font-handwritten text-xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] z-10 whitespace-nowrap">
                <span>Small steps.</span><span>Big feelings.</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-1 row-span-2 overflow-hidden rounded-xl h-[350px] clip-path-[polygon(3%_0,100%_3%,97%_100%,0_97%)]" 
            >
              <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&h=500&fit=crop" alt="Coastal village" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="overflow-hidden rounded-lg h-[180px] max-lg:hidden"
            >
              <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=300&h=200&fit=crop" alt="Mountain landscape" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-xl h-[140px] clip-path-[polygon(5%_0,100%_3%,95%_100%,0_95%)]" 
            >
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=250&fit=crop" alt="Travelers" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </motion.div>
          </div>

          {/* Counter */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 max-lg:hidden"
          >
            <span className="font-sans text-3xl font-light text-dark">01</span>
            <div className="w-px h-10 bg-gray-300"></div>
            <span className="font-sans text-xl font-light text-gray-500">04</span>
          </motion.div>

          {/* Culture note */}
          <motion.div 
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 8 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.8 }}
            className="absolute -bottom-5 right-5 flex flex-col font-handwritten text-xl text-dark leading-tight"
          >
            <span>Culture</span><span>changes</span><span>you.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealStories;