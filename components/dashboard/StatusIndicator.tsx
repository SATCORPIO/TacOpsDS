// components/dashboard/StatusIndicator.tsx
"use client";

import { motion } from "framer-motion";

interface StatusIndicatorProps {
  status: 'secure' | 'warning' | 'critical';
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  const colors = {
    secure: 'bg-success',
    warning: 'bg-gold',
    critical: 'bg-alert'
  };

  return (
    <div className="flex items-center space-x-2">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className={`w-1.5 h-1.5 ${colors[status]}`}
      />
      <span className="text-micro text-primary">
        NETWORK {status.toUpperCase()}
      </span>
    </div>
  );
}
