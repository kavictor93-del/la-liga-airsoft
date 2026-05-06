"use client"

import { Sidebar } from "@/components/Sidebar";
import { 
  BarChart3, 
  Users, 
  Calendar, 
  DollarSign, 
  Plus, 
  ChevronRight, 
  Settings, 
  Users2, 
  ArrowUpRight,
  TrendingUp,
  Target
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Receita Total", value: "R$ 12.450", icon: DollarSign, trend: "+15%", color: "text-green-500" },
  { label: "Jogadores Inscritos", value: "342", icon: Users, trend: "+42", color: "text-primary" },
  { label: "Missões Ativas", value: "08", icon: Target, trend: "Status: OK", color: "text-blue-500" },
  { label: "Aproveitamento", value: "92%", icon: TrendingUp, trend: "Elite", color: "text-orange-500" },
];

const activeEvents = [
  { name: "SANCREEK PT 2", date: "17 Maio", participants: "128/150", status: "Confirmado", revenue: "R$ 6.400" },
  { name: "OP: Black Gold", date: "25 Maio", participants: "45/80", status: "Inscrições Abertas", revenue: "R$ 2.025" },
  { name: "CQB Treino Elite", date: "02 Junho", participants: "12/20", status: "Inscrições Abertas", revenue: "R$ 600" },
];

export default function OrganizadorDashboard() {
  return (
    <div className="flex min-h-screen bg-background military-grid relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px]" />
      </div>

      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-4 md:p-10 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter gradient-text">Painel do <span className="text-primary italic-none">Organizador</span></h2>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">QG de Gestão de Eventos // Alpha Admin</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition-all text-white/40 hover:text-white">
                <Settings className="w-5 h-5" />
            </button>
            <Link href="/organizador/novo-evento" className="flex-1 md:flex-none">
                <button className="w-full bg-primary text-black px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" /> Nova Missão
                </button>
            </Link>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="tactical-card p-8 group hover:border-primary/20 transition-all">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/20 transition-colors">
                        <stat.icon className={cn("w-6 h-6", stat.color)} />
                    </div>
                    <span className={cn("text-[10px] font-black uppercase tracking-widest", stat.color)}>{stat.trend}</span>
                </div>
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                <h3 className="text-3xl font-black tracking-tight italic italic-none">{stat.value}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Active Events Table */}
            <div className="lg:col-span-2 space-y-6">
                <div className="flex justify-between items-center px-2">
                    <h3 className="text-xl font-black uppercase tracking-tighter italic italic-none">Suas Missões</h3>
                    <button className="text-[10px] font-black text-white/20 uppercase tracking-widest hover:text-primary transition-colors">Ver Histórico</button>
                </div>

                <div className="tactical-card overflow-hidden bg-black/20 backdrop-blur-md">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 bg-white/[0.02]">
                                <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Evento</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 text-center">Inscritos</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Receita</th>
                                <th className="p-6 text-[10px] font-black uppercase tracking-[0.3em] text-white/40 text-right">Ação</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {activeEvents.map((event, i) => (
                                <tr key={i} className="hover:bg-white/[0.03] transition-all group">
                                    <td className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-white/5 overflow-hidden">
                                                <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-900" />
                                            </div>
                                            <div>
                                                <span className="font-black text-sm block group-hover:text-primary transition-colors uppercase italic italic-none">{event.name}</span>
                                                <span className="text-[9px] font-bold text-white/20 uppercase">{event.date}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6 text-center">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-xs font-black text-white">{event.participants}</span>
                                            <div className="w-20 h-1 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-primary" style={{ width: '70%' }} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-6">
                                        <span className="font-black text-sm text-green-500">{event.revenue}</span>
                                    </td>
                                    <td className="p-6 text-right">
                                        <button className="p-2 bg-white/5 rounded-lg border border-white/5 hover:border-primary/40 hover:text-primary transition-all">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quick Actions / Recent Registrations */}
            <div className="space-y-8">
                <div className="tactical-card p-8 bg-primary text-black">
                    <h3 className="text-lg font-black uppercase tracking-tighter mb-4 italic italic-none">Configurar Pagamento</h3>
                    <p className="text-[10px] font-bold uppercase leading-relaxed mb-6 opacity-60">
                        Conecte sua conta do Mercado Pago para receber o valor das inscrições instantaneamente.
                    </p>
                    <button className="w-full bg-black text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                        Conectar Agora
                    </button>
                </div>

                <div className="tactical-card p-8">
                    <h3 className="text-lg font-black uppercase tracking-tighter mb-6 italic italic-none">Últimos Inscritos</h3>
                    <div className="space-y-6">
                        {[
                            { user: "Major_Viper", event: "SANCREEK PT 2", time: "Há 12 min" },
                            { user: "Ghost_Operator", event: "SANCREEK PT 2", time: "Há 45 min" },
                            { user: "Night_Owl", event: "OP: Black Gold", time: "Há 2h" },
                        ].map((reg, i) => (
                            <div key={i} className="flex gap-4 items-center">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10" />
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-black uppercase truncate group-hover:text-primary transition-colors">{reg.user}</p>
                                    <p className="text-[8px] text-white/40 font-bold uppercase truncate">{reg.event}</p>
                                </div>
                                <span className="text-[8px] text-primary/60 font-black uppercase whitespace-nowrap">{reg.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
