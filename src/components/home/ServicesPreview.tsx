
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Navigation, Users, Calendar } from 'lucide-react';

const ServicesPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-md mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Safe, comfortable, and hassle-free journeys across Karnataka with our professional drivers and well-maintained vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard 
            icon={<Car className="h-8 w-8" />}
            title="Airport Transfers"
            description="Prompt pickup and drop services to and from Bengaluru International Airport, with flight tracking and waiting time."
            to="/services"
          />
          <ServiceCard 
            icon={<Navigation className="h-8 w-8" />}
            title="City Rides"
            description="Comfortable and reliable transportation within Bangalore for meetings, shopping, or any local travel needs."
            to="/services"
          />
          <ServiceCard 
            icon={<Users className="h-8 w-8" />}
            title="Outstation Trips"
            description="Explore Karnataka and beyond with our outstation services. Mysore, Coorg, Chikmagalur, and more destinations."
            to="/services"
          />
          <ServiceCard 
            icon={<Calendar className="h-8 w-8" />}
            title="Package Tours"
            description="Customized package tours for families, friends, and corporate groups with experienced guides."
            to="/services"
          />
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
            View all our services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  to 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  to: string;
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-primary p-3 rounded-full text-white mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={to} className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServicesPreview;
