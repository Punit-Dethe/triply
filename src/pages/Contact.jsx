import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, ChevronDown, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: 'What is Triply and how is it different from apps like Ola and Uber?',
    answer:
      'Triply is a shared cab service designed specifically for daily office commutes. Unlike ride-hailing apps that assign rides in real-time, Triply offers fixed routes and time slots with a subscription-based model. We use a mix of electric and fuel-based cabs to ensure reliable service while steadily transitioning toward sustainable mobility.',
  },
  {
    question: 'How do I book a seat with Triply?',
    answer:
      'Booking a seat is easy! Simply download the Triply app, select your preferred route, choose a pricing package (monthly, weekly, or single trip), set up your ride roster based on your office schedule, and you\'re done. Triply handles the rest, ensuring timely cab arrivals every day.',
  },
  {
    question: 'Is Triply safe and reliable for daily office commute?',
    answer:
      'Absolutely. All Triply cabs—whether EV or non-EV—are GPS-enabled, regularly maintained, and driven by verified drivers. We provide a safe, consistent, and punctual commute experience tailored for working professionals.',
  },
  {
    question: 'What if I need to change my pickup time or location?',
    answer:
      'You can easily update your pickup time or location through the Triply app before your scheduled ride. Changes are subject to availability on your selected route and time slot.',
  },
];

const AccordionItem = ({ faq, isOpen, onClick, index }) => (
  <div className={`border-b border-gray-200 py-4 last:border-b-0 ${index === 0 ? 'pt-0' : ''}`}>
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full text-left group"
      aria-expanded={isOpen}
    >
      <span className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors">
        {faq.question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0 ml-4 p-1 rounded-full group-hover:bg-gray-100 transition-colors"
      >
        <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="pt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    query: '',
    message: '',
  });
  const [openIndex, setOpenIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Query: ${formData.query} - ${formData.name}`;
    const body =
      `Name: ${formData.name}%0D%0A` +
      `Phone: ${formData.phone}%0D%0A` +
      `Email: ${formData.email}%0D%0A` +
      `Query: ${formData.query}%0D%0A%0D%0A` +
      `Message:%0D%0A${formData.message}`;
    window.location.href = `mailto:sumit.k@flixlogix.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setFormData({
      name: '',
      phone: '',
      email: '',
      query: '',
      message: '',
    });
  };

  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-white">
      <section className="relative py-20 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-black text-white rounded-full">
                  Get in Touch
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tighter leading-tight">
                Looking for a Better Office Ride? We're Here to Help.                </h1>
              </div>

              <p className="text-xl text-gray-700 max-w-xl">
              Skip the surge pricing, long waits, and unreliable rides. With fixed routes, flexible plans, and punctual pickups, we make your work travel hassle free whether you're commuting solo or with colleagues.
              </p>

              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-black rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email us</h3>
                    <a
                      href="mailto:sumit.k@flixlogix.com"
                      className="text-lg text-gray-600 hover:text-black transition-colors"
                    >
                      sumit.k@flixlogix.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-black rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Call us</h3>
                    <a
                      href="tel:+918793175464"
                      className="text-lg text-gray-600 hover:text-black transition-colors"
                    >
                      +91 8793175464
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-black rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Visit us</h3>
                    <p className="text-lg text-gray-600">
                      1st cross road, sr layout
                      <br />
                      Bengaluru 560017
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  {[
                    'Monday - Friday: 8:00 AM - 6:00 PM',
                    'Saturday: 9:00 AM - 5:00 PM',
                    'Sunday: Closed',
                  ].map((time, i) => (
                    <div key={i} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-black mr-3"></span>
                      <span className="text-gray-600">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              id="contact-form"
              className="bg-white p-8 sm:p-10 rounded-2xl border-2 border-black shadow-[8px_8px_0px_#000000]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-1 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black">Send us a message</h2>
                <p className="text-gray-600">We typically respond within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Query in Short
                  </label>
                  <input
                    type="text"
                    id="query"
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent mb-4"
                    placeholder="Briefly describe your query..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help? (Details)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Please provide more details about your query..."
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-lg transition-colors"
                  >
                    Open Email to Send Message
                  </button>
                  <p className="text-sm text-gray-600 mt-4 text-center">
                    We're committed to solving every query with care and attention. Our team will
                    get back to you soon!
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-black text-white rounded-full mb-4">
              Common Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our transportation services. Can't find the answer
              you're looking for?{' '}
              <a
                href="#contact-form"
                className="text-black underline hover:no-underline hover:text-gray-800 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact us
              </a>
              .
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border-2 border-black shadow-[8px_8px_0px_#000000]">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  faq={faq}
                  index={index}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>

            <div className="mt-12 p-6 bg-black rounded-xl text-center">
              <h3 className="text-xl font-bold text-white mb-3">Still have questions?</h3>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">
                Can't find the answer you're looking for? Our team is happy to help.
              </p>
              <a
                href="mailto:sumit.k@flixlogix.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
<h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to upgrade your daily office commute?            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                 Be part of the growing community choosing smarter office travel with Triply.            </p><br></br>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/download"
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download
              </Link>
              <Link
                to="/"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
