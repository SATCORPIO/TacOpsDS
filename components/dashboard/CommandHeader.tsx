// components/dashboard/CommandHeader.tsx
"use client";

import { useEffect, useState } from "react";
import { StatusIndicator } from "./StatusIndicator";

export function CommandHeader() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="border-b border-gold/30 bg-panel/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-2xl font-serif text-primary tracking-tight">
              SATCORP COMMAND
            </h1>
            <div className="h-4 w-px bg-gold/40" />
            <StatusIndicator status="secure" />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-micro text-secondary">
              ZULU
            </div>
            <time className="font-mono text-primary text-sm">
              {time.toISOString().slice(11, 19)}Z
            </time>
          </div>
        </div>
      </div>
    </header>
  );
}
