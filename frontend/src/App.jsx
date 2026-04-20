import { useState } from 'react'
import Sidebar from './components/Sidebar'

function App() {
  return (
    /* El contenedor principal debe ser 'flex' para poner el Sidebar al lado del contenido */
    <div className="flex w-full min-h-screen bg-molten-black">
      
      {/* 1. Componente Sidebar (Ocupa su ancho fijo de w-64) */}
      <Sidebar />

      {/* 2. Área de Contenido Principal (Crece para ocupar el resto) */}
      <main className="flex flex-col flex-1">
        
        {/* Header Superior del Dashboard */}
        <header className="flex items-center justify-between h-16 px-8 border-b border-gray-800 bg-black/10">
          <h1 className="text-xl font-bold tracking-wider text-white uppercase">
            Panel de Control
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Temporada 2026</span>
            <div className="flex items-center justify-center w-8 h-8 text-xs font-bold border rounded-full bg-molten-orange/20 border-molten-orange text-molten-orange">
              !
            </div>
          </div>
        </header>

        {/* Zona de Widgets / Gráficos (Donde irá tu mockup central) */}
        <section className="p-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Tarjeta de Ejemplo 1 */}
            <div className="p-6 bg-white shadow-xl rounded-2xl">
              <p className="mb-1 text-xs font-bold text-gray-500 uppercase">Efectividad Total</p>
              <h2 className="text-4xl font-black text-molten-black">72%</h2>
              <div className="w-full h-2 mt-4 overflow-hidden bg-gray-100 rounded-full">
                <div className="h-full bg-molten-orange w-[72%]"></div>
              </div>
            </div>

            {/* Tarjeta de Ejemplo 2 */}
            <div className="p-6 bg-white shadow-xl rounded-2xl">
              <p className="mb-1 text-xs font-bold text-gray-500 uppercase">Último Partido</p>
              <h2 className="text-xl font-bold text-molten-black">3 - 1 vs Club Valpo</h2>
              <p className="mt-2 text-sm font-semibold text-molten-orange">Victoria Local</p>
            </div>

          </div>
        </section>

      </main>
    </div>
  )
}

export default App