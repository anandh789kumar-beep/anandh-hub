export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'veg' | 'non-veg';
  isVeg: boolean;
  type: 'main-course' | 'snacks' | 'beverages' | 'desserts';
  cuisine: string;
  prepTime: number; // in minutes
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  paymentMethod: string;
  timestamp: Date;
  estimatedTime: number; // in minutes
  status: 'pending' | 'preparing' | 'ready' | 'delivered';
}
