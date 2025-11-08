import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2, Clock, ChefHat, Package, Home } from 'lucide-react';
import { Order } from '@/types/food';

const OrderTracking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const order = location.state?.order as Order;
  
  const [timeRemaining, setTimeRemaining] = useState(order?.estimatedTime || 0);
  const [currentStatus, setCurrentStatus] = useState<Order['status']>('pending');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!order) {
      navigate('/menu');
      return;
    }

    // Simulate order progress
    const totalTime = order.estimatedTime;
    const statusTimings = {
      pending: 0.2,
      preparing: 0.6,
      ready: 0.9,
      delivered: 1
    };

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 60000); // Update every minute

    // Update status based on elapsed time
    const statusInterval = setInterval(() => {
      const elapsed = totalTime - timeRemaining;
      const progressPercent = (elapsed / totalTime) * 100;
      setProgress(progressPercent);

      if (progressPercent >= statusTimings.delivered * 100) {
        setCurrentStatus('delivered');
      } else if (progressPercent >= statusTimings.ready * 100) {
        setCurrentStatus('ready');
      } else if (progressPercent >= statusTimings.preparing * 100) {
        setCurrentStatus('preparing');
      } else {
        setCurrentStatus('pending');
      }
    }, 5000); // Check every 5 seconds

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, [order, navigate, timeRemaining]);

  if (!order) return null;

  const statusConfig = {
    pending: { icon: Clock, label: 'Order Received', color: 'text-muted-foreground' },
    preparing: { icon: ChefHat, label: 'Being Prepared', color: 'text-primary' },
    ready: { icon: Package, label: 'Ready for Pickup', color: 'text-success' },
    delivered: { icon: CheckCircle2, label: 'Completed', color: 'text-success' }
  };

  const statusSteps = [
    { key: 'pending', label: 'Received', icon: Clock },
    { key: 'preparing', label: 'Preparing', icon: ChefHat },
    { key: 'ready', label: 'Ready', icon: Package },
    { key: 'delivered', label: 'Complete', icon: CheckCircle2 }
  ];

  const currentStatusIndex = statusSteps.findIndex(s => s.key === currentStatus);

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Order Tracking</h1>
            <Button variant="outline" onClick={() => navigate('/menu')}>
              <Home className="w-4 h-4 mr-2" />
              Back to Menu
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Order Status Card */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Order #{order.id.slice(0, 8).toUpperCase()}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {new Date(order.timestamp).toLocaleString()}
                </p>
              </div>
              <Badge className="text-lg px-4 py-2">
                {statusConfig[currentStatus].label}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Progress Bar */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Order Progress</span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>

              {/* Time Remaining */}
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground">Estimated Time</p>
                <p className="text-2xl font-bold text-primary">
                  {timeRemaining > 0 ? `${timeRemaining} mins` : 'Ready!'}
                </p>
              </div>

              {/* Status Steps */}
              <div className="grid grid-cols-4 gap-2">
                {statusSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index <= currentStatusIndex;
                  const isCurrent = index === currentStatusIndex;
                  
                  return (
                    <div
                      key={step.key}
                      className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
                        isActive
                          ? 'border-primary bg-primary/5'
                          : 'border-muted bg-muted/20'
                      } ${isCurrent ? 'ring-2 ring-primary ring-offset-2' : ''}`}
                    >
                      <Icon
                        className={`w-6 h-6 mb-2 ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`}
                      />
                      <span className={`text-xs font-medium text-center ${
                        isActive ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {step.label}
                      </span>
                      {isActive && (
                        <CheckCircle2 className="w-4 h-4 text-success mt-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Details Card */}
        <Card>
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 pb-4 border-b last:border-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity} × ₹{item.price}
                    </p>
                  </div>
                  <p className="font-bold">₹{item.price * item.quantity}</p>
                </div>
              ))}
              
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="font-medium">{order.paymentMethod}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total Amount</span>
                  <span className="text-primary">₹{order.total}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {currentStatus === 'delivered' && (
          <div className="mt-6 text-center">
            <Card className="bg-success/10 border-success">
              <CardContent className="py-6">
                <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-success" />
                <h3 className="text-2xl font-bold mb-2">Order Complete!</h3>
                <p className="text-muted-foreground mb-4">
                  Thank you for your order. Enjoy your meal!
                </p>
                <Button onClick={() => navigate('/menu')} size="lg">
                  Order Again
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
};

export default OrderTracking;
