import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const order = location.state?.order;
    if (order) {
      navigate('/order-tracking', { state: { order }, replace: true });
    } else {
      navigate('/menu', { replace: true });
    }
  }, [navigate, location]);

  return null;
};

export default OrderSuccess;
