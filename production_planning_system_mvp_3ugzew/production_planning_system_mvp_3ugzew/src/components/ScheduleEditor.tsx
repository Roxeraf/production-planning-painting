import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ProductionItem from './ProductionItem';

export default function ScheduleEditor() {
  const [schedule, setSchedule] = useState([]);

  const handleDrop = (item, index) => {
    const newSchedule = [...schedule];
    newSchedule.splice(index, 0, item);
    setSchedule(newSchedule);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Production Schedule Editor</h2>
        <div className="space-y-2">
          {schedule.map((item, i) => (
            <ProductionItem
              key={i}
              item={item}
              index={i}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}
