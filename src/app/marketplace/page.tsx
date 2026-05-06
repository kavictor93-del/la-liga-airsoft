"use client"

import { Sidebar } from "@/components/Sidebar";
import { Search, Filter, ShoppingBag, ArrowUpRight, DollarSign, Tag, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  { name: "Rifle M4 Custom GBB", price: "R$ 3.500", category: "Armas GBB", image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop", condition: "Novo" },
  { name: "Colete Tático Plate Carrier", price: "R$ 850", category: "Equipamento", image: "https://images.unsplash.com/photo-1611634568853-b090b8f04134?q=80&w=2070&auto=format&fit=crop", condition: "Semi-novo" },
  { name: "BBs 0.25g Precision (1kg)", price: "R$ 120", category: "Insumos", image: "https://images.unsplash.com/photo-1595152230461-8516e83f2fc6?q=80&w=2070&auto=format&fit=crop", condition: "Novo" },
  { name: "Rádio Baofeng UV-5R", price: "R$ 290", category: "Eletrônicos", image: "https://images.unsplash.com/photo-1558537348-c0f8e733989d?q=80&w=2070&auto=format&fit=crop", condition: "Novo" },
];

export default function Marketplace() {
  return (
    <div className="flex min-h-screen bg-background military-grid relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-900/5 blur-[120px]" />
      </div>

      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-4 md:p-10 relative z-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter gradient-text">Marketplace <span className="text-primary italic-none">Tático</span></h2>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Negocie equipamentos de elite // Alpha Market</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64 hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input 
                type="text" 
                placeholder="Buscar item..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:border-primary/50 outline-none transition-all"
              />
            </div>
            <button className="btn-premium bg-white/5 border border-white/10 text-white/60 hover:text-white px-5 py-2.5 rounded-xl flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all">
              <Filter className="w-4 h-4" /> Filtros
            </button>
            <button className="btn-premium bg-primary text-black px-5 py-2.5 rounded-xl flex items-center gap-2 text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:scale-105 transition-all">
              <DollarSign className="w-4 h-4" /> Vender
            </button>
          </div>
        </header>

        {/* Featured Banner */}
        <div className="tactical-card relative h-56 md:h-72 mb-12 group cursor-pointer overflow-hidden border-white/5 shadow-2xl">
          <div className="absolute inset-0 bg-neutral-950">
             <img src="/sancreek-event.jpg" alt="Featured" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center p-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/20 text-primary border border-primary/30 text-[8px] font-black uppercase px-2 py-1 rounded tracking-widest">Destaque da Semana</span>
                <span className="text-white/20 text-[8px] font-black uppercase tracking-widest">• Alpha Verified</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic italic-none leading-[0.9]">UPGRADE SEU <br/><span className="text-primary">LOADOUT</span></h3>
            <p className="text-white/40 text-sm max-w-md hidden md:block leading-relaxed">As melhores ofertas de armas GBB, fardamentos e acessórios táticos com garantia de procedência da liga.</p>
            
            <div className="mt-8 flex items-center gap-4">
                <button className="bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-primary transition-colors">
                    Explorar Agora <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>
          </div>
          
          {/* Tactical Overlay */}
          <div className="absolute top-6 right-6 flex flex-col items-end gap-2 opacity-20">
             <div className="w-32 h-px bg-white" />
             <div className="w-16 h-px bg-white" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
            {["Todos", "Armas", "Acessórios", "Fardamento", "Insumos"].map((cat, i) => (
                <button key={i} className={cn(
                    "whitespace-nowrap px-6 py-2 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all",
                    i === 0 ? "bg-primary border-primary text-black shadow-[0_0_15px_rgba(255,107,0,0.2)]" : "bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10"
                )}>
                    {cat}
                </button>
            ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="tactical-card group bg-neutral-900/40 hover:border-primary/40 transition-all duration-500">
              <div className="h-52 relative overflow-hidden">
                 <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50 group-hover:opacity-100" />
                 <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                   <span className="bg-background/80 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase px-2 py-1 rounded text-primary tracking-widest">{product.category}</span>
                   <span className="bg-white/10 backdrop-blur-md border border-white/5 text-[7px] font-bold uppercase px-2 py-1 rounded text-white/60 w-fit">{product.condition}</span>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <button className="w-full bg-white text-black py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Ver Detalhes <ArrowUpRight className="w-4 h-4" />
                    </button>
                 </div>
              </div>
              <div className="p-6">
                <h4 className="text-sm font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors min-h-[40px] leading-snug">{product.name}</h4>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">Valor de Troca</span>
                    <span className="text-xl font-black text-white">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-500/40" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
