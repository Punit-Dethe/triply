import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Triply was founded with a simple mission: to provide exceptional services that make a real difference in people's lives. 
            Our team of dedicated professionals is committed to delivering top-quality solutions tailored to your unique needs.
          </p>
          <h2 className="text-2xl font-semibold mb-4 mt-8">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Customer-first approach in everything we do</li>
            <li>Commitment to excellence and quality</li>
            <li>Innovation and continuous improvement</li>
            <li>Integrity and transparency</li>
            <li>Community and environmental responsibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
