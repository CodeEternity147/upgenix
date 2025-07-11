import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const CovidAwareness = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cards = [
    {
      title: "COVID-19 Vaccinations",
      icon: (
        <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600">
          <div className="w-3 h-4 bg-white rounded-sm"></div>
        </div>
      ),
      delay: 0
    },
    {
      title: "Face Mask & Sanitisers",
      icon: (
        <div className="w-7 h-3 bg-blue-500 rounded-lg flex items-center justify-center gap-1 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      ),
      delay: 100
    },
    {
      title: "Vitamins For Immunity",
      icon: (
        <div className="w-7 h-7 bg-orange-400 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500">
          <div className="w-4 h-4 bg-orange-500 rounded-full group-hover:bg-orange-600"></div>
        </div>
      ),
      delay: 200
    },
    {
      title: "PCR Swab Test",
      icon: (
        <div className="flex gap-1">
          <div className="w-2 h-7 bg-blue-500 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600"></div>
          <div className="w-2 h-7 bg-purple-500 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-600"></div>
          <div className="w-2 h-7 bg-green-500 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600"></div>
        </div>
      ),
      delay: 300
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen p-2 sm:p-4 md:p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      </div>
      <div className={`max-w-7xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 pointer-events-none"></div>
        <div className="flex flex-col lg:flex-row relative">
          {/* Left side - Image and Content */}
          <div className="flex-1 p-4 sm:p-8">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Image */}
              <div className="flex-shrink-0 group mx-auto md:mx-0">
                <div className="relative overflow-hidden rounded-lg w-full max-w-xs sm:max-w-sm md:w-80 md:h-96">
                  <img 
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Person in dental chair"
                    className="w-full h-60 sm:h-80 md:h-96 object-cover transform transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 w-full">
                <div className="mb-4">
                  <p className={`text-xs sm:text-sm font-medium text-gray-600 mb-2 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>INFORMATION</p>
                  <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 transform transition-all duration-700 delay-100 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'} relative`}>
                    COVID-19
                    <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full transform transition-all duration-1000 delay-300"></div>
                  </h1>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className={`text-sm sm:text-base transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>Eget lacinia libero, metus maecenas commodo vel auctor. Augue enim libero in gravida. Diam quisque convallis quis tellus feugiat.</p>
                  <p className={`text-sm sm:text-base transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>Morbi scelerisque volutpat sed viverra nulla interdum mia bibendum velit sapien scelerisque. Dictum quam tincidunt nec feugiat augue vel tincidunt. Etiam pretium nec diam rhoncus, gravida in turpis cursus. Nunc, sed fringilla tortor, iaculis eget eget felis dictum.</p>
                </div>
                <button className={`flex items-center gap-2 mt-8 text-green-500 font-medium hover:text-green-600 transition-all duration-300 group transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} delay-400 hover:translate-x-2`}>
                  Read More
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
          {/* Cards Column */}
          <div className="w-full lg:w-80 flex flex-row lg:flex-col justify-center gap-4 lg:gap-6 p-4 overflow-x-auto lg:overflow-x-visible">
            {cards.map((card, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl px-4 py-5 flex items-center gap-4 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'} hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-blue-200 min-w-[220px] lg:min-w-0`}
                style={{ transitionDelay: `${500 + card.delay}ms` }}
              >
                <div className="w-12 h-6 flex items-center justify-center bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                  {card.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className='font-semibold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300 text-xs sm:text-base' > {card.title} </span>
                  
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>
    </div>
  );
};

export default CovidAwareness;