import { Sidebar } from "@/components/Sidebar";
import { Search, Filter, ShoppingBag, ArrowUpRight, DollarSign, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

const products = [
  { name: "Rifle M4 Custom GBB", price: "R$ 3.500", category: "Armas GBB", image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?q=80&w=2070&auto=format&fit=crop" },
  { name: "Colete Tático Plate Carrier", price: "R$ 850", category: "Equipamento", image: "https://images.unsplash.com/photo-1611634568853-b090b8f04134?q=80&w=2070&auto=format&fit=crop" },
  { name: "BBs 0.25g Precision (1kg)", price: "R$ 120", category: "Insumos", image: "https://images.unsplash.com/photo-1595152230461-8516e83f2fc6?q=80&w=2070&auto=format&fit=crop" },
  { name: "Rádio Baofeng UV-5R", price: "R$ 290", category: "Eletrônicos", image: "https://images.unsplash.com/photo-1558537348-c0f8e733989d?q=80&w=2070&auto=format&fit=crop" },
];

export default function Marketplace() {
  return (
    <div className="flex min-h-screen bg-background military-grid">
      <Sidebar />
      
      <main className="flex-1 md:ml-64 p-4 md:p-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter gradient-text">Marketplace <span className="text-primary italic-none">Tático</span></h2>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Negocie equipamentos de elite // Alpha Market</p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="btn-premium bg-white/5 border border-white/10 text-white/60 hover:text-white">
              <Filter className="w-4 h-4" /> Filtros
            </button>
            <button className="btn-premium btn-primary flex-1 md:flex-none">
              <DollarSign className="w-4 h-4" /> Vender Item
            </button>
          </div>
        </header>

        {/* Featured Banner */}
        <div className="tactical-card relative h-48 md:h-64 mb-12 group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-neutral-900 group-hover:scale-105 transition-transform duration-700 opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center p-10">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">Oferta da Semana</span>
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic italic-none leading-none">EQUIPAMENTO DE <br/> ELITE PARA SUA MISSÃO</h3>
            <p className="text-white/40 text-sm max-w-md hidden md:block">Garanta os melhores upgrades para seu loadout com descontos exclusivos para membros da liga.</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="tactical-card group">
              <div className="h-48 bg-neutral-900 relative overflow-hidden">
                 <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                 <div className="absolute top-3 left-3 z-20">
                   <span className="bg-background/80 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase px-2 py-1 rounded text-primary">{product.category}</span>
                 </div>
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">{product.name}</h4>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-lg font-black text-white">{product.price}</div>
                  <button className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                    <ArrowUpRight className="w-5 h-5" />
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
