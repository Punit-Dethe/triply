import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Phone, MapPin, ChevronDown, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
    {
        question: 'What areas do you serve?',
        answer: 'We operate in all major metropolitan areas. Our services are available for both local commutes and intercity travel, with dedicated routes for corporate clients.'
    },
    {
        question: 'How do I book a ride for my team?',
        answer: 'You can book rides through our corporate portal, mobile app, or by contacting our dedicated account managers for enterprise solutions.'
    },
    {
        question: 'What safety measures are in place?',
        answer: 'All our vehicles undergo regular maintenance, and our drivers are professionally trained and background-checked. We also implement strict health and safety protocols.'
    },
    {
        question: 'Can I get a dedicated vehicle for my company?',
        answer: 'Yes, we offer dedicated vehicle solutions for corporate clients with custom scheduling and routing options to fit your business needs.'
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
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    company: '',
    message: '' 
  });
  const [openIndex, setOpenIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically make an API call to submit the form
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for your message! Our team will get back to you soon.');
      setFormData({ 
        firstName: '', 
        lastName: '', 
        email: '', 
        phone: '', 
        company: '',
        message: '' 
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="bg-white">
      {/* Hero Section */}
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
                  Let's Talk About Your Transportation Needs
                </h1>
              </div>
              
              <p className="text-xl text-gray-700 max-w-xl">
                Our team is here to help you find the perfect transportation solution for your business.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-black rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email us</h3>
                    <a href="mailto:contact@triply.com" className="text-lg text-gray-600 hover:text-black transition-colors">contact@triply.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-black rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Call us</h3>
                    <a href="tel:+18005551234" className="text-lg text-gray-600 hover:text-black transition-colors">+1 (800) 555-1234</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-black rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Visit us</h3>
                    <p className="text-lg text-gray-600">123 Business Ave, Suite 100<br/>San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Business Hours</h3>
                <div className="space-y-2">
                  {['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 5:00 PM', 'Sunday: Closed'].map((time, i) => (
                    <div key={i} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-black mr-3"></span>
                      <span className="text-gray-600">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
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
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
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
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent" 
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                  <textarea 
                    id="message"
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows="4" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent" 
                    placeholder="Tell us about your transportation needs..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full bg-black hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-lg transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="underline hover:text-black">Privacy Policy</a> and{' '}
                    <a href="/terms" className="underline hover:text-black">Terms of Service</a>.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Everything you need to know about our transportation services. Can't find the answer you're looking for?{' '}
              <a href="mailto:support@triply.com" className="text-black underline hover:no-underline">Contact us</a>.
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
                href="mailto:support@triply.com" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to transform your corporate transportation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that trust us for their transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link 
                to="/solutions" 
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

