import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#F5EFFF] text-gray-800 pt-40 pb-24 -mt-24 md:pt-48">
        {/* Spacer to account for fixed navbar */}
        <div className="h-24"></div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-8">Smarter Commutes, Happier Offices</h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Triply transforms your daily commute with affordable, eco-friendly cab sharing for office-goers.
            Save up to 60% on your daily travel costs while reducing your carbon footprint.
          </p>
          <div className="space-x-4">
            <Link 
              to="/signup" 
              className="bg-[#6c2bc7] hover:bg-[#5a22a8] text-white px-8 py-3 rounded-lg font-medium text-lg inline-block transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:shadow-purple-200"
            >
              Start Saving Now
            </Link>
            <Link 
              to="/how-it-works" 
              className="bg-white text-[#6c2bc7] hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg inline-block transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:shadow-purple-100"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Triply?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-3">Premium Comfort</h3>
              <p className="text-gray-600">
                Enjoy amenities like tissue boxes, water bottles, and newspapers in our well-maintained, climate-controlled vehicles.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600">
                Our growing fleet of electric vehicles and carbon offset programs help you reduce your environmental impact.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-yellow-500 text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-3">Corporate Solutions</h3>
              <p className="text-gray-600">
                Customized travel plans for businesses of all sizes, with VIP options and dedicated account management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '1', title: 'Book Your Ride', desc: 'Use our app to book a ride in seconds' },
              { number: '2', title: 'Match & Share', desc: 'Get matched with fellow office commuters' },
              { number: '3', title: 'Ride & Save', desc: 'Enjoy comfortable rides at a fraction of the cost' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Commute?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who save time, money, and the planet with Triply.
          </p>
          <Link 
            to="/signup" 
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-medium text-lg inline-block"
          >
            Get Started for Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
