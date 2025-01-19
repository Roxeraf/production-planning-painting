import { useState } from 'react';

    const SHIFTS = [
      { id: 1, name: 'Shift 1', time: '06:00 - 14:00', parts: 1000, changes: 4 },
      { id: 2, name: 'Shift 2', time: '14:00 - 22:00', parts: 950, changes: 5 },
      { id: 3, name: 'Shift 3', time: '22:00 - 06:00', parts: 850, changes: 3 }
    ];

    export default function ShiftSummary() {
      const [currentShift, setCurrentShift] = useState(0);

      const handlePrev = () => {
        setCurrentShift((prev) => (prev === 0 ? SHIFTS.length - 1 : prev - 1));
      };

      const handleNext = () => {
        setCurrentShift((prev) => (prev === SHIFTS.length - 1 ? 0 : prev + 1));
      };

      return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Shift Summary</h2>
          <div className="flex items-center justify-between">
            <button onClick={handlePrev}>&lt;</button>
            <div>
              <p>{SHIFTS[currentShift].name} ({SHIFTS[currentShift].time})</p>
              <p>Parts Planned: <strong>{SHIFTS[currentShift].parts}</strong></p>
              <p>Color Changes: <strong>{SHIFTS[currentShift].changes}</strong></p>
            </div>
            <button onClick={handleNext}>&gt;</button>
          </div>
        </div>
      );
    }
