"use client"

import { Sidebar } from "@/components/Sidebar";
import { Target, TrendingUp, Users, Shield, Zap, ChevronRight, Bell, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background military-grid">
      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-4 md:p-10">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter gradient-text">Bem-vindo, <span className="text-primary italic-none">Operador</span></h2>
            <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mt-1">Status do Sistema: <span className="text-green-500">Operacional</span> // 06 MAIO 2026</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input 
                type="text" 
                placeholder="Buscar missões ou times..." 
                className="w-full bg-white/5 border border-white/5 rounded-xl py-2 pl-10 pr-4 text-xs focus:border-primary/50 outline-none transition-all"
              />
            </div>
            <button className="p-2 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors relative">
              <Bell className="w-5 h-5 text-white/40" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(255,107,0,0.5)]" />
            </button>
          </div>
        </header>

        {/* Quick Stats Grid - ZERADO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: "XP Total", value: "0", icon: Zap, trend: "Iniciante" },
            { label: "Missões", value: "0", icon: Target, trend: "Recruta" },
            { label: "Equipe", value: "Sem Equipe", icon: Shield, trend: "Alistar" },
            { label: "Saldo", value: "R$ 0,00", icon: TrendingUp, trend: "Recarga" },
          ].map((stat, i) => (
            <div key={i} className="tactical-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.label}</p>
                <div className="text-xl font-black">{stat.value}</div>
                <p className="text-[10px] font-bold text-primary">{stat.trend}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Active Missions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center px-2">
              <h3 className="text-xl font-black uppercase tracking-tighter italic italic-none">Missões Ativas</h3>
              <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline flex items-center gap-1">Ver Calendário <ChevronRight className="w-4 h-4" /></button>
            </div>

            <div className="space-y-4">
              {[
                { name: "SANCREEK PT 2", date: "DOM, 17 MAIO", slots: "01/150", status: "Confirmado", color: "bg-green-500" },
                { name: "MISSÃO EXEMPLO", date: "SÁB, 23 MAIO", slots: "00/40", status: "Exemplo", color: "bg-white/10" },
              ].map((mission, i) => (
                <div key={i} className="tactical-card group flex items-center p-4 hover:bg-white/5 cursor-pointer">
                  <div className="w-16 h-16 bg-neutral-800 rounded-xl mr-4 overflow-hidden flex items-center justify-center border border-white/5">
                    <Target className="text-white/10 w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm uppercase tracking-tight group-hover:text-primary transition-colors">{mission.name}</h4>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{mission.date} // {mission.slots} vagas</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={cn("text-[8px] font-black uppercase px-2 py-1 rounded text-black", mission.color)}>{mission.status}</span>
                    <button className="text-[10px] font-bold text-white/20 hover:text-white transition-colors">Detalhes</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ranking / Team Sidebar */}
          <div className="space-y-8">
            <div className="tactical-card p-6 bg-gradient-to-br from-primary/10 to-transparent">
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4">Seu Ranking</h3>
              <div className="flex items-center justify-center p-8 relative">
                 <div className="absolute inset-0 flex items-center justify-center opacity-10">
                   <Shield className="w-40 h-40" />
                 </div>
                 <div className="text-center relative z-10">
                   <p className="text-4xl font-black text-primary">--</p>
                   <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mt-1">Aguardando Missões</p>
                 </div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                  <span>Próximo Nível</span>
                  <span className="text-primary">0%</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[2%] shadow-[0_0_10px_rgba(255,107,0,0.5)]" />
                </div>
              </div>
            </div>

            <div className="tactical-card p-6">
              <h3 className="text-lg font-black uppercase tracking-tighter mb-4">Feed da Tropa</h3>
              <div className="space-y-6">
                <div className="flex gap-3 grayscale opacity-40">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10" />
                  <div className="flex-1">
                    <p className="text-[10px] leading-tight">
                      <span className="font-bold text-white">Sistema</span> <span className="text-white/40">Iniciando feed de operações...</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
