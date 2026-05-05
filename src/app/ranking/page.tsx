"use client"

import { Sidebar } from "@/components/Sidebar";
import { Trophy, Star, Target, Shield, ChevronRight, Search, Award } from "lucide-react";
import { cn } from "@/lib/utils";

const rankingData = [
  { rank: 1, name: "Major_Viper", team: "Alpha Team", xp: "125,400", level: "Coronel", status: "Online" },
  { rank: 2, name: "Ghost_Operator", team: "Alpha Team", xp: "112,800", level: "Major", status: "Online" },
  { rank: 3, name: "Night_Owl", team: "Shadow Squad", xp: "98,200", level: "Capitão", status: "Offline" },
  { rank: 4, name: "Iron_Man", team: "Delta Force", xp: "85,600", level: "Tenente", status: "Online" },
  { rank: 5, name: "Cap_Price", team: "Bravos", xp: "72,100", level: "Sargento", status: "Offline" },
  { rank: 6, name: "Wolf_One", team: "Shadow Squad", xp: "68,900", level: "Sargento", status: "Online" },
  { rank: 7, name: "Desert_Fox", team: "Delta Force", xp: "65,300", level: "Cabo", status: "Offline" },
];

export default function Ranking() {
  return (
    <div className="flex min-h-screen bg-background military-grid">
      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-4 md:p-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter gradient-text">Ranking de <span className="text-primary italic-none">Elite</span></h2>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Os melhores operadores da liga // Quadro de Honra</p>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="Buscar Operador..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs focus:border-primary/50 outline-none transition-all"
            />
          </div>
        </header>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           {rankingData.slice(0, 3).map((player, i) => (
             <div key={i} className={cn(
               "tactical-card p-8 flex flex-col items-center text-center relative overflow-hidden",
               i === 0 ? "border-primary/40 bg-primary/5 scale-105 z-10" : "bg-white/2"
             )}>
                {i === 0 && <Award className="w-12 h-12 text-primary mb-4 drop-shadow-[0_0_15px_rgba(255,107,0,0.5)]" />}
                <div className="w-20 h-20 rounded-full bg-neutral-800 border-2 border-white/10 mb-4 flex items-center justify-center overflow-hidden">
                   <div className={cn("w-full h-full bg-gradient-to-br", i === 0 ? "from-primary to-orange-400" : "from-gray-600 to-gray-800")} />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight italic italic-none">{player.name}</h3>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">{player.team}</p>
                
                <div className="mt-6 w-full space-y-2">
                   <div className="flex justify-between text-[10px] font-bold uppercase">
                      <span className="text-white/40">XP</span>
                      <span className="text-primary">{player.xp}</span>
                   </div>
                   <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${100 - i * 15}%` }} />
                   </div>
                </div>
                
                <div className="absolute top-4 right-4 text-4xl font-black italic opacity-10">#{player.rank}</div>
             </div>
           ))}
        </div>

        {/* Ranking Table */}
        <div className="tactical-card overflow-hidden">
           <table className="w-full text-left">
              <thead>
                 <tr className="border-b border-white/5 bg-white/2">
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Posição</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Operador</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Equipe</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Patente</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">XP Total</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Status</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                 {rankingData.map((player, i) => (
                    <tr key={i} className="hover:bg-white/2 transition-colors group cursor-pointer">
                       <td className="p-6 text-xl font-black italic text-white/20 group-hover:text-primary transition-colors">#{player.rank}</td>
                       <td className="p-6">
                          <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                             <span className="font-bold text-sm">{player.name}</span>
                          </div>
                       </td>
                       <td className="p-6 text-[10px] font-bold text-white/40 uppercase">{player.team}</td>
                       <td className="p-6">
                          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest">{player.level}</span>
                       </td>
                       <td className="p-6 font-black text-primary">{player.xp}</td>
                       <td className="p-6">
                          <div className="flex items-center gap-2">
                             <div className={cn("w-1.5 h-1.5 rounded-full", player.status === "Online" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-white/10")} />
                             <span className="text-[10px] font-bold text-white/40 uppercase">{player.status}</span>
                          </div>
                       </td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </main>
    </div>
  );
}
