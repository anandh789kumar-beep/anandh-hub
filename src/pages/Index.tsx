import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Clock, ShoppingBag, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        {/* Logo/Icon with animation */}
        <div className="mb-8 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
              <UtensilsCrossed className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-12 space-y-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent leading-tight">
            MEC CLG Canteen
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Delicious meals, delivered fresh to your doorstep
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-4xl animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-sm text-muted-foreground">Get your food in 15-30 minutes</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Wide Selection</h3>
            <p className="text-sm text-muted-foreground">200+ items from around the world</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Fresh & Quality</h3>
            <p className="text-sm text-muted-foreground">Made with premium ingredients</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Button
            size="lg"
            onClick={() => navigate('/login')}
            className="text-lg px-8 py-6 shadow-2xl hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 group"
          >
            <span className="mr-2">Get Started</span>
            <UtensilsCrossed className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>

        {/* Bottom tagline */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
          <p className="text-sm text-muted-foreground">
            Order now and experience the taste of excellence
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
