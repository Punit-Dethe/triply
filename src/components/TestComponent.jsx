import React from 'react';

const TestComponent = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-600 mb-6">
          Welcome to Triply
        </h1>
        <p className="text-gray-700 mb-8">
          This is a test component to verify that Tailwind CSS is working correctly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature One</h2>
            <p className="text-gray-600">
              This is a sample feature card with some placeholder text.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">Feature Two</h2>
            <p className="text-gray-600">
              Another sample feature card with some placeholder text.
            </p>
          </div>
        </div>
        <button className="mt-8 bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TestComponent;
