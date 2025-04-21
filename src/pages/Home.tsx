
import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import ServicesPreview from '../components/home/ServicesPreview';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <ContactCTA />
    </div>
  );
};

export default Home;
