export default function Overview() {
      return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Today's Overview</h2>
          <p>Total Parts Planned: <strong>2800</strong></p>
          <p>Total Color Changes: <strong>12</strong></p>
          <p>Efficiency Rate: <strong className="text-green-500">92%</strong></p>
        </div>
      );
    }
