import React from 'react';
import { ShieldCheck, Zap, BarChart2, CircleDollarSign } from 'lucide-react';

const features = [
  {
    Icon: ShieldCheck,
    iconBgColor: 'bg-green-500/10',
    iconColor: 'text-green-400',
    title: 'Guaranteed Ride Confirmations',
    description: 'We eliminate waiting and uncertainty. Your ride is confirmed instantly, so your travel plans are always secure.',
  },
  {
    Icon: Zap,
    iconBgColor: 'bg-yellow-500/10',
    iconColor: 'text-yellow-400',
    title: 'Seamless Mobile Experience',
    description: 'Time is money, so we help you save both. Use the intuitive Triply app to manage your rides and subscriptions without hassle.',
  },
  {
    Icon: BarChart2,
    iconBgColor: 'bg-pink-500/10',
    iconColor: 'text-pink-400',
    title: 'Smart Spending Insights',
    description: 'Spend smarter with our travel management tools that help you track your commute spending so you can budget better.',
  },
  {
    Icon: CircleDollarSign,
    iconBgColor: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    title: 'Fee-Free Cancellations',
    description: "Plans change. You shouldn't have to pay for it. We give you the flexibility to cancel rides without any fees.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:text-left">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Do even more with your commute
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="relative pl-16">
                <div className="absolute left-0 top-1 h-full w-0.5 bg-gray-600" />
                <div className="inline-block p-5 rounded-2xl bg-gray-900">
                    <div className={`p-4 rounded-xl ${feature.iconBgColor}`}>
                        <feature.Icon className={`h-10 w-10 ${feature.iconColor}`} aria-hidden="true" />
                    </div>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-8">{feature.title}</h3>
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