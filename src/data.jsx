import mcdIcon from "./assets/mcd.png";
import bkkIcon from "./assets/bkk.png";
import kfcIcon from "./assets/kfc.png";
import subIcon from "./assets/sub.png";
import chipIcon from "./assets/chip.png";
import chkIcon from "./assets/chk.png";
import domIcon from "./assets/dom.png";
import dunkIcon from "./assets/dunk.png";
import panIcon from "./assets/pan.png";
import panpIcon from "./assets/panp.png";
import pizIcon from "./assets/piz.png";
import qdoIcon from "./assets/qdo.png";
import shakeIcon from "./assets/shake.png";
import wendIcon from "./assets/wend.png";
import tacIcon from "./assets/tac.png";
import fivegIcon from "./assets/fiveg.png"
import hardeesIcon from "./assets/hardees.png";
import sbuxIcon from "./assets/sbux.png";
import dennysIcon from "./assets/Dennys.png";
import jgIcon from "./assets/jimmy.png";
import jackintheboxIcon from "./assets/jackinthebox.png";
import dairyqueenIcon from "./assets/dq.png";
import inIcon from "./assets/innout.png";
import arbyIcon from "./assets/arbys.png";
import popeyesIcon from "./assets/popeyes.png";
import sonicIcon from "./assets/sonic.png";
import wingstopIcon from "./assets/wingstop.png";
import cheesecakefactoryIcon from "./assets/chocolate.png";

export const restaurants = [
  {
    id: "mcd",
    name: "McDonald's",
    icon: mcdIcon,
    shortDescription: "The world-famous fast food chain serving burgers and fries.",
    highlights: ["Big Mac", "Chicken McNuggets", "Fries", "Whopper"],
    moods: ["Cheat Day", "Quick Fix"],
    rating: 4.5,
    reviewsCount: 1200,
    longDescription:
      "McDonald's is an iconic fast-food brand known for its burgers, fries, and quick service. They offer a wide variety of meals that are loved globally for their taste, consistency, and convenience.",
    menu: [
      { name: "Big Mac", price: "$5.99" },
      { name: "Cheeseburger", price: "$3.99" },
      { name: "Chicken McNuggets", price: "$4.99" },
      { name: "French Fries", price: "$2.99" },
      { name: "McFlurry", price: "$3.49" },
    ],
  },
  {
    id: "bkk",
    name: "Burger King",
    icon: bkkIcon,
    shortDescription: "Home of the Whopper and flame-grilled burgers.",
    highlights: ["Whopper", "Chicken Fries", "Onion Rings"],
    moods: ["Cheat Day", "Quick Fix"],
    rating: 4.2,
    reviewsCount: 850,
    longDescription:
      "Burger King is a global fast-food chain famous for its flame-grilled burgers and signature Whopper. They focus on bold flavors and quality ingredients to satisfy burger lovers everywhere.",
    menu: [
      { name: "Whopper", price: "$6.49" },
      { name: "Chicken Fries", price: "$3.99" },
      { name: "Onion Rings", price: "$2.99" },
      { name: "Bacon King", price: "$7.49" },
      { name: "Soft Drink", price: "$1.99" },
    ],
  },
  {
    id: "kfc",
    name: "KFC",
    icon: kfcIcon,
    shortDescription: "Famous for its crispy fried chicken and secret herbs.",
    highlights: ["Original Recipe Chicken", "Chicken Wings", "Popcorn Chicken"],
    moods: ["Cheat Day"],
    rating: 4.3,
    reviewsCount: 980,
    longDescription:
      "KFC, or Kentucky Fried Chicken, is a global fried chicken brand known for its secret blend of 11 herbs and spices. They serve everything from classic fried chicken to sandwiches and sides loved by millions worldwide.",
    menu: [
      { name: "Original Recipe Chicken", price: "$7.99" },
      { name: "Spicy Chicken Wings", price: "$5.99" },
      { name: "Popcorn Chicken", price: "$4.99" },
      { name: "Coleslaw", price: "$2.49" },
      { name: "Mashed Potatoes", price: "$2.99" },
    ],
  },
  {
    id: "sub",
    name: "Subway",
    icon: subIcon,
    shortDescription: "Freshly made sandwiches and salads, your way.",
    highlights: ["Italian B.M.T.", "Turkey Breast", "Veggie Delight"],
    moods: ["Healthy Vibes", "Quick Fix"],
    rating: 4.0,
    reviewsCount: 720,
    longDescription:
      "Subway is a fast-food chain known for customizable sandwiches and fresh ingredients. Customers can choose their bread, fillings, and toppings to make a healthy and tasty meal in minutes.",
    menu: [
      { name: "Italian B.M.T.", price: "$6.49" },
      { name: "Turkey Breast Sub", price: "$5.99" },
      { name: "Veggie Delight", price: "$4.99" },
      { name: "Footlong Meatball Sub", price: "$7.49" },
      { name: "Cookies", price: "$1.99" },
    ],
  },
  {
    id: "dom",
    name: "Domino's Pizza",
    icon: domIcon,
    shortDescription: "Hot, cheesy pizzas delivered right to your door.",
    highlights: ["Pepperoni Pizza", "Cheese Pizza", "Chicken Pizza"],
    moods: ["Cheat Day"],
    rating: 4.6,
    reviewsCount: 1540,
    longDescription:
      "Domino's is a global pizza delivery chain famous for its fast service and variety of pizza options. From classic flavors to customized toppings, it satisfies pizza lovers everywhere.",
    menu: [
      { name: "Pepperoni Pizza", price: "$9.99" },
      { name: "Cheese Pizza", price: "$8.99" },
      { name: "Chicken Pizza", price: "$10.49" },
      { name: "Garlic Bread", price: "$3.49" },
      { name: "Coke", price: "$1.99" },
    ],
  },
  {
    id: "piz",
    name: "Pizza Hut",
    icon: pizIcon,
    shortDescription: "Family-friendly pizza with classic and specialty options.",
    highlights: ["Supreme Pizza", "Meat Lover's Pizza", "Cheese Sticks"],
    moods: ["Cheat Day"],
    rating: 4.4,
    reviewsCount: 1100,
    longDescription:
      "Pizza Hut is a well-known pizza chain offering a wide range of pizzas, sides, and desserts. Known for its dine-in and delivery services, it is loved for its variety and classic flavors.",
    menu: [
      { name: "Supreme Pizza", price: "$10.99" },
      { name: "Meat Lover's Pizza", price: "$11.49" },
      { name: "Cheese Sticks", price: "$3.99" },
      { name: "Buffalo Wings", price: "$5.49" },
      { name: "Pepsi", price: "$1.99" },
    ],
  },
  {
    id: "tac",
    name: "Taco Bell",
    icon: tacIcon,
    shortDescription: "Mexican-inspired fast food with bold flavors.",
    highlights: ["Crunchwrap Supreme", "Doritos Locos Taco", "Burritos"],
    moods: ["Cheat Day", "Quick Fix"],
    rating: 4.1,
    reviewsCount: 920,
    longDescription:
      "Taco Bell offers a unique menu of Mexican-inspired fast food. Famous for its bold flavors and creative items, it has become a go-to for quick and flavorful meals.",
    menu: [
      { name: "Crunchwrap Supreme", price: "$4.99" },
      { name: "Doritos Locos Taco", price: "$2.99" },
      { name: "Bean Burrito", price: "$3.49" },
      { name: "Nachos BellGrande", price: "$5.49" },
      { name: "Mountain Dew", price: "$1.99" },
    ],
  },
  {
    id: "wend",
    name: "Wendy's",
    icon: wendIcon,
    shortDescription: "Fresh, made-to-order burgers with signature sides.",
    highlights: ["Baconator", "Spicy Chicken Sandwich", "Frosty"],
    moods: ["Cheat Day"],
    rating: 4.3,
    reviewsCount: 880,
    longDescription:
      "Wendy's is a fast-food chain focusing on fresh, made-to-order burgers and sides. Known for its Frosty desserts and unique burger offerings, Wendy's is a favorite in the US and worldwide.",
    menu: [
      { name: "Baconator", price: "$6.99" },
      { name: "Spicy Chicken Sandwich", price: "$5.99" },
      { name: "Frosty", price: "$2.49" },
      { name: "Fries", price: "$2.99" },
      { name: "Chicken Nuggets", price: "$4.49" },
    ],
  },
  {
    id: "chk",
    name: "Chick-fil-A",
    icon: chkIcon,
    shortDescription: "Specialty chicken sandwiches and waffle fries.",
    highlights: ["Chicken Sandwich", "Waffle Fries", "Chicken Nuggets"],
    moods: ["Cheat Day"],
    rating: 4.8,
    reviewsCount: 2100,
    longDescription:
      "Chick-fil-A specializes in chicken sandwiches and sides. Their focus on quality ingredients, customer service, and signature sauces makes them a beloved fast-food chain.",
    menu: [
      { name: "Chicken Sandwich", price: "$5.49" },
      { name: "Spicy Chicken Sandwich", price: "$5.99" },
      { name: "Waffle Fries", price: "$2.49" },
      { name: "Chicken Nuggets", price: "$4.99" },
      { name: "Milkshake", price: "$3.49" },
    ],
  },
  {
    id: "pan",
    name: "Panda Express",
    icon: panIcon,
    shortDescription: "Fast-casual Chinese food with bold flavors.",
    highlights: ["Orange Chicken", "Beijing Beef", "Kung Pao Chicken"],
    moods: ["Cheat Day", "Quick Fix"],
    rating: 4.2,
    reviewsCount: 750,
    longDescription:
      "Panda Express is a popular chain serving American Chinese cuisine. Known for its flavorful entrees and quick service, it brings tasty Chinese dishes to a fast-food format.",
    menu: [
      { name: "Orange Chicken", price: "$6.49" },
      { name: "Beijing Beef", price: "$7.49" },
      { name: "Kung Pao Chicken", price: "$6.99" },
      { name: "Fried Rice", price: "$2.99" },
      { name: "Spring Rolls", price: "$3.49" },
    ],
  },
  {
    id: "qdo",
    name: "Qdoba",
    icon: qdoIcon,
    shortDescription: "Customizable Mexican-style burritos and bowls.",
    highlights: ["Burrito Bowl", "Tacos", "Nachos"],
    moods: ["Healthy Vibes"],
    rating: 4.4,
    reviewsCount: 680,
    longDescription:
      "Qdoba offers Mexican-inspired fast-casual meals, letting customers build their burritos, bowls, and tacos exactly how they like. Fresh ingredients and bold flavors make it a favorite.",
    menu: [
      { name: "Burrito Bowl", price: "$7.49" },
      { name: "Soft Tacos", price: "$6.49" },
      { name: "Nachos", price: "$5.99" },
      { name: "Churros", price: "$2.99" },
      { name: "Fountain Drink", price: "$1.99" },
    ],
  },
  {
    id: "panp",
    name: "Panera Bread",
    icon: panpIcon,
    shortDescription: "Fresh bakery items, sandwiches, and soups.",
    highlights: ["Broccoli Cheddar Soup", "Turkey Sandwich", "Bagels"],
    moods: ["Healthy Vibes", "Quick Fix"],
    rating: 4.5,
    reviewsCount: 1300,
    longDescription:
      "Panera Bread is a fast-casual bakery-cafe chain known for fresh bread, sandwiches, salads, and soups. They focus on quality ingredients and healthy options for every meal.",
    menu: [
      { name: "Broccoli Cheddar Soup", price: "$4.99" },
      { name: "Turkey Sandwich", price: "$6.49" },
      { name: "Bagel with Cream Cheese", price: "$2.99" },
      { name: "Caesar Salad", price: "$5.49" },
      { name: "Coffee", price: "$1.99" },
    ],
  },
  {
    id: "chip",
    name: "Chipotle",
    icon: chipIcon,
    shortDescription: "Fresh, customizable burritos and bowls.",
    highlights: ["Burrito", "Bowl", "Guacamole"],
    moods: ["Healthy Vibes", "Cheat Day"],
    rating: 4.6,
    reviewsCount: 3200,
    longDescription:
      "Chipotle is a fast-casual Mexican grill focusing on fresh, customizable meals. Known for their burritos, bowls, and high-quality ingredients, it’s a popular choice for flavorful, quick meals.",
    menu: [
      { name: "Burrito", price: "$7.49" },
      { name: "Bowl", price: "$6.99" },
      { name: "Tacos", price: "$6.49" },
      { name: "Guacamole", price: "$2.99" },
      { name: "Chips", price: "$1.99" },
    ],
  },
  {
    id: "shake",
    name: "Shake Shack",
    icon: shakeIcon,
    shortDescription: "Gourmet burgers, fries, and shakes.",
    highlights: ["ShackBurger", "Cheese Fries", "Milkshakes"],
    moods: ["Cheat Day"],
    rating: 4.7,
    reviewsCount: 1800,
    longDescription:
      "Shake Shack is known for its high-quality burgers, crinkle-cut fries, and creamy milkshakes. Combining fast service with premium ingredients, it offers a more upscale fast-food experience.",
    menu: [
      { name: "ShackBurger", price: "$6.99" },
      { name: "Cheese Fries", price: "$3.99" },
      { name: "Milkshake", price: "$4.49" },
      { name: "Hot Dog", price: "$4.99" },
      { name: "Lemonade", price: "$1.99" },
    ],
  },
  {
    id: "dunk",
    name: "Dunkin'",
    icon: dunkIcon,
    shortDescription: "Coffee, donuts, and breakfast sandwiches.",
    highlights: ["Glazed Donut", "Coffee", "Bagel Sandwich"],
    moods: ["Quick Fix"],
    rating: 4.4,
    reviewsCount: 1400,
    longDescription:
      "Dunkin' is a popular chain serving coffee, donuts, and breakfast items. Known for quick service and convenient options, it’s a go-to for morning cravings and coffee lovers.",
    menu: [
      { name: "Glazed Donut", price: "$1.29" },
      { name: "Coffee", price: "$2.49" },
      { name: "Bagel Sandwich", price: "$3.99" },
      { name: "Muffin", price: "$2.49" },
      { name: "Iced Coffee", price: "$2.99" },
    ],
  },
  {
    id: "fiveg",
    name: "Five Guys",
    icon: fivegIcon,
    shortDescription: "Fresh, made-to-order burgers and hand-cut fries.",
    highlights: ["Bacon Cheeseburger", "Little Fries", "Milkshakes"],
    moods: ["Cheat Day"],
    rating: 4.6,
    reviewsCount: 1600,
    longDescription:
      "Five Guys specializes in fresh, customizable burgers, hot dogs, and hand-cut fries. Known for generous portions and quality ingredients, it’s a favorite for burger lovers.",
    menu: [
      { name: "Bacon Cheeseburger", price: "$8.99" },
      { name: "Little Fries", price: "$3.49" },
      { name: "Hot Dog", price: "$5.49" },
      { name: "Cheeseburger", price: "$7.99" },
      { name: "Milkshake", price: "$5.99" },
    ],
  },
  {
    id: "hardees",
    name: "Hardee's",
    icon: hardeesIcon,
    shortDescription: "Hearty burgers and breakfast all day.",
    highlights: ["Famous Star Burger", "Frisco Breakfast Sandwich", "Onion Rings"],
    moods: ["Cheat Day", "Quick Fix"],
    rating: 4.0,
    reviewsCount: 520,
    longDescription:
      "Hardee's offers classic American fast food, with a focus on thick, juicy burgers and a full breakfast menu served all day. Known for bold flavors and hearty portions.",
    menu: [
      { name: "Famous Star with Cheese", price: "$6.49" },
      { name: "Frisco Breakfast Sandwich", price: "$4.99" },
      { name: "Onion Rings", price: "$2.99" },
      { name: "Chicken Strips (3 pcs)", price: "$4.49" },
      { name: "Soft Drink", price: "$1.99" },
    ],
  },
  {
    id: "sbux",
    name: "Starbucks",
    icon: sbuxIcon,
    shortDescription: "Coffeehouse serving handcrafted drinks and snacks.",
    highlights: ["Caffe Latte", "Frappuccino", "Pumpkin Spice Latte"],
    moods: ["Quick Fix", "Healthy Vibes"],
    rating: 4.7,
    reviewsCount: 4500,
    longDescription:
      "Starbucks is a global coffeehouse chain offering a wide range of handcrafted coffee and tea beverages, pastries, and snacks. A popular spot for meetings, work, or relaxation.",
    menu: [
      { name: "Caffe Latte", price: "$4.49" },
      { name: "Caramel Frappuccino", price: "$5.49" },
      { name: "Pumpkin Spice Latte", price: "$5.99" },
      { name: "Blueberry Muffin", price: "$3.49" },
      { name: "Bottled Water", price: "$1.99" },
    ],
  },
  {
    id: "arbys",
    name: "Arby's",
    icon: arbyIcon,
    shortDescription: "We Have The Meats®.",
    highlights: ["Classic Roast Beef", "Curly Fries", "Jamocha Shake"],
    moods: ["Cheat Day"],
    rating: 4.1,
    reviewsCount: 640,
    longDescription:
      "Arby's is known for its roast beef sandwiches and curly fries. A different take on fast food with a focus on deli-style sandwiches.",
    menu: [
      { name: "Classic Roast Beef", price: "$4.99" },
      { name: "Beef 'n Cheddar", price: "$5.99" },
      { name: "Curly Fries", price: "$2.99" },
      { name: "Jamocha Shake", price: "$3.49" },
      { name: "Slider", price: "$1.99" },
    ],
  },
  {
    id: "popeyes",
    name: "Popeyes",
    icon: popeyesIcon,
    shortDescription: "Louisiana-style fried chicken.",
    highlights: ["Chicken Sandwich", "Spicy Chicken", "Biscuits"],
    moods: ["Cheat Day"],
    rating: 4.5,
    reviewsCount: 1450,
    longDescription:
      "Popeyes brings the flavor of New Orleans with its spicy fried chicken, red beans and rice, and famous buttery biscuits.",
    menu: [
      { name: "Spicy Chicken Sandwich", price: "$4.99" },
      { name: "Bonafide Chicken", price: "$6.99" },
      { name: "Cajun Fries", price: "$2.99" },
      { name: "Biscuits (2)", price: "$1.99" },
      { name: "Mashed Potatoes", price: "$2.99" },
    ],
  },
  {
    id: "sonic",
    name: "Sonic Drive-In",
    icon: sonicIcon,
    shortDescription: "America's Drive-In with endless drink combos.",
    highlights: ["Cherry Limeade", "Corn Dog", "Tots"],
    moods: ["Cheat Day", "Quick Fix"],
    rating: 4.2,
    reviewsCount: 890,
    longDescription:
      "Sonic offers a nostalgic drive-in experience with carhops delivering burgers, hot dogs, and a huge variety of slushies and shakes.",
    menu: [
      { name: "Sonic Cheeseburger", price: "$5.49" },
      { name: "Corn Dog", price: "$1.99" },
      { name: "Tater Tots", price: "$2.99" },
      { name: "Cherry Limeade", price: "$2.49" },
      { name: "Blast", price: "$4.49" },
    ],
  },
  {
    id: "in-n-out",
    name: "In-N-Out Burger",
    icon: inIcon,
    shortDescription: "Fresh, simple burgers from the West Coast.",
    highlights: ["Double-Double", "Animal Style Fries", "Shake"],
    moods: ["Cheat Day"],
    rating: 4.9,
    reviewsCount: 5200,
    longDescription:
      "A cult favorite known for its simple menu, fresh ingredients, and 'Not So Secret' menu items like Animal Style burgers.",
    menu: [
      { name: "Double-Double", price: "$4.99" },
      { name: "Cheeseburger", price: "$3.99" },
      { name: "Hamburger", price: "$3.49" },
      { name: "French Fries", price: "$2.49" },
      { name: "Shake", price: "$2.99" },
    ],
  },
  {
    id: "jg",
    name: "Jimmy John's",
    icon: jgIcon,
    shortDescription: "Freaky Fast sandwiches.",
    highlights: ["The Pepe", "Turkey Tom", "Vito"],
    moods: ["Quick Fix", "Healthy Vibes"],
    rating: 4.3,
    reviewsCount: 780,
    longDescription:
      "Jimmy John's prides itself on speed and fresh ingredients, serving cold subs on fresh-baked bread in seconds.",
    menu: [
      { name: "The Pepe", price: "$7.49" },
      { name: "Turkey Tom", price: "$6.99" },
      { name: "Vito", price: "$7.49" },
      { name: "Chips", price: "$1.99" },
      { name: "Pickle", price: "$1.49" },
    ],
  },
  {
    id: "wingstop",
    name: "Wingstop",
    icon: wingstopIcon,
    shortDescription: "The wing experts.",
    highlights: ["Lemon Pepper Wings", "Mango Habanero", "Voodoo Fries"],
    moods: ["Cheat Day"],
    rating: 4.5,
    reviewsCount: 1250,
    longDescription:
      "Wingstop focuses on one thing: wings. With a variety of bold flavors and famous seasoned fries, it's a favorite for game day.",
    menu: [
      { name: "10 Pc Wings", price: "$10.99" },
      { name: "6 Pc Wings", price: "$7.99" },
      { name: "Voodoo Fries", price: "$4.49" },
      { name: "Veggie Sticks", price: "$1.99" },
      { name: "Dip", price: "$0.99" },
    ],
  },
  {
    id: "dairyqueen",
    name: "Dairy Queen",
    icon: dairyqueenIcon,
    shortDescription: "Burgers, baskets, and Blizzards.",
    highlights: ["Blizzard", "Chicken Strip Basket", "GrillBurger"],
    moods: ["Cheat Day", "Quick Fix"],
    rating: 4.1,
    reviewsCount: 670,
    longDescription:
      "Dairy Queen serves up hot eats and cool treats. Famous for the upside-down Blizzard and satisfying meal baskets.",
    menu: [
      { name: "Oreo Blizzard", price: "$4.99" },
      { name: "Chicken Strip Basket", price: "$6.99" },
      { name: "Cheeseburger", price: "$3.99" },
      { name: "Onion Rings", price: "$2.99" },
      { name: "Sundae", price: "$2.99" },
    ],
  },
  {
    id: "jackinthebox",
    name: "Jack in the Box",
    icon: jackintheboxIcon,
    shortDescription: "Burgers, tacos, and everything in between.",
    highlights: ["Tacos (2)", "Jumbo Jack", "Curly Fries"],
    moods: ["Cheat Day", "Quick Fix"],
    rating: 4.0,
    reviewsCount: 540,
    longDescription:
      "Jack in the Box has a quirky, diverse menu ranging from burgers to egg rolls and tacos, available late into the night.",
    menu: [
      { name: "Two Tacos", price: "$1.29" },
      { name: "Jumbo Jack", price: "$4.99" },
      { name: "Curly Fries", price: "$2.99" },
      { name: "Egg Rolls", price: "$3.99" },
      { name: "Sourdough Jack", price: "$5.99" },
    ],
  },
  {
    id: "dennys",
    name: "Denny's",
    icon: dennysIcon,
    shortDescription: "America's Diner is always open.",
    highlights: ["Grand Slam", "Moons Over My Hammy", "Pancakes"],
    moods: ["Quick Fix"],
    rating: 4.2,
    reviewsCount: 890,
    longDescription:
      "A classic American diner serving breakfast, lunch, and dinner 24/7. Known for hearty breakfast platters.",
    menu: [
      { name: "Grand Slam", price: "$9.99" },
      { name: "Moons Over My Hammy", price: "$10.99" },
      { name: "Stack of Pancakes", price: "$5.99" },
      { name: "Burger", price: "$8.99" },
      { name: "Coffee", price: "$2.99" },
    ],
  },
  {
    id: "cheesecakefactory",
    name: "The Cheesecake Factory",
    icon: cheesecakefactoryIcon,
    shortDescription: "Massive menu and legendary cheesecake.",
    highlights: ["Cheesecake", "Avocado Eggrolls", "Chicken Madeira"],
    moods: ["Cheat Day", "Healthy Vibes"],
    rating: 4.7,
    reviewsCount: 3800,
    longDescription:
      "Known for its impossibly large menu and decadent cheesecakes, this restaurant offers something for absolutely everyone in an upscale casual setting.",
    menu: [
      { name: "Original Cheesecake", price: "$8.99" },
      { name: "Avocado Eggrolls", price: "$12.99" },
      { name: "Chicken Madeira", price: "$21.99" },
      { name: "Caesar Salad", price: "$14.99" },
      { name: "Pasta Da Vinci", price: "$18.99" },
    ],
  },
];
