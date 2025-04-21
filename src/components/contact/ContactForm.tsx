
import { useState } from 'react';
import { toast } from 'sonner';
import { Mail, Phone, Calendar, Clock, MapPin, User, MessageSquare, Car } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    cabType: 'sedan',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save booking to localStorage for demo purposes
      // In a real app, this would be an API call
      const existingBookings = localStorage.getItem('bookings');
      const bookings = existingBookings ? JSON.parse(existingBookings) : [];
      
      const newBooking = {
        id: uuidv4(),
        ...formData,
        createdAt: new Date().toISOString(),
        status: 'new'
      };
      
      bookings.push(newBooking);
      localStorage.setItem('bookings', JSON.stringify(bookings));
      
      // Send notification to owner via email (demo)
      console.log('Sending email notification to owner:', newBooking);
      
      // Send notification to owner via WhatsApp (demo)
      console.log('Sending WhatsApp notification to owner:', newBooking);
      
      // Show success toast
      toast.success('Booking request submitted successfully! We will contact you shortly.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        pickupLocation: '',
        dropoffLocation: '',
        date: '',
        time: '',
        cabType: 'sedan',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="luxury-card p-8 animate-fade-in">
      <h3 className="text-2xl font-bold mb-6 text-primary">Book Your Premium Ride</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 flex items-center">
              <User className="h-4 w-4 mr-2 text-primary" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 flex items-center">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 flex items-center">
            <Phone className="h-4 w-4 mr-2 text-primary" />
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Pickup Location *
          </label>
          <input
            type="text"
            id="pickupLocation"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
            placeholder="e.g., Bengaluru Airport, Terminal 1"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700 flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            Drop-off Location *
          </label>
          <input
            type="text"
            id="dropoffLocation"
            name="dropoffLocation"
            value={formData.dropoffLocation}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
            placeholder="e.g., Indiranagar, Bangalore"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-primary" />
              Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 flex items-center">
              <Clock className="h-4 w-4 mr-2 text-primary" />
              Time *
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="cabType" className="block text-sm font-medium text-gray-700 flex items-center">
              <Car className="h-4 w-4 mr-2 text-primary" />
              Cab Type *
            </label>
            <select
              id="cabType"
              name="cabType"
              value={formData.cabType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
            >
              <option value="sedan">Sedan</option>
              <option value="prime_sedan">Prime Sedan</option>
              <option value="suv">SUV</option>
              <option value="innova">Innova</option>
              <option value="tempo">Tempo Traveller</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 flex items-center">
            <MessageSquare className="h-4 w-4 mr-2 text-primary" />
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all duration-200"
            placeholder="Any special requirements or information..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-4 rounded-md transition-all duration-300 flex items-center justify-center hover-scale"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Book Your Premium Ride'
          )}
        </button>
        
        <p className="text-xs text-center text-gray-500 mt-4">
          By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
