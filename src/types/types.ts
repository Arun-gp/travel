// Service type
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  fullDescription?: string;
  bookingUrl?: string;
}

// Destination type
export interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  packages: number;
}

// Testimonial type
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}