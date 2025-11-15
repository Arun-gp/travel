import { Clock, MapPin, IndianRupee } from 'lucide-react';
import { TourPackage } from '../types';

interface PackageCardProps {
  package: TourPackage;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-56 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {pkg.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-emerald-700 transition cursor-pointer">
          {pkg.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1 text-emerald-600" />
          <span className="text-sm">{pkg.destination}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <Clock size={16} className="mr-1 text-emerald-600" />
          <span className="text-sm">{pkg.duration}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>

        <div className="border-t pt-4 flex items-center justify-between">
          <div className="flex items-center">
            {typeof pkg.price === 'number' ? (
              <>
                <IndianRupee size={18} className="text-emerald-700 font-bold" />
                <span className="text-2xl font-bold text-emerald-700">{pkg.price.toLocaleString('en-IN')}</span>
                <span className="text-gray-500 text-sm ml-1">/person</span>
              </>
            ) : (
              <span className="text-lg font-semibold text-emerald-700">Price on Request</span>
            )}
          </div>

          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-full hover:from-emerald-700 hover:to-teal-700 transition transform hover:scale-105 text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
