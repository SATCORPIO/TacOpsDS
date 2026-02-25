// components/dashboard/IntelligenceChart.tsx
"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

interface DataPoint {
  time: number;
  value: number;
}

export function IntelligenceChart() {
  const [data, setData] = useState<DataPoint[]>(
    Array.from({ length: 20 }, (_, i) => ({
      time: i,
      value: Math.floor(Math.random() * 100) + 50
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1), {
          time: prev[prev.length - 1].time + 1,
          value: Math.floor(Math.random() * 100) + 50
        }];
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h3 className="text-micro text-gold mb-2">INTELLIGENCE TRENDS</h3>
      
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#9F8750" strokeWidth={0.5} />
            <XAxis dataKey="time" stroke="#6B7280" tick={{ fontSize: 10 }} />
            <YAxis stroke="#6B7280" tick={{ fontSize: 10 }} />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#5E0B12" 
              strokeWidth={2}
              dot={false}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
