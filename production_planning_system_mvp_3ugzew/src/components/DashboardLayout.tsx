import { useState } from 'react';
    import Sidebar from './Sidebar';
    import MetricsSummary from './MetricsSummary';
    import ProductionChart from './ProductionChart';
    import RecentActivity from './RecentActivity';

    export default function DashboardLayout() {
      const [isSidebarOpen, setSidebarOpen] = useState(true);

      return (
        <div className="min-h-screen bg-gray-100">
          <div className="flex">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            
            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
              <div className="p-6 space-y-6">
                <MetricsSummary />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ProductionChart />
                  <RecentActivity />
                </div>
              </div>
            </main>
          </div>
        </div>
      );
    }
