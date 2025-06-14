import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconChevronDown } from '@tabler/icons-react';

const faqData = [
    {
        question: 'What makes Snappy different from other messaging apps?',
        answer: 'Snappy is a feature-rich messaging app that focuses on privacy and user experience, offering end-to-end encryption by default.'
    },
    {
        question: 'How secure are my conversations on Snappy?',
        answer: 'All conversations on Snappy are end-to-end encrypted, meaning only you and the person you are communicating with can read what is sent.'
    },
    {
        question: 'Can I personalize my Snappy experience?',
        answer: 'Yes, Snappy offers a wide range of personalization options, from custom themes to chat wallpapers and notification sounds.'
    },
    {
        question: 'What group features does Snappy offer?',
        answer: 'Snappy offers robust group chat features, including admin controls, mentions, replies, and support for large groups.'
    },
];

const AccordionItem = ({ faq, isOpen, onClick }) => (
    <div className="border-b border-gray-200 py-1 last:border-b-0">
        <button onClick={onClick} className="flex justify-between items-center w-full py-4 text-left text-gray-800">
            <span className="font-medium text-lg">{faq.question}</span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <IconChevronDown size={20} />
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
                    <p className="pt-2 pb-4 text-gray-600">{faq.answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-white">
      {/* Top Section */}
      <div className="bg-purple-50 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">Contact Us</h1>
              <p className="text-lg text-gray-600 max-w-md">
                Email, call, or complete the form to learn how Snappy can solve your messaging problem.
              </p>
              <div className="space-y-3 pt-4">
                <p className="text-lg text-gray-800 font-medium">info@snappy.io</p>
                <p className="text-lg text-gray-800 font-medium">321-221-231</p>
              </div>
              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-semibold text-purple-600 tracking-wide">CUSTOMER SUPPORT</h3>
                <div className="grid sm:grid-cols-3 gap-8 mt-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Customer Support</h4>
                    <p className="text-sm text-gray-600">Our support team is available around the clock to address any concerns or queries you may have.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Feedback and Suggestions</h4>
                    <p className="text-sm text-gray-600">We are continuously working to improve Snappy. Your input is crucial in shaping the future of Snappy.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Media Inquiries</h4>
                    <p className="text-sm text-gray-600">For media-related questions or press inquiries, please contact us at media@snappyapp.com.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-1">Get in Touch</h2>
              <p className="text-gray-600 mb-6">You can reach us anytime</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} className="w-full bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500" required />
                  <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} className="w-full bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500" required />
                </div>
                <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500" required />
                <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500" />
                <textarea name="message" placeholder="How can we help?" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-gray-50 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500" required></textarea>
                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">Submit</button>
                <p className="text-xs text-gray-500 text-center">By contacting us, you agree to our <a href="#" className="underline text-purple-600">Terms of service</a> and <a href="#" className="underline text-purple-600">Privacy Policy</a>.</p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-200 h-96 lg:h-[500px] rounded-2xl flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder</p>
            </div>
            <div className="space-y-4 text-left">
              <p className="font-semibold text-gray-800">OUR LOCATION</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">Connecting Near and Far</h2>
              <div className="pt-4">
                <h3 className="text-xl font-bold text-gray-900">Headquarters</h3>
                <p className="text-lg text-gray-600 mt-2">Snappy Inc.<br/>San Francisco, USA<br/>123 Tech Boulevard, Suite 456<br/>San Francisco, CA 12345<br/>United States</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <p className="font-semibold text-gray-800">FAQ</p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">Do you have any questions for us?</h2>
              <p className="text-lg text-gray-600">If there are any questions you want to ask, we will answer all your questions.</p>
              <form className="flex items-center gap-2 pt-4">
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500" />
                <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors max-w-min">Submit</button>
              </form>
            </div>
            <div>
              {faqData.map((faq, index) => (
                <AccordionItem key={index} faq={faq} isOpen={openIndex === index} onClick={() => handleToggle(index)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

