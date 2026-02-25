"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Ping {
  id: number;
  x: number;
  y: number;
}

export function OperationsMap() {
  const [pings, setPings] = useState<Ping[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPings(prev => [
        ...prev.slice(-4),
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100
        }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h3 className="text-micro text-gold mb-2">GLOBAL ASSET TRACKING</h3>
      
      <div className="relative h-[250px] bg-background/50 border border-gold/20">
        {/* Grid Overlay */}
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-gold/10" />
          ))}
        </div>

        {/* Ping Markers */}
        {pings.map((ping) => (
          <motion.div
            key={ping.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute w-2 h-2 bg-alert"
            style={{
              left: `${ping.x}%`,
              top: `${ping.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}

        {/* Static Asset Markers */}
        <div className="absolute left-1/4 top-1/3 w-1 h-1 bg-gold" />
        <div className="absolute left-2/3 top-2/3 w-1 h-1 bg-gold" />
        <div className="absolute left-1/2 top-1/2 w-1 h-1 bg-success" />
      </div>
    </div>
  );
}
