import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '1',
    message: ''
  });

  // Replace this with your actual WhatsApp number (with country code, no + or spaces)
  const WHATSAPP_NUMBER = '916380657905'; // Example: 919876543210 for India

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `
*New Travel Inquiry*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
${formData.destination ? `*Destination:* ${formData.destination}` : ''}
${formData.travelDate ? `*Travel Date:* ${formData.travelDate}` : ''}
*Number of Travelers:* ${formData.travelers}
${formData.message ? `\n*Message:*\n${formData.message}` : ''}
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      travelers: '1',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Travel Inquiry Form</h1>
            <p className="text-gray-600">Fill out the form below and connect with us on WhatsApp</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                  placeholder="e.g., Goa, Kerala"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Travel Date
                </label>
                <input
                  type="date"
                  id="travelDate"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                />
              </div>

              <div>
                <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Travelers
                </label>
                <select
                  id="travelers"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3-4">3-4 People</option>
                  <option value="5-10">5-10 People</option>
                  <option value="10+">10+ People</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Special Requirements / Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Tell us about your travel preferences, budget, or any special requirements..."
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Send to WhatsApp</span>
              <Send size={18} />
            </button>

            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. Your information will be kept confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}