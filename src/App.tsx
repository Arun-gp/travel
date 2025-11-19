import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DestinationCard from './components/DestinationCard';
import ServiceCard from './components/ServiceCard';
import TestimonialCard from './components/TestimonialCard';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TourPackagesWebsite from './components/TourPackagesWebsite';
import { destinations } from './data/destinations';
import { services } from './data/services';
import { testimonials } from './data/testimonials';
import { Award, Users, Globe, ThumbsUp, MapPin, Phone, Mail } from 'lucide-react';

// Define TourPackage interface to match the one in TourPackagesWebsite
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
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

function App() {
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);

  const handlePackageSelect = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    // You can add additional logic here when a package is selected
    console.log('Package selected:', pkg);
    
    // Example: Scroll to contact section when package is selected
    // const contactSection = document.getElementById('contact');
    // if (contactSection) {
    //   contactSection.scrollIntoView({ behavior: 'smooth' });
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      {/* TourPackagesWebsite Section */}
      <section id="packages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-emerald-700">Tour Packages</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover amazing destinations with our carefully curated tour packages
            </p>
          </div>
          <TourPackagesWebsite onPackageSelect={handlePackageSelect} />
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Popular <span className="text-emerald-700">Destinations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most sought-after destinations in India, each offering unique experiences and memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Award size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div>
              <Users size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-sm">Happy Travelers</div>
            </div>
            <div>
              <Globe size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-sm">Tour Packages</div>
            </div>
            <div>
              <ThumbsUp size={48} className="mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-emerald-700">Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive travel solutions to make your journey hassle-free and memorable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Our <span className="text-emerald-700">Travelers Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read testimonials from our satisfied customers who have experienced unforgettable journeys with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos-3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Us"
                className="rounded-2xl shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About <span className="text-emerald-700">TravelIndia</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                With over 15 years of experience in the travel industry, TravelIndia has been crafting unforgettable journeys across the diverse landscapes of India. We are passionate about showcasing the rich cultural heritage, natural beauty, and warm hospitality that India offers.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team of travel experts carefully designs each package to ensure you get the most authentic and enriching experience. From the snow-capped Himalayas to the tropical beaches of Kerala, from the royal heritage of Rajasthan to the spiritual ghats of Varanasi - we cover it all.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We believe in responsible tourism and work closely with local communities to promote sustainable travel practices. Your journey with us not only creates memories but also contributes to the preservation of India's cultural and natural heritage.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Award className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Certified</div>
                    <div className="text-sm text-gray-600">Tour Operator</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <ThumbsUp className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">Best Rated</div>
                    <div className="text-sm text-gray-600">Travel Agency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Plan Your <span className="text-emerald-700">Dream Vacation</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch with us to customize your perfect tour package. Our travel experts are ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us an Inquiry</h3>
              <ContactForm selectedPackage={selectedPackage} />
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Visit Us</h4>
                    <p className="text-gray-600 text-sm">
                      123 Travel Street, Mumbai<br />
                      Maharashtra, India - 400001
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Call Us</h4>
                    <p className="text-gray-600 text-sm">
                      +91 123 456 7890<br />
                      Mon-Sat: 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Email Us</h4>
                    <p className="text-gray-600 text-sm">
                      info@travelindia.com<br />
                      support@travelindia.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl shadow-xl p-6 text-white">
                <h4 className="font-bold text-xl mb-3">24/7 Emergency Support</h4>
                <p className="text-sm mb-4 text-emerald-100">
                  We're always here to help you during your journey.
                </p>
                <a
                  href="tel:+911234567890"
                  className="inline-block bg-white text-emerald-700 px-6 py-2 rounded-full font-semibold hover:bg-emerald-50 transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;