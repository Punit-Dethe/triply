import React from 'react';
import ecoFriendlyImage from '../assets/amenities/ecoo.png';
import ntbImage from '../assets/amenities/paper.png';
import shieldImage from '../assets/amenities/shield2.png';
import carImage from '../assets/amenities/carc.png';

const Amenities = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">

      <div className="absolute w-[800px] h-[800px] bg-orange-500 rounded-full opacity-10 blur-3xl" 
           style={{ left: 'calc(40% - 400px)', top: 'calc(40% - 400px)' }}></div>
      

      <div className="absolute w-[800px] h-[800px] bg-purple-600 rounded-full opacity-15 blur-3xl"
           style={{ left: 'calc(60% - 400px)', top: 'calc(60% - 400px)' }}></div>
           
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">

        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Amenities Offered By Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Experience premium comfort and convenience with our thoughtfully designed amenities for your daily commute.
          </p>
        </div>
        
        <div className="grid grid-cols-12 gap-4">


          <div className="col-span-12 md:col-span-6 bg-white/70 backdrop-blur rounded-xl p-4 flex flex-col h-full relative overflow-hidden border border-gray-200">
            <div className="flex flex-col h-full relative z-10">
              <div className="flex-1 flex items-center justify-center mb-4 relative">
                <img 
                  src={ntbImage} 
                  alt="Newspaper, tissues and water bottle" 
                  className="h-48 object-contain relative z-10"
                />
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Newspaper, Tissues<br />and Clean Water bottle</h2>
                <p className="text-neutral-700 text-sm md:text-base">
                Every Triply cab is stocked with essentials like tissues, water bottles, and a daily newspaper—because we believe your ride to work should be as comfortable as your workspace.                </p>
              </div>
            </div>
          </div>


          <div className="col-span-12 md:col-span-6 bg-white/70 backdrop-blur rounded-xl p-4 flex flex-col h-full relative overflow-hidden border border-gray-200">
            <div className="flex flex-col h-full relative z-10">
              <div className="flex items-center justify-center md:justify-center pt-4 md:pt-8 pb-4 md:pb-0 md:pl-52 relative">
                <img 
                  src={shieldImage} 
                  alt="Safety shield" 
                  className="h-40 object-contain"
                />
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Unparalleled<br />Safety Measures</h2>
                <p className="text-neutral-700 text-sm md:text-base">
                We prioritize well-being with fully sanitized cabs, trained drivers, and real-time tracking ensuring every ride is safe, secure, and stress free.                </p>
              </div>
            </div>
          </div>



          <div className="col-span-12 md:col-span-4 bg-white/70 backdrop-blur rounded-xl p-4 flex flex-col h-full relative overflow-hidden border border-gray-200">
            <div className="flex justify-center items-center mb-0 order-1 relative">
              <div className="relative w-full flex items-center justify-center z-10">
                <img 
                  src={ecoFriendlyImage}
                  alt="Eco-friendly transportation" 
                  className="w-56 h-56 object-contain"
                />
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


          <div className="col-span-12 md:col-span-8 flex flex-col gap-4">

            <div className="bg-white/70 backdrop-blur rounded-xl p-8 flex flex-col h-full relative overflow-hidden border border-gray-200">
              <div className="flex flex-col h-full">
                <div className="w-full flex justify-end mb-4 pr-8">
                  <img 
                    src={carImage} 
                    alt="Luxury car" 
                    className="h-32 object-contain"
                  />
                </div>
                <div className="w-full">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Professional Chauffeurs</h2>
                  <p className="text-neutral-700 text-sm md:text-base">
                    Our highly trained professional drivers provide exceptional service, including umbrella assistance during rainy conditions, ensuring you stay dry from door to door.
                  </p>
                </div>
              </div>
            </div>


            <div className="bg-white/30 backdrop-blur rounded-xl p-8 flex flex-col md:flex-row justify-between items-center border border-gray-200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-0 whitespace-nowrap">Check us out on Play Store</h2>
              <a 
                href="https://play.google.com/store/apps/details?id=com.triply.app&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-neutral-800 transition-colors border border-yellow-400">
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities; 