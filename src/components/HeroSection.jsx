import React, { useState, useEffect } from 'react';

const sectionLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Team', href: '#leaders' },
  { name: 'Locations', href: '#locations' },
  { name: 'Contact', href: '#contact' },
];

const Medicy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const statsData = [
    { value: "20+", label: "Years of Experience", color: "green" },
    { value: "150+", label: "Products", color: "blue" },
    { value: "30+", label: "Countries Served", color: "purple" }
  ];

  return (
    <div className="font-sans relative overflow-hidden" id="home">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-green-300 to-yellow-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      </div>

      {/* Navigation */}
      <nav className={`flex justify-between items-center mx-6 md:mx-12 md:my-6 px-8 py-5 bg-gradient-to-r from-white/95 via-green-50/95 to-white/95 shadow-2xl rounded-3xl border border-green-200 backdrop-blur-lg relative z-20 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="flex items-center pr-6 border-r border-green-200">
          <div className="text-green-500 font-bold text-xl flex items-center group">
            <svg className="w-6 h-6 mr-1 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 3.5L18 9l-6 3-6-3 6-3.5z" />
            </svg>
            <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Upgenix Pharma
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 pl-6">
          <span className="text-green-400 animate-pulse">•</span>
          {sectionLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 font-medium transition-all duration-300 hover:text-green-600  hover:scale-105 relative group scroll-smooth"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <span className="text-green-400 animate-pulse">•</span>
        </div>
        
        <div className="md:hidden flex items-center ml-4">
          <button className="text-green-600 focus:outline-none hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white m-6 md:m-12 rounded-2xl px-6 py-12 md:py-20 overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-100/50 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-blue-100/50 to-transparent"></div>
        </div>

        {/* DNA Helix Animation */}
        <div className="absolute top-10 right-10 opacity-20">
          <div className="w-16 h-32 relative">
            <div className="absolute top-0 left-0 w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
            <div className="absolute top-4 right-0 w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-8 left-0 w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-12 right-0 w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {/* Left Side Scroll Text */}
        <div className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 flex-col items-center">
          <div className="text-gray-400 tracking-widest text-xs transform -rotate-90 mb-12 animate-pulse">
            SCROLL DOWN
          </div>
          <div className="w-0.5 h-16 bg-gradient-to-b from-green-500 to-blue-500 relative">
            <div className="absolute w-3 h-3 rounded-full border-2 border-green-500 bg-white top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className={`text-4xl md:text-6xl font-bold text-center mb-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="bg-gradient-to-r from-green-800 via-green-600 to-blue-600 bg-clip-text text-transparent">
              Innovation in Every Molecule
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              for a Healthier Tomorrow
            </span>
          </h1>
          
          <p className={`text-center text-gray-600 max-w-3xl mx-auto mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Upgenix Pharma is committed to delivering world-class pharmaceutical solutions that improve lives across the globe. With a focus on research, quality, and innovation, we are shaping the future of healthcare, one molecule at a time.
          </p>

          {/* Stats */}
          <div className="flex justify-between items-center">
            {/* Left Stats */}
            <div className="flex flex-col items-center space-y-8">
              {statsData.slice(0, 1).map((stat, index) => (
                <div key={index} className={`flex flex-col items-center group cursor-pointer transition-all duration-500 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <div className={`text-3xl font-bold text-${stat.color}-800 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  <div className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Images Collage */}
            <div className="relative flex-1 h-96">
              {/* Main central image */}
              <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white z-10 shadow-2xl transition-all duration-1000 delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} hover:scale-105 hover:shadow-3xl`}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <img 
                    src='https://plus.unsplash.com/premium_photo-1681843015470-5dec0470c64d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                    alt='Upgenix Lab' 
                    className='w-full h-full object-cover transition-transform duration-500 hover:scale-110' 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
                </div>
              </div>

              {/* Surrounding smaller images */}
              {[
                { src: 'https://images.unsplash.com/photo-1688588162632-2a98e10058da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Research Team', position: 'left-10 top-20', size: 'w-20 h-20', delay: 800 },
                { src: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Production Facility', position: 'right-10 top-20', size: 'w-20 h-20', delay: 900 },
                { src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Global Distribution', position: 'left-1/4 bottom-10', size: 'w-24 h-24', delay: 1000 },
                { src: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Innovation', position: 'right-1/4 bottom-20', size: 'w-28 h-28', delay: 1100 }
              ].map((img, index) => (
                <div key={index} className={`absolute ${img.position} ${img.size} hidden lg:flex  rounded-full  overflow-hidden border-2 border-white shadow-lg transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} hover:scale-110 hover:shadow-xl group`} style={{ transitionDelay: `${img.delay}ms` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                    <img src={img.src} alt={img.alt} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}

              {/* Decorative elements */}
              <div className="absolute left-1/4 top-10 w-8 h-8 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 animate-pulse"></div>
              <div className="absolute right-1/4 top-40 w-10 h-10 rounded-full bg-gradient-to-br from-orange-200 to-red-200 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute left-20 bottom-28 w-6 h-6 rounded-full bg-gradient-to-br from-green-200 to-blue-200 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Right Stats */}
            <div className="flex flex-col items-center space-y-8">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 animate-pulse mb-4"></div>
              {statsData.slice(1).map((stat, index) => (
                <div key={index} className={`flex flex-col items-center group cursor-pointer transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                  <span className={`text-${stat.color}-600 text-sm mb-1 group-hover:text-${stat.color}-800 transition-colors duration-300`}>
                    {stat.label === 'Countries Served' ? (
                      <div></div>
                      
                    ) : (
                      <div></div>
                    )}
                  </span>
                  <div className={`text-xl font-bold text-${stat.color}-800 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  <div className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Center Dot */}
          <div className="flex justify-center mt-4">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 animate-pulse"></div>
          </div>

          {/* CTA Button */}
          <div className={`flex justify-center mt-8 transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg font-semibold text-lg transition-all duration-300 hover:from-green-700 hover:to-blue-700 hover:shadow-xl hover:scale-105 hover:-translate-y-1 relative overflow-hidden group">
              <span className="relative z-10">Explore Our Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Information Bar */}
      <div className="bg-gradient-to-r from-[#113c1c] via-[#1a5c2b] to-[#113c1c] text-white flex flex-col md:flex-row justify-between items-center px-4 py-6 md:py-8 md:px-8 mt-8 gap-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500/20 to-blue-500/20 animate-pulse"></div>
        </div>
        
        {['Empowering Healthier Lives', 'Driven by Science, Inspired by Care', 'Global Standards, Local Commitment'].map((text, index) => (
          <div key={index} className={`flex-1 flex items-center justify-center text-center group transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${1400 + index * 200}ms` }}>
            <span className="font-semibold text-lg group-hover:text-green-300 transition-colors duration-300 relative">
              {text}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 group-hover:w-full"></div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Medicy;