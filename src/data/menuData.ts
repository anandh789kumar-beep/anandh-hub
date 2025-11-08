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
  { id: '1', name: 'Veg Thali', description: 'Complete meal with rice, roti, dal, and 3 vegetables', price: 120, image: vegThaliImg, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Indian', prepTime: 20 },
  { id: '2', name: 'Paneer Butter Masala', description: 'Creamy paneer curry with butter and spices', price: 150, image: paneerMasalaImg, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Indian', prepTime: 15 },
  { id: '3', name: 'Chicken Biryani', description: 'Aromatic rice with tender chicken pieces', price: 180, image: biryaniImg, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Indian', prepTime: 25 },
  { id: '4', name: 'Mutton Curry', description: 'Tender mutton in rich, spicy gravy', price: 220, image: muttonCurryImg, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Indian', prepTime: 30 },
  { id: '5', name: 'Dal Makhani', description: 'Creamy black lentils with butter', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Indian', prepTime: 15 },
  { id: '6', name: 'Butter Chicken', description: 'Chicken in creamy tomato gravy', price: 200, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Indian', prepTime: 20 },
  { id: '7', name: 'Palak Paneer', description: 'Paneer in spinach gravy', price: 140, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Indian', prepTime: 15 },
  { id: '8', name: 'Chole Bhature', description: 'Spicy chickpeas with fried bread', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Indian', prepTime: 15 },
  { id: '9', name: 'Fish Curry', description: 'Fresh fish in coconut curry', price: 210, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Indian', prepTime: 25 },
  { id: '10', name: 'Rajma Chawal', description: 'Kidney beans curry with rice', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Indian', prepTime: 15 },

  // Indian Snacks
  { id: '11', name: 'Samosa (2 pcs)', description: 'Crispy fried pastry with potato filling', price: 30, image: samosaImg, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Indian', prepTime: 5 },
  { id: '12', name: 'Pav Bhaji', description: 'Spiced vegetable mash with bread', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Indian', prepTime: 10 },
  { id: '13', name: 'Vada Pav', description: 'Potato fritter in bread bun', price: 40, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Indian', prepTime: 5 },
  { id: '14', name: 'Chicken Wings (6 pcs)', description: 'Crispy fried wings with sauce', price: 160, image: chickenWingsImg, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'Indian', prepTime: 12 },
  { id: '15', name: 'Paneer Tikka', description: 'Grilled paneer with spices', price: 140, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Indian', prepTime: 15 },
  { id: '16', name: 'Aloo Tikki', description: 'Crispy potato patties', price: 50, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Indian', prepTime: 8 },
  { id: '17', name: 'Pakora Mix', description: 'Assorted vegetable fritters', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Indian', prepTime: 10 },
  { id: '18', name: 'Chicken Kebab', description: 'Spiced grilled chicken skewers', price: 150, image: placeholder, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'Indian', prepTime: 15 },

  // Chinese Main Course
  { id: '19', name: 'Veg Hakka Noodles', description: 'Stir-fried noodles with vegetables', price: 110, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Chinese', prepTime: 12 },
  { id: '20', name: 'Chicken Fried Rice', description: 'Fried rice with chicken and vegetables', price: 140, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Chinese', prepTime: 15 },
  { id: '21', name: 'Veg Manchurian', description: 'Vegetable balls in spicy sauce', price: 120, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Chinese', prepTime: 15 },
  { id: '22', name: 'Chilli Chicken', description: 'Spicy chicken with peppers', price: 170, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Chinese', prepTime: 18 },
  { id: '23', name: 'Schezwan Noodles', description: 'Spicy noodles with vegetables', price: 130, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Chinese', prepTime: 12 },
  { id: '24', name: 'Sweet & Sour Chicken', description: 'Chicken in tangy sweet sauce', price: 180, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Chinese', prepTime: 18 },
  { id: '25', name: 'Veg Chowmein', description: 'Stir-fried noodles Chinese style', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Chinese', prepTime: 12 },
  { id: '26', name: 'Kung Pao Chicken', description: 'Spicy chicken with peanuts', price: 190, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Chinese', prepTime: 18 },

  // Chinese Snacks
  { id: '27', name: 'Spring Rolls (4 pcs)', description: 'Crispy vegetable rolls', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Chinese', prepTime: 8 },
  { id: '28', name: 'Chicken Momos (6 pcs)', description: 'Steamed chicken dumplings', price: 90, image: placeholder, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'Chinese', prepTime: 10 },
  { id: '29', name: 'Veg Momos (6 pcs)', description: 'Steamed vegetable dumplings', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Chinese', prepTime: 10 },
  { id: '30', name: 'Chicken Lollipop', description: 'Spicy chicken drumsticks', price: 120, image: placeholder, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'Chinese', prepTime: 15 },

  // Italian Main Course
  { id: '31', name: 'Margherita Pizza', description: 'Classic tomato and cheese pizza', price: 180, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Italian', prepTime: 20 },
  { id: '32', name: 'Chicken Pizza', description: 'Pizza with chicken toppings', price: 220, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Italian', prepTime: 20 },
  { id: '33', name: 'Pasta Alfredo', description: 'Creamy white sauce pasta', price: 160, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Italian', prepTime: 15 },
  { id: '34', name: 'Chicken Pasta', description: 'Pasta with grilled chicken', price: 190, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Italian', prepTime: 18 },
  { id: '35', name: 'Lasagna', description: 'Layered pasta with meat sauce', price: 200, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Italian', prepTime: 25 },
  { id: '36', name: 'Veg Risotto', description: 'Creamy rice with vegetables', price: 170, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Italian', prepTime: 20 },

  // Italian Snacks
  { id: '37', name: 'Garlic Bread (4 pcs)', description: 'Toasted bread with garlic butter', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Italian', prepTime: 8 },
  { id: '38', name: 'Bruschetta', description: 'Toasted bread with tomato topping', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Italian', prepTime: 8 },
  { id: '39', name: 'Cheese Balls (6 pcs)', description: 'Deep fried cheese balls', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Italian', prepTime: 10 },

  // Mexican
  { id: '40', name: 'Veg Tacos (3 pcs)', description: 'Soft tacos with vegetables', price: 110, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Mexican', prepTime: 12 },
  { id: '41', name: 'Chicken Tacos (3 pcs)', description: 'Soft tacos with grilled chicken', price: 140, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Mexican', prepTime: 15 },
  { id: '42', name: 'Veg Burrito', description: 'Wrapped tortilla with beans and rice', price: 120, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Mexican', prepTime: 12 },
  { id: '43', name: 'Chicken Burrito', description: 'Wrapped tortilla with chicken', price: 150, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Mexican', prepTime: 15 },
  { id: '44', name: 'Nachos with Cheese', description: 'Tortilla chips with cheese dip', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Mexican', prepTime: 8 },
  { id: '45', name: 'Quesadilla', description: 'Grilled tortilla with cheese', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Mexican', prepTime: 10 },

  // American
  { id: '46', name: 'Veg Burger', description: 'Veggie patty burger with fries', price: 110, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'American', prepTime: 15 },
  { id: '47', name: 'Chicken Burger', description: 'Grilled chicken burger with fries', price: 140, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'American', prepTime: 15 },
  { id: '48', name: 'Beef Burger', description: 'Beef patty burger with fries', price: 180, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'American', prepTime: 18 },
  { id: '49', name: 'Cheese Burger', description: 'Double cheese burger with fries', price: 150, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'American', prepTime: 15 },
  { id: '50', name: 'Hot Dog', description: 'Sausage in bun with toppings', price: 80, image: placeholder, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'American', prepTime: 8 },
  { id: '51', name: 'French Fries', description: 'Crispy golden fries', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'American', prepTime: 8 },
  { id: '52', name: 'Chicken Nuggets (8 pcs)', description: 'Crispy chicken nuggets', price: 120, image: placeholder, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'American', prepTime: 10 },
  { id: '53', name: 'Onion Rings', description: 'Crispy battered onion rings', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'American', prepTime: 8 },

  // Japanese
  { id: '54', name: 'Veg Sushi (8 pcs)', description: 'Assorted vegetable sushi rolls', price: 180, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Japanese', prepTime: 15 },
  { id: '55', name: 'Chicken Sushi (8 pcs)', description: 'Chicken sushi rolls', price: 220, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Japanese', prepTime: 15 },
  { id: '56', name: 'Veg Ramen', description: 'Noodle soup with vegetables', price: 140, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Japanese', prepTime: 15 },
  { id: '57', name: 'Chicken Ramen', description: 'Noodle soup with chicken', price: 170, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Japanese', prepTime: 18 },
  { id: '58', name: 'Tempura', description: 'Battered fried vegetables', price: 130, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Japanese', prepTime: 12 },
  { id: '59', name: 'Teriyaki Chicken', description: 'Glazed chicken with rice', price: 190, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Japanese', prepTime: 20 },

  // Middle Eastern
  { id: '60', name: 'Falafel Wrap', description: 'Chickpea fritters in wrap', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Middle Eastern', prepTime: 12 },
  { id: '61', name: 'Shawarma', description: 'Grilled meat wrap with sauce', price: 130, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Middle Eastern', prepTime: 15 },
  { id: '62', name: 'Hummus with Pita', description: 'Chickpea dip with bread', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Middle Eastern', prepTime: 5 },
  { id: '63', name: 'Kebab Platter', description: 'Assorted grilled kebabs', price: 200, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Middle Eastern', prepTime: 20 },
  { id: '64', name: 'Baklava', description: 'Sweet pastry with nuts', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'Middle Eastern', prepTime: 5 },

  // Thai
  { id: '65', name: 'Pad Thai Veg', description: 'Stir-fried noodles Thai style', price: 130, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Thai', prepTime: 15 },
  { id: '66', name: 'Pad Thai Chicken', description: 'Thai noodles with chicken', price: 160, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Thai', prepTime: 18 },
  { id: '67', name: 'Tom Yum Soup', description: 'Spicy and sour Thai soup', price: 110, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Thai', prepTime: 12 },
  { id: '68', name: 'Green Curry', description: 'Thai green curry with vegetables', price: 140, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Thai', prepTime: 18 },
  { id: '69', name: 'Thai Basil Chicken', description: 'Stir-fried chicken with basil', price: 170, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Thai', prepTime: 15 },

  // Korean
  { id: '70', name: 'Kimchi Fried Rice', description: 'Spicy Korean fried rice', price: 120, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Korean', prepTime: 12 },
  { id: '71', name: 'Bibimbap', description: 'Mixed rice with vegetables', price: 150, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Korean', prepTime: 15 },
  { id: '72', name: 'Korean BBQ Chicken', description: 'Grilled marinated chicken', price: 190, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Korean', prepTime: 20 },
  { id: '73', name: 'Tteokbokki', description: 'Spicy Korean rice cakes', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Korean', prepTime: 10 },

  // Continental
  { id: '74', name: 'Grilled Sandwich', description: 'Toasted sandwich with filling', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Continental', prepTime: 8 },
  { id: '75', name: 'Club Sandwich', description: 'Triple layer chicken sandwich', price: 120, image: placeholder, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'Continental', prepTime: 10 },
  { id: '76', name: 'Caesar Salad', description: 'Fresh greens with Caesar dressing', price: 110, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Continental', prepTime: 10 },
  { id: '77', name: 'Chicken Caesar Salad', description: 'Caesar salad with grilled chicken', price: 140, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Continental', prepTime: 12 },
  { id: '78', name: 'Greek Salad', description: 'Mediterranean salad with feta', price: 120, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Continental', prepTime: 10 },

  // South Indian
  { id: '79', name: 'Masala Dosa', description: 'Crispy crepe with potato filling', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'South Indian', prepTime: 15 },
  { id: '80', name: 'Idli Sambar (3 pcs)', description: 'Steamed rice cakes with lentil soup', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'South Indian', prepTime: 10 },
  { id: '81', name: 'Vada Sambar (3 pcs)', description: 'Fried lentil donuts with sambar', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'South Indian', prepTime: 10 },
  { id: '82', name: 'Uttapam', description: 'Thick pancake with vegetables', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'South Indian', prepTime: 12 },
  { id: '83', name: 'Rava Dosa', description: 'Crispy semolina crepe', price: 85, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'South Indian', prepTime: 12 },
  { id: '84', name: 'Upma', description: 'Savory semolina porridge', price: 50, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'South Indian', prepTime: 10 },

  // Beverages - Juices
  { id: '85', name: 'Orange Juice', description: 'Fresh squeezed orange juice', price: 50, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '86', name: 'Apple Juice', description: 'Fresh apple juice', price: 50, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '87', name: 'Mango Juice', description: 'Sweet mango juice', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '88', name: 'Watermelon Juice', description: 'Refreshing watermelon juice', price: 45, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '89', name: 'Pineapple Juice', description: 'Tropical pineapple juice', price: 55, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '90', name: 'Pomegranate Juice', description: 'Fresh pomegranate juice', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '91', name: 'Mixed Fruit Juice', description: 'Blend of seasonal fruits', price: 65, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '92', name: 'Carrot Juice', description: 'Healthy carrot juice', price: 50, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '93', name: 'Beetroot Juice', description: 'Nutritious beetroot juice', price: 55, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '94', name: 'Lemon Juice', description: 'Fresh lemon juice', price: 30, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },

  // Beverages - Smoothies & Shakes
  { id: '95', name: 'Mango Smoothie', description: 'Creamy mango smoothie', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '96', name: 'Strawberry Smoothie', description: 'Fresh strawberry smoothie', price: 85, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '97', name: 'Banana Shake', description: 'Thick banana milkshake', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '98', name: 'Chocolate Shake', description: 'Rich chocolate milkshake', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '99', name: 'Vanilla Shake', description: 'Classic vanilla milkshake', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '100', name: 'Strawberry Shake', description: 'Strawberry milkshake', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '101', name: 'Oreo Shake', description: 'Oreo cookie milkshake', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '102', name: 'Mixed Berry Smoothie', description: 'Blend of berries', price: 95, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },

  // Beverages - Hot Drinks
  { id: '103', name: 'Masala Chai', description: 'Spiced Indian tea', price: 20, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'Indian', prepTime: 5 },
  { id: '104', name: 'Coffee', description: 'Hot brewed coffee', price: 30, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '105', name: 'Cappuccino', description: 'Espresso with steamed milk', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '106', name: 'Latte', description: 'Espresso with milk', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '107', name: 'Espresso', description: 'Strong black coffee', price: 50, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '108', name: 'Hot Chocolate', description: 'Rich hot chocolate drink', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '109', name: 'Green Tea', description: 'Healthy green tea', price: 30, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },

  // Beverages - Cold Drinks
  { id: '110', name: 'Iced Coffee', description: 'Chilled coffee drink', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '111', name: 'Iced Tea', description: 'Refreshing iced tea', price: 50, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '112', name: 'Mojito', description: 'Mint and lime mocktail', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '113', name: 'Virgin Pina Colada', description: 'Coconut pineapple mocktail', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '114', name: 'Blue Lagoon', description: 'Blue curacao mocktail', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '115', name: 'Lassi', description: 'Traditional yogurt drink', price: 50, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'Indian', prepTime: 5 },
  { id: '116', name: 'Mango Lassi', description: 'Mango yogurt drink', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'Indian', prepTime: 5 },
  { id: '117', name: 'Buttermilk', description: 'Spiced yogurt drink', price: 30, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'Indian', prepTime: 5 },

  // Desserts - Indian
  { id: '118', name: 'Gulab Jamun (2 pcs)', description: 'Sweet milk balls in syrup', price: 50, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'Indian', prepTime: 5 },
  { id: '119', name: 'Rasgulla (2 pcs)', description: 'Soft cheese balls in syrup', price: 50, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'Indian', prepTime: 5 },
  { id: '120', name: 'Jalebi', description: 'Crispy sweet spirals', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'Indian', prepTime: 10 },
  { id: '121', name: 'Kheer', description: 'Rice pudding with nuts', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'Indian', prepTime: 5 },
  { id: '122', name: 'Kulfi', description: 'Traditional Indian ice cream', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'Indian', prepTime: 5 },
  { id: '123', name: 'Rasmalai (2 pcs)', description: 'Cheese patties in cream', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'Indian', prepTime: 5 },

  // Desserts - International
  { id: '124', name: 'Chocolate Brownie', description: 'Rich chocolate brownie', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'International', prepTime: 5 },
  { id: '125', name: 'Cheesecake Slice', description: 'Creamy cheesecake', price: 120, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'International', prepTime: 5 },
  { id: '126', name: 'Tiramisu', description: 'Italian coffee dessert', price: 140, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'Italian', prepTime: 5 },
  { id: '127', name: 'Chocolate Lava Cake', description: 'Warm chocolate cake', price: 110, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'International', prepTime: 12 },
  { id: '128', name: 'Vanilla Ice Cream', description: 'Classic vanilla ice cream', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'International', prepTime: 5 },
  { id: '129', name: 'Chocolate Ice Cream', description: 'Rich chocolate ice cream', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'International', prepTime: 5 },
  { id: '130', name: 'Strawberry Ice Cream', description: 'Fresh strawberry ice cream', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'International', prepTime: 5 },
  { id: '131', name: 'Apple Pie', description: 'Classic apple pie slice', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'American', prepTime: 5 },
  { id: '132', name: 'Waffle with Ice Cream', description: 'Belgian waffle with ice cream', price: 130, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'International', prepTime: 10 },
  { id: '133', name: 'Pancakes', description: 'Fluffy pancakes with syrup', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'American', prepTime: 10 },

  // More Snacks
  { id: '134', name: 'Popcorn', description: 'Buttered popcorn', price: 40, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'International', prepTime: 5 },
  { id: '135', name: 'Corn Dog', description: 'Sausage in corn batter', price: 70, image: placeholder, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'American', prepTime: 8 },
  { id: '136', name: 'Mozzarella Sticks', description: 'Fried cheese sticks', price: 110, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Italian', prepTime: 10 },
  { id: '137', name: 'Potato Wedges', description: 'Seasoned potato wedges', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'American', prepTime: 10 },
  { id: '138', name: 'Fish Fingers', description: 'Breaded fish sticks', price: 140, image: placeholder, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'International', prepTime: 12 },
  { id: '139', name: 'Chicken Popcorn', description: 'Bite-sized chicken pieces', price: 130, image: placeholder, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'American', prepTime: 10 },
  { id: '140', name: 'Loaded Nachos', description: 'Nachos with toppings', price: 130, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Mexican', prepTime: 10 },

  // More Main Courses
  { id: '141', name: 'Dum Aloo', description: 'Potato curry in yogurt gravy', price: 130, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Indian', prepTime: 18 },
  { id: '142', name: 'Egg Curry', description: 'Boiled eggs in spicy gravy', price: 110, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Indian', prepTime: 15 },
  { id: '143', name: 'Prawn Curry', description: 'Prawns in coconut curry', price: 250, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Indian', prepTime: 25 },
  { id: '144', name: 'Tandoori Chicken', description: 'Marinated grilled chicken', price: 200, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Indian', prepTime: 25 },
  { id: '145', name: 'Naan Bread', description: 'Soft Indian flatbread', price: 30, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Indian', prepTime: 8 },
  { id: '146', name: 'Garlic Naan', description: 'Naan with garlic butter', price: 40, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Indian', prepTime: 8 },
  { id: '147', name: 'Butter Naan', description: 'Naan with butter', price: 35, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Indian', prepTime: 8 },
  { id: '148', name: 'Chicken Korma', description: 'Mild chicken curry with nuts', price: 190, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Indian', prepTime: 20 },
  { id: '149', name: 'Lamb Rogan Josh', description: 'Spicy lamb curry', price: 240, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Indian', prepTime: 30 },
  { id: '150', name: 'Malai Kofta', description: 'Vegetable balls in cream', price: 150, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Indian', prepTime: 18 },

  // More Chinese
  { id: '151', name: 'Hot & Sour Soup', description: 'Spicy tangy soup', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Chinese', prepTime: 10 },
  { id: '152', name: 'Wonton Soup', description: 'Dumpling soup', price: 110, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Chinese', prepTime: 12 },
  { id: '153', name: 'Honey Chilli Potato', description: 'Crispy potato in sauce', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Chinese', prepTime: 12 },
  { id: '154', name: 'Prawn Fried Rice', description: 'Rice with prawns', price: 180, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Chinese', prepTime: 15 },
  { id: '155', name: 'Singapore Noodles', description: 'Spicy curry noodles', price: 140, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Chinese', prepTime: 15 },

  // More Italian
  { id: '156', name: 'Penne Arrabiata', description: 'Pasta in spicy tomato sauce', price: 150, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Italian', prepTime: 15 },
  { id: '157', name: 'Spaghetti Carbonara', description: 'Creamy pasta with bacon', price: 180, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Italian', prepTime: 18 },
  { id: '158', name: 'Pepperoni Pizza', description: 'Pizza with pepperoni', price: 240, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Italian', prepTime: 20 },
  { id: '159', name: 'Veggie Supreme Pizza', description: 'Pizza with assorted veggies', price: 200, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Italian', prepTime: 20 },
  { id: '160', name: 'BBQ Chicken Pizza', description: 'Pizza with BBQ chicken', price: 250, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Italian', prepTime: 20 },

  // More Mexican
  { id: '161', name: 'Enchiladas', description: 'Rolled tortillas with filling', price: 140, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Mexican', prepTime: 18 },
  { id: '162', name: 'Chicken Fajitas', description: 'Grilled chicken with peppers', price: 170, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Mexican', prepTime: 18 },
  { id: '163', name: 'Churros', description: 'Fried dough with chocolate', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'Mexican', prepTime: 10 },
  { id: '164', name: 'Guacamole with Chips', description: 'Avocado dip with tortilla chips', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Mexican', prepTime: 8 },

  // More American
  { id: '165', name: 'BBQ Ribs', description: 'Grilled ribs with BBQ sauce', price: 280, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'American', prepTime: 30 },
  { id: '166', name: 'Pulled Pork Sandwich', description: 'Slow cooked pork in bun', price: 160, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'American', prepTime: 15 },
  { id: '167', name: 'Philly Cheesesteak', description: 'Steak sandwich with cheese', price: 180, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'American', prepTime: 15 },
  { id: '168', name: 'Mac & Cheese', description: 'Creamy macaroni and cheese', price: 110, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'American', prepTime: 12 },
  { id: '169', name: 'Coleslaw', description: 'Cabbage salad with dressing', price: 50, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'American', prepTime: 5 },

  // More Japanese
  { id: '170', name: 'California Roll (8 pcs)', description: 'Crab and avocado sushi', price: 190, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Japanese', prepTime: 15 },
  { id: '171', name: 'Salmon Sushi (8 pcs)', description: 'Fresh salmon sushi', price: 250, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Japanese', prepTime: 15 },
  { id: '172', name: 'Miso Soup', description: 'Traditional Japanese soup', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Japanese', prepTime: 10 },
  { id: '173', name: 'Gyoza (6 pcs)', description: 'Pan-fried dumplings', price: 110, image: placeholder, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'Japanese', prepTime: 12 },
  { id: '174', name: 'Yakitori', description: 'Grilled chicken skewers', price: 140, image: placeholder, category: 'non-veg', isVeg: false, type: 'snacks', cuisine: 'Japanese', prepTime: 15 },

  // More Middle Eastern
  { id: '175', name: 'Chicken Kebab Wrap', description: 'Grilled chicken in wrap', price: 140, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Middle Eastern', prepTime: 15 },
  { id: '176', name: 'Baba Ganoush', description: 'Eggplant dip with bread', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Middle Eastern', prepTime: 5 },
  { id: '177', name: 'Tabbouleh', description: 'Parsley and bulgur salad', price: 100, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Middle Eastern', prepTime: 10 },
  { id: '178', name: 'Kunafa', description: 'Sweet cheese pastry', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'desserts', cuisine: 'Middle Eastern', prepTime: 5 },

  // More Thai
  { id: '179', name: 'Massaman Curry', description: 'Rich peanut curry', price: 160, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Thai', prepTime: 20 },
  { id: '180', name: 'Thai Spring Rolls', description: 'Fresh vegetable rolls', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Thai', prepTime: 10 },
  { id: '181', name: 'Pad See Ew', description: 'Stir-fried wide noodles', price: 130, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Thai', prepTime: 15 },
  { id: '182', name: 'Thai Iced Tea', description: 'Sweet Thai tea with milk', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'Thai', prepTime: 5 },

  // More Korean
  { id: '183', name: 'Korean Fried Chicken', description: 'Crispy chicken Korean style', price: 180, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Korean', prepTime: 20 },
  { id: '184', name: 'Japchae', description: 'Stir-fried glass noodles', price: 140, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Korean', prepTime: 15 },
  { id: '185', name: 'Kimchi', description: 'Fermented vegetables', price: 40, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'Korean', prepTime: 5 },

  // More Continental
  { id: '186', name: 'Grilled Chicken Breast', description: 'Grilled chicken with sides', price: 180, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Continental', prepTime: 20 },
  { id: '187', name: 'Grilled Fish', description: 'Fresh fish with herbs', price: 220, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Continental', prepTime: 20 },
  { id: '188', name: 'Mushroom Soup', description: 'Creamy mushroom soup', price: 90, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Continental', prepTime: 10 },
  { id: '189', name: 'Tomato Soup', description: 'Classic tomato soup', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Continental', prepTime: 10 },
  { id: '190', name: 'Sweet Corn Soup', description: 'Creamy corn soup', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Continental', prepTime: 10 },

  // More South Indian
  { id: '191', name: 'Medu Vada (3 pcs)', description: 'Crispy lentil fritters', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'snacks', cuisine: 'South Indian', prepTime: 10 },
  { id: '192', name: 'Pongal', description: 'Rice and lentil dish', price: 70, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'South Indian', prepTime: 15 },
  { id: '193', name: 'Appam (2 pcs)', description: 'Rice pancakes', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'South Indian', prepTime: 12 },
  { id: '194', name: 'Pesarattu', description: 'Green gram dosa', price: 80, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'South Indian', prepTime: 12 },

  // Additional Items to reach 200
  { id: '195', name: 'Chicken Schnitzel', description: 'Breaded fried chicken', price: 170, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Continental', prepTime: 18 },
  { id: '196', name: 'Banh Mi', description: 'Vietnamese sandwich', price: 110, image: placeholder, category: 'non-veg', isVeg: false, type: 'main-course', cuisine: 'Asian', prepTime: 12 },
  { id: '197', name: 'Pho', description: 'Vietnamese noodle soup', price: 140, image: placeholder, category: 'veg', isVeg: true, type: 'main-course', cuisine: 'Vietnamese', prepTime: 20 },
  { id: '198', name: 'Coconut Water', description: 'Fresh coconut water', price: 40, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 5 },
  { id: '199', name: 'Energy Drink', description: 'Refreshing energy drink', price: 60, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 2 },
  { id: '200', name: 'Mineral Water', description: 'Bottled water', price: 20, image: placeholder, category: 'veg', isVeg: true, type: 'beverages', cuisine: 'International', prepTime: 2 },
];
