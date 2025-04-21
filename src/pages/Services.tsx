
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Navigation, Users, Calendar, MapPin, Clock, CreditCard } from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-lg mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Safe, comfortable, and hassle-free journeys across Karnataka
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ServiceCard 
              icon={<Car className="h-10 w-10" />}
              title="Airport Transfers"
              description="Prompt pickup and drop services to and from Bengaluru International Airport. We track flight timings to ensure we're there when you arrive, regardless of delays. Our airport transfer service includes free waiting time and assistance with luggage."
            />
            
            <ServiceCard 
              icon={<Navigation className="h-10 w-10" />}
              title="City Rides"
              description="Comfortable and reliable transportation within Bangalore for meetings, shopping, or any local travel needs. Our knowledgeable drivers navigate through the city efficiently, ensuring you reach your destination on time without the hassle of finding parking or dealing with traffic."
            />
            
            <ServiceCard 
              icon={<Users className="h-10 w-10" />}
              title="Outstation Trips"
              description="Explore Karnataka and beyond with our outstation services. Whether you're heading to Mysore, Coorg, Chikmagalur, Ooty, or any destination in South India, our experienced drivers ensure a safe and comfortable journey with their extensive knowledge of routes and local areas."
            />
            
            <ServiceCard 
              icon={<Calendar className="h-10 w-10" />}
              title="Package Tours"
              description="Customized package tours for families, friends, and corporate groups. Our package tours include transportation, suggested itineraries, and experienced drivers who double as guides with knowledge of local attractions, eateries, and hidden gems worth exploring."
            />
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Our Fleet</h2>
            <p className="text-gray-600 mb-6">
              We maintain a diverse fleet of well-maintained vehicles to suit your specific needs:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <VehicleCard type="Sedan" description="Comfortable cars perfect for 1-4 passengers for city rides and short trips." />
              <VehicleCard type="SUV" description="Spacious vehicles ideal for 1-6 passengers with extra luggage for longer journeys." />
              <VehicleCard type="Tempo Traveller" description="Mini-buses accommodating 9-12 passengers, perfect for group travel and tours." />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What Makes Our Service Genuine</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MapPin className="h-8 w-8 text-primary" />}
              title="Extensive Coverage"
              description="Services available all over Karnataka, with experienced drivers familiar with all routes and destinations."
            />
            <FeatureCard 
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Punctuality Guaranteed"
              description="We value your time and ensure prompt pickups and timely arrivals at your destinations."
            />
            <FeatureCard 
              icon={<CreditCard className="h-8 w-8 text-primary" />}
              title="Transparent Pricing"
              description="No hidden charges, clear fare breakdowns, and multiple payment options for your convenience."
            />
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Book Your Ride?</h2>
            <p className="text-lg mb-6">
              Contact us today to experience genuine service and hassle-free travel across Karnataka.
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

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="bg-primary p-3 rounded-full text-white mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const VehicleCard = ({ type, description }: { type: string; description: string }) => {
  return (
    <div className="bg-white p-5 rounded border border-gray-200">
      <h3 className="font-semibold text-lg mb-2">{type}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
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

export default Services;
