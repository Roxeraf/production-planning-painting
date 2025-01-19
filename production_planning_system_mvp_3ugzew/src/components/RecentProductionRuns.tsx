export default function RecentProductionRuns() {
      const runs = [
        { date: '2024-10-11', shift: 1, parts: 1000, changes: 4, efficiency: '95%' },
        { date: '2024-10-11', shift: 2, parts: 950, changes: 5, efficiency: '92%' },
        { date: '2024-10-11', shift: 3, parts: 850, changes: 3, efficiency: '88%' }
      ];

      return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent Production Runs</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Date</th>
                <th className="text-left">Shift</th>
                <th className="text-left">Parts Produced</th>
                <th className="text-left">Color Changes</th>
                <th className="text-left">Efficiency</th>
              </tr>
            </thead>
            <tbody>
              {runs.map((run, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{run.date}</td>
                  <td>{run.shift}</td>
                  <td>{run.parts}</td>
                  <td>{run.changes}</td>
                  <td>{run.efficiency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
