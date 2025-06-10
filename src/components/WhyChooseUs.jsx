import React from 'react';
import { ShieldCheck, Zap, BarChart2, CircleDollarSign } from 'lucide-react';

const features = [
  {
    Icon: ShieldCheck,
<<<<<<< HEAD
    iconBgColor: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
    title: 'Quality Services',
    description: 'Our vision is to provide employees with a safe, reliable, comfortable, and affordable commuting experience to the office through rigorous safety measures.',
    textColor: 'text-orange-200',
  },
  {
    Icon: CircleDollarSign,
    iconBgColor: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    title: 'Cost Efficient Solutions',
    description: 'We strategize rides to minimize company expenses, employing a point-to-point billing system that optimizes transportation costs for your business.',
    textColor: 'text-purple-200',
  },
  {
    Icon: BarChart2,
    iconBgColor: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
    title: 'Free Consultation',
    description: 'Contact us to discuss your employee transportation needs, including the number of cabs needed, optimal route planning, and scheduling, all at no cost.',
    textColor: 'text-orange-200',
  },
  {
    Icon: Zap,
    iconBgColor: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    title: 'Customer Support',
    description: 'We provide exceptional customer support through responsive inquiries, attentive in-ride experiences, and immediate assistance whenever needed.',
    textColor: 'text-purple-200',
=======
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
>>>>>>> fd991b9c5d326dacebaef5a64934b13ddbf2bde2
  },
];

const WhyChooseUs = () => {
  return (
<<<<<<< HEAD
    <section className="bg-black text-white py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:text-left">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">FlixLogix</span>
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
                <div className="absolute left-0 top-1 h-full w-0.5 bg-gradient-to-b from-orange-500 to-purple-600" />
=======
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
>>>>>>> fd991b9c5d326dacebaef5a64934b13ddbf2bde2
                <div className="inline-block p-5 rounded-2xl bg-gray-900">
                    <div className={`p-4 rounded-xl ${feature.iconBgColor}`}>
                        <feature.Icon className={`h-10 w-10 ${feature.iconColor}`} aria-hidden="true" />
                    </div>
                </div>
<<<<<<< HEAD
                <h3 className={`mt-6 text-xl font-bold leading-8 ${feature.textColor}`}>{feature.title}</h3>
=======
                <h3 className="mt-6 text-xl font-bold leading-8">{feature.title}</h3>
>>>>>>> fd991b9c5d326dacebaef5a64934b13ddbf2bde2
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