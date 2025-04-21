
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-lg mb-6">About Genuine Cabs BLR</h1>
            <p className="text-xl text-gray-300">
              Your Reliable Ride Partner Across Karnataka
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                At Genuine Cabs BLR, we believe every journey should be safe, comfortable, and hassle-free. Whether you're traveling within Bangalore or exploring Karnataka, our experienced drivers and well-maintained vehicles are here to ensure a seamless ride.
              </p>
              <p className="text-gray-600 mb-4">
                We started with a simple mission: to provide reliable transportation services that customers can trust. Over the years, we've grown to become one of Karnataka's most trusted cab services by focusing on what matters most - customer satisfaction, punctuality, and genuine service.
              </p>
              <p className="text-gray-600">
                With our extensive knowledge of local routes and destinations, we offer more than just transportation - we provide an experience that makes your journey memorable for all the right reasons.
              </p>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
              
              <div className="space-y-4">
                <Feature text="Experienced and professional drivers" />
                <Feature text="Well-maintained, comfortable vehicles" />
                <Feature text="Transparent pricing with no hidden charges" />
                <Feature text="24/7 availability and customer support" />
                <Feature text="Extensive knowledge of Karnataka routes" />
                <Feature text="Punctual service, valuing your time" />
                <Feature text="Flexible booking options via WhatsApp, phone, or email" />
                <Feature text="Secure online payment options" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-8">Our Mission & Vision</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, safe, and comfortable transportation services that exceed customer expectations, ensuring every journey is hassle-free and enjoyable.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and preferred transportation partner across Karnataka, known for exceptional service quality, safety, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Experience Genuine Service?</h2>
            <p className="text-lg mb-6">
              Book your ride today and discover why we're Karnataka's most trusted cab service.
            </p>
            <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-colors duration-200 inline-flex items-center justify-center">
              Book Now
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Feature = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start">
      <div className="bg-primary rounded-full p-1 text-white mr-3 mt-1">
        <Check size={14} />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default About;
