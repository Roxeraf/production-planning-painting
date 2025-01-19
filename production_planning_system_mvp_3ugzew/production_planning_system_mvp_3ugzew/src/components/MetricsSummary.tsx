export default function MetricsSummary() {
      const metrics = [
        { name: 'Total Production', value: '1,234', change: '+2.5%' },
        { name: 'Efficiency', value: '92%', change: '+1.2%' },
        { name: 'Downtime', value: '45m', change: '-15%' }
      ];

      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-gray-500 text-sm">{metric.name}</div>
              <div className="text-2xl font-bold mt-2">{metric.value}</div>
              <div className="text-sm mt-1 text-green-500">{metric.change}</div>
            </div>
          ))}
        </div>
      );
    }
