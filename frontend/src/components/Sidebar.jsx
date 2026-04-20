import React, { useState } from 'react';

// Sub-componente para los items del menú
const SidebarItem = ({ label, icon, active, onClick }) => (
  <div 
    onClick={onClick}
    className={`
      flex items-center gap-3 px-6 py-4 cursor-pointer transition-all duration-200
      ${active 
        ? 'bg-molten-orange text-white shadow-lg border-r-4 border-white' 
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'}
    `}
  >
    <span className="text-xl">{icon}</span>
    <span className="font-medium">{label}</span>
  </div>
);

function Sidebar() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Jugadores', icon: '👤' },
    { name: 'Partidos', icon: '🏐' },
    { name: 'Estadísticas', icon: '📈' },
    { name: 'Configuración', icon: '⚙️' },
  ];

  return (
    <aside className="flex flex-col w-64 h-screen border-r border-gray-800 bg-molten-black">
      {/* Logo / Título */}
      <div className="flex flex-col items-center p-8 border-b border-gray-800">
        <div className="flex items-center justify-center w-12 h-12 mb-2 text-xl rounded-full shadow-lg bg-molten-orange">
          🏐
        </div>
        <h2 className="text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase">
          Julio Bueno
        </h2>
      </div>

      {/* Lista de Navegación */}
      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.name}
            label={item.name}
            icon={item.icon}
            active={activeTab === item.name}
            onClick={() => setActiveTab(item.name)}
          />
        ))}
      </nav>

      {/* Perfil de Usuario (Pie de página) */}
      <div className="p-4 border-t border-gray-800 bg-black/10">
        <div className="flex items-center gap-3 p-2 transition-colors rounded-lg cursor-pointer hover:bg-white/5">
          <div className="flex items-center justify-center text-xs font-bold rounded-full w-9 h-9 bg-molten-orange">
            JB
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">Julio Bueno</p>
            <p className="text-[10px] text-gray-500 uppercase">Analista</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;