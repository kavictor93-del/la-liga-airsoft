"use client"
// MUDANCA FORCADA PELO CLAUDE PARA O GITHUB DESKTOP ACORDAR

import { Target, Shield, ShoppingBag, Users, ChevronRight, Zap, Trophy, Award, Star, ArrowRight, LayoutDashboard, Globe, MousePointer2 } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeBanner, setActiveBanner] = useState(0); // 0: Sancreek, 1: Dashboard

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* GLOW BACKGROUNDS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* HEADER - REDESIGNED PREMIUM */}
      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 relative group cursor-pointer">
                <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 relative z-10">
                    <img src="/logo-liga.jpg" alt="La Liga Airsoft Logo" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter leading-none italic uppercase italic-none">LA LIGA</span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">AIRSOFT APP</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black tracking-[0.2em] text-white/40 uppercase">
            <Link href="#missions" className="hover:text-primary transition-colors flex items-center gap-2 group">
              <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" /> Operações
            </Link>
            <Link href="/marketplace" className="hover:text-primary transition-colors flex items-center gap-2 group">
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" /> Marketplace
            </Link>
            <Link href="/ranking" className="hover:text-primary transition-colors flex items-center gap-2 group">
              <Trophy className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" /> Ranking
            </Link>
          </div>

          <Link href="/login">
            <button className="bg-white/5 border border-white/10 px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all flex items-center gap-2 group shadow-xl">
              <LayoutDashboard className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              Área do Operador
            </button>
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-48 pb-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="text-center lg:text-left space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.3em] uppercase">
                <Award className="w-4 h-4" /> A ELITE DO AIRSOFT NACIONAL
            </div>
            
            <div className="relative h-[280px] md:h-[320px]">
                {/* Banner 1: Sancreek */}
                <div className={`absolute inset-0 transition-all duration-1000 transform ${activeBanner === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                    <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter leading-[0.9] uppercase italic pr-20">
                        Operação <br />
                        <span className="text-gradient">Sancreek Pt 2</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-bold max-w-3xl mx-auto lg:mx-0 leading-relaxed mt-6 uppercase tracking-tight">
                        Os reis do faroeste no dia 17 de maio em Canoinhas, <span className="text-primary italic">Nova Data!</span>
                    </p>
                </div>

                {/* Banner 2: Dashboard/Idea */}
                <div className={`absolute inset-0 transition-all duration-1000 transform ${activeBanner === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                    <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tighter leading-[0.9] uppercase italic pr-20">
                        Sua Carreira <br />
                        <span className="text-gradient">De Operador</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-bold max-w-2xl mx-auto lg:mx-0 leading-relaxed mt-6 uppercase tracking-tight">
                        Gerencie suas missões, evolua sua patente e conquiste o topo do ranking.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-16 justify-center lg:justify-start">
                <Link href="/login" className="w-full sm:w-auto">
                    <button className="btn-elite bg-primary text-black shadow-[0_0_50px_rgba(255,107,0,0.3)] hover:scale-105 group w-full mb-4 sm:mb-0">
                        ALISTAR-SE AGORA
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </button>
                </Link>
                <div className="flex gap-3 items-center h-14">
                    <button 
                      onClick={() => setActiveBanner(0)}
                      className={`w-3 h-3 rounded-full transition-all ${activeBanner === 0 ? 'bg-primary w-8' : 'bg-white/20'}`} 
                    />
                    <button 
                      onClick={() => setActiveBanner(1)}
                      className={`w-3 h-3 rounded-full transition-all ${activeBanner === 1 ? 'bg-primary w-8' : 'bg-white/20'}`} 
                    />
                </div>
            </div>
          </div>

          {/* APP PREVIEW CARD - DYNAMIC */}
          <div className="relative group lg:block">
            <div className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full opacity-30 animate-pulse"></div>
            
            <div className="relative aspect-[4/5] max-w-md mx-auto">
                {/* Preview 1: Sancreek Poster */}
                <div className={`absolute inset-0 transition-all duration-1000 transform ${activeBanner === 0 ? 'opacity-100 scale-100 rotate-2' : 'opacity-0 scale-95 rotate-0 pointer-events-none'}`}>
                    <div className="w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative">
                        <img src="/sancreek-event.jpg" alt="Sancreek Event" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10">
                            <p className="text-primary font-black uppercase tracking-[0.3em] mb-2">17 de Maio</p>
                            <h3 className="text-4xl font-black uppercase italic italic-none">CANOINHAS / SC</h3>
                        </div>
                    </div>
                </div>

                {/* Preview 2: Dashboard Mockup */}
                <div className={`absolute inset-0 transition-all duration-1000 transform ${activeBanner === 1 ? 'opacity-100 scale-100 -rotate-2' : 'opacity-0 scale-95 rotate-0 pointer-events-none'}`}>
                    <div className="w-full h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-[#121212]">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        <div className="absolute top-10 left-10 z-20">
                            <div className="bg-primary text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
                                Alpha System v1.0
                            </div>
                        </div>
                        <div className="p-10 pt-24 space-y-6">
                            <div className="h-32 bg-white/5 rounded-3xl border border-white/5 p-6 flex items-center gap-4">
                                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/40 overflow-hidden">
                                    <img src="/peter.jpg" alt="PETER" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase">Patente Atual</p>
                                    <p className="text-2xl font-black italic uppercase text-primary italic-none">Soldado</p>
                                    <p className="text-[10px] font-black uppercase text-white/40">PETER</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-40 bg-white/5 rounded-3xl border border-white/5 p-6">
                                    <Trophy className="text-primary w-6 h-6 mb-2" />
                                    <p className="text-2xl font-black">NV 01</p>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase mt-1">Nível</p>
                                </div>
                                <div className="h-40 bg-white/5 rounded-3xl border border-white/5 p-6 flex flex-col justify-between">
                                    <Users className="text-primary w-6 h-6 mb-2" />
                                    <p className="text-[11px] font-black leading-tight uppercase">C.O.A.F DIV. <br/> CONTESTADO</p>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase mt-1">Equipe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* "COMO FUNCIONA" SECTION */}
      <section className="relative z-10 py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic italic-none">
                    O Ecossistema da <br /> <span className="text-primary">Vitória</span>
                </h2>
                <p className="text-white/40 text-xs font-bold uppercase tracking-[0.4em] mt-4">Entenda o fluxo de um operador de elite</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                    { step: "01", title: "Aliste-se", desc: "Crie seu perfil único, escolha seu Callsign e defina sua equipe.", icon: UserPlus },
                    { step: "02", title: "Missões", desc: "Inscreva-se em eventos reais. Pagamento rápido e check-in via sistema.", icon: Target },
                    { step: "03", title: "Evolua", desc: "Cada tiro conta. Ganhe XP em campo e suba nas patentes da liga.", icon: TrendingUp },
                    { step: "04", title: "Market", desc: "Compre e venda equipamentos com segurança dentro da comunidade.", icon: ShoppingBag },
                ].map((item, i) => (
                    <div key={i} className="tactical-card p-10 group hover:border-primary/40 transition-all">
                        <div className="text-5xl font-black text-white/5 group-hover:text-primary/20 transition-colors mb-6">{item.step}</div>
                        <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 italic italic-none">{item.title}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* MISSIONS SECTION */}
      <section id="missions" className="relative z-10 py-32 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic italic-none">
               Operações <br /> <span className="text-primary">Disponíveis</span>
            </h2>
          </div>
          <Link href="/calendario" className="text-gray-500 font-black uppercase tracking-widest text-xs hover:text-primary transition-all flex items-center gap-2 group">
            Ver todas as missões <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             { name: "SANCREEK PT 2", date: "17 MAIO", type: "MilSim / Velho Oeste", price: "R$ 50", image: "/sancreek-event.jpg", location: "Canoinhas" },
             { name: "Operation: Black Gold", date: "25 MAIO", type: "MilSim", price: "R$ 45", image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop", location: "Arena Warzone" },
           ].map((mission, i) => (
             <div key={i} className="premium-card group cursor-pointer relative overflow-hidden">
                <div className="h-[450px] relative overflow-hidden">
                   <img src={mission.image} alt={mission.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                   <div className="absolute top-8 left-8 z-20 flex flex-col items-center justify-center w-16 h-20 bg-primary text-black rounded-2xl shadow-2xl">
                      <span className="text-[10px] font-black uppercase leading-none">{mission.date.split(' ')[1]}</span>
                      <span className="text-3xl font-black leading-none">{mission.date.split(' ')[0]}</span>
                   </div>
                </div>
                <div className="p-10 flex justify-between items-end relative z-20">
                   <div>
                      <h3 className="text-3xl font-black uppercase italic italic-none mb-4 group-hover:text-primary transition-colors">{mission.name}</h3>
                      <div className="flex gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                         <span>{mission.location}</span>
                         <span>•</span>
                         <span>{mission.type}</span>
                      </div>
                   </div>
                   <div className="text-3xl font-black text-primary">{mission.price}</div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 py-20 border-t border-white/5 text-center bg-black">
        <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-12 rounded-xl overflow-hidden grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                <img src="/logo-liga.jpg" alt="Logo" />
            </div>
            <p className="text-[10px] text-gray-600 font-bold tracking-[0.5em] uppercase">
            LA LIGA AIRSOFT • PLATAFORMA DE ELITE © 2026
            </p>
        </div>
      </footer>

    </main>
  );
}

const UserPlus = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
)

const TrendingUp = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
)
