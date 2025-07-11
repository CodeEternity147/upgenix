import React from 'react';

const categories = [
  {
    title: 'Prescription Drugs',
    description: 'Comprehensive range of prescription medicines for various therapeutic needs.',
    link: '#',
    color: 'bg-violet-50',
    linkColor: 'text-violet-700',
  },
  {
    title: 'Nutraceuticals',
    description: 'Supplements and dietary products to support overall health and wellness.',
    link: '#',
    color: 'bg-green-50',
    linkColor: 'text-green-700',
  },
  {
    title: 'Herbal & Ayurvedic',
    description: 'Traditional herbal and ayurvedic solutions for holistic care.',
    link: '#',
    color: 'bg-orange-50',
    linkColor: 'text-orange-600',
  },
  {
    title: 'OTC Products',
    description: 'Over-the-counter medicines and healthcare essentials for daily needs.',
    link: '#',
    color: 'bg-blue-50',
    linkColor: 'text-blue-700',
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 px-4 md:px-0 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold text-center text-green-900 mb-2">Our Product Categories</h2>
      <p className="text-center text-gray-600 mb-6">Explore our diverse range of pharmaceutical and healthcare products, trusted by clients in India and around the world.</p>
      <div className="flex justify-center mb-8">
        <div className="flex items-center bg-white border rounded-full px-4 py-2 shadow-sm">
          <div className="flex -space-x-2 mr-3">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="client1" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="client2" className="w-8 h-8 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="client3" className="w-8 h-8 rounded-full border-2 border-white" />
            <div className="w-8 h-8 rounded-full bg-green-700 text-white flex items-center justify-center border-2 border-white text-sm font-bold">+</div>
          </div>
          <span className="font-semibold text-lg mr-1">5000+</span>
          <span className="text-gray-600 text-sm">Happy Clients</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div key={cat.title} className={`rounded-2xl p-6 ${cat.color} shadow-sm flex flex-col justify-between min-h-[200px]`}>
            <div>
              <h3 className="text-xl font-bold text-green-900 mb-2">{cat.title}</h3>
              <p className="text-gray-700 mb-4">{cat.description}</p>
            </div>
            <a href={cat.link} className={`underline font-medium ${cat.linkColor}`}>Learn more</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories; 