export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category?: string;
  description?: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ExpertPhoto {
  url: string;
  caption: string;
  tag: string;
}
