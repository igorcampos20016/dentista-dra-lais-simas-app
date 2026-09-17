import React from 'react';
import { UserCheck, HeartHandshake, ShieldCheck, Sparkles, MapPin, Gift } from 'lucide-react';
import { DIFFERENTIALS } from '../data';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-5 h-5 text-[#9C7043]" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#9C7043]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#9C7043]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#9C7043]" />,
  MapPin: <MapPin className="w-5 h-5 text-[#9C7043]" />,
  Gift: <Gift className="w-5 h-5 text-[#9C7043]" />,
};

export const Differentials: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F5EFEB] border-y border-[#EBE1D5]">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE0D3] text-[#6A4D33] text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#9C7043]" />
            <span>Diferenciais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#221D18] tracking-tight">
            Por que confiar seu sorriso a mim?
          </h2>
          <p className="text-sm sm:text-base text-[#675E54] max-w-lg mx-auto mt-1.5">
            Uma experiência odontológica pensada para eliminar a tensão e priorizar você.
          </p>
        </div>

        {/* 6 Clean Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIFFERENTIALS.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E9DFD3] shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F4EDE5] border border-[#E5D9CC] flex items-center justify-center mb-3.5">
                  {iconMap[item.icon] || <Sparkles className="w-5 h-5 text-[#9C7043]" />}
                </div>
                <h3 className="text-base font-bold text-[#27211C] tracking-tight mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#61574C] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
