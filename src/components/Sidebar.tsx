"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Users2, Calendar, User, LogOut, Target, Menu, X, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Missões", icon: Calendar, href: "/calendario" },
  { name: "Marketplace", icon: ShoppingBag, href: "/marketplace" },
  { name: "Equipes", icon: Users2, href: "/equipes" },
  { name: "Ranking", icon: Trophy, href: "/ranking" },
  { name: "Painel do Org", icon: Target, href: "/organizador", admin: true },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(data);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

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
          {/* Logo - Agora Clicável */}
          <Link href="/" className="flex items-center gap-3 mb-10 group cursor-pointer">
            <div className="w-12 h-12 relative">
              <div className="absolute -inset-1 bg-primary/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-full h-full bg-white/5 rounded-xl flex items-center justify-center border border-white/10 overflow-hidden relative z-10">
                <img src="/logo-liga.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <div>
              <h1 className="text-sm font-black uppercase tracking-tighter leading-none italic italic-none">LA LIGA</h1>
              <p className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">AIRSOFT APP</p>
            </div>
          </Link>

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
                    : item.admin 
                      ? "text-primary/60 border border-primary/20 hover:bg-primary hover:text-black mt-10"
                      : "text-white/40 hover:text-white hover:bg-white/5"
                )}
              >
                <item.icon className={cn("w-5 h-5", pathname === item.href ? "text-black" : item.admin ? "text-primary" : "text-white/20 group-hover:text-primary")} />
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
                <p className="text-xs font-bold truncate">{profile?.username || "Operador"}</p>
                <p className="text-[10px] text-primary font-bold uppercase">Patente: {profile?.level || "Recruta"}</p>
              </div>
            </div>
            
            <button 
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2 w-full text-white/30 text-xs hover:text-red-500 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Encerrar Sessão
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
