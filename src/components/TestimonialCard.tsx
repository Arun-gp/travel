import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
          ))}
        </div>
        <Quote className="text-emerald-200" size={32} />
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed italic">
        "{testimonial.comment}"
      </p>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-gray-800">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
          <div className="text-xs text-gray-400">
            {new Date(testimonial.date).toLocaleDateString('en-IN', {
              month: 'short',
              year: 'numeric'
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
