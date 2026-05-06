"use client"

import { Sidebar } from "@/components/Sidebar";
import { Calendar as CalendarIcon, MapPin, Users, Zap, Clock, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const missions = [
  { name: "SANCREEK PT 2", date: "17 MAIO", time: "07:30", type: "MilSim / Velho Oeste", price: "Grátis", slots: "01/150", image: "/logo-liga.jpg", location: "Canoínhas" },
  { name: "MISSÃO EXEMPLO", date: "23 MAIO", time: "08:00", type: "MilSim", price: "R$ 45", slots: "00/40", image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop", location: "Arena Warzone" },
];

export default function Calendario() {
  return (
    <div className="flex min-h-screen bg-background military-grid">
      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-4 md:p-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter gradient-text">Próximas <span className="text-primary italic-none">Missões</span></h2>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Escolha seu campo de batalha // Calendário de Operações</p>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"><ChevronLeft className="w-5 h-5 text-white/40" /></button>
            <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest">Maio 2026</div>
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"><ChevronRight className="w-5 h-5 text-white/40" /></button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {missions.map((mission, i) => (
            <div key={i} className="tactical-card group">
              <div className="h-48 bg-neutral-900 relative overflow-hidden">
                 <img src={mission.image} alt={mission.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute top-4 left-4 z-20 flex flex-col items-center justify-center w-12 h-14 bg-primary text-black rounded-xl shadow-lg">
                    <span className="text-[10px] font-black uppercase leading-none">{mission.date.split(' ')[1]}</span>
                    <span className="text-xl font-black leading-none">{mission.date.split(' ')[0]}</span>
                 </div>
                 <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
                 <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center">
                    <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10">{mission.type}</span>
                    <div className="flex items-center gap-1 text-[8px] font-black uppercase"><Clock className="w-3 h-3" /> {mission.time}</div>
                 </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase italic italic-none mb-4 group-hover:text-primary transition-colors">{mission.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    <MapPin className="w-4 h-4 text-primary/60" /> {mission.location}
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                    <Users className="w-4 h-4 text-primary/60" /> {mission.slots} Operadores Inscritos
                  </div>
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                   <div className="text-xl font-black text-primary">{mission.price}</div>
                   <button className={cn(
                     "btn-premium text-[10px] h-10 flex items-center px-6",
                     mission.slots.startsWith('00') ? "bg-white/5 text-white/20 cursor-not-allowed" : "btn-primary"
                   )}>
                     {mission.slots.startsWith('00') ? "Missão Lotada" : "Confirmar Missão"}
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
