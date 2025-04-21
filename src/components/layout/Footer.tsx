
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Genuine Cabs BLR</h3>
            <p className="mb-4">Your reliable ride partner across Karnataka. Safe, comfortable, and hassle-free journeys guaranteed.</p>
            <div className="flex space-x-4">
              {/* Social links could go here */}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors duration-200">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>info@genuinecabsblr.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Genuine Cabs BLR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
