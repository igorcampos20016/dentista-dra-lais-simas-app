import React from 'react';
import { Instagram, Sparkles, CheckCircle2, Shield, Clock } from 'lucide-react';
import { EXPERT_INFO } from '../data';

export const CtaFinal: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#211D19] text-white relative overflow-hidden">
      {/* Warm Ambient Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C59B6D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#967145]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Expert Avatar Tag */}
        <div className="inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6">
          <img
            src={EXPERT_INFO.heroPhoto}
            alt={EXPERT_INFO.name}
            referrerPolicy="no-referrer"
            className="w-8 h-8 rounded-full object-cover object-top border border-white/40"
          />
          <span className="text-xs font-semibold text-[#E9D9C9]">
            {EXPERT_INFO.name} • Recreio dos Bandeirantes
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4 text-white">
          Pronta para dar o primeiro passo e sorrir com liberdade e segurança?
        </h2>

        <p className="text-sm sm:text-base text-[#D4C7BA] max-w-xl mx-auto mb-8 leading-relaxed">
          Você não precisa decidir nenhum tratamento hoje. Apenas venha tomar um café, tirar suas dúvidas e descobrir o que a odontologia leve e humanizada pode fazer por você.
        </p>

        {/* Action Button: Instagram Direct */}
        <div className="max-w-md mx-auto mb-6">
          <a
            href={EXPERT_INFO.instagramDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="final-cta-instagram-btn"
            className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] text-white font-bold text-base sm:text-lg shadow-lg shadow-[#E1306C]/30 hover:opacity-95 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            <Instagram className="w-6 h-6" />
            <span>Mandar Mensagem no Instagram Direct</span>
          </a>
        </div>

        {/* Micro Guarantees */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#B8AAA0]">
          <span className="flex items-center gap-1 text-[#4ADE80]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            1ª Consulta 100% Gratuita
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#C59B6D]" />
            Atendimento com hora marcada
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-[#C59B6D]" />
            Consultório no Recreio
          </span>
        </div>

      </div>
    </section>
  );
};
