import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-green-600 to-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 focus:outline-none"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
      <footer className="bg-green-900 text-white pt-0 pb-12 px-4 mt-12">
        {/* Newsletter Box */}
        <div className="max-w-2xl mx-auto -translate-y-1/2">
          <div className="bg-green-50 rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-2 text-center">Join Our Newsletter</h2>
            <div className="flex items-center justify-center mb-4 w-full">
              <span className="h-1 w-16 bg-green-100 rounded-full mr-2"></span>
              <span className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center"><span className="w-2 h-2 bg-green-600 rounded-full"></span></span>
              <span className="h-1 w-16 bg-green-100 rounded-full ml-2"></span>
            </div>
            <p className="text-green-900 text-center mb-6 max-w-xl">
              Stay updated with the latest news, product launches, and insights from Upgenix Pharma. Enter your email to subscribe to our monthly newsletter.
            </p>
            <form className="w-full flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3 rounded-xl bg-white text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 shadow"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl shadow transition-all"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 animate-fade-in-up">
          {/* About Section */}
          <div className="transition-all duration-500 hover:scale-105">
            <div className="flex items-center mb-4">
              <span className="bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-3xl font-bold mr-3">🔷</span>
              <span className="text-3xl font-extrabold tracking-wide">Upgenix Pharma</span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Innovation in Every Molecule for a Healthier Tomorrow. Upgenix Pharma delivers world-class pharmaceutical solutions, focusing on research, quality, and global healthcare impact.
            </p>
          </div>
          {/* Head Office Section */}
          <div className="transition-all duration-500 hover:scale-105">
            <h4 className="text-xl font-bold mb-4 tracking-wide">Head Office</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li className="flex items-start"><span className="mr-2">🏢</span> 123 Upgenix Avenue, Science City, Gujarat, India 382007</li>
              <li className="flex items-start"><span className="mr-2">📞</span> +91 98765 43210</li>
              <li className="flex items-start"><span className="mr-2">✉️</span> contact@upgenixpharma.com</li>
            </ul>
          </div>
          {/* Quick Links Section */}
          <div className="transition-all duration-500 hover:scale-105">
            <h4 className="text-xl font-bold mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li><a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Home</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Portfolio</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Team</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Locations</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Contact</a></li>
            </ul>
          </div>
          {/* Legal Section */}
          <div className="transition-all duration-500 hover:scale-105">
            <h4 className="text-xl font-bold mb-4 tracking-wide">Legal</h4>
            <ul className="space-y-2 text-gray-300 text-base">
              <li><a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors duration-200 font-medium">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-800 mt-10 pt-6 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Upgenix Pharma. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer; 