import { useState } from 'react';

    const MASTER_DATA_TYPES = [
      { id: 'parts', name: 'Parts Master' },
      { id: 'racks', name: 'Rack Master' },
      { id: 'colors', name: 'Color Master' }
    ];

    export default function DataUpload() {
      const [uploadStatus, setUploadStatus] = useState({});
      const [selectedType, setSelectedType] = useState('parts');

      const handleFileUpload = async (event, type) => {
        const file = event.target.files[0];
        if (!file) return;

        setUploadStatus(prev => ({ ...prev, [type]: 'uploading' }));
        
        setTimeout(() => {
          setUploadStatus(prev => ({ ...prev, [type]: 'success' }));
        }, 2000);
      };

      return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Master Data Upload</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MASTER_DATA_TYPES.map(type => (
              <div key={type.id} className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">{type.name}</h3>
                <input
                  type="file"
                  accept=".xlsx,.csv"
                  onChange={(e) => handleFileUpload(e, type.id)}
                  className="mb-2"
                />
                <span className={`text-sm ${
                  !uploadStatus[type.id] ? 'text-gray-500' :
                  uploadStatus[type.id] === 'uploading' ? 'text-yellow-500' :
                  'text-green-500'
                }`}>
                  {!uploadStatus[type.id] ? 'Ready for upload' :
                   uploadStatus[type.id] === 'uploading' ? 'Uploading...' :
                   'Upload successful'}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
