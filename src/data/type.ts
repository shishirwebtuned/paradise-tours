export interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  type?: "image" | "video";
  rowSpan?: number;
  colSpan?: number;
}

export interface Offer {
  id: number;
  image: string;
  headline: string;
  description: string;
  price: string;
  discount: string;
  savings?: string;
  validity: string;
}

export interface Attraction {
  id: number;
  name: string;
  category: string;
  description: string;
  distance: string;
  image: string;
  address: string;
  hours: string;
  directionsUrl: string;
}
