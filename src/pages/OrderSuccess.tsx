import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Home } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-success/10 via-background to-primary/10 flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center">
        <CardContent className="pt-8 pb-6">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-success" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Placed!</h1>
          <p className="text-muted-foreground mb-2">
            Your order has been successfully placed.
          </p>
          <p className="text-muted-foreground mb-8">
            You will receive a notification when your food is ready.
          </p>
          <div className="space-y-3">
            <Button className="w-full" size="lg" onClick={() => navigate('/menu')}>
              <Home className="w-5 h-5 mr-2" />
              Back to Menu
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSuccess;
