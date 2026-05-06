"use client"

import { Sidebar } from "@/components/Sidebar";
import { Users, Shield, Award, ChevronRight, Plus, Search, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const teams = [
  { name: "ALPHA TEAM (EXEMPLO)", leader: "Operador_01", members: 1, rank: "#--", xp: "0", color: "from-primary/20" },
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
           <div className="tactical-card p-6 border-white/5 bg-white/5">
             <div className="flex items-center gap-4 mb-4">
               <Shield className="w-10 h-10 text-white/20" />
               <div>
                 <p className="text-[10px] font-black uppercase text-white/40">Sua Equipe</p>
                 <h4 className="text-lg font-black uppercase italic italic-none text-white/20">Sem Unidade</h4>
               </div>
             </div>
             
             <div className="space-y-4">
                <button 
                  className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all"
                >
                  BUSCAR EQUIPE
                </button>
             </div>
           </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-6 px-2">Unidades da Liga</h3>
          
          {teams.map((team, i) => (
            <div key={i} className="tactical-card group flex flex-col md:flex-row items-center p-6 gap-6 hover:bg-white/5 cursor-pointer opacity-40">
              <div className={cn("w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shadow-lg", team.color)}>
                <Shield className="w-8 h-8 text-white/20" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-black uppercase italic italic-none group-hover:text-primary transition-colors">{team.name}</h4>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">Líder: {team.leader} // {team.members} Operadores</p>
              </div>

              <div className="flex items-center gap-12">
                 <div className="text-center">
                   <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">Global</p>
                   <p className="text-xl font-black text-white/20">{team.rank}</p>
                 </div>
                 <div className="text-center">
                   <p className="text-[10px] font-black uppercase text-white/40 tracking-widest">XP Total</p>
                   <p className="text-xl font-black text-white/20">{team.xp}</p>
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
