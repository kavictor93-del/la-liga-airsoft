"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Target, Shield, Zap, ArrowRight, UserPlus, LogIn, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simula processamento
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-primary selection:text-black flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-orange-900/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 military-grid opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
              <Target className="text-primary w-8 h-8" />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-black uppercase tracking-tighter leading-none italic">LA LIGA</h1>
              <p className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">Área do Operador</p>
            </div>
          </div>
          
          <h2 className="text-4xl font-black uppercase tracking-tighter italic">
            {isRegistering ? "Alistar-se na" : "Acesso à"} <span className="text-primary">Elite</span>
          </h2>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-2">
            {isRegistering ? "Crie sua ficha de combate agora" : "Identifique-se para prosseguir"}
          </p>
        </div>

        <div className="tactical-card p-8 bg-black/40 backdrop-blur-xl border-white/5 shadow-2xl relative">
          {success ? (
            <div className="py-10 text-center space-y-4 animate-in zoom-in duration-500">
               <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50 mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
               </div>
               <h3 className="text-2xl font-black uppercase tracking-tight italic">Acesso Autorizado</h3>
               <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Redirecionando para o QG...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {isRegistering && (
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-1">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="NOME DE BATISMO" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold uppercase tracking-widest focus:border-primary/50 outline-none transition-all"
                    />
                  </div>
                )}
                
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-1">Callsign (Apelido)</label>
                  <input 
                    required
                    type="text" 
                    placeholder="EX: GHOST_OPERATOR" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-xs font-bold uppercase tracking-widest focus:border-primary/50 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-white/40 tracking-widest ml-1">Código de Acesso</label>
                  <input 
                    required
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-xs focus:border-primary/50 outline-none transition-all"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-black h-14 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {loading ? (
                  <span className="animate-pulse">PROCESSANDO...</span>
                ) : (
                  <>
                    {isRegistering ? "FINALIZAR ALISTAMENTO" : "INICIAR SESSÃO"}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="pt-4 text-center">
                <button 
                  type="button"
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="text-[10px] font-black text-white/20 hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {isRegistering ? "Já sou cadastrado na liga" : "Sou novo, quero me alistar"}
                </button>
              </div>
            </form>
          )}

          {/* Tactical Decor */}
          <div className="absolute -top-px -left-px w-6 h-6 border-t border-l border-primary/40 rounded-tl-xl" />
          <div className="absolute -bottom-px -right-px w-6 h-6 border-b border-r border-primary/40 rounded-br-xl" />
        </div>

        <p className="text-[9px] text-white/10 text-center mt-10 font-black uppercase tracking-[0.4em]">
          SISTEMA DE SEGURANÇA ALPHA v2.4 // PROTOCOLO DE ENCRIPTAÇÃO ATIVO
        </p>
      </div>
    </div>
  );
}
