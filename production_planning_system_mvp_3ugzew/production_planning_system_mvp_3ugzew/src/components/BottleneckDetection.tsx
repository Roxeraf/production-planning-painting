interface BottleneckProps {
  bottlenecks: Array<{
    machine: string;
    severity: 'low' | 'medium' | 'high';
    predictedTime: string;
  }>;
}

export default function BottleneckDetection({ bottlenecks }: BottleneckProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Bottleneck Detection</h2>
      <div className="space-y-3">
        {bottlenecks.map((b, i) => (
          <div key={i} className={`p-3 rounded-lg ${
            b.severity === 'high' ? 'bg-red-50' :
            b.severity === 'medium' ? 'bg-yellow-50' : 'bg-green-50'
          }`}>
            <div className="flex justify-between">
              <span className="font-medium">{b.machine}</span>
              <span className="text-sm text-gray-500">{b.predictedTime}</span>
            </div>
            <div className="text-sm text-gray-600">
              {b.severity === 'high' ? 'Critical bottleneck' :
               b.severity === 'medium' ? 'Potential bottleneck' : 'Normal operation'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
