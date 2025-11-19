import { useState } from 'react';
import { Clock, MapPin, IndianRupee, X, Utensils, CheckCircle, Phone, Mail, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

// Define TypeScript interfaces
interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

interface TourPackage {
  id: number;
  title: string;
  destination: string;
  duration: string;
  price: number | null;
  image: string;
  featured: boolean;
  description: string;
  activities: string[];
  themes: string[];
  mealPlan: string;
  inclusions: string[];
  itinerary: ItineraryDay[];
}

interface PackageDetailsModalProps {
  pkg: TourPackage;
  onClose: () => void;
  onEnquiry: () => void;
}

interface TourPackagesWebsiteProps {
  onPackageSelect?: (pkg: TourPackage) => void;
}

const TourPackagesWebsite = ({ onPackageSelect }: TourPackagesWebsiteProps) => {
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [showAllPackages, setShowAllPackages] = useState(false);

  const packages: TourPackage[] = [
    {
      id: 1,
      title: "LAKSHADWEEP SAMUDRAM PACKAGES",
      destination: "Kavaratti, Kalpeni, Minicoy",
      duration: "4 Nights / 5 Days",
      price: null,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
      featured: true,
      description: "Experience the pristine beauty of Lakshadweep islands with crystal clear waters and coral reefs.",
      activities: ["Boat Cruise", "Beaches Sightseeing"],
      themes: ["Ship & Cruise", "Beaches and Islands"],
      mealPlan: "CP (Room + Breakfast)",
      inclusions: ["Hotel Accommodation", "Daily Breakfast", "Airport Transfers", "Sightseeing Tours"],
      itinerary: [
        { day: 1, title: "Arrival at Kavaratti", description: "Arrive and check-in to your hotel. Evening beach walk." },
        { day: 2, title: "Kalpeni Island Tour", description: "Full day exploration of Kalpeni with water sports." },
        { day: 3, title: "Minicoy Island", description: "Visit Minicoy lighthouse and enjoy local cuisine." },
        { day: 4, title: "Beach Activities", description: "Snorkeling, scuba diving, and relaxation." },
        { day: 5, title: "Departure", description: "Check-out and depart with wonderful memories." }
      ]
    },
    {
      id: 2,
      title: "Mumbai-Ujjain-Omkereswara Temple Tour",
      destination: "Indore, Ujjain, Omkareshwara",
      duration: "3 Nights / 4 Days",
      price: null,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      featured: false,
      description: "Spiritual journey through ancient temples and sacred sites of Madhya Pradesh.",
      activities: ["Sightseeing"],
      themes: ["Religious & Pilgrimage", "Monuments & Historical Places"],
      mealPlan: "MAP (Room + Breakfast + Lunch/Dinner)",
      inclusions: ["Hotel Accommodation", "All Meals", "Temple Visits", "Local Guide"],
      itinerary: [
        { day: 1, title: "Mumbai to Indore", description: "Travel to Indore and visit Rajwada Palace." },
        { day: 2, title: "Ujjain Temples", description: "Visit Mahakaleshwar and other sacred temples." },
        { day: 3, title: "Omkareshwar Temple", description: "Full day at one of the 12 Jyotirlinga temples." },
        { day: 4, title: "Return to Mumbai", description: "Departure with blessings." }
      ]
    },
    {
      id: 3,
      title: "Golden Triangle Tour",
      destination: "Delhi, Jaipur, Agra",
      duration: "7 Nights / 8 Days",
      price: 28500,
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
      featured: true,
      description: "Explore India's iconic Golden Triangle covering majestic monuments and rich heritage.",
      activities: ["Forts and Palaces", "Museums", "Sightseeing"],
      themes: ["Culture & Heritage", "Golden Triangle", "Monuments & Historical Places"],
      mealPlan: "CP (Room + Breakfast)",
      inclusions: ["4-Star Hotels", "Daily Breakfast", "All Transfers", "Monument Entries", "English Speaking Guide"],
      itinerary: [
        { day: 1, title: "Arrival in Delhi", description: "Visit India Gate, Qutub Minar, and Lotus Temple." },
        { day: 2, title: "Delhi Sightseeing", description: "Red Fort, Jama Masjid, Chandni Chowk exploration." },
        { day: 3, title: "Delhi to Jaipur", description: "Drive to Jaipur, evening at leisure." },
        { day: 4, title: "Jaipur Palaces", description: "Amber Fort, City Palace, Hawa Mahal visits." },
        { day: 5, title: "Jaipur to Agra", description: "Stop at Fatehpur Sikri en route." },
        { day: 6, title: "Taj Mahal Experience", description: "Sunrise at Taj Mahal, Agra Fort visit." },
        { day: 7, title: "Agra to Delhi", description: "Return to Delhi with shopping time." },
        { day: 8, title: "Departure", description: "Drop at airport for onward journey." }
      ]
    },
    {
      id: 4,
      title: "Kerala Backwaters Experience",
      destination: "Kochi, Munnar, Alleppey",
      duration: "5 Nights / 6 Days",
      price: 22000,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
      featured: false,
      description: "Discover Kerala's serene backwaters, lush tea gardens, and tropical beauty.",
      activities: ["House Boat", "Beaches Sightseeing", "Sightseeing"],
      themes: ["Hill Stations & Valleys", "Beaches and Islands"],
      mealPlan: "MAP (Room + Breakfast + Lunch/Dinner)",
      inclusions: ["Houseboat Stay", "All Meals", "Hill Station Tours", "Kathakali Show"],
      itinerary: [
        { day: 1, title: "Arrive Kochi", description: "Fort Kochi walk, Chinese fishing nets." },
        { day: 2, title: "Kochi to Munnar", description: "Tea plantation visit, mountain views." },
        { day: 3, title: "Munnar Sightseeing", description: "Eravikulam National Park, Echo Point." },
        { day: 4, title: "Munnar to Alleppey", description: "Check-in to luxury houseboat." },
        { day: 5, title: "Backwater Cruise", description: "Full day cruising through backwaters." },
        { day: 6, title: "Departure", description: "Transfer to airport." }
      ]
    },
    {
      id: 5,
      title: "Himachal Hill Station Tour",
      destination: "Shimla, Manali, Dharamshala",
      duration: "6 Nights / 7 Days",
      price: 19500,
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      featured: false,
      description: "Experience the majestic Himalayas with snow-capped peaks and colonial charm.",
      activities: ["Trekking", "Adventure", "Sightseeing"],
      themes: ["Adventure Tours", "Hill Stations & Valleys"],
      mealPlan: "CP (Room + Breakfast)",
      inclusions: ["Hotel Stay", "Breakfast", "Volvo Transfers", "Adventure Activities"],
      itinerary: [
        { day: 1, title: "Arrival Shimla", description: "Mall Road, Ridge exploration." },
        { day: 2, title: "Shimla Local", description: "Kufri, Jakhu Temple visits." },
        { day: 3, title: "Shimla to Manali", description: "Scenic drive through mountains." },
        { day: 4, title: "Manali Sightseeing", description: "Hadimba Temple, Vashisht hot springs." },
        { day: 5, title: "Solang Valley", description: "Adventure activities and cable car." },
        { day: 6, title: "Manali to Dharamshala", description: "Dalai Lama Temple visit." },
        { day: 7, title: "Departure", description: "Drop at Dharamshala airport." }
      ]
    },
    {
      id: 6,
      title: "Rajasthan Heritage Tour",
      destination: "Jaipur, Udaipur, Jodhpur",
      duration: "8 Nights / 9 Days",
      price: 35000,
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800",
      featured: true,
      description: "Royal Rajasthan with magnificent forts, palaces, and desert landscapes.",
      activities: ["Forts and Palaces", "Desert Safari", "Cultural Shows"],
      themes: ["Culture & Heritage", "Monuments & Historical Places"],
      mealPlan: "MAP (Room + Breakfast + Lunch/Dinner)",
      inclusions: ["Heritage Hotels", "All Meals", "Camel Safari", "Cultural Performances"],
      itinerary: [
        { day: 1, title: "Arrive Jaipur", description: "City Palace, Jantar Mantar." },
        { day: 2, title: "Jaipur Forts", description: "Amber Fort, Jaigarh Fort." },
        { day: 3, title: "Jaipur to Pushkar", description: "Sacred lake and temples." },
        { day: 4, title: "Pushkar to Jodhpur", description: "Mehrangarh Fort exploration." },
        { day: 5, title: "Jodhpur Sightseeing", description: "Umaid Bhawan, blue city walk." },
        { day: 6, title: "Jodhpur to Udaipur", description: "Ranakpur Jain Temple en route." },
        { day: 7, title: "Udaipur City of Lakes", description: "City Palace, Lake Pichola boat ride." },
        { day: 8, title: "Udaipur Leisure", description: "Saheliyon ki Bari, shopping." },
        { day: 9, title: "Departure", description: "Transfer to airport." }
      ]
    }
  ];

  // Show only 3 packages initially, then all when "View All" is clicked
  const displayedPackages = showAllPackages ? packages : packages.slice(0, 3);

  const EnquiryForm = () => {
    const handleSubmit = () => {
      alert('Thank you for your enquiry! We will contact you soon.');
      setShowEnquiryForm(false);
    };

    return (
      <div className="bg-white rounded-lg p-6" id="package">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Send Enquiry</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Enter your phone" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
            <input type="number" min="1" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Number of people" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Your Requirements</label>
            <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Tell us about your requirements..."></textarea>
          </div>
          <button onClick={handleSubmit} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition">
            Send Enquiry
          </button>
        </div>
      </div>
    );
  };

  const PackageDetailsModal = ({ pkg, onClose, onEnquiry }: PackageDetailsModalProps) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header Image */}
        <div className="relative h-80">
          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
          >
            <X size={24} />
          </button>
          {pkg.featured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-semibold">
              Featured Package
            </div>
          )}
        </div>

        <div className="p-8">
          {/* Title and Basic Info */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{pkg.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center text-gray-700">
              <MapPin className="text-emerald-600 mr-2" size={20} />
              <div>
                <p className="text-xs text-gray-500">Destination</p>
                <p className="font-semibold">{pkg.destination}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
              <Clock className="text-emerald-600 mr-2" size={20} />
              <div>
                <p className="text-xs text-gray-500">Duration</p>
                <p className="font-semibold">{pkg.duration}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-700">
              <Utensils className="text-emerald-600 mr-2" size={20} />
              <div>
                <p className="text-xs text-gray-500">Meal Plan</p>
                <p className="font-semibold">{pkg.mealPlan}</p>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Package Price</p>
                {typeof pkg.price === 'number' ? (
                  <div className="flex items-center">
                    <IndianRupee size={28} className="text-emerald-700" />
                    <span className="text-4xl font-bold text-emerald-700">{pkg.price.toLocaleString('en-IN')}</span>
                    <span className="text-gray-600 ml-2">per person</span>
                  </div>
                ) : (
                  <p className="text-2xl font-bold text-emerald-700">Price on Request</p>
                )}
              </div>
              <button 
                onClick={onEnquiry}
                className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition shadow-lg"
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">Overview</h3>
                <p className="text-gray-700 leading-relaxed">{pkg.description}</p>
              </section>

              {/* Activities & Themes */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">Tour Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Activities:</p>
                    <div className="space-y-2">
                      {pkg.activities.map((activity: string, idx: number) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-600">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Themes:</p>
                    <div className="space-y-2">
                      {pkg.themes.map((theme: string, idx: number) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-gray-600">{theme}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Inclusions */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">Package Inclusions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {pkg.inclusions.map((inclusion: string, idx: number) => (
                    <div key={idx} className="flex items-start bg-emerald-50 rounded-lg p-3">
                      <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Itinerary */}
              <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">Day-wise Itinerary</h3>
                <div className="space-y-4">
                  {pkg.itinerary.map((day: ItineraryDay, idx: number) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex items-start">
                        <div className="bg-emerald-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                          {day.day}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{day.title}</h4>
                          <p className="text-gray-600 text-sm">{day.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {showEnquiryForm ? (
                <EnquiryForm />
              ) : (
                <>
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                    <div className="space-y-3">
                      <a href="tel:+919894185969" className="flex items-center hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition">
                        <Phone size={20} className="mr-3" />
                        <span>+91 98941 85969</span>
                      </a>
                      <a href="mailto:travelmateglobe@gmail.com" className="flex items-center hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition">
                        <Mail size={20} className="mr-3" />
                        <span className="text-sm">travelmateglobe@gmail.com</span>
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=919894185969" className="flex items-center hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition">
                        <MessageCircle size={20} className="mr-3" />
                        <span>WhatsApp Us</span>
                      </a>
                    </div>
                  </div>

                  <button 
                    onClick={onEnquiry}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-4 rounded-xl font-bold hover:from-amber-600 hover:to-orange-600 transition shadow-lg mb-6"
                  >
                    Get Custom Quote
                  </button>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Why Book With Us?</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Best Price Guarantee</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>24/7 Customer Support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Customizable Packages</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Experienced Tour Guides</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-emerald-600 mr-2 flex-shrink-0 mt-0.5" size={16} />
                        <span>Secure Payment Options</span>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const handlePackageSelect = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    if (onPackageSelect) {
      onPackageSelect(pkg);
    }
  };

  const handleCloseModal = () => {
    setSelectedPackage(null);
    setShowEnquiryForm(false);
  };

  const handleEnquiry = () => {
    setShowEnquiryForm(true);
  };

  const toggleViewAll = () => {
    setShowAllPackages(!showAllPackages);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Tour Packages</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover amazing destinations with our carefully curated tour packages. 
            From serene beaches to majestic mountains, we have it all!
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedPackages.map((pkg: TourPackage) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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

                  <button 
                    onClick={() => handlePackageSelect(pkg)}
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2 rounded-full hover:from-emerald-700 hover:to-teal-700 transition transform hover:scale-105 text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {packages.length > 3 && (
          <div className="text-center">
            <button
              onClick={toggleViewAll}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-700 hover:to-teal-700 transition transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto gap-2"
            >
              {showAllPackages ? (
                <>
                  <ChevronUp size={20} />
                  Show Less Packages
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  View All Packages ({packages.length})
                </>
              )}
            </button>
          </div>
        )}
      </main>

      {/* Package Details Modal */}
      {selectedPackage && (
        <PackageDetailsModal 
          pkg={selectedPackage} 
          onClose={handleCloseModal}
          onEnquiry={handleEnquiry}
        />
      )}
    </div>
  );
};

export default TourPackagesWebsite;