import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, LogOut, UtensilsCrossed } from 'lucide-react';
import FoodCard from '@/components/FoodCard';
import { menuItems } from '@/data/menuData';
import { useCart } from '@/contexts/CartContext';

const Menu = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    
    if (!isLoggedIn) {
      navigate('/');
    } else {
      setUsername(storedUsername || 'Guest');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    navigate('/');
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const vegItems = menuItems.filter(item => item.isVeg);
  const nonVegItems = menuItems.filter(item => !item.isVeg);

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
                <h1 className="text-xl font-bold">Canteen Food Hub</h1>
                <p className="text-sm text-muted-foreground">Welcome, {username}!</p>
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
          <p className="text-muted-foreground">Choose from our delicious selection</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="veg">Veg</TabsTrigger>
            <TabsTrigger value="non-veg">Non-Veg</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="veg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vegItems.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="non-veg">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonVegItems.map((item) => (
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
