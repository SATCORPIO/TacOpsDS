// components/dashboard/ThreatMonitor.tsx
"use client";

import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

interface ThreatMonitorProps {
  data: {
    name: string;
    value: number;
    fill: string;
  }[];
}

export function ThreatMonitor({ data }: ThreatMonitorProps) {
  return (
    <div className="p-4">
      <h3 className="text-micro text-gold mb-2">THREAT RADAR</h3>
      
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            innerRadius="30%" 
            outerRadius="100%" 
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              background
              dataKey="value"
              cornerRadius={0}
              stroke="#9F8750"
              strokeWidth={1}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {data.map((item) => (
          <div key={item.name} className="text-center">
            <div className="text-micro text-secondary">{item.name}</div>
            <div className="text-primary font-mono" style={{ color: item.fill }}>
              {item.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
