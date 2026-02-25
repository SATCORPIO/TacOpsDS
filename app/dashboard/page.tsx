import { CommandHeader } from "@/components/dashboard/CommandHeader";
import { StatPanel } from "@/components/dashboard/StatPanel";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { ThreatMonitor } from "@/components/dashboard/ThreatMonitor";
import { IntelligenceChart } from "@/components/dashboard/IntelligenceChart";
import { OperationsMap } from "@/components/dashboard/OperationsMap";
import { mockStats, mockThreatData } from "@/lib/mockData";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="grain-overlay" />
      <CommandHeader />
      
      <div className="container mx-auto px-4 py-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px gold-border mb-px">
          <StatPanel 
            title="Active Operations" 
            value={mockStats.activeOps}
            suffix="ops"
            delay={0}
          />
          <StatPanel 
            title="Assets Deployed" 
            value={mockStats.assetsDeployed}
            suffix="units"
            delay={0.1}
          />
          <StatPanel 
            title="Secure Channels" 
            value={mockStats.secureChannels}
            suffix="active"
            delay={0.2}
          />
        </div>

        {/* Middle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px gold-border mt-px">
          <div className="lg:col-span-1 panel">
            <ActivityFeed />
          </div>
          <div className="lg:col-span-1 panel border-x border-gold/20">
            <ThreatMonitor data={mockThreatData} />
          </div>
          <div className="lg:col-span-1 panel">
            <div className="p-4">
              <h3 className="text-micro text-gold mb-2">THREAT PARAMETERS</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-secondary">GLOBAL RISK</span>
                  <span className="text-primary font-mono">CRITICAL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">REGIONS FLAGGED</span>
                  <span className="text-primary font-mono">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary">ACTIVE ALERTS</span>
                  <span className="text-alert font-mono pulse">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px gold-border mt-px">
          <div className="panel">
            <IntelligenceChart />
          </div>
          <div className="panel border-l border-gold/20">
            <OperationsMap />
          </div>
        </div>
      </div>
    </main>
  );
}
