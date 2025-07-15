import React from 'react';
import { ShieldCheck, Zap, BarChart2, IndianRupee } from 'lucide-react';
import chatImg from '../assets/whycoseus/chat.png';
import headsetImg from '../assets/whycoseus/headset.png';

const features = [
  {
    Icon: ShieldCheck,
    iconBgColor: 'bg-[#E7DAF3]/20',
    iconColor: 'text-[#E7DAF3]',
    title: 'On-Time, Fixed-Route Rides',
    description:
      'No waiting, no detours — enjoy reliable, pre-scheduled cabs that run on fixed office routes.',
    textColor: 'text-[#E7DAF3]',
  },
  {
    Icon: IndianRupee,
    iconBgColor: 'bg-[#E7DAF3]/20',
    iconColor: 'text-[#E7DAF3]',
    title: 'Affordable Office Commute',
    description:
      'Pay up to 65% less than traditional cab services like Ola or Uber, without compromising on comfort or safety.',
    textColor: 'text-[#E7DAF3]',
  },
  {
    img: chatImg,
    iconBgColor: 'bg-[#E7DAF3]/20',
    title: 'Seamless App Experience',
    description:
      'Book, track, and manage your office rides easily with our intuitive mobile app and responsive customer support.',
    textColor: 'text-[#E7DAF3]',
  },
  {
    img: headsetImg,
    iconBgColor: 'bg-[#E7DAF3]/20',
    title: 'Dedicated Customer Support',
    description:
      'Get help when you need it — our responsive support team is available to resolve your issues quickly and professionally.',
    textColor: 'text-[#E7DAF3]',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:text-left">
          <div className="inline-block mb-4">
            <span className="text-white">Triply (FlixLogix)</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Why Choose Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl">
            We provide safe, reliable, and affordable commutes that prioritize employee well-being
            and convenience through rigorous safety measures and comfort enhancements.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={feature.title} className="relative pl-16">
                <div className="absolute left-0 top-0 h-full w-1 bg-white rounded-full" />
                <div className="inline-block p-5 rounded-2xl bg-gray-900">
                  <div className={`p-4 rounded-xl ${feature.iconBgColor}`}>
                    {feature.img ? (
                      <img
                        src={feature.img}
                        alt={feature.title + ' icon'}
                        className="h-10 w-10 object-contain"
                      />
                    ) : (
                      <feature.Icon
                        className={`h-10 w-10 ${feature.iconColor}`}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>
                <h3 className={`mt-6 text-xl font-bold leading-8 ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
