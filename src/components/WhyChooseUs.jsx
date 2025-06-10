import React from 'react';
import { ShieldCheck, Zap, BarChart2, CircleDollarSign } from 'lucide-react';

const features = [
  {
    Icon: ShieldCheck,
    iconBgColor: 'bg-orange-400/50',
    iconColor: 'text-orange-400',
    title: 'Quality Services',
    description: 'Our vision is to provide employees with a safe, reliable, comfortable, and affordable commuting experience to the office through rigorous safety measures.',
    textColor: 'text-orange-400',
  },
  {
    Icon: CircleDollarSign,
    iconBgColor: 'bg-purple-400/50',
    iconColor: 'text-purple-400',
    title: 'Cost Efficient Solutions',
    description: 'We strategize rides to minimize company expenses, employing a point-to-point billing system that optimizes transportation costs for your business.',
    textColor: 'text-purple-400',
  },
  {
    Icon: BarChart2,
    iconBgColor: 'bg-orange-400/50',
    iconColor: 'text-orange-400',
    title: 'Free Consultation',
    description: 'Contact us to discuss your employee transportation needs, including the number of cabs needed, optimal route planning, and scheduling, all at no cost.',
    textColor: 'text-orange-400',
  },
  {
    Icon: Zap,
    iconBgColor: 'bg-purple-400/50',
    iconColor: 'text-purple-400',
    title: 'Customer Support',
    description: 'We provide exceptional customer support through responsive inquiries, attentive in-ride experiences, and immediate assistance whenever needed.',
    textColor: 'text-purple-400',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:text-left">
          <div className="inline-block mb-4">
            <span className="text-white">FlixLogix</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Why Choose Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl">
            We provide safe, reliable, and affordable commutes that prioritize employee well-being and convenience through rigorous safety measures and comfort enhancements.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={feature.title} className="relative pl-16">
                <div className="absolute left-0 top-0 h-full w-1 bg-white rounded-full" />
                <div className="inline-block p-5 rounded-2xl bg-gray-900">
                    <div className={`p-4 rounded-xl ${feature.iconBgColor}`}>
                        <feature.Icon className={`h-10 w-10 ${feature.iconColor}`} aria-hidden="true" />
                    </div>
                </div>
                <h3 className={`mt-6 text-xl font-bold leading-8 ${feature.textColor}`}>{feature.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 