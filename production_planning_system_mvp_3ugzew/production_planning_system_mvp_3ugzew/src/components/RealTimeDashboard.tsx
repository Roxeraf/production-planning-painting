import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import ProductionChart from './ProductionChart';
import ShiftMetrics from './ShiftMetrics';
import BottleneckDetection from './BottleneckDetection';

const socket = io('http://localhost:3001');

export default function RealTimeDashboard() {
  const [productionData, setProductionData] = useState([]);
  const [efficiency, setEfficiency] = useState(0);
  const [bottlenecks, setBottlenecks] = useState([]);

  useEffect(() => {
    socket.on('production-update', (data) => {
      setProductionData(data.production);
      setEfficiency(data.efficiency);
    });

    socket.on('bottleneck-alert', (data) => {
      setBottlenecks(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="col-span-2">
        <ProductionChart data={productionData} />
      </div>
      <div className="space-y-6">
        <ShiftMetrics efficiency={efficiency} />
        <BottleneckDetection bottlenecks={bottlenecks} />
      </div>
    </div>
  );
}
