export default function ShiftMetrics({ shift, data }) {
      const totalParts = data.reduce((sum, item) => sum + item.parts, 0);
      const colorChanges = data.filter((item, index, arr) => 
        index === 0 || item.color !== arr[index - 1].color
      ).length;
      const averageEfficiency = (data.reduce((sum, item) => sum + item.efficiency, 0) / data.length).toFixed(1);

      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Total Parts</h3>
            <p className="text-2xl font-bold">{totalParts}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Color Changes</h3>
            <p className="text-2xl font-bold">{colorChanges}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-gray-500">Efficiency</h3>
            <p className="text-2xl font-bold">{averageEfficiency}%</p>
          </div>
        </div>
      );
    }
