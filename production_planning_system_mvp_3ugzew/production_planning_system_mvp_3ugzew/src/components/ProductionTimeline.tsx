import { format, isValid } from 'date-fns';
import { useState, useEffect } from 'react';

interface ProductionTimelineProps {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export default function ProductionTimeline({ 
  selectedDate, 
  setSelectedDate 
}: ProductionTimelineProps) {
  const [safeDate, setSafeDate] = useState(new Date());

  useEffect(() => {
    if (isValid(selectedDate)) {
      setSafeDate(selectedDate);
    } else {
      setSafeDate(new Date());
    }
  }, [selectedDate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    if (isValid(newDate)) {
      setSelectedDate(newDate);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Production Timeline</h2>
      <div className="flex justify-between items-center mb-4">
        <p>{format(safeDate, 'dd.MM.yyyy')}</p>
        <input 
          type="date" 
          value={format(safeDate, 'yyyy-MM-dd')} 
          onChange={handleDateChange} 
          className="p-2 border rounded"
        />
      </div>
      <div className="space-y-2">
        {['Shift 1', 'Shift 2', 'Shift 3'].map((shift, index) => (
          <div key={index} className="flex items-center space-x-2">
            <p>{shift} (06:00 - 14:00)</p>
            <div className="flex-1 h-4 bg-red-500"></div>
            <div className="flex-1 h-4 bg-blue-500"></div>
            <div className="flex-1 h-4 bg-green-500"></div>
            <div className="flex-1 h-4 bg-yellow-500"></div>
            <div className="flex-1 h-4 bg-purple-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
