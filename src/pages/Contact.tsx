
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-lg mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Reach out to book a ride or inquire about our services
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9974193219!2d77.35073573336838!3d12.95384772578309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650964941014!5m2!1sen!2sin" 
                width="100%" 
                height="100%"
                className="rounded-lg"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Genuine Cabs BLR Service Area"
              ></iframe>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              We provide cab services across Bangalore and all of Karnataka
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
