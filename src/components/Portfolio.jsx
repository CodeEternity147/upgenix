import React, { useState, useEffect, useRef } from 'react';

const categories = [
  {
    name: 'Prescription Drugs (Rx)',
    shortName: 'Prescription',
    icon: '💊',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    products: [
      { name: 'Antibiotics', description: 'Effective solutions for bacterial infections.', certifications: 'WHO-GMP, ISO', rnd: 'Continuous research for new molecules.', price: 'From $25', availability: 'In Stock' },
      { name: 'Antacids', description: 'Relief from acidity and heartburn.', certifications: 'ISO', rnd: 'Formulation improvement ongoing.', price: 'From $15', availability: 'In Stock' },
      { name: 'Antihypertensives', description: 'Control high blood pressure with proven efficacy.', certifications: 'WHO-GMP', rnd: 'Clinical studies for new combinations.', price: 'From $35', availability: 'In Stock' },
      { name: 'Antidiabetics', description: 'Manage diabetes with advanced formulations.', certifications: 'ISO', rnd: 'Research on extended-release forms.', price: 'From $45', availability: 'In Stock' },
      { name: 'Pain Management (NSAIDs)', description: 'Non-steroidal anti-inflammatory drugs for pain relief.', certifications: 'WHO-GMP', rnd: 'Safer, more effective molecules in pipeline.', price: 'From $20', availability: 'In Stock' },
      { name: 'Cardiac & Diabetic range', description: 'Comprehensive care for cardiac and diabetic patients.', certifications: 'ISO', rnd: 'Integrated therapy research.', price: 'From $50', availability: 'In Stock' },
    ],
  },
  {
    name: 'Over-the-Counter (OTC) Medicines',
    shortName: 'OTC',
    icon: '🏥',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    products: [
      { name: 'Cold & Cough Relief', description: 'Fast-acting remedies for cold and cough.', certifications: 'ISO', rnd: 'Herbal actives under study.', price: 'From $12', availability: 'In Stock' },
      { name: 'Digestive Enzymes', description: 'Support healthy digestion and gut health.', certifications: 'WHO-GMP', rnd: 'Enzyme blend optimization.', price: 'From $18', availability: 'In Stock' },
      { name: 'Multivitamin Tablets', description: 'Daily nutrition for all age groups.', certifications: 'ISO', rnd: 'Bioavailability enhancement.', price: 'From $22', availability: 'In Stock' },
      { name: 'Pain Balms & Gels', description: 'Topical relief for muscle and joint pain.', certifications: 'ISO', rnd: 'New herbal actives.', price: 'From $16', availability: 'In Stock' },
    ],
  },
  {
    name: 'Nutraceuticals & Dietary Supplements',
    shortName: 'Nutraceuticals',
    icon: '🌿',
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-50',
    products: [
      { name: 'Protein Powders', description: 'High-quality protein for muscle and wellness.', certifications: 'ISO', rnd: 'Flavor and absorption research.', price: 'From $30', availability: 'In Stock' },
      { name: 'Immunity Boosters', description: 'Strengthen immunity with science-backed ingredients.', certifications: 'WHO-GMP', rnd: 'Synergistic blends in development.', price: 'From $28', availability: 'In Stock' },
      { name: 'Vitamin & Mineral Capsules', description: 'Essential vitamins and minerals for daily health.', certifications: 'ISO', rnd: 'Improved absorption studies.', price: 'From $24', availability: 'In Stock' },
    ],
  },
  {
    name: 'Herbal & Ayurvedic Products',
    shortName: 'Herbal',
    icon: '🌱',
    color: 'from-green-600 to-emerald-600',
    bgColor: 'bg-green-50',
    products: [
      { name: 'Liver tonics', description: 'Herbal support for liver health.', certifications: 'ISO', rnd: 'Clinical validation ongoing.', price: 'From $26', availability: 'In Stock' },
      { name: 'Skin & Hair Care Solutions', description: 'Natural care for skin and hair.', certifications: 'WHO-GMP', rnd: 'Herbal actives research.', price: 'From $32', availability: 'In Stock' },
      { name: 'Joint Pain Oils', description: 'Ayurvedic oils for joint pain relief.', certifications: 'ISO', rnd: 'New herbal blends.', price: 'From $28', availability: 'In Stock' },
      { name: 'Herbal Digestives', description: 'Traditional digestive aids.', certifications: 'ISO', rnd: 'Formulation improvement.', price: 'From $18', availability: 'In Stock' },
    ],
  },
  {
    name: 'Topical Applications',
    shortName: 'Topical',
    icon: '🧴',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
    products: [
      { name: 'Creams, Gels, Ointments', description: 'Wide range of topical solutions.', certifications: 'ISO', rnd: 'Enhanced delivery systems.', price: 'From $14', availability: 'In Stock' },
      { name: 'Anti-fungal creams', description: 'Effective treatment for fungal infections.', certifications: 'WHO-GMP', rnd: 'New actives in development.', price: 'From $22', availability: 'In Stock' },
      { name: 'Anti-bacterial lotions', description: 'Protection against bacterial infections.', certifications: 'ISO', rnd: 'Long-lasting formulas.', price: 'From $19', availability: 'In Stock' },
    ],
  },
  {
    name: 'Injectables',
    shortName: 'Injectables',
    icon: '💉',
    color: 'from-blue-600 to-indigo-600',
    bgColor: 'bg-blue-50',
    products: [
      { name: 'Anti-inflammatory', description: 'Injectable solutions for inflammation.', certifications: 'WHO-GMP', rnd: 'Safer molecules in research.', price: 'From $65', availability: 'In Stock' },
      { name: 'Antibiotics', description: 'Injectable antibiotics for critical care.', certifications: 'ISO', rnd: 'Broad-spectrum research.', price: 'From $85', availability: 'In Stock' },
      { name: 'Vitamin Injections', description: 'Essential vitamins for rapid absorption.', certifications: 'ISO', rnd: 'Improved stability.', price: 'From $42', availability: 'In Stock' },
    ],
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Get all products or filtered products
  const getAllProducts = () => {
    let allProducts = [];
    categories.forEach(category => {
      category.products.forEach(product => {
        allProducts.push({
          ...product,
          category: category.name,
          categoryShort: category.shortName,
          categoryIcon: category.icon,
          categoryColor: category.color,
          categoryBg: category.bgColor
        });
      });
    });
    return allProducts;
  };

  const filteredProducts = getAllProducts().filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.categoryShort === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg mb-6 animate-fade-in">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-sm tracking-wide">COMPREHENSIVE PORTFOLIO</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-gray-900">Our</span>
            <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Product Range
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Explore our extensive collection of pharmaceutical products designed to meet diverse healthcare needs across multiple therapeutic areas.
          </p>
        </div>

        {/* Controls Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Left Sidebar - Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-200 sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white mr-3">
                  🔍
                </span>
                Filters
              </h3>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search medicines..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  />
                  <div className="absolute right-3 top-3 text-gray-400">
                    🔍
                  </div>
                </div>
              </div>

              {/* Category Filters */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Categories</label>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                      selectedCategory === 'all' 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                        : 'bg-gray-50 text-gray-700 hover:bg-green-50'
                    }`}
                  >
                    <span className="flex items-center">
                      <span className="mr-3">🏥</span>
                      All Products ({getAllProducts().length})
                    </span>
                  </button>
                  
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category.shortName)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                        selectedCategory === category.shortName 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' 
                        : 'bg-gray-50 text-gray-700 hover:bg-green-50'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span className="flex items-center">
                        <span className="mr-3">{category.icon}</span>
                        <span className="text-sm">{category.shortName}</span>
                      </span>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {category.products.length}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">View Mode</label>
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 py-2 px-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-white shadow-md text-green-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="text-sm font-medium">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 py-2 px-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-white shadow-md text-green-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="text-sm font-medium">List</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
              <h4 className="text-sm font-bold text-green-800 mb-3">Quick Stats</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-green-700">Total Products</span>
                  <span className="font-bold text-green-800">{getAllProducts().length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-700">Categories</span>
                  <span className="font-bold text-green-800">{categories.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-700">Showing</span>
                  <span className="font-bold text-green-800">{filteredProducts.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Products */}
        <div className="lg:w-3/4">
          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Products' : `${selectedCategory} Products`}
              </h2>
              <p className="text-gray-600 mt-1">
                Showing {filteredProducts.length} of {getAllProducts().length} products
              </p>
            </div>
            
            {/* Sort Options */}
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/80 backdrop-blur-sm">
                <option>Sort by Name</option>
                <option>Sort by Price</option>
                <option>Sort by Category</option>
              </select>
            </div>
          </div>

          {/* Products Display */}
          <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}`}>
            {filteredProducts.map((product, index) => (
              <div
                key={`${product.name}-${index}`}
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-green-300 transform hover:-translate-y-1 hover:scale-105 animate-fade-in-up ${
                  viewMode === 'list' ? 'flex items-center space-x-6 p-6' : 'p-6'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${product.categoryColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-white text-lg">{product.categoryIcon}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs font-medium text-green-600">{product.availability}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-800 transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-xs bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full font-medium">
                        {product.categoryShort}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">Price:</span>
                        <span className="text-lg font-bold text-green-600">{product.price}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {product.certifications.split(', ').map((cert, certIndex) => (
                          <span key={certIndex} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 mb-4 border-l-4 border-green-400">
                      <div className="flex items-start space-x-2">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 text-xs">🔬</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-800 mb-1">R&D Status</p>
                          <p className="text-xs text-gray-600">{product.rnd}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        View Details
                      </button>
                      <button className="w-full bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold py-2 px-4 rounded-xl transition-all duration-300">
                        Add to Cart
                      </button>
                    </div>
                  </>
                ) : (
                  // List View
                  <>
                    <div className={`w-16 h-16 bg-gradient-to-r ${product.categoryColor} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <span className="text-white text-xl">{product.categoryIcon}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 truncate">{product.name}</h3>
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-green-600">{product.price}</span>
                          <span className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <span className="text-xs font-medium text-green-600">{product.availability}</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-sm bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full font-medium">
                          {product.categoryShort}
                        </span>
                        <div className="flex gap-1">
                          {product.certifications.split(', ').map((cert, certIndex) => (
                            <span key={certIndex} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 flex items-center">
                          <span className="text-green-600 mr-1">🔬</span>
                          {product.rnd}
                        </p>
                        <div className="flex space-x-2">
                          <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            View Details
                          </button>
                          <button className="bg-white border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>


        </div>
      </div>

    </div>

    <style jsx>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes slide-up {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fade-in-delayed {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(30px) scale(0.95); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }

      .animate-fade-in {
        animation: fade-in 0.6s ease-out;
      }

      .animate-slide-up {
        animation: slide-up 0.8s ease-out;
      }

      .animate-fade-in-delayed {
        animation: fade-in-delayed 0.8s ease-out 0.3s both;
      }

      .animate-fade-in-up {
        animation: fade-in-up 0.6s ease-out both;
      }

      .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .backdrop-blur-sm {
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
      }

      .bg-clip-text {
        -webkit-background-clip: text;
        background-clip: text;
      }

      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }

 

      /* Focus states */
      button:focus,
      input:focus,
      select:focus {
        outline: 2px solid #10b981;
        outline-offset: 2px;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .lg\\:w-1\\/4 {
          width: 100%;
        }
        
        .lg\\:w-3\\/4 {
          width: 100%;
        }
        
        .sticky {
          position: static;
        }
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  </section>
);
};

export default Portfolio;