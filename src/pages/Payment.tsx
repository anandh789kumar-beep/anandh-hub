import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const paymentMethods = [
  { id: 'gpay', name: 'Google Pay', icon: '🅖' },
  { id: 'phonepe', name: 'PhonePe', icon: '📱' },
  { id: 'paytm', name: 'Paytm', icon: '💼' },
  { id: 'upi', name: 'Other UPI', icon: '🔷' },
];

const Payment = () => {
  const navigate = useNavigate();
  const { cart, getTotal, clearCart } = useCart();
  const [selectedMethod, setSelectedMethod] = useState('gpay');

  if (cart.length === 0) {
    navigate('/menu');
    return null;
  }

  const totalAmount = Math.round(getTotal() * 1.05);

  const handlePayment = () => {
    // In a real app, this would integrate with payment gateway
    toast({
      title: "Processing payment...",
      description: "Please wait while we confirm your payment",
    });

    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => navigate('/cart')}>
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Cart
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Payment</h1>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Select Payment Method</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedMethod} onValueChange={setSelectedMethod}>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div key={method.id} className="flex items-center space-x-3">
                    <RadioGroupItem value={method.id} id={method.id} />
                    <Label
                      htmlFor={method.id}
                      className="flex items-center gap-3 cursor-pointer flex-1 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-3xl">{method.icon}</span>
                      <span className="font-semibold text-lg">{method.name}</span>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-lg">
              <span>Total Amount:</span>
              <span className="font-bold text-2xl text-primary">₹{totalAmount}</span>
            </div>
            <Button className="w-full" size="lg" onClick={handlePayment}>
              Pay ₹{totalAmount}
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Payment;
