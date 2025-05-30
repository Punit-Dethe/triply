import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies.',
      icon: '💻'
    },
    {
      title: 'Mobile Apps',
      description: 'Beautiful and functional mobile applications for iOS and Android.',
      icon: '📱'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that delights and engages your audience.',
      icon: '🎨'
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence.',
      icon: '📈'
    },
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic.',
      icon: '🔍'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your business.',
      icon: '☁️'
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Our Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We offer a wide range of professional services to help your business grow and succeed in the digital world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
