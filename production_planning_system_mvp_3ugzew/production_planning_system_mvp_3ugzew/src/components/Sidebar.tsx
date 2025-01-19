interface SidebarProps {
      isOpen: boolean;
      toggleSidebar: () => void;
      setView: (view: string) => void;
    }

    export default function Sidebar({ isOpen, toggleSidebar, setView }: SidebarProps) {
      return (
        <nav className={`fixed h-screen bg-white shadow-lg transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-16'
        }`}>
          <div className="p-4">
            <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
              {isOpen ? '«' : '»'}
            </button>
          </div>
          <ul className="space-y-1">
            <li 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setView('dashboard')}
            >
              Dashboard
            </li>
            <li 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setView('shifts')}
            >
              Shift Management
            </li>
            <li 
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => setView('data')}
            >
              Data Upload
            </li>
          </ul>
        </nav>
      );
    }
