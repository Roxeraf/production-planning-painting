export default function RecentActivity() {
      const activities = [
        { id: 1, type: 'Production', description: 'Started new batch #1234', time: '2h ago' },
        { id: 2, type: 'Maintenance', description: 'Machine #5 maintenance completed', time: '4h ago' },
        { id: 3, type: 'Alert', description: 'Low inventory for Part A', time: '1d ago' }
      ];

      return (
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-3">
            {activities.map(activity => (
              <li key={activity.id} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm">{activity.description}</div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
