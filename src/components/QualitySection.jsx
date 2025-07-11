import React, { useEffect, useRef } from 'react';

const stats = [
  { icon: '🌍', value: '30+', label: 'Countries Served' },
  { icon: '💊', value: '150+', label: 'Products' },
  { icon: '👍', value: '98.5%', label: 'Positive Feedback' },
  { icon: '👩‍⚕️', value: '50+', label: 'Expert Professionals' },
];

const QualitySection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-4 md:px-0 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full opacity-30 blur-2xl -z-10 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-2xl -z-10 animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-green-200 rounded-full opacity-20 blur-xl -z-10 animate-pulse-slow"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/30 to-transparent animate-gradient-x -z-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 items-center">
        {/* Left: Text Content */}
        <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-10 md:p-14 mb-8 md:mb-0 animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] group">
          <h4 className="text-green-600 font-bold mb-3 text-lg tracking-wide uppercase animate-on-scroll opacity-0 transition-all duration-500 delay-100">
            Quality
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 leading-tight drop-shadow-sm animate-on-scroll opacity-0 transition-all duration-700 delay-200">
            Quality Healthcare with 
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-shimmer">
                Trusted Professionals
              </span>
            </span>
          </h2>
          <p className="text-gray-700 mb-8 text-lg animate-on-scroll opacity-0 transition-all duration-700 delay-300 group-hover:text-gray-800">
            At Upgenix Pharma, quality is at the heart of everything we do. Our mission is to deliver healthcare solutions that meet the highest standards of excellence, in an environment of trust and transparency.
          </p>
          <ul className="space-y-4 mb-2">
            {[
              'Continuous evaluation of product quality',
              'Stringent selection of raw materials',
              'Safety and confidentiality',
              'Innovation and continuous improvement'
            ].map((item, index) => (
              <li 
                key={index}
                className="flex items-center text-gray-800 text-base md:text-lg font-medium animate-on-scroll opacity-0 transition-all duration-500 hover:translate-x-2 hover:text-green-800 cursor-pointer"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <span className="w-5 h-5 flex items-center justify-center bg-green-100 text-green-600 rounded-full mr-4 text-lg shadow hover:shadow-lg hover:scale-110 transition-all duration-300 hover:bg-green-200">
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="animate-check-in">
                    <circle cx="8" cy="8" r="8" fill="#22c55e" opacity="0.2"/>
                    <path d="M5.5 8.5l2 2 3-3" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Image Collage */}
        <div className="flex-1 grid grid-cols-2 gap-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 animate-on-scroll transform translate-y-8 opacity-0 transition-all duration-700 delay-500 hover:shadow-2xl">
          {[
            "https://plus.unsplash.com/premium_photo-1661769167673-cfdb37f156d8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1661766456250-bbde7dd079de?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
          ].map((src, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <img 
                src={src}
                alt={`Healthcare image ${index + 1}`}
                className="w-full h-40 md:h-48 object-cover shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-1" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-green-400 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Stats */}
      <div 
        ref={statsRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-green-500 pt-10 max-w-5xl mx-auto animate-on-scroll opacity-0 transition-all duration-700 delay-700"
      >
        {stats.map((stat, index) => (
          <div 
            key={stat.label} 
            className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-2xl shadow p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group animate-bounce-in"
            style={{ 
              animationDelay: `${800 + index * 150}ms`,
              animationFillMode: 'both'
            }}
          >
            <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 animate-pulse-gentle">
              {stat.icon}
            </span>
            <span className="text-3xl font-extrabold text-green-800 group-hover:text-green-600 transition-colors duration-300 counter-animate">
              {stat.value}
            </span>
            <span className="text-gray-600 mt-1 text-center text-lg font-medium group-hover:text-gray-800 transition-colors duration-300">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        
        @keyframes gradient-x {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes check-in {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3) translateY(30px); }
          50% { opacity: 1; transform: scale(1.05) translateY(-10px); }
          70% { transform: scale(0.9) translateY(5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 8s ease-in-out infinite;
          background-size: 200% 200%;
        }
        
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 2s linear infinite;
        }
        
        .animate-check-in {
          animation: check-in 0.5s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 2s ease-in-out infinite;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .counter-animate {
          animation: bounce-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default QualitySection;