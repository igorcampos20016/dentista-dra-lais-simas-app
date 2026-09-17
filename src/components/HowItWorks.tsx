import React from 'react';
import { Calendar, MessageSquare, Stethoscope, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data';

const stepIcons = [
  <MessageSquare className="w-5 h-5 text-[#9C7043]" key="1" />,
  <Calendar className="w-5 h-5 text-[#9C7043]" key="2" />,
  <Stethoscope className="w-5 h-5 text-[#9C7043]" key="3" />,
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2E8DC] text-[#6A4D33] text-xs font-semibold mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#9C7043]" />
            <span>Passo a Passo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#221D18] tracking-tight">
            Como funciona sua primeira consulta
          </h2>
          <p className="text-sm sm:text-base text-[#675E54] max-w-md mx-auto mt-1.5">
            Três passos simples para iniciar o cuidado do seu sorriso com total tranquilidade.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-white border border-[#E9DFD3] shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header with Step Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-[#F5EFEB] border border-[#E4D7C8] flex items-center justify-center font-extrabold text-sm text-[#875E33]">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#F7EFE6] flex items-center justify-center">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#241E19] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#61574C] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Step highlight pill */}
              <div className="pt-3 border-t border-[#F2E8DC]">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#8B643A] bg-[#F7EFE6] px-2.5 py-1 rounded-lg">
                  <CheckCircle2 className="w-3 h-3 text-[#27A364]" />
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-[#EAF7EE]/60 border border-[#BDE5C8] text-center max-w-xl mx-auto">
          <p className="text-xs sm:text-sm text-[#14532D] font-semibold flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#1E744A] shrink-0" />
            Lembre-se: sua primeira avaliação é 100% gratuita, acolhedora e sem nenhuma obrigação.
          </p>
        </div>

      </div>
    </section>
  );
};
