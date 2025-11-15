export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  duration: string;
  nights: number;
  days: number;
  price: number | 'on-request';
  image: string;
  description: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  category: string;
  theme: string;
  featured: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  packageCount: number;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}
