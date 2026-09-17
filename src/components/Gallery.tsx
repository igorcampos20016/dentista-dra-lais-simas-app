import React, { useState } from 'react';
import { Sparkles, Maximize2, Plus, Image as ImageIcon, CheckCircle, AlertCircle } from 'lucide-react';
import { GalleryItem } from '../types';
import { INITIAL_GALLERY } from '../data';

interface GalleryProps {
  onSelectImage: (item: GalleryItem, index: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  const [items, setItems] = useState<GalleryItem[]>(INITIAL_GALLERY);
  const [isAddingOpen, setIsAddingOpen] = useState(false);
  const [newUrl, setNewUrl] = useState('');
  const [newTitle, setNewTitle] = useState('');

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl.trim()) return;
    const newItem: GalleryItem = {
      id: `custom-${Date.now()}`,
      url: newUrl.trim(),
      title: newTitle.trim() || 'Transformação & Sorriso',
      category: 'Resultado Real',
    };
    setItems([newItem, ...items]);
    setNewUrl('');
    setNewTitle('');
    setIsAddingOpen(false);
  };

  return (
    <section id="resultados" className="py-12 sm:py-16 px-4 sm:px-6 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2E8DC] text-[#6A4D33] text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#A67749]" />
          <span>Resultados Reais</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#221D18] tracking-tight mb-2">
          Transformações que renovam a autoestima
        </h2>
        
        <p className="text-sm sm:text-base text-[#675E54] max-w-xl mx-auto mb-8 leading-relaxed">
          Veja alguns dos sorrisos cuidados com delicadeza e precisão. Clique em qualquer foto para ver os detalhes em tela cheia.
        </p>

        {/* Gallery Grid - Perfectly Square, Aligned, Uniform Spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item, index)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#EFE8E0] border border-[#E6DC CF] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              {/* Force exact square ratio container for perfect alignment */}
              <div className="w-full aspect-square relative overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Subtle Gradient & Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity" />

                {/* Corner Zoom Icon */}
                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-xs text-[#2A241F] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Label inside the square */}
                <div className="absolute bottom-2 inset-x-2 text-left">
                  <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white/90 backdrop-blur-xs text-[#2A241F] shadow-2xs truncate max-w-full">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action to easily add more links (as requested: "deixe a galeria pronta para eu adicionar mais links depois") */}
        <div className="mt-6 flex flex-col items-center">
          {!isAddingOpen ? (
            <button
              onClick={() => setIsAddingOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B653F] hover:text-[#674A2D] bg-[#F4EDE5] hover:bg-[#EAE0D4] px-4 py-2 rounded-xl transition-colors border border-[#DFD3C4]"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Adicionar link de nova foto à galeria</span>
            </button>
          ) : (
            <form
              onSubmit={handleAddImage}
              className="w-full max-w-md bg-white p-4 rounded-2xl border border-[#E4D7C8] shadow-sm text-left space-y-3 mt-2"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#F0E6DA]">
                <p className="text-xs font-bold text-[#2A241F] flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-[#A67749]" />
                  Adicionar foto (Link / Imgur)
                </p>
                <button
                  type="button"
                  onClick={() => setIsAddingOpen(false)}
                  className="text-xs text-[#908477] hover:text-[#332E28]"
                >
                  Fechar
                </button>
              </div>
              <div>
                <label className="block text-[11px] font-medium text-[#685D51] mb-1">
                  URL da imagem (ex: https://i.imgur.com/...)
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://..."
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#DACDC0] focus:outline-none focus:ring-2 focus:ring-[#A67749] bg-[#FAF8F5]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-[#685D51] mb-1">
                  Título / Legenda (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Alinhamento e Estética"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#DACDC0] focus:outline-none focus:ring-2 focus:ring-[#A67749] bg-[#FAF8F5]"
                />
              </div>
              <div className="flex gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#A67749] hover:bg-[#91653B] text-white text-xs font-semibold shadow-2xs"
                >
                  Salvar na Galeria
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingOpen(false)}
                  className="py-2 px-3 rounded-lg bg-[#F0E9DF] text-[#63574A] text-xs font-medium"
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Mandatory Discrete Disclaimer */}
        <p className="mt-4 text-[11px] text-[#8C8276] italic">
          *Resultados podem variar de pessoa para pessoa. Cada planejamento é individualizado conforme a anatomia e saúde bucal do paciente.
        </p>

      </div>
    </section>
  );
};
