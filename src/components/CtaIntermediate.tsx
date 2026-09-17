import React from 'react';
import { Instagram, Sparkles, CheckCircle2 } from 'lucide-react';
import { EXPERT_INFO } from '../data';

export const CtaIntermediate: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 bg-gradient-to-b from-[#FAF8F5] to-[#F3ECE4]">
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-3xl p-6 sm:p-10 bg-white border border-[#E7DDD0] shadow-sm text-center overflow-hidden">
          
          {/* Subtle Ambient Decorative */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#F4E9DC]/60 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EBE0] text-[#6E5034] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#A67749]" />
            <span>Sem medo, sem compromisso</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-[#241E19] tracking-tight leading-snug mb-3">
            Está adiando cuidar do seu sorriso por medo ou falta de tempo?
          </h2>

          <p className="text-sm sm:text-base text-[#61574C] max-w-lg mx-auto mb-6 leading-relaxed">
            Dê o primeiro passo sem nenhum peso. Na nossa primeira consulta gratuita, você não paga nada, não faz nada que não queira e sai com todas as suas dúvidas esclarecidas.
          </p>

          {/* Action CTA: Exclusively Instagram Direct */}
          <div className="max-w-sm mx-auto">
            <a
              href={EXPERT_INFO.instagramDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="mid-cta-instagram"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5"
            >
              <Instagram className="w-5 h-5 text-white" />
              <span>Enviar Mensagem no Instagram Direct</span>
            </a>
          </div>

          <p className="mt-3.5 text-xs text-[#7B7064] flex items-center justify-center gap-1.5 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#27A364]" />
            Resposta ágil • Você conversa direto pelo Instagram da Dra. Lais
          </p>

        </div>
      </div>
    </section>
  );
};
