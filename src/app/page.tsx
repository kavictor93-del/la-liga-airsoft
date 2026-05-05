import { Target, Shield, ShoppingBag, Users, ChevronRight, Zap, Trophy, Award, Star, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* GLOW BACKGROUNDS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* HEADER */}
      <nav className="relative z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 relative">
                <img src="/logo-liga.png" alt="La Liga Airsoft Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            </div>
            <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter leading-none italic uppercase">LA LIGA</span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Planalto Norte</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase">
            <a href="#missions" className="hover:text-primary transition-colors">Operações</a>
            <a href="#marketplace" className="hover:text-primary transition-colors">Marketplace</a>
            <a href="#ranking" className="hover:text-primary transition-colors">Ranking</a>
          </div>

          <button className="bg-white/5 border border-white/10 px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all">
            Área do Operador
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-24 pb-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="text-center lg:text-left space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.3em] uppercase">
                <Award className="w-4 h-4" /> A ELITE DO AIRSOFT NACIONAL
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black tracking-tight leading-[0.85] uppercase italic">
                A Elite do <br />
                <span className="text-gradient">Airsoft Tático</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Gestão de missões, marketplace exclusivo e ranking de patentes. 
                Sua jornada de recruta a general começa com um toque.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 justify-center lg:justify-start">
                <button className="btn-elite bg-primary text-black shadow-[0_0_50px_rgba(255,107,0,0.3)] hover:scale-105 group w-full sm:w-auto">
                    ALISTAR-SE AGORA
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex flex-col items-start">
                    <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">OS MELHORES TIMES JÁ ESTÃO AQUI</span>
                </div>
            </div>
          </div>

          {/* APP PREVIEW CARD */}
          <div className="relative group lg:block">
            <div className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full opacity-30 animate-pulse"></div>
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-[#121212] aspect-[4/5] max-w-md mx-auto transform hover:rotate-2 transition-transform duration-700">
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
               <div className="absolute top-10 left-10 z-20">
                  <div className="bg-primary text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
                    Alpha System v1.0
                  </div>
               </div>
               {/* Mockup do Dashboard Interno */}
               <div className="p-10 pt-24 space-y-6">
                  <div className="h-32 bg-white/5 rounded-3xl border border-white/5 p-6 flex items-center gap-4">
                     <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/40">
                        <Zap className="text-primary w-8 h-8" />
                     </div>
                     <div>
                        <p className="text-[10px] font-bold text-gray-500 uppercase">Patente Atual</p>
                        <p className="text-2xl font-black italic uppercase">Major Delta</p>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="h-40 bg-white/5 rounded-3xl border border-white/5 p-6">
                        <Trophy className="text-primary w-6 h-6 mb-2" />
                        <p className="text-2xl font-black">#04</p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase mt-1">Ranking</p>
                     </div>
                     <div className="h-40 bg-white/5 rounded-3xl border border-white/5 p-6">
                        <Users className="text-primary w-6 h-6 mb-2" />
                        <p className="text-2xl font-black">12</p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase mt-1">Operações</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSIONS SECTION */}
      <section id="missions" className="relative z-10 py-32 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
               Operações <br /> <span className="text-primary">Disponíveis</span>
            </h2>
          </div>
          <button className="text-gray-500 font-black uppercase tracking-widest text-xs hover:text-primary transition-all flex items-center gap-2">
            Ver todas as missões <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
           {[
             { name: "SANCREEK PT 2", date: "17 MAIO", type: "MilSim / Velho Oeste", price: "R$ 50", image: "/sancreek-event.png", location: "Canoinhas" },
             { name: "Operation: Black Gold", date: "25 MAIO", type: "MilSim", price: "R$ 45", image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop", location: "Arena Warzone" },
           ].map((mission, i) => (
             <div key={i} className="premium-card group cursor-pointer">
                <div className="h-72 relative overflow-hidden">
                   <img src={mission.image} alt={mission.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                   <div className="absolute top-8 left-8 z-20 flex flex-col items-center justify-center w-16 h-20 bg-primary text-black rounded-2xl shadow-2xl">
                      <span className="text-[10px] font-black uppercase leading-none">{mission.date.split(' ')[1]}</span>
                      <span className="text-3xl font-black leading-none">{mission.date.split(' ')[0]}</span>
                   </div>
                </div>
                <div className="p-10 flex justify-between items-end">
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
      <footer className="relative z-10 py-20 border-t border-white/5 text-center">
        <p className="text-[10px] text-gray-600 font-bold tracking-[0.5em] uppercase">
          LA LIGA AIRSOFT • PLATAFORMA DE ELITE © 2026
        </p>
      </footer>

    </main>
  );
}
