import React from 'react';

const Amenities = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Orange glow in the background - positioned a bit up and left from center */}
      <div className="absolute w-[800px] h-[800px] bg-orange-500 rounded-full opacity-20 blur-3xl" 
           style={{ left: 'calc(40% - 400px)', top: 'calc(40% - 400px)' }}></div>
      
      {/* Purple glow in the background - positioned a bit down and right from center */}
      <div className="absolute w-[800px] h-[800px] bg-purple-600 rounded-full opacity-20 blur-3xl"
           style={{ left: 'calc(60% - 400px)', top: 'calc(60% - 400px)' }}></div>
           
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
        {/* Title and Subtitle */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Amenities Offered By Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Experience premium comfort and convenience with our thoughtfully designed amenities for your daily commute.
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-4">
          {/* Top Row */}
          {/* First Card - Left card on top row */}
          <div className="col-span-12 md:col-span-6 bg-neutral-100 rounded-xl p-8 flex flex-col h-full relative overflow-hidden border border-gray-200">
            <div className="flex flex-col h-full">
              {/* Image - First on mobile */}
              <div className="w-full mb-6 order-1">
                <div className="flex justify-center md:justify-end">
                  <div className="relative">
                    {/* Person with phone illustration */}
                    <div className="absolute -left-20 top-0 w-24 h-24">
                      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scale(2)' }}>
                        <circle cx="50" cy="30" r="15" fill="#ff8a80" opacity="0.7" />
                        <path d="M45,30 Q50,40 55,30" stroke="black" fill="none" strokeWidth="1" />
                        <circle cx="45" cy="25" r="2" fill="black" />
                        <circle cx="55" cy="25" r="2" fill="black" />
                      </svg>
                    </div>
                    
                    {/* Phone with 17% */}
                    <div className="bg-red-500 rounded-lg p-1 transform rotate-3" style={{ width: '120px', height: '220px' }}>
                      <div className="w-full h-full bg-yellow-300 flex items-center justify-center rounded">
                        <span className="text-5xl font-bold">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content - Second on mobile */}
              <div className="w-full order-2">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Newspaper, Tissues and Water bottle</h2>
                  <p className="text-neutral-700 mb-6 text-sm md:text-base">
                    Each of our cabs keeps tissue box, water bottles and newspaper for Employees comfort during their daily commute.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Card - Right card on top row */}
          <div className="col-span-12 md:col-span-6 bg-neutral-100 rounded-xl p-8 flex flex-col h-full relative overflow-hidden border border-gray-200">
            <div className="flex flex-col h-full">
              {/* Image - First on mobile */}
              <div className="w-full mb-6 order-1">
                <div className="flex justify-center md:justify-end">
                  {/* Shopping cart illustration */}
                  <div className="relative transform -rotate-12">
                    <div className="w-40 h-40 bg-neutral-800 rounded-lg overflow-hidden relative">
                      <div className="absolute top-0 left-0 w-full h-full grid grid-cols-3 grid-rows-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className={`${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'} opacity-70`}></div>
                        ))}
                      </div>
                      <div className="absolute bottom-0 right-0 w-12 h-24 bg-blue-600 transform rotate-45 translate-x-6 translate-y-6"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content - Second on mobile */}
              <div className="w-full order-2">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Unparalleled Safety Measures</h2>
                  <p className="text-neutral-700 mb-6 text-sm md:text-base">
                    Ensuring the Safety of your Employees is our highest Priority with 100% safe and sanitized rides.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          {/* Third Card - Left card on bottom row (full height) */}
          <div className="col-span-12 md:col-span-4 bg-neutral-100 rounded-xl p-8 flex flex-col h-full relative overflow-hidden border border-gray-200">
            {/* Umbrella illustration - positioned at the top */}
            <div className="flex justify-center items-center mb-8 order-1">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 bg-green-400 rounded-full opacity-20" style={{ width: '120px', height: '120px', top: '-20px', left: '-60px' }}></div>
                <div className="absolute" style={{ width: '120px', height: '60px', top: '20px', left: '-30px', transform: 'rotate(-30deg)' }}>
                  <div className="w-full h-full bg-neutral-800 rounded-full"></div>
                </div>
                {/* Add an umbrella icon */}
                <div className="absolute top-0 left-0 right-0 flex justify-center">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12H12M12 2C17.52 2 22 6.48 22 12H12M12 2V12M12 12V21C12 21.55 11.55 22 11 22C10.45 22 10 21.55 10 21V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col h-full order-2">
              <div>
                <h2 className="text-3xl font-bold mb-4 leading-tight">Eco-Friendly Transportation</h2>
                <p className="text-neutral-700 mb-6 text-sm md:text-base">
                  Introducing eco-friendly transportation options such as electric vehicles or carbon offset programs to reduce environmental impact.
                </p>
              </div>
            </div>
          </div>

          {/* Right side column - contains Integrations and Watch Demo */}
          <div className="col-span-12 md:col-span-8 flex flex-col gap-4">
            {/* Fourth Card */}
            <div className="bg-neutral-100 rounded-xl p-8 flex flex-col h-full relative overflow-hidden border border-gray-200">
              <div className="flex flex-col h-full">
                {/* Image - First on mobile */}
                <div className="w-full mb-6 order-1">
                  <div className="flex justify-center md:justify-end">
                    <div className="relative">
                      <div className="text-6xl md:text-7xl font-bold text-purple-500" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '-2px', lineHeight: '0.9' }}>
                        VIP<br />SERVICE
                      </div>
                      
                      {/* Black curve illustration */}
                      <div className="absolute -right-16 -bottom-8">
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10,120 Q-20,60 10,10 L30,10 Q0,60 30,120 Z" fill="black" />
                          <circle cx="10" cy="10" r="5" fill="#FFFF00" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content - Second on mobile */}
                <div className="w-full order-2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Professional Chauffeurs</h2>
                  <p className="text-neutral-700 mb-6 text-sm md:text-base">
                    Our highly trained professional drivers provide exceptional service, including umbrella assistance during rainy conditions, ensuring you stay dry from door to door.
                  </p>
                </div>
              </div>
            </div>

            {/* VIP Services Section */}
            <div className="bg-neutral-100 rounded-xl p-8 flex flex-col md:flex-row justify-between items-center border border-gray-200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-0 whitespace-nowrap">Check us out on Play Store</h2>
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors border border-yellow-400">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities; 