// lib/mockData.ts
export const mockStats = {
  activeOps: 47,
  assetsDeployed: 128,
  secureChannels: 12
};

export const mockThreatData = [
  { name: 'CYBER', value: 85, fill: '#5E0B12' },
  { name: 'HUMAN', value: 62, fill: '#9F8750' },
  { name: 'PHYSICAL', value: 43, fill: '#1F5133' }
];

export const mockActivities = [
  { id: 1, timestamp: '2024-01-15T10:30:00Z', message: 'SECTOR 7 - UNAUTHORIZED ACCESS ATTEMPT', type: 'alert' as const },
  { id: 2, timestamp: '2024-01-15T10:28:00Z', message: 'ASSET ECHO-7 - STATUS: ACTIVE', type: 'info' as const },
  { id: 3, timestamp: '2024-01-15T10:25:00Z', message: 'SECURE CHANNEL 4 - KEY ROTATION', type: 'info' as const },
  { id: 4, timestamp: '2024-01-15T10:22:00Z', message: 'REGION 3 - ANOMALOUS SIGNAL DETECTED', type: 'alert' as const },
  { id: 5, timestamp: '2024-01-15T10:20:00Z', message: 'GLOBAL SCAN - COMPLETE', type: 'info' as const }
];
