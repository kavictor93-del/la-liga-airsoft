"use client"

import { Sidebar } from "@/components/Sidebar";
import { 
  ArrowLeft, 
  Target, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Image as ImageIcon, 
  ShieldAlert,
  Save,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function NovoEvento() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulação de salvamento
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-background military-grid relative">
      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-4 md:p-10 relative z-10">
        <Link href="/organizador" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest mb-8">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Painel
        </Link>

        <header className="mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter gradient-text">Desdobrar <span className="text-primary italic-none">Nova Missão</span></h2>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Briefing de Operação // Deployment Protocol</p>
        </header>

        {success ? (
            <div className="tactical-card p-20 flex flex-col items-center text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/40 mb-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-3xl font-black uppercase italic italic-none mb-4">Missão Desdobrada!</h3>
                <p className="text-white/40 text-sm max-w-sm mb-10 leading-relaxed">
                    A operação foi cadastrada com sucesso e já está visível no calendário para todos os operadores.
                </p>
                <Link href="/organizador">
                    <button className="bg-primary text-black px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all">
                        Retornar ao Comando
                    </button>
                </Link>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Main Area */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="tactical-card p-8 space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] ml-1">Título da Missão</label>
                            <input 
                                required
                                type="text" 
                                placeholder="EX: OPERAÇÃO BLACK GOLD" 
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm font-black uppercase tracking-widest focus:border-primary/50 outline-none transition-all focus:bg-white/[0.08]"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] ml-1">Descrição Detalhada / Briefing</label>
                            <textarea 
                                required
                                rows={6}
                                placeholder="Descreva os objetivos, regras e cronograma da missão..." 
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm focus:border-primary/50 outline-none transition-all focus:bg-white/[0.08] resize-none"
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] ml-1">Data do Evento</label>
                                <div className="relative">
                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                                    <input 
                                        required
                                        type="date" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-sm focus:border-primary/50 outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em] ml-1">Localização (Cidade/Arena)</label>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                                    <input 
                                        required
                                        type="text" 
                                        placeholder="EX: CANOINHAS / SC" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-sm font-bold uppercase tracking-widest focus:border-primary/50 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tactical-card p-8">
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                            <ImageIcon className="w-4 h-4 text-primary" /> Arte da Missão
                        </h4>
                        <div className="border-2 border-dashed border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center text-center group hover:border-primary/40 transition-all cursor-pointer bg-white/[0.02]">
                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Plus className="w-6 h-6 text-white/20 group-hover:text-primary" />
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Upload do Poster (1080x1350 recomendado)</p>
                            <p className="text-[8px] text-white/10 uppercase mt-2">Formatos: JPG, PNG • Max 5MB</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Config Area */}
                <div className="space-y-8">
                    <div className="tactical-card p-8 bg-black/40">
                        <h4 className="text-sm font-black uppercase tracking-widest mb-6">Custos e Vagas</h4>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em]">Valor da Inscrição (R$)</label>
                                <div className="relative">
                                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />
                                    <input 
                                        required
                                        type="number" 
                                        placeholder="0,00" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-sm font-black focus:border-green-500/50 outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-white/40 tracking-[0.2em]">Limite de Operadores</label>
                                <div className="relative">
                                    <Target className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                                    <input 
                                        required
                                        type="number" 
                                        placeholder="EX: 100" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-6 text-sm font-black focus:border-primary/50 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tactical-card p-8 border-orange-900/20 bg-orange-950/5">
                        <h4 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2 text-orange-500">
                            <ShieldAlert className="w-4 h-4" /> Protocolo de Segurança
                        </h4>
                        <p className="text-[9px] font-bold text-white/40 uppercase leading-relaxed">
                            Ao publicar, você confirma que o evento respeita as normas de segurança e legislação vigente para a prática de Airsoft.
                        </p>
                    </div>

                    <button 
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-black h-16 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                    >
                        {loading ? (
                            <span className="animate-pulse">DESDOBRANDO MISSÃO...</span>
                        ) : (
                            <>
                                <Save className="w-5 h-5" /> PUBLICAR MISSÃO
                            </>
                        )}
                    </button>
                </div>
            </form>
        )}
      </main>
    </div>
  );
}
