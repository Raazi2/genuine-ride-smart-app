
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const callNow = () => {
    window.location.href = 'tel:+919876543210';
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919876543210?text=I%20want%20to%20book%20a%20cab', '_blank');
  };

  const sendEmail = () => {
    window.location.href = 'mailto:info@genuinecabsblr.com';
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-primary rounded-full p-3 text-white mr-4">
            <Phone size={20} />
          </div>
          <div>
            <h4 className="font-medium">Call or WhatsApp</h4>
            <p className="text-gray-600 mb-2">+91 98765 43210</p>
            <div className="flex space-x-3">
              <button onClick={callNow} className="text-sm text-primary hover:text-primary-dark font-medium">
                Call Now
              </button>
              <button onClick={openWhatsApp} className="text-sm text-primary hover:text-primary-dark font-medium">
                WhatsApp
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary rounded-full p-3 text-white mr-4">
            <Mail size={20} />
          </div>
          <div>
            <h4 className="font-medium">Email Us</h4>
            <p className="text-gray-600 mb-2">info@genuinecabsblr.com</p>
            <button onClick={sendEmail} className="text-sm text-primary hover:text-primary-dark font-medium">
              Send Email
            </button>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-primary rounded-full p-3 text-white mr-4">
            <MapPin size={20} />
          </div>
          <div>
            <h4 className="font-medium">Service Areas</h4>
            <p className="text-gray-600">
              All over Karnataka - Bangalore, Mysore, Coorg, Chikmagalur, and all major destinations within Karnataka.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-medium mb-2">Business Hours</h4>
        <p className="text-gray-600">
          We're available 24/7, 365 days a year to serve you better.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
