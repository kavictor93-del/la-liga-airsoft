"use client"

import { Sidebar } from "@/components/Sidebar";
import { Trophy, Star, Target, Shield, ChevronRight, Search, Award, Zap, TrendingUp } from "lucide-react";
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
    <div className="flex min-h-screen bg-background military-grid relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px]" />
      </div>

      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-4 md:p-10 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter gradient-text">Ranking de <span className="text-primary italic-none">Elite</span></h2>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Os melhores operadores da liga // Quadro de Honra</p>
          </div>
          
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar Operador..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs focus:border-primary/50 outline-none transition-all focus:bg-white/[0.08]"
            />
          </div>
        </header>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           {rankingData.slice(0, 3).map((player, i) => (
             <div key={i} className={cn(
               "tactical-card p-10 flex flex-col items-center text-center relative overflow-hidden group transition-all duration-500",
               i === 0 ? "border-primary/40 bg-primary/5 scale-105 z-10 shadow-[0_0_50px_rgba(255,107,0,0.1)]" : "bg-white/2"
             )}>
                {/* Crown/Award for #1 */}
                {i === 0 && (
                    <div className="absolute top-4 left-4">
                        <Trophy className="w-6 h-6 text-primary drop-shadow-[0_0_10px_rgba(255,107,0,0.8)]" />
                    </div>
                )}
                
                <div className="relative mb-6">
                    <div className={cn(
                        "w-24 h-24 rounded-full border-2 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110 duration-500",
                        i === 0 ? "border-primary shadow-[0_0_20px_rgba(255,107,0,0.3)]" : "border-white/10"
                    )}>
                       <div className={cn("w-full h-full bg-gradient-to-br", 
                         i === 0 ? "from-primary to-orange-400" : 
                         i === 1 ? "from-gray-300 to-gray-500" : 
                         "from-orange-800 to-orange-950"
                       )} />
                    </div>
                    <div className={cn(
                        "absolute -bottom-2 -right-2 w-8 h-8 rounded-lg flex items-center justify-center font-black italic border border-white/10 shadow-xl",
                        i === 0 ? "bg-primary text-black" : "bg-neutral-800 text-white"
                    )}>
                        #{player.rank}
                    </div>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight italic italic-none group-hover:text-primary transition-colors">{player.name}</h3>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1 mb-8">{player.team}</p>
                
                <div className="w-full space-y-4">
                   <div className="flex justify-between items-end">
                      <div className="text-left">
                        <p className="text-[8px] font-bold text-white/20 uppercase tracking-[0.2em]">Experiência</p>
                        <p className="text-sm font-black text-primary uppercase">{player.xp}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] font-bold text-white/20 uppercase tracking-[0.2em]">Patente</p>
                        <p className="text-[10px] font-black text-white uppercase">{player.level}</p>
                      </div>
                   </div>
                   <div className="h-1.5 bg-white/5 rounded-full overflow-hidden p-[1px]">
                      <div className={cn("h-full rounded-full transition-all duration-1000", i === 0 ? "bg-primary shadow-[0_0_10px_rgba(255,107,0,0.8)]" : "bg-white/20")} 
                           style={{ width: `${100 - i * 15}%` }} />
                   </div>
                </div>
                
                {/* Visual Glitch Decor */}
                <div className="absolute -bottom-10 -right-10 text-[100px] font-black italic opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                    {player.rank}
                </div>
             </div>
           ))}
        </div>

        {/* Ranking Table */}
        <div className="tactical-card overflow-hidden bg-black/20 backdrop-blur-md">
           <table className="w-full text-left">
              <thead>
                 <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Posição</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Operador</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Equipe</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 text-center">Patente</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">XP Total</th>
                    <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Status</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                 {rankingData.map((player, i) => (
                    <tr key={i} className="hover:bg-white/[0.03] transition-all group cursor-pointer">
                       <td className="p-6">
                          <div className={cn(
                              "text-xl font-black italic transition-colors flex items-center gap-3",
                              player.rank <= 3 ? "text-primary" : "text-white/10 group-hover:text-white/40"
                          )}>
                              #{player.rank}
                              {player.rank === 1 && <Star className="w-3 h-3 fill-primary" />}
                          </div>
                       </td>
                       <td className="p-6">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                                <User className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors" />
                             </div>
                             <div>
                                <span className="font-black text-sm block group-hover:text-primary transition-colors">{player.name}</span>
                                <span className="text-[9px] font-bold text-white/20 uppercase">Membro Alpha</span>
                             </div>
                          </div>
                       </td>
                       <td className="p-6">
                          <span className="text-[10px] font-black text-white/40 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full border border-white/5">
                            {player.team}
                          </span>
                       </td>
                       <td className="p-6 text-center">
                          <span className="px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-xl group-hover:border-primary/20 transition-colors">
                            {player.level}
                          </span>
                       </td>
                       <td className="p-6">
                          <div className="flex items-center gap-2">
                             <TrendingUp className="w-3 h-3 text-primary opacity-40" />
                             <span className="font-black text-sm text-primary">{player.xp}</span>
                          </div>
                       </td>
                       <td className="p-6">
                          <div className="flex items-center gap-2">
                             <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", 
                               player.status === "Online" ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" : "bg-white/10 shadow-none animate-none"
                             )} />
                             <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{player.status}</span>
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

const User = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
)
