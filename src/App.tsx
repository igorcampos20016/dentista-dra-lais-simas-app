import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutExpert } from './components/AboutExpert';
import { Gallery } from './components/Gallery';
import { Differentials } from './components/Differentials';
import { CtaIntermediate } from './components/CtaIntermediate';
import { HowItWorks } from './components/HowItWorks';
import { BehindTheScenes } from './components/BehindTheScenes';
import { CtaFinal } from './components/CtaFinal';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { FloatingContact } from './components/FloatingContact';
import { INITIAL_GALLERY, EXPERT_PHOTOS } from './data';
import { GalleryItem } from './types';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    category?: string;
    description?: string;
    index?: number;
  } | null>(null);

  // Combine gallery for navigation inside lightbox
  const allImages = INITIAL_GALLERY;

  const handleOpenGalleryImage = (item: GalleryItem, index: number) => {
    setSelectedImage({
      url: item.url,
      title: item.title,
      category: item.category,
      description: item.description,
      index,
    });
  };

  const handleOpenPhoto = (url: string, title: string) => {
    setSelectedImage({
      url,
      title,
      category: 'Bastidores & Consultório',
    });
  };

  const handleNext = () => {
    if (!selectedImage || selectedImage.index === undefined) return;
    const nextIdx = (selectedImage.index + 1) % allImages.length;
    const nextItem = allImages[nextIdx];
    setSelectedImage({
      url: nextItem.url,
      title: nextItem.title,
      category: nextItem.category,
      description: nextItem.description,
      index: nextIdx,
    });
  };

  const handlePrev = () => {
    if (!selectedImage || selectedImage.index === undefined) return;
    const prevIdx = (selectedImage.index - 1 + allImages.length) % allImages.length;
    const prevItem = allImages[prevIdx];
    setSelectedImage({
      url: prevItem.url,
      title: prevItem.title,
      category: prevItem.category,
      description: prevItem.description,
      index: prevIdx,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2926] font-sans antialiased">
      {/* Top Floating/Sticky Navigation */}
      <Navbar onOpenBooking={() => {}} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero />

        {/* 2. QUEM SOU EU */}
        <AboutExpert />

        {/* 3. RESULTADOS REAIS (Galeria em quadrados perfeitos e alinhados) */}
        <Gallery onSelectImage={handleOpenGalleryImage} />

        {/* 4. POR QUE CONFIAR EM MIM? */}
        <Differentials />

        {/* 5. CTA INTERMEDIÁRIO */}
        <CtaIntermediate />

        {/* 6. COMO FUNCIONA A PRIMEIRA CONSULTA */}
        <HowItWorks />

        {/* 7. MAIS PROVAS (Expert & Bastidores) */}
        <BehindTheScenes onSelectPhoto={handleOpenPhoto} />

        {/* 8. CTA FINAL */}
        <CtaFinal />
      </main>

      {/* 9. RODAPÉ SIMPLES */}
      <Footer />

      {/* Floating Instagram direct trigger */}
      <FloatingContact />

      {/* Lightbox Modal */}
      {selectedImage && (
        <LightboxModal
          isOpen={!!selectedImage}
          imageUrl={selectedImage.url}
          title={selectedImage.title}
          category={selectedImage.category}
          description={selectedImage.description}
          onClose={() => setSelectedImage(null)}
          onNext={selectedImage.index !== undefined ? handleNext : undefined}
          onPrev={selectedImage.index !== undefined ? handlePrev : undefined}
          hasNext={selectedImage.index !== undefined}
          hasPrev={selectedImage.index !== undefined}
        />
      )}
    </div>
  );
}
