import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, LogOut, UtensilsCrossed } from 'lucide-react';
import FoodCard from '@/components/FoodCard';
import { menuItems } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const Menu = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (!session) {
          navigate('/login');
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session) {
        navigate('/login');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to logout. Please try again.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const vegItems = menuItems.filter(item => item.isVeg);
  const nonVegItems = menuItems.filter(item => !item.isVeg);
  const mainCourses = menuItems.filter(item => item.type === 'main-course');
  const snacks = menuItems.filter(item => item.type === 'snacks');
  const beverages = menuItems.filter(item => item.type === 'beverages');
  const desserts = menuItems.filter(item => item.type === 'desserts');

  const cuisines = Array.from(new Set(menuItems.map(item => item.cuisine)));

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">MEC CANCRICK</h1>
                <p className="text-sm text-muted-foreground">Welcome, {user?.email?.split('@')[0]}!</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="relative"
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary">
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Our Menu</h2>
          <p className="text-muted-foreground">Choose from 15 carefully selected items</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-6 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="main-course">Main Course</TabsTrigger>
            <TabsTrigger value="snacks">Snacks</TabsTrigger>
            <TabsTrigger value="beverages">Beverages</TabsTrigger>
            <TabsTrigger value="desserts">Desserts</TabsTrigger>
            <TabsTrigger value="veg">Veg Only</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Browse by Cuisine</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {cuisines.map((cuisine) => (
                  <Badge key={cuisine} variant="outline" className="text-sm px-3 py-1">
                    {cuisine}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuItems.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="main-course">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainCourses.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="snacks">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {snacks.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beverages">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beverages.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="desserts">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {desserts.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="veg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {vegItems.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Menu;
