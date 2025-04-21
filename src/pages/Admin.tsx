
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Shield, User, MapPin, Calendar, Clock, PhoneCall, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Types for Admin page
interface BookingData {
  id: string;
  name: string;
  email: string;
  phone: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  cabType: string;
  message: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'confirmed' | 'completed' | 'cancelled';
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // For demo purposes, we'll use localStorage to simulate bookings
  useEffect(() => {
    // Check if admin is logged in
    const adminAuth = localStorage.getItem('adminAuth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
      loadBookings();
    }
  }, []);

  const loadBookings = () => {
    // In a real app, this would be an API call
    const savedBookings = localStorage.getItem('bookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a production app, this should be a secure API call
    setTimeout(() => {
      // Demo password for testing purposes
      if (password === 'admin123') {
        localStorage.setItem('adminAuth', 'true');
        setIsAuthenticated(true);
        loadBookings();
        toast.success('Welcome to the Admin Dashboard');
      } else {
        toast.error('Invalid password');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    navigate('/admin');
    toast.info('Logged out successfully');
  };

  const updateBookingStatus = (id: string, status: BookingData['status']) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === id ? {...booking, status} : booking
    );
    
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    toast.success(`Booking status updated to ${status}`);
  };

  const sendWhatsAppMessage = (phone: string, name: string) => {
    // Format the phone number (remove spaces, +, etc.)
    const formattedPhone = phone.replace(/\D/g, '');
    
    // Prepare message text
    const message = `Hello ${name}, thank you for booking with Genuine Cabs BLR. We're confirming your booking details. Please reply to this message if you have any questions.`;
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    toast.success('WhatsApp opened with pre-filled message');
  };

  const sendEmail = (email: string, name: string) => {
    // In a real app, this would be an API call to send an email
    // For demo purposes, we'll just open the default mail client
    const subject = 'Your Booking with Genuine Cabs BLR';
    const body = `Hello ${name},\n\nThank you for booking with Genuine Cabs BLR. We're confirming your booking details. Please reply to this email if you have any questions.\n\nRegards,\nGenuine Cabs BLR Team`;
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success('Email client opened with pre-filled message');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center pattern-bg">
        <div className="luxury-card p-8 w-full max-w-md animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-2xl font-bold">Admin Login</h1>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-2 rounded-md"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </form>
          
          <div className="mt-4 text-sm text-center text-gray-600">
            <p>For demo purposes, use password: admin123</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 pattern-bg">
      <div className="container-custom py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Genuine Cabs BLR Admin</h1>
          <Button onClick={handleLogout} variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
            Logout
          </Button>
        </div>
        
        <div className="luxury-card p-6 mb-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Booking Management</h2>
          
          {bookings.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>No bookings available yet</p>
              <p className="text-sm mt-2">Bookings will appear here when customers submit booking requests</p>
            </div>
          ) : (
            <div className="overflow-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking Details</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div className="flex items-start">
                          <User className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                          <div>
                            <div className="font-medium">{booking.name}</div>
                            <div className="text-sm text-gray-500">{booking.email}</div>
                            <div className="text-sm text-gray-500">{booking.phone}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-gray-900">From: {booking.pickupLocation}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-gray-900">To: {booking.dropoffLocation}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-gray-900">{booking.date}</span>
                            <Clock className="h-4 w-4 text-gray-400 ml-2 mr-1" />
                            <span className="text-gray-900">{booking.time}</span>
                          </div>
                          <div className="text-sm text-gray-900">
                            <span className="font-medium">Cab Type:</span> {booking.cabType}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          booking.status === 'new' ? 'bg-blue-100 text-blue-800' :
                          booking.status === 'contacted' ? 'bg-yellow-100 text-yellow-800' :
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'completed' ? 'bg-purple-100 text-purple-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-4 space-y-2">
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => sendWhatsAppMessage(booking.phone, booking.name)}
                            className="inline-flex items-center px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600"
                          >
                            <Send className="h-3 w-3 mr-1" />
                            WhatsApp
                          </button>
                          <button 
                            onClick={() => sendEmail(booking.email, booking.name)}
                            className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                          >
                            <Mail className="h-3 w-3 mr-1" />
                            Email
                          </button>
                        </div>
                        <div>
                          <select 
                            value={booking.status}
                            onChange={(e) => updateBookingStatus(booking.id, e.target.value as BookingData['status'])}
                            className="text-xs border rounded p-1 w-full"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        <div className="luxury-card p-6 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Quick Communication</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <PhoneCall className="h-5 w-5 text-primary mr-2" />
                Make a Call
              </h3>
              <p className="text-sm text-gray-600 mb-4">Quickly call a customer to discuss booking details</p>
              <div className="flex">
                <input 
                  type="tel" 
                  placeholder="Enter phone number" 
                  className="border flex-1 rounded-l-md p-2 text-sm"
                />
                <button className="bg-primary text-white px-3 py-2 rounded-r-md text-sm">
                  Call
                </button>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3 flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                Send Email
              </h3>
              <p className="text-sm text-gray-600 mb-4">Send a quick email to a customer</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="border flex-1 rounded-l-md p-2 text-sm"
                />
                <button className="bg-primary text-white px-3 py-2 rounded-r-md text-sm">
                  Compose
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
