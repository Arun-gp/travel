import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg">
      <div className="h-72 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
        <p className="text-sm text-gray-200 mb-2">{destination.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full backdrop-blur-sm">
            {destination.packageCount} Packages
          </span>
          <button className="text-sm font-semibold hover:text-emerald-300 transition">
            Explore →
          </button>
        </div>
      </div>
    </div>
  );
}
