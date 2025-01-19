export default function QuickActions() {
      return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full bg-black text-white py-2 rounded">Show Master Data Upload</button>
            <button className="w-full bg-black text-white py-2 rounded">Upload Demand Data</button>
            <button className="w-full bg-black text-white py-2 rounded">Generate Reports</button>
            <button className="w-full bg-black text-white py-2 rounded">Adjust Parameters</button>
          </div>
        </div>
      );
    }
