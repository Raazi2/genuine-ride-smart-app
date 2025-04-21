
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // This ensures that when someone visits the root path, they're redirected to the Home component
    navigate('/', { replace: true });
  }, [navigate]);

  return <Home />;
};

export default Index;
