import { FoodItem } from '@/types/food';
import vegThaliImg from '@/assets/veg-thali.jpg';
import biryaniImg from '@/assets/biryani.jpg';
import samosaImg from '@/assets/samosa.jpg';
import paneerMasalaImg from '@/assets/paneer-masala.jpg';
import chickenWingsImg from '@/assets/chicken-wings.jpg';
import muttonCurryImg from '@/assets/mutton-curry.jpg';

export const menuItems: FoodItem[] = [
  {
    id: '1',
    name: 'Veg Thali',
    description: 'Complete meal with rice, roti, dal, and 3 vegetables',
    price: 120,
    image: vegThaliImg,
    category: 'veg',
    isVeg: true,
  },
  {
    id: '2',
    name: 'Paneer Butter Masala',
    description: 'Creamy paneer curry with butter and spices',
    price: 150,
    image: paneerMasalaImg,
    category: 'veg',
    isVeg: true,
  },
  {
    id: '3',
    name: 'Samosa (2 pcs)',
    description: 'Crispy fried pastry with spiced potato filling',
    price: 30,
    image: samosaImg,
    category: 'veg',
    isVeg: true,
  },
  {
    id: '4',
    name: 'Chicken Biryani',
    description: 'Aromatic rice with tender chicken pieces and spices',
    price: 180,
    image: biryaniImg,
    category: 'non-veg',
    isVeg: false,
  },
  {
    id: '5',
    name: 'Chicken Wings (6 pcs)',
    description: 'Crispy fried chicken wings with special sauce',
    price: 160,
    image: chickenWingsImg,
    category: 'non-veg',
    isVeg: false,
  },
  {
    id: '6',
    name: 'Mutton Curry',
    description: 'Tender mutton in rich, spicy gravy',
    price: 220,
    image: muttonCurryImg,
    category: 'non-veg',
    isVeg: false,
  },
];
