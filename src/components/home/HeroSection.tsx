
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, MessageSquare, CreditCard, MapPin, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="gradient-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-20" aria-hidden="true" />
      
      {/* Main Content */}
      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              <span className="block text-gradient-primary drop-shadow-md">Ride Genuine.</span>
              <span className="block">Ride Smart.</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Karnataka's Most Trusted Cab Service - <span className="font-semibold">Genuine Cabs BLR</span>
            </p>
            
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg mb-8 text-white">
              <p className="font-medium">
                Book Now Via WhatsApp, Phone, or Online
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium flex items-center hover-scale">
                <PhoneCall size={20} className="mr-2" />
                Call Now
              </Link>
              
              <a 
                href="https://wa.me/919000000000?text=I'm%20interested%20in%20booking%20a%20cab"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white hover:bg-[#128C7E] px-6 py-3 rounded-md font-medium flex items-center hover-scale"
              >
                <MessageSquare size={20} className="mr-2" />
                Book on WhatsApp
              </a>
              
              <Link to="/contact" className="bg-secondary text-white hover:bg-secondary/80 px-6 py-3 rounded-md font-medium flex items-center hover-scale">
                <CreditCard size={20} className="mr-2" />
                Pay Online
              </Link>
            </div>
          </div>
          
          {/* Image/Card Container */}
          <div className="flex justify-center lg:justify-end animate-bounce-in">
            <div className="relative">
              {/* Luxury cab image */}
              <div className="rounded-xl overflow-hidden shadow-2xl transform rotate-1 max-w-md">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Luxury Cab Service"
                  className={`w-full h-full object-cover transition-opacity duration-700 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setIsImageLoaded(true)}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="p-6">
                    <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">Premium Service</span>
                    <h3 className="text-white text-xl font-bold mt-2">Explore Karnataka in Style</h3>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg flex items-center glass-morphism animate-fade-in">
                <MapPin size={20} className="text-primary mr-2" />
                <span className="font-medium">All of Karnataka</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg flex items-center glass-morphism animate-fade-in">
                <span className="text-primary font-semibold">24/7 Service</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Service highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceHighlights.map((highlight, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-5 rounded-lg flex items-start luxury-shadow hover-scale"
            >
              <div className="bg-white/20 p-2 rounded-md text-white mr-4">
                {highlight.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{highlight.title}</h3>
                <p className="text-white/80 text-sm mt-1">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Link */}
        <div className="mt-10 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center text-white hover:text-white/80 text-lg font-medium transition-colors"
          >
            Explore Our Services
            <ChevronRight size={20} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const serviceHighlights = [
  {
    icon: <PhoneCall size={20} />,
    title: "Easy Booking",
    description: "Book via WhatsApp, phone call, or our online form in seconds"
  },
  {
    icon: <MapPin size={20} />,
    title: "Extensive Coverage",
    description: "Service available across Bangalore, Mysore & all of Karnataka"
  },
  {
    icon: <CreditCard size={20} />,
    title: "Flexible Payments",
    description: "Pay online, by card on delivery, or cash - your choice"
  }
];

export default HeroSection;
