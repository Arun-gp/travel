import { TourPackage } from '../types';

export const tourPackages: TourPackage[] = [
  {
    id: '1',
    title: 'Golden Triangle Tour',
    destination: 'Delhi, Agra, Jaipur',
    duration: '6 Nights / 7 Days',
    nights: 6,
    days: 7,
    price: 25000,
    image: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience the magnificent Golden Triangle - Delhi, Agra, and Jaipur. Visit iconic monuments including the Taj Mahal, Amber Fort, and Red Fort.',
    highlights: [
      'Visit the magnificent Taj Mahal',
      'Explore Amber Fort in Jaipur',
      'Delhi city tour including Red Fort',
      'Shopping in local bazaars',
      'Traditional Rajasthani dinner'
    ],
    inclusions: ['Accommodation', 'Daily breakfast', 'AC transportation', 'Professional guide', 'Monument entry fees'],
    exclusions: ['Lunch and dinner', 'Personal expenses', 'Tips and gratuities', 'Travel insurance'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        description: 'Arrive in Delhi and transfer to hotel. Evening at leisure.',
        activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner']
      },
      {
        day: 2,
        title: 'Delhi Sightseeing',
        description: 'Full day Delhi city tour covering Old and New Delhi.',
        activities: ['Red Fort', 'Jama Masjid', 'India Gate', 'Qutub Minar']
      }
    ],
    category: 'Cultural',
    theme: 'Heritage',
    featured: true
  },
  {
    id: '2',
    title: 'Kerala Backwaters Experience',
    destination: 'Kochi, Munnar, Alleppey',
    duration: '5 Nights / 6 Days',
    nights: 5,
    days: 6,
    price: 22000,
    image: 'https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover God\'s Own Country with serene backwaters, lush tea gardens, and pristine beaches.',
    highlights: [
      'Houseboat cruise in Alleppey',
      'Tea plantation visit in Munnar',
      'Kathakali dance performance',
      'Ayurvedic spa session',
      'Beach relaxation in Kovalam'
    ],
    inclusions: ['Hotels & houseboat stay', 'All meals during houseboat', 'Transportation', 'Sightseeing tours'],
    exclusions: ['Airfare', 'Spa treatments', 'Personal expenses', 'Optional activities'],
    itinerary: [],
    category: 'Nature',
    theme: 'Relaxation',
    featured: true
  },
  {
    id: '3',
    title: 'Himalayan Adventure',
    destination: 'Manali, Leh, Ladakh',
    duration: '8 Nights / 9 Days',
    nights: 8,
    days: 9,
    price: 35000,
    image: 'https://images.pexels.com/photos/1559117/pexels-photo-1559117.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'An adventure through the mighty Himalayas visiting stunning landscapes and monasteries.',
    highlights: [
      'Drive through Rohtang Pass',
      'Visit Pangong Lake',
      'Explore ancient monasteries',
      'River rafting in Zanskar',
      'Camping under the stars'
    ],
    inclusions: ['Accommodation', 'Meals as per itinerary', '4x4 vehicle', 'Permits', 'Guide'],
    exclusions: ['Flights', 'Adventure activities', 'Personal gear', 'Insurance'],
    itinerary: [],
    category: 'Adventure',
    theme: 'Mountains',
    featured: true
  },
  {
    id: '4',
    title: 'Goa Beach Paradise',
    destination: 'North & South Goa',
    duration: '4 Nights / 5 Days',
    nights: 4,
    days: 5,
    price: 18000,
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Relax on beautiful beaches, enjoy water sports, and experience Goan nightlife.',
    highlights: [
      'Beach hopping tour',
      'Water sports activities',
      'Visit to Portuguese churches',
      'Cruise on Mandovi River',
      'Goan cuisine experience'
    ],
    inclusions: ['Beach resort stay', 'Breakfast', 'Airport transfers', 'Sightseeing tours'],
    exclusions: ['Flights', 'Water sports charges', 'Dinners', 'Personal expenses'],
    itinerary: [],
    category: 'Beach',
    theme: 'Leisure',
    featured: true
  },
  {
    id: '5',
    title: 'Rajasthan Royal Heritage',
    destination: 'Jaipur, Udaipur, Jodhpur, Jaisalmer',
    duration: '9 Nights / 10 Days',
    nights: 9,
    days: 10,
    price: 42000,
    image: 'https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience royal Rajasthan with magnificent forts, palaces, and desert landscapes.',
    highlights: [
      'Stay in heritage hotels',
      'Camel safari in Thar Desert',
      'Boat ride in Lake Pichola',
      'Mehrangarh Fort exploration',
      'Cultural folk performances'
    ],
    inclusions: ['Heritage accommodation', 'Meals', 'AC vehicles', 'Guide services', 'All entry fees'],
    exclusions: ['Flights', 'Camera fees', 'Tips', 'Optional activities'],
    itinerary: [],
    category: 'Heritage',
    theme: 'Cultural',
    featured: true
  },
  {
    id: '6',
    title: 'Andaman Island Escape',
    destination: 'Port Blair, Havelock, Neil Island',
    duration: '6 Nights / 7 Days',
    nights: 6,
    days: 7,
    price: 28000,
    image: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover pristine beaches, crystal clear waters, and vibrant marine life.',
    highlights: [
      'Scuba diving at Havelock',
      'Visit Cellular Jail',
      'Radhanagar Beach relaxation',
      'Snorkeling at Elephant Beach',
      'Glass bottom boat ride'
    ],
    inclusions: ['Island accommodation', 'Inter-island ferries', 'Breakfast', 'Airport transfers'],
    exclusions: ['Airfare', 'Water activities', 'Lunches and dinners', 'Personal expenses'],
    itinerary: [],
    category: 'Islands',
    theme: 'Beach',
    featured: false
  }
];
