
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, CreditCard } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">Why Choose Genuine Cabs BLR?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Reliable, on-time cab service across Karnataka. 24/7 support, online payments, and flexible booking options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<MapPin className="h-8 w-8 text-primary" />}
            title="Service All Over Karnataka"
            description="From Bangalore to any destination in Karnataka. Airport pickups, city rides, and outstation trips."
          />
          <FeatureCard 
            icon={<Clock className="h-8 w-8 text-primary" />}
            title="Punctual & Reliable"
            description="We value your time. Our drivers arrive on schedule, every time, with real-time updates."
          />
          <FeatureCard 
            icon={<CreditCard className="h-8 w-8 text-primary" />}
            title="Flexible Payment Options"
            description="Pay online, via UPI, or in cash. Transparent pricing with no hidden charges."
          />
        </div>

        <div className="text-center mt-12">
          <Link to="/about" className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
            Learn more about us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutPreview;
