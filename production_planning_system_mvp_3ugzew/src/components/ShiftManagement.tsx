import { useState, useEffect } from 'react';
    import { format, addHours } from 'date-fns';
    import Sidebar from './Sidebar';
    import ProductionTimeline from './ProductionTimeline';
    import ShiftMetrics from './ShiftMetrics';
    import DataUpload from './DataUpload';
    import Dashboard from './Dashboard';

    const SHIFTS = [
      { id: 1, name: 'Morning', start: '06:00', end: '14:00' },
      { id: 2, name: 'Afternoon', start: '14:00', end: '22:00' },
      { id: 3, name: 'Night', start: '22:00', end: '06:00' }
    ];

    export default function ShiftManagement() {
      const [currentShift, setCurrentShift] = useState(SHIFTS[0]);
      const [productionData, setProductionData] = useState([]);
      const [view, setView] = useState('dashboard');
      const [isSidebarOpen, setSidebarOpen] = useState(true);

      useEffect(() => {
        const generateProductionData = () => {
          const data = [];
          let currentTime = new Date();
          currentTime.setHours(6, 0, 0, 0);

          for (let i = 0; i < 20; i++) {
            data.push({
              id: i + 1,
              shift: SHIFTS[Math.floor(i / 7)],
              start: format(currentTime, 'HH:mm'),
              end: format(addHours(currentTime, 0.05), 'HH:mm'),
              color: ['red', 'blue', 'green', 'yellow', 'purple'][i % 5],
              parts: 10,
              efficiency: Math.min(100, 90 + Math.floor(Math.random() * 15))
            });
            currentTime = addHours(currentTime, 0.05);
          }
          return data;
        };

        setProductionData(generateProductionData());
      }, []);

      const renderView = () => {
        switch (view) {
          case 'dashboard':
            return <Dashboard data={productionData} />;
          case 'shifts':
            return (
              <>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SHIFTS.map(shift => (
                    <button
                      key={shift.id}
                      onClick={() => setCurrentShift(shift)}
                      className={`p-4 rounded-lg ${
                        currentShift.id === shift.id
                          ? 'bg-primary text-white'
                          : 'bg-white hover:bg-gray-50'
                      }`}
                    >
                      <h3 className="font-semibold">{shift.name} Shift</h3>
                      <p>{shift.start} - {shift.end}</p>
                    </button>
                  ))}
                </div>
                <ProductionTimeline 
                  data={productionData.filter(d => d.shift.id === currentShift.id)} 
                />
                <ShiftMetrics 
                  shift={currentShift} 
                  data={productionData.filter(d => d.shift.id === currentShift.id)} 
                />
              </>
            );
          case 'data':
            return <DataUpload />;
          default:
            return <Dashboard data={productionData} />;
        }
      };

      return (
        <div className="min-h-screen bg-gray-100">
          <Sidebar 
            isOpen={isSidebarOpen} 
            toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
            setView={setView}
          />
          <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
            <div className="p-6 space-y-6">
              {renderView()}
            </div>
          </main>
        </div>
      );
    }
