import React from 'react';
import { Instagram, MapPin, Sparkles } from 'lucide-react';
import { EXPERT_INFO } from '../data';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EDE4D8] transition-all">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Expert Branding */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D5C2AF] shadow-xs">
            <img
              src={EXPERT_INFO.heroPhoto}
              alt={EXPERT_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm sm:text-base font-bold text-[#2A241F] tracking-tight leading-none">
                {EXPERT_INFO.name}
              </h1>
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#EFE4D6] text-[#7A5B3E]">
                <Sparkles className="w-2.5 h-2.5" />
                Recreio
              </span>
            </div>
            <p className="text-[11px] text-[#7A7167] font-medium mt-0.5 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#B0865B]" />
              Recreio dos Bandeirantes • RJ
            </p>
          </div>
        </div>

        {/* Quick Action CTA - Instagram only */}
        <div className="flex items-center gap-2">
          <a
            href={EXPERT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver Instagram da Dra. Lais"
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium text-[#705844] hover:bg-[#F2E8DC] transition-colors"
          >
            {EXPERT_INFO.instagramHandle}
          </a>

          {/* Instagram Direct Primary CTA */}
          <a
            href={EXPERT_INFO.instagramDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-instagram-cta"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] hover:opacity-95 shadow-xs transition-opacity"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Mandar Mensagem</span>
          </a>
        </div>
      </div>
    </header>
  );
};
