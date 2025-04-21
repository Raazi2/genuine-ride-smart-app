
import { Link } from 'react-router-dom';
import { ArrowRight, Car, Navigation, Users, Calendar, MapPin, Clock, CreditCard } from 'lucide-react';

const LUXURY_GRADIENT = "bg-gradient-to-tr from-[#a18cd1] via-[#fdeff9] to-[#fbc2eb]";

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className={`${LUXURY_GRADIENT} relative py-16`}>
        <div className="absolute inset-0 opacity-30 bg-[url('/src/assets/taxi-pattern.png')] bg-cover bg-center pointer-events-none" aria-hidden="true" />
        <div className="container-custom relative z-10 animate-fade-in">
          <div className="max-w-3xl">
            <h1 className="heading-lg mb-6 text-gradient-primary drop-shadow">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 font-medium">
              Safe, comfortable, and hassle-free journeys across Karnataka.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="section-padding bg-white/70 glass-morphism">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ServiceCard 
              icon={<Car className="h-10 w-10" />}
              title="Airport Transfers"
              description="Prompt pickup and drop services to and from Bengaluru International Airport. We track flight timings, ensure we're there when you arrive, and help with your luggage."
            />
            <ServiceCard 
              icon={<Navigation className="h-10 w-10" />}
              title="City Rides"
              description="Comfortable, reliable transportation within Bangalore for any need. Our drivers ensure timely arrivals and smooth city navigation."
            />
            <ServiceCard 
              icon={<Users className="h-10 w-10" />}
              title="Outstation Trips"
              description="Explore Karnataka & beyond—Mysore, Coorg, Ooty, and more—with experienced drivers ensuring a safe, enjoyable journey."
            />
            <ServiceCard 
              icon={<Calendar className="h-10 w-10" />}
              title="Package Tours"
              description="Custom tours for families, friends, or corporate groups including transport and suggested itineraries with guides."
            />
          </div>
          
          {/* Our Fleet */}
          <div className="glass-morphism bg-white/80 p-8 rounded-lg shadow-xl border border-gray-100 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Our Fleet</h2>
            <p className="text-gray-700 mb-6">
              Luxury and comfort, tailored for every journey. Choose from our premium fleet:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <VehicleCard type="Sedan" description="Perfect for 1-4 passengers – safe, quiet, and reliable for city or airport trips." />
              <VehicleCard type="Prime Sedan" description="Premium sedans with added comfort for executives or special occasions." />
              <VehicleCard type="SUV" description="Spacious, powerful SUV rides for families or heavy luggage; up to 6 passengers." />
              <VehicleCard type="Innova" description="Toyota Innova – luxurious 6/7 seater, famous for highway and long outstation rides." />
              <VehicleCard type="Tempo Traveller" description="Mini-bus (9-12 seats). Perfect for group travel – friends, family, or corporate teams." />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12 text-gradient-primary">What Makes Our Service Genuine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MapPin className="h-8 w-8 text-primary" />}
              title="Extensive Coverage"
              description="All over Karnataka by expert drivers who know every region."
            />
            <FeatureCard 
              icon={<Clock className="h-8 w-8 text-primary" />}
              title="Punctuality Guaranteed"
              description="Prompt pickups, reliable service, always on your time."
            />
            <FeatureCard 
              icon={<CreditCard className="h-8 w-8 text-primary" />}
              title="Transparent Pricing"
              description="No hidden charges—see your fare before you ride, easy payment options."
            />
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-morphism bg-gradient-to-tr from-primary to-[#fbc2eb] text-secondary p-8 rounded-lg text-center animate-fade-in">
            <h2 className="text-2xl font-semibold mb-4">Ready to Book Your Ride?</h2>
            <p className="text-lg mb-6">
              Contact us today and enjoy genuine service and luxury rides across Karnataka.
            </p>
            <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-colors duration-200 inline-flex items-center justify-center hover-scale">
              Book Now
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Info for Owner */}
      <section className="container-custom my-12">
        <div className="glass-morphism bg-yellow-50 p-6 rounded-lg text-center shadow flex flex-col items-center max-w-xl mx-auto animate-fade-in">
          <span className="text-xl font-semibold mb-2 text-primary">How does the owner receive booking info?</span>
          <p className="text-gray-700 mb-2">
            Each booking/contact form is sent instantly to the owner by email or WhatsApp. <br />
            <span className="italic text-sm text-muted-foreground">
              (Integrate with Gmail/WhatsApp API, or see all requests in the admin dashboard.)
            </span>
          </p>
          <p className="text-xs text-muted-foreground">
            Need this set up? Ask your developer to connect your form to your desired notification method.
          </p>
        </div>
      </section>
    </div>
  );
};

// Animated, Luxury Card Styles
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white/90 glass-morphism p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl hover-scale transition-shadow duration-300 animate-fade-in">
    <div className="flex items-center mb-4">
      <div className="bg-primary p-3 rounded-full text-white mr-4 shadow-md">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-700">{description}</p>
  </div>
);

const VehicleCard = ({ type, description }) => (
  <div className="bg-white/80 glass-morphism p-5 rounded border border-gray-200 shadow-md hover-scale transition duration-200 animate-fade-in">
    <h3 className="font-semibold text-lg mb-2 text-primary">{type}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/90 glass-morphism p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl hover-scale transition-shadow duration-300 animate-fade-in">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default Services;

