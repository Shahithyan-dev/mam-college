"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after exactly 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b335c] overflow-hidden"
        >
          {/* Unique Effect: Expanding Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 6, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0 }}
              className="absolute w-40 h-40 rounded-full border border-[#DE9E2F]/40"
            />
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 6, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
              className="absolute w-40 h-40 rounded-full border border-[#DE9E2F]/30"
            />
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 6, opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.6 }}
              className="absolute w-40 h-40 rounded-full border border-[#DE9E2F]/20"
            />
          </div>

          {/* Logo with 3D Flip & Float */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="relative w-36 h-36 md:w-48 md:h-48 bg-white rounded-3xl shadow-[0_0_60px_rgba(222,158,47,0.4)] flex items-center justify-center p-6 border-b-4 border-[#DE9E2F] z-10"
          >
            <img 
              src="/logo.png" 
              alt="MAMSE Logo" 
              className="w-full h-full object-contain drop-shadow-md"
            />
          </motion.div>
          
          {/* Text Reveal & Line Expand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-center z-10"
          >
            <h2 className="text-2xl md:text-4xl font-black text-white tracking-[0.3em] uppercase drop-shadow-lg">
              MAMSE
            </h2>
            <div className="h-1 w-0 bg-[#DE9E2F] mt-4 mx-auto rounded-full shadow-[0_0_10px_#DE9E2F]"
                 style={{ animation: 'expandLine 1.2s ease-out 0.5s forwards' }} />
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes expandLine {
                to { width: 120px; }
              }
            `}} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
