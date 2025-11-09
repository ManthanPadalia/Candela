const sampleListings = [
  {
    title: "Fresh Banana",
    image: {
      url: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 30,
    description:
      "Premium quality fresh bananas sourced directly from organic farms. Rich in potassium and perfect for a quick healthy snack.",
    community: "IIT Delhi",
    seller: "AaravMehta", // This will be replaced with ObjectId during seeding
  },
  {
    title: "Sweet Pineapple",
    image: {
      url: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 120,
    description:
      "Juicy and tropical pineapple, perfect for desserts, smoothies, or enjoying fresh. Handpicked at peak ripeness.",
    community: "DLF Phase 3",
    seller: "PriyaSharma",
  },
  {
    title: "Cheetos Pack",
    image: {
      url: "https://images.unsplash.com/photo-1630868837442-81bba8b81aa3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 50,
    description:
      "Crunchy, cheesy Cheetos snacks. The perfect indulgence for movie nights or quick snacking on the go.",
    community: "Bangalore University",
    seller: "RohanVerma",
  },
  {
    title: "Coca-Cola",
    image: {
      url: "https://images.unsplash.com/photo-1605548230624-8d2d0419c517?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jbyUyMGNvbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 45,
    description:
      "Refreshing Coca-Cola in an ice-cold bottle. The classic taste that brings people together since 1886.",
    community: "Prestige Lakeside",
    seller: "SnehaPatel",
  },
  {
    title: "Premium Books",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    },
    price: 1500,
    description:
      "Collection of bestselling hardcover books. Perfect for expanding your home library or as a thoughtful gift.",
    community: "BITS Pilani",
    seller: "KaranSingh",
  },
  {
    title: "Study Table",
    image: {
      url: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHklMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 7999,
    description:
      "Modern wooden study table with spacious surface and minimalist design. Perfect for home office or student workspace.",
    community: "IIT Delhi",
    seller: "AaravMehta",
  },
  {
    title: "Apple AirPods",
    image: {
      url: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D",
    },
    price: 12990,
    description:
      "Wireless Bluetooth earbuds with crystal clear sound quality and seamless connectivity. Includes charging case.",
    community: "DLF Phase 3",
    seller: "PriyaSharma",
  },
  {
    title: "Banana Bunch",
    image: {
      url: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 80,
    description:
      "Large bunch of ripe bananas, perfect for families. Excellent source of natural energy for your daily activities.",
    community: "Bangalore University",
    seller: "RohanVerma",
  },
  {
    title: "Tropical Pineapple",
    image: {
      url: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 150,
    description:
      "Extra large premium pineapple imported from tropical regions. Sweet and tangy flavor perfect for fruit salads.",
    community: "Prestige Lakeside",
    seller: "SnehaPatel",
  },
  {
    title: "Cheetos Flamin'",
    image: {
      url: "https://images.unsplash.com/photo-1630868837442-81bba8b81aa3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 65,
    description:
      "Spicy Cheetos variant for those who love a fiery kick. Bold flavor that will leave you craving more.",
    community: "BITS Pilani",
    seller: "KaranSingh",
  },
  {
    title: "Diet Coke",
    image: {
      url: "https://images.unsplash.com/photo-1605548230624-8d2d0419c517?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jbyUyMGNvbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 40,
    description:
      "Sugar-free alternative to classic Coca-Cola. Same refreshing taste with zero calories for the health-conscious.",
    community: "IIT Delhi",
    seller: "AaravMehta",
  },
  {
    title: "Fiction Collection",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    },
    price: 2999,
    description:
      "Set of bestselling fiction novels from renowned authors. Perfect for cozy reading sessions and expanding your literary horizons.",
    community: "DLF Phase 3",
    seller: "PriyaSharma",
  },
  {
    title: "Computer Desk",
    image: {
      url: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHklMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 8500,
    description:
      "Ergonomic computer desk with cable management system and spacious surface for dual monitors. Sturdy construction for long-term use.",
    community: "Bangalore University",
    seller: "RohanVerma",
  },
  {
    title: "AirPods Pro",
    image: {
      url: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpcnBvZHN8ZW58MHx8MHx8fDA%3D",
    },
    price: 24990,
    description:
      "Premium wireless earbuds with active noise cancellation and transparency mode. Superior sound quality in a comfortable design.",
    community: "Prestige Lakeside",
    seller: "SnehaPatel",
  },
  {
    title: "Organic Banana",
    image: {
      url: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 45,
    description:
      "Certified organic bananas grown without pesticides. Environmentally friendly choice for health-conscious consumers.",
    community: "BITS Pilani",
    seller: "KaranSingh",
  },
  {
    title: "Golden Pineapple",
    image: {
      url: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 180,
    description:
      "Premium gold variety pineapple known for its exceptional sweetness and low acidity. A luxury tropical experience.",
    community: "IIT Delhi",
    seller: "AaravMehta",
  },
  {
    title: "Cheetos Jumbo",
    image: {
      url: "https://images.unsplash.com/photo-1630868837442-81bba8b81aa3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 99,
    description:
      "Large party-sized Cheetos pack perfect for gatherings and celebrations. Enough cheesy goodness to share with friends.",
    community: "DLF Phase 3",
    seller: "PriyaSharma",
  },
  {
    title: "Coke Pack",
    image: {
      url: "https://images.unsplash.com/photo-1605548230624-8d2d0419c517?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jbyUyMGNvbGF8ZW58MHx8MHx8fDA%3D",
    },
    price: 250,
    description:
      "Six-pack of refreshing Coca-Cola bottles. Stock up for parties or keep your fridge ready for unexpected guests.",
    community: "Bangalore University",
    seller: "RohanVerma",
  },
  {
    title: "Academic Books",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    },
    price: 3500,
    description:
      "Collection of academic textbooks covering various subjects. Essential resources for students pursuing higher education.",
    community: "Prestige Lakeside",
    seller: "SnehaPatel",
  },
  {
    title: "Writing Desk",
    image: {
      url: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZHklMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    price: 6500,
    description:
      "Vintage-inspired writing desk with drawers for storage. Elegant design that adds character to any home office or study.",
    community: "BITS Pilani",
    seller: "KaranSingh",
  },
];

module.exports = { data: sampleListings };
