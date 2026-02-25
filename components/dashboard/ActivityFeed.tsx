"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockActivities } from "@/lib/mockData";
import { slideIn } from "@/lib/animations";

interface Activity {
  id: number;
  timestamp: string;
  message: string;
  type: 'alert' | 'info';
}

export function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>(mockActivities);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        message: `INTEL UPDATE: Sector ${Math.floor(Math.random() * 9) + 1} - ${Math.random() > 0.5 ? 'ANOMALY DETECTED' : 'ROUTINE SCAN'}`,
        type: Math.random() > 0.7 ? 'alert' : 'info' as 'alert' | 'info'
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 h-[400px] flex flex-col">
      <h3 className="text-micro text-gold mb-3">LIVE ACTIVITY FEED</h3>
      
      <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin">
        <AnimatePresence>
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              variants={slideIn}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-start space-x-2 text-xs border-l-2 border-gold/30 pl-2 py-1"
            >
              <div className={`w-1.5 h-1.5 mt-1 rounded-none ${
                activity.type === 'alert' ? 'bg-alert pulse' : 'bg-success'
              }`} />
              <div className="flex-1">
                <div className="text-micro text-secondary">
                  {new Date(activity.timestamp).toLocaleTimeString()}Z
                </div>
                <div className="text-primary font-mono">
                  {activity.message}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
