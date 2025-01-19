import { useState } from 'react';
    import QuickActions from './QuickActions';
    import Overview from './Overview';
    import ShiftSummary from './ShiftSummary';
    import ProductionTimeline from './ProductionTimeline';
    import RecentProductionRuns from './RecentProductionRuns';

    export default function Dashboard() {
      const [selectedDate, setSelectedDate] = useState(new Date());

      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <QuickActions />
            <Overview />
            <ShiftSummary />
          </div>
          <ProductionTimeline selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          <RecentProductionRuns />
        </div>
      );
    }
