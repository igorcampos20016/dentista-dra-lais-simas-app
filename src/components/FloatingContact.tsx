import React, { useState } from 'react';
import { Instagram, X } from 'lucide-react';
import { EXPERT_INFO } from '../data';

export const FloatingContact: React.FC = () => {
  const [isPromptOpen, setIsPromptOpen] = useState(true);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
      
      {/* Interactive Speech Balloon / Micro Lead Card */}
      {isPromptOpen && (
        <div className="relative max-w-xs bg-white rounded-2xl p-3.5 shadow-xl border border-[#E9DFD3] text-left animate-in slide-in-from-bottom-3 duration-300">
          <button
            onClick={() => setIsPromptOpen(false)}
            className="absolute top-2 right-2 text-[#9E9285] hover:text-[#2A241F] p-1"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[#D5C2AF]">
              <img
                src={EXPERT_INFO.heroPhoto}
                alt={EXPERT_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#E1306C] ring-1 ring-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#2A241F] leading-tight">{EXPERT_INFO.name}</p>
              <p className="text-[10px] text-[#E1306C] font-semibold leading-tight">Instagram Direct • Online</p>
            </div>
          </div>

          <p className="text-xs text-[#524940] leading-snug mb-3">
            Olá! Envie uma mensagem no <strong>Instagram Direct</strong> para agendarmos sua 1ª consulta gratuita no Recreio.
          </p>

          {/* Instagram Direct Link */}
          <a
            href={EXPERT_INFO.instagramDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="floating-balloon-instagram-btn"
            className="w-full py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            <span>Conversar no Instagram</span>
          </a>
        </div>
      )}

      {/* Floating Instagram Direct Button */}
      <a
        href={EXPERT_INFO.instagramDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Enviar mensagem no Instagram Direct"
        id="floating-main-instagram-cta"
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
      >
        <span className="absolute -inset-1 rounded-full bg-[#E1306C]/40 animate-ping pointer-events-none" />
        <Instagram className="w-6 h-6 text-white relative z-10" />
        <span className="text-xs font-bold tracking-wide relative z-10 pr-1">Mandar Mensagem</span>
      </a>
    </div>
  );
};
