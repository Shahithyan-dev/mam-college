"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        {/* Pulsing background glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-brand-secondary/20 blur-2xl -z-10"
        />
        
        {/* Logo Container */}
        <motion.div
          animate={{
            y: [-10, 0, -10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 md:p-6 border-4 border-gray-50"
        >
          <img 
            src="/logo.png" 
            alt="M.A.M. School of Engineering" 
            className="w-full h-full object-contain"
          />
        </motion.div>
        
        {/* Loading Text */}
        <div className="mt-8 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-black text-brand-primary tracking-[0.2em] uppercase">
            MAMSE
          </h2>
          
          <div className="flex items-center gap-2 mt-4">
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0 }}
              className="w-2.5 h-2.5 rounded-full bg-brand-secondary"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              className="w-2.5 h-2.5 rounded-full bg-brand-secondary"
            />
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              className="w-2.5 h-2.5 rounded-full bg-brand-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
