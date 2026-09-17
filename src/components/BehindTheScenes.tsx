import React from 'react';
import { Sparkles, Camera, MapPin, Heart } from 'lucide-react';
import { EXPERT_PHOTOS, EXPERT_INFO } from '../data';

interface BehindTheScenesProps {
  onSelectPhoto: (url: string, title: string) => void;
}

export const BehindTheScenes: React.FC<BehindTheScenesProps> = ({ onSelectPhoto }) => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-[#F5EFEB] border-y border-[#EBE1D5]">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE0D3] text-[#6A4D33] text-xs font-semibold mb-2">
          <Camera className="w-3.5 h-3.5 text-[#9C7043]" />
          <span>Bastidores & Autoridade</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#221D18] tracking-tight mb-2">
          Um espaço calmo e pensado para o seu bem-estar
        </h2>

        <p className="text-sm sm:text-base text-[#675E54] max-w-lg mx-auto mb-8">
          Conheça um pouco da rotina e do atendimento dedicado da {EXPERT_INFO.name}.
        </p>

        {/* Photos Grid - Perfectly proportioned cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {EXPERT_PHOTOS.map((photo, index) => (
            <div
              key={index}
              onClick={() => onSelectPhoto(photo.url, photo.caption)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E7DCD0] shadow-sm hover:shadow-md transition-all text-left"
            >
              {/* Square / Aspect Container perfectly aligned */}
              <div className="relative aspect-4/3 sm:aspect-square w-full overflow-hidden bg-[#ECE3D8]">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-white/90 backdrop-blur-xs text-[#2A241F] shadow-xs">
                  {photo.tag}
                </div>
              </div>

              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#2A241F] group-hover:text-[#9C7043] transition-colors">
                    {photo.caption}
                  </p>
                  <p className="text-[11px] text-[#7E7469] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#B0865B]" />
                    Recreio dos Bandeirantes • RJ
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#EADFD3] flex items-center justify-center text-[#9C7043] shrink-0">
                  <Heart className="w-3.5 h-3.5 fill-[#EEDCCA] text-[#9C7043]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
