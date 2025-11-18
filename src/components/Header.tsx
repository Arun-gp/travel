import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Search, User, LogOut } from 'lucide-react';

// Extend Window interface for Firebase
declare global {
  interface Window {
    firebase: any;
  }
}

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: any) => void;
}

interface FirebaseUser {
  displayName: string | null;
  email: string | null;
  uid: string;
  photoURL: string | null;
}

function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');
    try {
      // Check if Firebase is loaded
      if (!window.firebase) {
        throw new Error('Firebase is not loaded');
      }

      const provider = new window.firebase.auth.GoogleAuthProvider();
      const result = await window.firebase.auth().signInWithPopup(provider);
      onLogin(result.user);
      onClose();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign in. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-emerald-700 mb-2">
            Travel<span className="text-teal-600">India</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
          <p className="text-gray-600">Sign in to book your dream vacation</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full bg-white border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-medium flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            alt="Google"
            className="w-5 h-5"
          />
          <span>{loading ? 'Signing in...' : 'Continue with Google'}</span>
        </button>

        <div className="mt-6 text-center text-sm text-gray-600">
          By continuing, you agree to our{' '}
          <a href="#" className="text-emerald-600 hover:underline">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-emerald-600 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}

function UserProfileDropdown({ user, onSignOut }: { user: FirebaseUser; onSignOut: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 hover:opacity-80 transition"
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.displayName || 'User'}
            className="w-8 h-8 rounded-full border-2 border-emerald-600 object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center border-2 border-emerald-600">
            <User size={18} />
          </div>
        )}
        <span className="hidden md:inline text-sm font-medium text-gray-700">
          {user.displayName?.split(' ')[0]}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200">
            <div className="p-4 bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
              <div className="flex items-center space-x-3">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.displayName || 'User'}
                    className="w-16 h-16 rounded-full border-3 border-white object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-white text-emerald-700 flex items-center justify-center">
                    <User size={32} />
                  </div>
                )}
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-semibold text-lg truncate">{user.displayName}</h3>
                  <p className="text-sm text-emerald-100 truncate">{user.email}</p>
                </div>
              </div>
            </div>
            
            <div className="p-2">
              <a
                href="#profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>My Profile</span>
                </div>
              </a>
              <a
                href="#bookings"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>My Bookings</span>
                </div>
              </a>
              <hr className="my-2" />
              <button
                onClick={() => {
                  setIsOpen(false);
                  onSignOut();
                }}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded transition"
              >
                <div className="flex items-center space-x-2">
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    // Load Firebase scripts
    const loadFirebase = () => {
      // Firebase App
      const firebaseApp = document.createElement('script');
      firebaseApp.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js';
      firebaseApp.async = true;
      
      // Firebase Auth
      const firebaseAuth = document.createElement('script');
      firebaseAuth.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js';
      firebaseAuth.async = true;
      
      firebaseApp.onload = () => {
        document.head.appendChild(firebaseAuth);
      };
      
      firebaseAuth.onload = () => {
        // Initialize Firebase with your config
   const firebaseConfig = {
  apiKey: "AIzaSyDe7mjWTp5G2ecrB-jQ4kkVrEx58Bnnqzk",
  authDomain: "travel-malu.firebaseapp.com",
  projectId: "travel-malu",
  storageBucket: "travel-malu.firebasestorage.app",
  messagingSenderId: "1062168838342",
  appId: "1:1062168838342:web:6691c5cf657a963d5957c7",
  measurementId: "G-2ZNWGNM2EX"
};
        
        window.firebase.initializeApp(firebaseConfig);
        
        // Listen for authentication state changes
        window.firebase.auth().onAuthStateChanged((currentUser: FirebaseUser | null) => {
          setUser(currentUser);
        });
      };
      
      document.head.appendChild(firebaseApp);
    };

    // Only load if not already loaded
    if (!window.firebase) {
      loadFirebase();
    } else {
      window.firebase.auth().onAuthStateChanged((currentUser: FirebaseUser | null) => {
        setUser(currentUser);
      });
    }
  }, []);

  const handleBookNowClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    if (user) {
      // User is logged in, proceed to booking
      window.location.href = '#contact';
    } else {
      // User is not logged in, show login modal
      setIsLoginModalOpen(true);
    }
  };

  const handleLogin = (loggedInUser: FirebaseUser) => {
    setUser(loggedInUser);
  };

  const handleSignOut = async () => {
    try {
      if (window.firebase) {
        await window.firebase.auth().signOut();
        setUser(null);
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href="tel:+911234567890" className="flex items-center hover:text-emerald-200">
                <Phone size={16} className="mr-1" />
                <span>+91 123 456 7890</span>
              </a>
              <a href="mailto:info@travelindia.com" className="hidden md:flex items-center hover:text-emerald-200">
                <Mail size={16} className="mr-1" />
                <span>info@travelindia.com</span>
              </a>
            </div>
            <div className="text-xs">
              {!user && <span>24/7 Customer Support</span>}
            </div>
          </div>
        </div>

        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-emerald-700">
                Travel<span className="text-teal-600">India</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-emerald-700 font-medium transition">Home</a>
              <a href="#packages" className="text-gray-700 hover:text-emerald-700 font-medium transition">Tour Packages</a>
              <a href="#destinations" className="text-gray-700 hover:text-emerald-700 font-medium transition">Destinations</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-700 font-medium transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-emerald-700 font-medium transition">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-700 font-medium transition">Contact</a>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-700 hover:text-emerald-700 transition"
              >
                <Search size={20} />
              </button>
              {user ? (
                <UserProfileDropdown user={user} onSignOut={handleSignOut} />
              ) : (
                <button
                  onClick={handleBookNowClick}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-700 hover:to-teal-700 transition font-medium"
                >
                  Book Now
                </button>
              )}
            </div>

            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isSearchOpen && (
            <div className="mt-4 hidden lg:block">
              <input
                type="text"
                placeholder="Search destinations, packages..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          )}

          {isMenuOpen && (
            <div className="lg:hidden mt-4 space-y-4">
              {user && (
                <div className="pb-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || 'User'}
                        className="w-12 h-12 rounded-full border-2 border-emerald-600 object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <User size={24} />
                      </div>
                    )}
                    <div className="overflow-hidden">
                      <h3 className="font-semibold text-gray-800 truncate">{user.displayName}</h3>
                      <p className="text-sm text-gray-600 truncate">{user.email}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a href="#profile" className="block text-gray-700 hover:text-emerald-700">My Profile</a>
                    <a href="#bookings" className="block text-gray-700 hover:text-emerald-700">My Bookings</a>
                  </div>
                </div>
              )}
              <a href="#" className="block text-gray-700 hover:text-emerald-700 font-medium">Home</a>
              <a href="#packages" className="block text-gray-700 hover:text-emerald-700 font-medium">Tour Packages</a>
              <a href="#destinations" className="block text-gray-700 hover:text-emerald-700 font-medium">Destinations</a>
              <a href="#services" className="block text-gray-700 hover:text-emerald-700 font-medium">Services</a>
              <a href="#about" className="block text-gray-700 hover:text-emerald-700 font-medium">About Us</a>
              <a href="#contact" className="block text-gray-700 hover:text-emerald-700 font-medium">Contact</a>
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="block w-full text-center bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition font-medium"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={handleBookNowClick}
                  className="block w-full text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:from-emerald-700 hover:to-teal-700 transition font-medium"
                >
                  Book Now
                </button>
              )}
            </div>
          )}
        </nav>
      </header>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </>
  );
}