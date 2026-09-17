import React from 'react';
import { Heart, Sparkles, Check, Smile, UserCheck, Shield } from 'lucide-react';
import { EXPERT_INFO } from '../data';

export const AboutExpert: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F5EFEB] border-y border-[#EBE1D5]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          
          {/* Photo of Expert in Warm Consultation Setting */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
              {/* Backing Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-[#E8DDD0] -rotate-2" />
              
              {/* Main Photo Card */}
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden border border-white/80 shadow-lg bg-[#FAF8F5]">
                <img
                  src={EXPERT_INFO.secondaryPhoto}
                  alt={`Dra. Lais Simas em atendimento`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#1F1C18]/80 via-[#1F1C18]/30 to-transparent text-white text-left">
                  <p className="text-xs font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#E6C29E]" />
                    {EXPERT_INFO.name}
                  </p>
                  <p className="text-[11px] text-[#D8CCC0]">Odontologia estética e acolhedora no Recreio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Authority Copy in 1st Person */}
          <div className="md:col-span-7 text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EADFD2] text-[#6A4D33] text-xs font-semibold">
              <Smile className="w-3.5 h-3.5 text-[#A67749]" />
              <span>Quem sou eu</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#221D18] tracking-tight leading-tight">
              “Não acredito em sorrisos padronizados ou consultas rápidas de 15 minutos.”
            </h2>

            <p className="text-sm sm:text-base text-[#5C5349] leading-relaxed">
              Olá! Sou a <strong className="text-[#25201B]">Dra. Lais Simas</strong>. Escolhi a odontologia para transformar a forma como as pessoas se sentem ao sorrir e, principalmente, ao entrar em um consultório.
            </p>

            <p className="text-sm sm:text-base text-[#5C5349] leading-relaxed">
              Sei que muitas pessoas carregam traumas de infância, medo de sentir dor ou vergonha de mostrar os dentes. Por isso, aqui no Recreio dos Bandeirantes, criei um ambiente calmo, sem julgamentos e 100% focado no seu conforto.
            </p>

            {/* Bullet Points with Differentials */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 p-1 rounded-full bg-[#EAF7EE] text-[#1E744A] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm text-[#3E3832]">
                  <strong className="font-semibold text-[#1F1C18]">Você fala diretamente comigo:</strong> Todo o diagnóstico, planejamento e atendimento são feitos exclusivamente por mim.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 p-1 rounded-full bg-[#EAF7EE] text-[#1E744A] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm text-[#3E3832]">
                  <strong className="font-semibold text-[#1F1C18]">Respeito à sua naturalidade:</strong> Meu foco é harmonizar e devolver sua autoestima sem criar sorrisos artificiais.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 p-1 rounded-full bg-[#EAF7EE] text-[#1E744A] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-xs sm:text-sm text-[#3E3832]">
                  <strong className="font-semibold text-[#1F1C18]">Transparência total:</strong> Explico cada etapa com fotos antes de qualquer decisão. Nada de surpresas financeiras ou procedimentos forçados.
                </p>
              </div>
            </div>

            {/* Micro Quote */}
            <div className="pt-3 border-t border-[#E3D7C9] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#DDCFC0] flex items-center justify-center text-[#A67749]">
                <Heart className="w-4 h-4 fill-current text-[#C59B6D]" />
              </div>
              <p className="text-xs italic text-[#72675C]">
                “O melhor resultado é quando o paciente volta a sorrir livremente nas fotos e na vida.”
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
