import { MapIcon, Building, Plane, Train, Car, Shield, Star } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, any> = {
  map: MapIcon,
  hotel: Building,
  plane: Plane,
  train: Train,
  car: Car,
  shield: Shield,
  star: Star,
  passport: Building
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || MapIcon;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
            <Icon className="text-white" size={32} />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>

          <button className="mt-4 text-emerald-700 font-semibold text-sm hover:text-emerald-800 transition">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}
