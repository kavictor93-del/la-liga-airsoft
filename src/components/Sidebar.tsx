"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Users2, Calendar, User, LogOut, Target, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Missões", icon: Calendar, href: "/calendario" },
  { name: "Marketplace", icon: ShoppingBag, href: "/marketplace" },
  { name: "Equipes", icon: Users2, href: "/equipes" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-[100] md:hidden p-2 bg-secondary rounded-lg border border-white/10"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-white/5 transition-transform duration-300 md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
              <Target className="text-primary w-6 h-6" />
            </div>
            <div>
              <h1 className="text-sm font-black uppercase tracking-tighter leading-none">LA LIGA</h1>
              <p className="text-[10px] font-bold text-primary tracking-widest uppercase">AIRSOFT</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-4 px-3">Protocolo Principal</p>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all group",
                  pathname === item.href 
                    ? "bg-primary text-black shadow-[0_0_15px_rgba(255,107,0,0.2)]" 
                    : "text-white/40 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn("w-5 h-5", pathname === item.href ? "text-black" : "text-white/20 group-hover:text-primary")} />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Profile Footer */}
          <div className="mt-auto pt-6 border-t border-white/5">
            <div className="flex items-center gap-3 p-2 bg-white/5 rounded-2xl mb-4">
              <div className="w-10 h-10 rounded-full bg-neutral-800 border-2 border-primary/50 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-tr from-primary to-orange-300" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate">Ghost_Operator</p>
                <p className="text-[10px] text-primary font-bold uppercase">Patente: Sargento</p>
              </div>
            </div>
            
            <button className="flex items-center gap-3 px-3 py-2 w-full text-white/30 text-xs hover:text-red-500 transition-colors">
              <LogOut className="w-4 h-4" />
              Encerrar Sessão
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
