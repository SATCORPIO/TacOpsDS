// components/dashboard/StatPanel.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface StatPanelProps {
  title: string;
  value: number;
  suffix: string;
  delay: number;
}

export function StatPanel({ title, value, suffix, delay }: StatPanelProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div 
      variants={fadeIn}
      initial="initial"
      animate="animate"
      custom={delay}
      className="panel p-4"
    >
      <div className="text-micro text-gold mb-1">{title}</div>
      <div className="flex items-baseline">
        <span className="text-3xl font-mono text-primary">{count}</span>
        <span className="ml-2 text-micro text-secondary">{suffix}</span>
      </div>
    </motion.div>
  );
}
