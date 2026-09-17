import React from 'react';
import { Instagram, MapPin, Heart } from 'lucide-react';
import { EXPERT_INFO } from '../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 bg-[#181614] text-[#8F8275] border-t border-white/10 text-xs">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Expert Info */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-bold text-[#EFE7DF]">
            {EXPERT_INFO.name} • {EXPERT_INFO.profession}
          </p>
          <p className="flex items-center justify-center md:justify-start gap-1 text-[#A89B8E]">
            <MapPin className="w-3.5 h-3.5 text-[#C59B6D]" />
            {EXPERT_INFO.city}
          </p>
          <p className="text-[11px] text-[#7A6F63]">
            {EXPERT_INFO.cro} • Beleza, saúde e naturalidade em cada detalhe
          </p>
        </div>

        {/* Instagram Links */}
        <div className="flex items-center gap-3">
          <a
            href={EXPERT_INFO.instagramDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] text-white font-semibold hover:opacity-95 transition-opacity"
          >
            <Instagram className="w-4 h-4 text-white" />
            <span>Mandar Mensagem</span>
          </a>

          <a
            href={EXPERT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#D8CDC2] hover:text-white border border-white/10 transition-colors"
          >
            <span>Perfil {EXPERT_INFO.instagramHandle}</span>
          </a>
        </div>

      </div>

      <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#6B6156]">
        <p>© {currentYear} {EXPERT_INFO.name}. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1">
          Feito com <Heart className="w-3 h-3 text-[#C59B6D] fill-current" /> para cuidar do seu sorriso.
        </p>
      </div>
    </footer>
  );
};
