"use client"

import { Sidebar } from "@/components/Sidebar";
import { Users, Shield, Award, ChevronRight, Plus, Search, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const teams = [
  { name: "Alpha Team", leader: "Ghost_Operator", members: 12, rank: "#1", xp: "450k", color: "from-blue-500" },
  { name: "Shadow Squad", leader: "Night_Owl", members: 8, rank: "#2", xp: "380k", color: "from-red-500" },
  { name: "Delta Force", leader: "Iron_Man", members: 15, rank: "#3", xp: "310k", color: "from-green-500" },
  { name: "Bravos", leader: "Cap_Price", members: 6, rank: "#4", xp: "150k", color: "from-orange-500" },
];

export default function Equipes() {
  const [registered, setRegistered] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = () => {
    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      setRegistered(true);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-background military-grid">
      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-4 md:p-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter gradient-text">Gestão de <span className="text-primary italic-none">Equipes</span></h2>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Honra, tática e lealdade // Unidades Registradas</p>
          </div>
          
          <button className="btn-premium btn-primary w-full md:w-auto">
            <Plus className="w-4 h-4" /> Fundar Equipe
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           <div className="tactical-card p-6 border-primary/20 bg-primary/5">
             <div className="flex items-center gap-4 mb-4">
               <Shield className="w-10 h-10 text-primary" />
               <div>
                 <p className="text-[10px] font-black uppercase text-white/40">Seu Time</p>
                 <h4 className="text-lg font-black uppercase italic italic-none">Alpha Team</h4>
               </div>
             </div>
             
             <div className="space-y-4">
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input 
                    type="text" 
                    placeholder="Seu Nome de Operador" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-[10px] font-bold uppercase tracking-widest focus:border-primary/50 outline-none transition-all"
                  />
                </div>
                <button 
                  onClick={handleRegister}
                  disabled={isRegistering || registered}
                  className={cn(
                    "w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,107,0,0.2)] flex items-center justify-center gap-2",
                    registered ? "bg-green-500 text-black shadow-green-500/20" : "bg-primary text-black hover:scale-[1.02] active:scale-[0.98]"
                  )}
                >
                  {isRegistering ? (
                    <span className="animate-pulse">Alistando...</span>
                  ) : registered ? (
                    <><CheckCircle2 className="w-4 h-4" /> Alistado com Sucesso</>
                  ) : (
                    "Alistar no QG"
                  )}
                </button>
             </div>
           </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-6 px-2">Top Equipes da Liga</h3>
          
          {teams.map((team, i) => (
            <div key={i} className="tactical-card group flex flex-col md:flex-row items-center p-6 gap-6 hover:bg-white/5 cursor-pointer">
              <div className={cn("w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center border border-white/10 shadow-lg", team.color)}>
                <Shield className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-black uppercase italic italic-none group-hover:text-primary transition-colors">{team.name}</h4>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">Líder: {team.leader} // {team.members} Operadores</p>
              </div>

              <div className="flex items-center gap-12">
                 <div className="text-center">
                   <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">Global</p>
                   <p className="text-xl font-black text-primary">{team.rank}</p>
                 </div>
                 <div className="text-center">
                   <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">XP Total</p>
                   <p className="text-xl font-black">{team.xp}</p>
                 </div>
                 <ChevronRight className="w-6 h-6 text-white/20 group-hover:text-primary transition-colors hidden md:block" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
