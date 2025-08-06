import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Left Column - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm sm:text-base">
              © {currentYear} Keerthi Reddy Rajamuri. All rights reserved.
            </p>
          </div>

           

          {/* Right Column - Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group text-sm sm:text-base"
            >
              <span>Back to top</span>
              <ArrowUp size={14} className="sm:w-4 sm:h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

       
       
      </div>
    </footer>
  );
};

export default Footer;