import React, { useState } from 'react';
import { MapPin, Hotel, Plane, Train, Car, FileText, Shield, Star, X } from 'lucide-react';
import { Service } from '../types';

const iconMap = {
  map: MapPin,
  hotel: Hotel,
  plane: Plane,
  train: Train,
  car: Car,
  passport: FileText,
  shield: Shield,
  star: Star
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Service Card */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6">
        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="bg-teal-500 rounded-lg p-3 sm:p-4 flex-shrink-0">
            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
              {service.title}
            </h3>
          </div>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
          {service.description}
        </p>
        <button
          onClick={handleLearnMore}
          className="text-teal-600 font-semibold text-xs sm:text-sm hover:text-teal-700 transition inline-flex items-center gap-1"
        >
          Learn More →
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-3 sm:p-4 z-50">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-t-xl sm:rounded-t-2xl"
              />
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              </button>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                  {service.title}
                </h2>
              </div>

              <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 sm:mb-5 lg:mb-6 leading-relaxed">
                {(service as any).fullDescription || service.description}
              </p>

              {/* Flight Booking Benefits */}
              {service.id === '3' && (
                <div className="bg-teal-50 rounded-lg p-4 sm:p-5 lg:p-6 mb-4 sm:mb-5 lg:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    Why Book Flights With Us?
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Best prices guaranteed with price match promise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Instant booking confirmation via email & SMS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>24/7 customer support for all your queries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Flexible cancellation and rescheduling options</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Hotel Booking Benefits */}
              {service.id === '2' && (
                <div className="bg-teal-50 rounded-lg p-4 sm:p-5 lg:p-6 mb-4 sm:mb-5 lg:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    Why Choose Our Hotel Booking Service?
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Wide selection from budget to luxury properties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Best price guarantee and exclusive deals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Verified guest reviews and ratings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Free cancellation on most bookings</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Car & Coach Rental Benefits */}
              {service.id === '5' && (
                <div className="bg-teal-50 rounded-lg p-4 sm:p-5 lg:p-6 mb-4 sm:mb-5 lg:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    Why Rent With Us?
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Wide range of vehicles from compact to luxury coaches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Experienced and professional drivers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Well-maintained and clean vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Flexible booking options and competitive rates</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Railway Tickets Benefits */}
              {service.id === '4' && (
                <div className="bg-teal-50 rounded-lg p-4 sm:p-5 lg:p-6 mb-4 sm:mb-5 lg:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                    Why Book Train Tickets With Us?
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Easy booking with instant confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Real-time PNR status and train schedule updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>Multiple payment options for your convenience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span>24/7 customer support for booking assistance</span>
                    </li>
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={handleClose}
                  className="w-full sm:flex-1 bg-gray-200 text-gray-800 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-300 transition font-medium text-sm sm:text-base"
                >
                  Close
                </button>
                {(service as any).bookingUrl && (
                  <a
                    href={(service as any).bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 bg-teal-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-teal-700 transition font-medium text-center text-sm sm:text-base"
                  >
                    {service.id === '2' ? 'Book Hotel' : 
                     service.id === '3' ? 'Book Flight Ticket' : 
                     service.id === '4' ? 'Book Train Ticket' :
                     service.id === '5' ? 'Book Car Rental' : 'Book Now'}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;