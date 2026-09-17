import React from 'react';
import { Instagram, MapPin, CheckCircle2, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { EXPERT_INFO } from '../data';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-radial from-[#F5E8D8]/70 via-[#FAF4ED]/30 to-transparent pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Top Trust Badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3E9DD] border border-[#E4D5C5] text-[#6A4D33] text-xs font-semibold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#27A364] animate-pulse" />
            <span>Consultas Abertas • Recreio dos Bandeirantes, RJ</span>
          </div>
        </div>

        {/* Main Content Layout - Mobile First Stacked & Balanced */}
        <div className="flex flex-col items-center text-center">
          
          {/* Expert Photo Container - Perfectly Framed with Natural Proportions */}
          <div className="relative mb-6 group">
            {/* Outer Decorative Ring */}
            <div className="absolute -inset-2.5 rounded-[2.5rem] bg-gradient-to-b from-[#DEC7B0] to-[#EFE4D6] opacity-70 blur-[2px] transition-all group-hover:opacity-100" />

            <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-[2.2rem] overflow-hidden border-2 border-white shadow-xl bg-[#EFE8DF]">
              <img
                src={EXPERT_INFO.heroPhoto}
                alt={`Foto oficial da ${EXPERT_INFO.name}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge at Bottom of Photo */}
              <div className="absolute bottom-2.5 inset-x-2.5 py-1.5 px-3 rounded-xl bg-white/95 backdrop-blur-md shadow-xs flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[11px] font-bold text-[#2A241F] leading-tight">{EXPERT_INFO.name}</p>
                  <p className="text-[10px] text-[#786C60] font-medium leading-none mt-0.5">{EXPERT_INFO.profession}</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-[#1E744A] bg-[#EAF7EE] px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-[#1E744A]" />
                  <span>Verificada</span>
                </div>
              </div>
            </div>

            {/* Floating Reassurance Badges */}
            <div className="absolute -bottom-3 -left-3 sm:-left-6 bg-white border border-[#E9DDCF] px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2">
              <span className="p-1 rounded-lg bg-[#F7EFE7] text-[#A0774D]">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <div className="text-left">
                <p className="text-[10px] text-[#8C8176] font-medium leading-none">Cuidado</p>
                <p className="text-xs font-bold text-[#2A241F] leading-tight">100% Personalizado</p>
              </div>
            </div>

            <div className="absolute -top-2 -right-3 sm:-right-6 bg-white border border-[#E9DDCF] px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2">
              <span className="p-1 rounded-lg bg-[#EAF7EE] text-[#1E744A]">
                <Heart className="w-3.5 h-3.5 fill-current" />
              </span>
              <div className="text-left">
                <p className="text-[10px] text-[#8C8176] font-medium leading-none">Odontologia</p>
                <p className="text-xs font-bold text-[#2A241F] leading-tight">Leve & Acolhedora</p>
              </div>
            </div>
          </div>

          {/* Headline in 1st Person */}
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#221D18] tracking-tight max-w-2xl leading-[1.2] mt-2 mb-3">
            Eu sou a <span className="font-display italic font-medium text-[#A67749]">Dra. Lais Simas</span>, dentista no Recreio dos Bandeirantes.
          </h1>

          {/* Subheadline oriented to benefit and security */}
          <p className="text-sm sm:text-base text-[#5F564C] max-w-xl font-normal leading-relaxed mb-6">
            Cuidando do seu sorriso de forma <strong className="text-[#2C2621] font-semibold">leve, humanizada e acolhedora</strong>. Beleza, saúde e naturalidade em cada detalhe — sem dor e sem julgamentos.
          </p>

          {/* Action CTA: Exclusively Instagram Direct */}
          <div className="w-full max-w-md">
            <a
              href={EXPERT_INFO.instagramDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-instagram-btn"
              className="w-full relative group overflow-hidden py-4 px-6 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] text-white font-bold text-base sm:text-lg shadow-lg shadow-[#E1306C]/30 hover:shadow-xl hover:shadow-[#E1306C]/40 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Instagram className="w-6 h-6 text-white shrink-0" />
              <span>Agendar 1ª Consulta no Instagram</span>
            </a>
          </div>

          {/* Microtext below button */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-[#7B7166] mt-3.5 font-medium">
            <span className="flex items-center gap-1 text-[#27A364]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              1ª Consulta Gratuita
            </span>
            <span>•</span>
            <span>Resposta rápida</span>
            <span>•</span>
            <span>Sem nenhum compromisso</span>
          </div>

          {/* Quick Location & Security Info */}
          <div className="mt-8 pt-6 border-t border-[#EAE0D3] w-full max-w-lg flex items-center justify-around text-xs text-[#6F6457]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#A67749]" />
              <span>Recreio dos Bandeirantes, RJ</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#A67749]" />
              <span>Atendimento Individual</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
