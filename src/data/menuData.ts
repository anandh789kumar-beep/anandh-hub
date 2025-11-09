import { FoodItem } from '@/types/food';
import vegThaliImg from '@/assets/veg-thali.jpg';
import biryaniImg from '@/assets/biryani.jpg';
import samosaImg from '@/assets/samosa.jpg';
import paneerMasalaImg from '@/assets/paneer-masala.jpg';
import chickenWingsImg from '@/assets/chicken-wings.jpg';
import muttonCurryImg from '@/assets/mutton-curry.jpg';

const placeholder = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400';

export const menuItems: FoodItem[] = [
  // Indian Main Course
  { 
    id: '1', 
    name: 'Veg Thali', 
    description: 'Complete meal with rice, roti, dal, and vegetables', 
    price: 120, 
    image: vegThaliImg, 
    category: 'veg', 
    isVeg: true, 
    type: 'main-course', 
    cuisine: 'Indian', 
    prepTime: 20 
  },
  { 
    id: '2', 
    name: 'Paneer Butter Masala', 
    description: 'Creamy paneer curry with butter and spices', 
    price: 150, 
    image: paneerMasalaImg, 
    category: 'veg', 
    isVeg: true, 
    type: 'main-course', 
    cuisine: 'Indian', 
    prepTime: 15 
  },
  { 
    id: '3', 
    name: 'Chicken Biryani', 
    description: 'Aromatic rice with tender chicken pieces', 
    price: 180, 
    image: biryaniImg, 
    category: 'non-veg', 
    isVeg: false, 
    type: 'main-course', 
    cuisine: 'Indian', 
    prepTime: 25 
  },
  { 
    id: '4', 
    name: 'Mutton Curry', 
    description: 'Tender mutton in rich, spicy gravy', 
    price: 220, 
    image: muttonCurryImg, 
    category: 'non-veg', 
    isVeg: false, 
    type: 'main-course', 
    cuisine: 'Indian', 
    prepTime: 30 
  },

  // Indian Snacks
  { 
    id: '5', 
    name: 'Samosa (2 pcs)', 
    description: 'Crispy fried pastry with potato filling', 
    price: 30, 
    image: samosaImg, 
    category: 'veg', 
    isVeg: true, 
    type: 'snacks', 
    cuisine: 'Indian', 
    prepTime: 5 
  },
  { 
    id: '6', 
    name: 'Chicken Wings (6 pcs)', 
    description: 'Crispy fried wings with spicy sauce', 
    price: 160, 
    image: chickenWingsImg, 
    category: 'non-veg', 
    isVeg: false, 
    type: 'snacks', 
    cuisine: 'Indian', 
    prepTime: 12 
  },
  { 
    id: '7', 
    name: 'Pav Bhaji', 
    description: 'Spiced vegetable mash with bread', 
    price: 80, 
    image: placeholder, 
    category: 'veg', 
    isVeg: true, 
    type: 'snacks', 
    cuisine: 'Indian', 
    prepTime: 10 
  },

  // Chinese
  { 
    id: '8', 
    name: 'Veg Hakka Noodles', 
    description: 'Stir-fried noodles with vegetables', 
    price: 110, 
    image: placeholder, 
    category: 'veg', 
    isVeg: true, 
    type: 'main-course', 
    cuisine: 'Chinese', 
    prepTime: 12 
  },
  { 
    id: '9', 
    name: 'Chicken Fried Rice', 
    description: 'Fried rice with chicken and vegetables', 
    price: 140, 
    image: placeholder, 
    category: 'non-veg', 
    isVeg: false, 
    type: 'main-course', 
    cuisine: 'Chinese', 
    prepTime: 15 
  },
  { 
    id: '10', 
    name: 'Veg Momos (6 pcs)', 
    description: 'Steamed vegetable dumplings', 
    price: 70, 
    image: placeholder, 
    category: 'veg', 
    isVeg: true, 
    type: 'snacks', 
    cuisine: 'Chinese', 
    prepTime: 10 
  },

  // Beverages
  { 
    id: '11', 
    name: 'Masala Chai', 
    description: 'Traditional Indian spiced tea', 
    price: 20, 
    image: placeholder, 
    category: 'veg', 
    isVeg: true, 
    type: 'beverages', 
    cuisine: 'Indian', 
    prepTime: 5 
  },
  { 
    id: '12', 
    name: 'Mango Lassi', 
    description: 'Sweet yogurt drink with mango', 
    price: 50, 
    image: placeholder, 
    category: 'veg', 
    isVeg: true, 
    type: 'beverages', 
    cuisine: 'Indian', 
    prepTime: 5 
  },
  { 
    id: '13', 
    name: 'Fresh Lime Soda', 
    description: 'Refreshing lime drink with soda', 
    price: 30, 
    image: placeholder, 
    category: 'veg', 
    isVeg: true, 
    type: 'beverages', 
    cuisine: 'Indian', 
    prepTime: 3 
  },

  // Desserts
  { 
    id: '14', 
    name: 'Gulab Jamun (2 pcs)', 
    description: 'Sweet milk dumplings in syrup', 
    price: 40, 
    image: placeholder, 
    category: 'veg', 
    isVeg: true, 
    type: 'desserts', 
    cuisine: 'Indian', 
    prepTime: 5 
  },
  { 
    id: '15', 
    name: 'Ice Cream (2 scoops)', 
    description: 'Creamy vanilla or chocolate ice cream', 
    price: 60, 
    image: placeholder, 
    category: 'veg', 
    isVeg: true, 
    type: 'desserts', 
    cuisine: 'Indian', 
    prepTime: 2 
  },
];
