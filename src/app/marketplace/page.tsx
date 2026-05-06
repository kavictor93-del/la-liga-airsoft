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
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">ANUNCIANTES E LOJISTAS // ESPAÇO DISPONÍVEL</p>
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
          </div>
        </header>

        {/* Featured Banner */}
        <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-12 group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            alt="Banner Marketplace" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center max-w-xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[8px] font-black uppercase tracking-widest mb-4 w-fit">
               <Zap className="w-3 h-3" /> Oferta Relâmpago
             </div>
             <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic italic-none mb-4">Anuncie seu <br/><span className="text-primary">Equipamento</span></h3>
             <p className="text-white/60 text-xs font-medium leading-relaxed mb-6">A maior vitrine de airsoft do país. Venda rápido para quem entende do assunto.</p>
             <button className="btn-premium btn-primary w-fit px-8 py-3 text-[10px]">ANUNCIAR AGORA</button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-10 no-scrollbar">
           {["Todos", "Armas", "Acessórios", "Fardamento", "Insumos"].map((cat, i) => (
             <button key={i} className={cn(
               "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap",
               i === 0 ? "bg-primary border-primary text-black" : "bg-white/5 border-white/10 text-white/40 hover:border-white/20 hover:text-white"
             )}>
               {cat}
             </button>
           ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="tactical-card group overflow-hidden">
               <div className="h-48 relative overflow-hidden bg-neutral-900">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[8px] font-black uppercase text-primary border border-primary/20 tracking-widest">{product.category}</span>
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[8px] font-black uppercase text-white/60 border border-white/5 tracking-widest">{product.condition}</span>
                  </div>
               </div>
               <div className="p-5 border-t border-white/5">
                 <h4 className="font-bold text-sm uppercase tracking-tight mb-6 group-hover:text-primary transition-colors h-10 line-clamp-2">{product.name}</h4>
                 <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[8px] font-bold text-white/20 uppercase tracking-widest mb-1">Valor de Troca</p>
                      <p className="text-xl font-black">{product.price}</p>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-primary hover:border-primary transition-all">
                       <ShieldCheck className="w-4 h-4" />
                    </button>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
