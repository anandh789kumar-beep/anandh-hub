import { FoodItem } from '@/types/food';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {item.isVeg && (
          <Badge className="absolute top-2 right-2 bg-success">
            <Leaf className="w-3 h-3 mr-1" />
            Veg
          </Badge>
        )}
        {!item.isVeg && (
          <Badge className="absolute top-2 right-2 bg-destructive">
            Non-Veg
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
        <p className="text-2xl font-bold text-primary">₹{item.price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => addToCart(item)} 
          className="w-full"
          size="lg"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
