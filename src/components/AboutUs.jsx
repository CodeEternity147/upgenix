import React, { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const tabsData = {
    mission: {
      icon: '🎯',
      title: 'Our Mission',
      content: 'To enhance global health by providing affordable, effective, and innovative medicines, while upholding the highest standards of quality and ethics in pharmaceutical excellence.',
      gradient: 'from-green-400 to-emerald-500'
    },
    vision: {
      icon: '🌟',
      title: 'Our Vision',
      content: 'To be a global leader in pharmaceuticals, recognized for our research, quality, and commitment to healthier lives worldwide through innovative healthcare solutions.',
      gradient: 'from-blue-400 to-cyan-500'
    },
    values: {
      icon: '💎',
      title: 'Core Values',
      content: 'Innovation drives our research • Integrity guides our actions • Quality defines our products • Customer Focus shapes our decisions • Global Responsibility motivates our mission',
      gradient: 'from-emerald-400 to-green-500'
    }
  };

  const statsData = [
    { number: '30+', label: 'Countries', icon: '🌍', color: 'from-green-400 to-emerald-500' },
    { number: '150+', label: 'Products', icon: '💊', color: 'from-blue-400 to-cyan-500' },
    { number: '98.5%', label: 'Satisfaction', icon: '⭐', color: 'from-emerald-400 to-green-500' },
    { number: '22+', label: 'Years', icon: '🏆', color: 'from-cyan-400 to-blue-500' }
  ];

  const achievements = [
    {
      icon: '🏅',
      title: 'WHO-GMP Certified',
      description: 'World Health Organization Good Manufacturing Practices certification',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🔬',
      title: 'R&D Excellence',
      description: 'Recognized for innovative research and development in pharmaceuticals',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: '🌐',
      title: 'Global Standards',
      description: 'ISO certified with international quality management systems',
      gradient: 'from-indigo-400 to-blue-500'
    }
  ];

  const leaders = [
    {
      name: 'Dharmendra Seth',
      role: 'Founding Director',
      quote: 'Our legacy is built on trust, quality, and a relentless pursuit of excellence in healthcare.',
      initials: 'DS',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Anubhav Seth',
      role: 'Managing Director',
      quote: 'We are committed to innovation and global standards, ensuring a healthier tomorrow for all.',
      initials: 'AS',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const timeline = [
    { year: '2002', event: 'Founded in Science City, Gujarat', color: 'bg-green-500' },
    { year: '2010', event: 'Expanded to 30+ countries worldwide', color: 'bg-emerald-500' },
    { year: '2015', event: 'Launched 150+ innovative products', color: 'bg-blue-500' },
    { year: '2020', event: 'Achieved WHO-GMP certification', color: 'bg-cyan-500' },
    { year: '2023', event: 'Recognized for R&D excellence', color: 'bg-green-600' }
  ];

  return (
    <div ref={sectionRef} className="w-full bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden px-2 sm:px-4">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-100/10 via-transparent to-blue-100/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-green-300/20 to-emerald-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      {/* Header Section */}
      <section className="relative z-10 py-12 md:py-20 flex items-center justify-center w-full px-2 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-8 md:mb-16">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-green-700 font-semibold text-sm tracking-wide">ABOUT UPGENIX PHARMA</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6">
                <span className="block text-gray-900 mb-2">Upgenix</span>
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Pharma
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Pioneering the future of healthcare through innovative pharmaceutical solutions, 
                cutting-edge research, and an unwavering commitment to global wellness.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg min-w-[200px]">
                  Discover Our Story
                </button>
                <button className="bg-white/60 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 hover:border-green-300 text-lg min-w-[200px]">
                  Our Products
                </button>
              </div>
            </div>
          </div>

          {/* Floating Stats Cards */}
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {statsData.map((stat, index) => (
                <div key={index} className="group">
                  <div className={`bg-gradient-to-r ${stat.color} rounded-2xl lg:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-2 cursor-pointer`}>
                    <div className="text-center text-white">
                      <div className="text-2xl md:text-3xl lg:text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">{stat.number}</div>
                      <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="relative z-10 py-8 md:py-12 lg:py-16 w-full px-2 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Foundation</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the core principles that drive our commitment to excellence in pharmaceutical innovation.
              </p>
            </div>
          </div>

          {/* Vertical Tab Layout */}
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Tab Navigation - Horizontal on mobile, Vertical on desktop */}
              <div className="lg:w-1/3">
                <div className="flex lg:flex-col gap-2 lg:gap-4 overflow-x-auto lg:overflow-visible custom-tab-scrollbar mt-2">
                  {Object.entries(tabsData).map(([key, data]) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`flex items-center space-x-3 px-4 md:px-6 py-4 md:py-6 rounded-xl lg:rounded-2xl font-semibold transition-all duration-300 min-w-[200px] lg:min-w-0 lg:w-full ${
                        activeTab === key
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-xl transform scale-105'
                          : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 shadow-lg'
                      }`}
                    >
                      <span className="text-xl md:text-2xl">{data.icon}</span>
                      <span className="text-sm md:text-base lg:text-lg">{data.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="lg:w-2/3">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl border border-gray-200">
                  <div className="text-center lg:text-left">
                    <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${tabsData[activeTab].gradient} rounded-2xl mb-6 shadow-lg`}>
                      <span className="text-2xl md:text-3xl text-white">{tabsData[activeTab].icon}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">{tabsData[activeTab].title}</h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">{tabsData[activeTab].content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leaders" className="relative z-10 py-8 md:py-12 lg:py-16 w-full px-2 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Leadership Excellence</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionary leaders driving our mission forward with passion and expertise.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              {leaders.map((leader, index) => (
                <div key={index} className="group">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300 transform hover:-translate-y-2">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                      <div className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r ${leader.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl md:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        {leader.initials}
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                        <p className="text-green-600 font-semibold text-sm md:text-base mb-4">{leader.role}</p>
                        <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">"{leader.quote}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 py-8 md:py-12 lg:py-16 w-full px-2 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                A timeline of milestones that have shaped our path to becoming a leader in pharmaceutical innovation.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="max-w-4xl mx-auto">
              {/* Horizontal Timeline for Desktop, Vertical for Mobile */}
              <div className="hidden md:block">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex-1 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {timeline.map((milestone, index) => (
                    <div key={index} className="text-center group">
                      <div className={`w-12 h-12 md:w-16 md:h-16 ${milestone.color} rounded-full shadow-lg mb-4 mx-auto group-hover:scale-125 transition-transform duration-300 flex items-center justify-center`}>
                        <span className="text-white font-bold text-xs md:text-sm">{milestone.year}</span>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-300 group-hover:-translate-y-2">
                        <p className="text-gray-700 font-medium text-sm md:text-base">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical Timeline for Mobile */}
                            {/* Vertical Timeline for Mobile */}
                            <div className="md:hidden">
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-blue-400"></div>
                  <div className="space-y-8">
                    {timeline.map((milestone, index) => (
                      <div key={index} className="relative flex items-center group">
                        <div className={`w-12 h-12 ${milestone.color} rounded-full shadow-lg z-10 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white font-bold text-xs">{milestone.year}</span>
                        </div>
                        <div className="ml-6 bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-300 group-hover:-translate-y-1 flex-1">
                          <p className="text-gray-700 font-medium text-sm">{milestone.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative z-10 py-8 md:py-12 lg:py-16 w-full px-2 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Recognition and certifications that validate our commitment to excellence in pharmaceutical innovation.
              </p>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <div key={index} className="group">
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300 transform hover:-translate-y-3 hover:rotate-1">
                    <div className="text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${achievement.gradient} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-2xl md:text-3xl text-white">{achievement.icon}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg);
          }
          50% { 
            transform: translateY(-20px) scale(1.1) rotate(5deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0px) scale(1) rotate(0deg);
          }
          50% { 
            transform: translateY(-15px) scale(1.05) rotate(-3deg);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        /* Intersection Observer Animation */
        .animate-on-scroll {
          transition: all 1s ease-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        /* Responsive Design Enhancements */
        @media (max-width: 640px) {
          .min-w-
$$
200px
$$ {
            min-width: 150px;
          }
          
          /* Ensure proper touch targets */
          button {
            min-height: 44px;
            touch-action: manipulation;
          }
          
          /* Reduce animation intensity on mobile */
          .hover\:scale-105:hover {
            transform: scale(1.02);
          }
          
          .hover\:-translate-y-1:hover {
            transform: translateY(-2px);
          }
        }
        
        @media (max-width: 768px) {
          /* Tablet specific adjustments */
          .lg\:grid-cols-4 {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .lg\:grid-cols-3 {
            grid-template-columns: repeat(1, 1fr);
          }
          
          .lg\:grid-cols-2 {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          /* Extra small screens */
          .text-4xl {
            font-size: 2.25rem;
          }
          
          .text-6xl {
            font-size: 3rem;
          }
          
          .text-8xl {
            font-size: 4rem;
          }
        }
        
        /* Accessibility improvements */
        button:focus {
          outline: 1px solid #10b981;
          outline-offset: 1px;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 1px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #059669);
          border-radius: 1px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #047857);
        }
        
        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .animate-float,
          .animate-float-delayed {
            animation: none;
          }
        }
        
        /* Performance optimizations */
        .animate-on-scroll {
          will-change: transform, opacity;
        }
        
        /* Backdrop blur fallback */
        @supports not (backdrop-filter: blur(12px)) {
          .backdrop-blur-sm {
            background-color: rgba(255, 255, 255, 0.8);
          }
        }
        
        /* Grid gap adjustments for better spacing */
        .grid {
          gap: 1rem;
        }
        
        @media (min-width: 768px) {
          .grid {
            gap: 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .grid {
            gap: 2rem;
          }
        }
        
        /* Ensure proper aspect ratios for cards */
        .group > div {
          min-height: 100px;
        }
        
        @media (min-width: 768px) {
          .group > div {
            min-height: 120px;
          }
        }
        
        /* Loading state */
        .loading {
          opacity: 0.6;
          pointer-events: none;
        }
        
        /* Hover effects optimization */
        @media (hover: hover) {
          .group:hover .group-hover\:scale-110 {
            transform: scale(1.1);
          }
          
          .group:hover .group-hover\:scale-125 {
            transform: scale(1.25);
          }
        }
        
        /* Text selection styling */
        ::selection {
          background-color: #10b981;
          color: white;
        }
        
        ::-moz-selection {
          background-color: #10b981;
          color: white;
        }

        /* Custom horizontal scrollbar for tab navigation on mobile */
        @media (max-width: 768px) {
          .custom-tab-scrollbar::-webkit-scrollbar {
            height: 2px;
          }
          .custom-tab-scrollbar::-webkit-scrollbar-thumb {
            border-radius: 2px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;