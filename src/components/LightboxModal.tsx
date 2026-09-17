import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { EXPERT_INFO } from '../data';

interface LightboxModalProps {
  isOpen: boolean;
  imageUrl: string;
  title: string;
  category?: string;
  description?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  imageUrl,
  title,
  category,
  description,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors shadow-lg"
        aria-label="Fechar visualizador"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev / Next buttons */}
      {hasPrev && onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors shadow-lg"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors shadow-lg"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Container */}
      <div
        className="relative max-w-2xl w-full max-h-[92vh] flex flex-col items-center bg-[#1A1816] rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image wrapper */}
        <div className="w-full flex-1 flex items-center justify-center bg-black/40 overflow-hidden relative min-h-[300px] max-h-[70vh]">
          <img
            src={imageUrl}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Footer info & quick CTAs */}
        <div className="w-full p-4 sm:p-5 bg-[#201D1A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            {category && (
              <span className="text-[11px] font-semibold text-[#C59B6D] uppercase tracking-wider block">
                {category}
              </span>
            )}
            <h3 className="text-base font-bold text-white leading-snug">{title}</h3>
            {description && (
              <p className="text-xs text-[#AAA095] mt-0.5">{description}</p>
            )}
          </div>

          <div className="w-full sm:w-auto">
            <a
              href={EXPERT_INFO.instagramDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FD1D1D] text-white text-xs font-bold shadow-xs hover:opacity-95 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              <span>Agendar no Instagram Direct</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
