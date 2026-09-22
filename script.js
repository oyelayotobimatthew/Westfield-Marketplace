if (/Android/i.test(navigator.userAgent)) {
  document.documentElement.classList.add("android-device");
}

const products = [
  {
    id: 1,
    category: "Cars",
    name: "Mercedes-benz Gle450 Coupe - 2016",
    price: 28500,
    image: "image/Mercedes-benz Gle450 Coupe - 2016.jpg",
    desc: "The 2016 Mercedes-Benz GLE 450 AMG Coupe is a sporty midsize luxury crossover that blends the sloping, stylish roofline of a coupe with the high seating position and capability of an SUV.",
    gallery: [
      "image/Mercedes-benz Gle450 Coupe - 2016.jpg",
      "image/Mercedes-benz Gle450 Coupe - 2016-side.jpg",
      "image/Mercedes-benz Gle450 Coupe - 2016-interior.jpg",
      "image/Mercedes-benz Gle450 Coupe - 2016-back.jpg",
    ],
  },

  {
    id: 2,
    category: "Cars",
    name: "Mercedes-benz Gle43 Amg Coupé — 2017",
    price: 20500,
    image: "image/Mercedes-benz Gle43 Amg Coupé — 2017.jpg",
    desc: "The 2017 Mercedes-AMG GLE43 Coupe is a luxury performance crossover combining a sloping, coupe-like roofline with the utility and elevated stance of an SUV Coupe.",
    gallery: [
      "image/Mercedes-benz Gle43 Amg Coupé — 2017.jpg",
      "image/Mercedes-benz Gle43 Amg Coupé — 2017-side.jpg",
      "image/Mercedes-benz Gle43 Amg Coupé — 2017-interior.jpg",
      "image/Mercedes-benz Gle43 Amg Coupé — 2017-back.jpg",
    ],
  },

  {
    id: 3,
    category: "Cars",
    name: "2024 Mercedes-AMG GLE 53 Coupé",
    price: 60000,
    image: "image/2024 Mercedes-AMG GLE 53 Coupé.jpg",
    desc: "The 2024 Mercedes-AMG GLE 53 Coupe is a high-performance luxury sport utility vehicle featuring a sloping roofline, a 429-horsepower turbocharged inline-six engine, and updated front and rear styling.",
    gallery: [
      "image/2024 Mercedes-AMG GLE 53 Coupé.jpg",
      "image/2024 Mercedes-AMG GLE 53 Coupé-side.jpg",
      "image/2024 Mercedes-AMG GLE 53 Coupé-interior.jpg",
      "image/2024 Mercedes-AMG GLE 53 Coupé-back.jpg",
    ],
  },

  {
    id: 4,
    category: "Cars",
    name: "Full-black Maybach",
    price: 200000,
    image: "image/Full-black Maybach S580 4matic.jpg",
    desc: "The full-black Mercedes-Maybach S 580 4MATIC is an ultra-luxury sedan featuring obsidian black or night black paint paired with dark chrome and high-gloss black trim via the Night Series package.",
    gallery: [
      "image/Full-black Maybach S580 4matic.jpg",
      "image/Full-black Maybach S580 4matic-side.jpg",
      "image/Full-black Maybach S580 4matic-interior.jpg",
      "image/Full-black Maybach S580 4matic-back.jpg",
    ],
  },

  {
    id: 5,
    category: "Cars",
    name: "2024 Lexus RX 350 Luxury",
    price: 30000,
    image: "image/2024 Lexus RX 350 Luxury.jpg",
    desc: "The 2024 Lexus RX 350 Luxury is a high-end, five-passenger midsize SUV that blends a smooth ride with a quiet, feature-rich cabin",
    gallery: [
      "image/2024 Lexus RX 350 Luxury.jpg",
      "image/2024 Lexus RX 350 Luxury-side.jpg",
      "image/2024 Lexus RX 350 Luxury-interior.jpg",
      "image/2024 Lexus RX 350 Luxury-back.jpg",
      "image/2024 Lexus RX 350 Luxury-interior1.jpg",
    ],
  },

  {
    id: 6,
    category: "Cars",
    name: "Foreign Used Toyota Camry — 2025",
    price: 21500,
    image: "image/Foreign Used Toyota Camry — 2025.jpg",
    desc: "The 2025 Lexus RX 350 Luxury is a carryover premium midsize crossover SUV that sits at the pinnacle of the traditional gas-powered RX lineup, offering an upscale blend of quiet ride quality, high-end craftsmanship, and advanced technology",
    gallery: [
      "image/Foreign Used Toyota Camry — 2025.jpg",
      "image/Foreign Used Toyota Camry — 2025-side.jpg",
      "image/Foreign Used Toyota Camry — 2025-interior.jpg",
      "image/Foreign Used Toyota Camry — 2025-interior2.jpg",
      "image/Foreign Used Toyota Camry — 2025-back.jpg",
    ],
  },

  {
    id: 7,
    category: "Cars",
    name: "Mercedes-Benz A-Class IV (W177) 2021",
    price: 15500,
    image: "image/Mercedes-Benz A-Class IV (W177) 2021.jpg",
    desc: "The 2021 Mercedes-Benz A-Class (W177) is a luxury subcompact/compact car available as a sleek sedan or a five-door hatchback",
    gallery: [
      "image/Mercedes-Benz A-Class IV (W177) 2021.jpg",
      "image/Mercedes-Benz A-Class IV (W177) 2021-side.jpg",
      "image/Mercedes-Benz A-Class IV (W177) 2021-interior.jpg",
      "image/Mercedes-Benz A-Class IV (W177) 2021-back.jpg",
    ],
  },

  {
    id: 8,
    category: "Cars",
    name: "Honda Accord Sport — 2018",
    price: 10000,
    image: "image/Honda Accord Sport — 2018.jpg",
    desc: "The 2018 Honda Accord Sport is a mid-size sedan featuring a bold fastback design, engaging engine choices, and a roomy cabin.",
    gallery: [
      "image/Honda Accord Sport — 2018.jpg",
      "image/Honda Accord Sport — 2018-side.jpg",
      "image/Honda Accord Sport — 2018-interior.jpg",
      "image/Honda Accord Sport — 2018-interior1.jpg",
      "image/Honda Accord Sport — 2018-back.jpg",
    ],
  },

  {
    id: 9,
    category: "Cars",
    name: "Ferrari SF90 Stradale 2021",
    price: 400000,
    image: "image/Ferrari SF90 Stradale 2021.jpg",
    desc: "The 2021 Ferrari SF90 Stradale is a high-performance plug-in hybrid electric vehicle (PHEV) and Ferrari's first-ever series-production all-wheel-drive mid-engine sports car",
    gallery: [
      "image/Ferrari SF90 Stradale 2021.jpg",
      "image/Ferrari SF90 Stradale 2021-side.jpg",
      "image/Ferrari SF90 Stradale 2021-interior.jpg",
      "image/Ferrari SF90 Stradale 2021-back.jpg",
    ],
  },

  {
    id: 10,
    category: "Cars",
    name: "Corolla XEi 2025",
    price: 20000,
    image: "image/Corolla XEi 2025.jpg",
    desc: "Strong and practical pickup truck for work and everyday use.",
    gallery: [
      "image/Corolla XEi 2025.jpg",
      "image/Corolla XEi 2025-side.jpg",
      "image/Corolla XEi 2025-interior.jpg",
      "image/Corolla XEi 2025-back.jpg",
    ],
  },

  {
    id: 11,
    category: "Wigs & Human Hair",
    name: "Luxury Body Wave Wig",
    price: 20,
    image: "image/body-wave.jpg",
    desc: "26 28 30 Inch Body Wave Human Hair Bundles 16A 100% Unprocessed Raw Virgin Human Hair Weave.",
    gallery: [
      "image/body-wave.jpg",
      "image/body-wave-side.jpg",
      "image/body-wave-back.jpg",
      "image/body-wave-detail.jpg",
    ],
  },

  {
    id: 12,
    category: "Wigs & Human Hair",
    name: "13by6 HD Lace Frontal Wig",
    price: 30,
    image: "image/hd-lace-frontal.jpg",
    desc: "Premium-looking lace frontal style with a natural finish.",
    gallery: [
      "image/hd-lace-frontal.jpg",
      "image/hd-lace-frontal-side.jpg",
      "image/hd-lace-frontal-back.jpg",
      "image/hd-lace-frontal-detail.jpg",
    ],
  },

  {
    id: 13,
    category: "Wigs & Human Hair",
    name: "Straight Human Hair Wig",
    price: 20,
    image: "image/straight-human-hair.jpg",
    desc: "Fashionable 12-Inch Black to Yellow Ombre Women's Bob Wig, Middle Part Style, Glueless Heat Resistant, Natural Look, Breathable and Comfortable, Versatile Wig for All Ethnicities and Skin Tones, Suitable for Festivals and Daily Wear.",
    gallery: [
      "image/straight-human-hair.jpg",
      "image/straight-human-hair-side.jpg",
      "image/straight-human-hair-back.jpg",
      "image/straight-human-hair-detail.jpg",
    ],
  },

  {
    id: 14,
    category: "Wigs & Human Hair",
    name: "Curly Human Hair Wig",
    price: 50,
    image: "image/curly-human-hair.jpg",
    desc: "Curly Wig Human Hair for Women Long Wavy Wig with Bangs Suitable for All Beige Tones Curly Wave Wig Human Hair Perfect for Cosplay Party Birthday And Everyday Use.",
    gallery: [
      "image/curly-human-hair.jpg",
      "image/curly-human-hair-side.jpg",
      "image/curly-human-hair-back.jpg",
      "image/curly-human-hair-detail.jpg",
    ],
  },

  {
    id: 15,
    category: "Wigs & Human Hair",
    name: "Deep Wave Wig",
    price: 26,
    image: "image/deep-wave.jpg",
    desc: "Deep wave texture for a stylish and glamorous appearance.",
    gallery: [
      "image/deep-wave.jpg",
      "image/deep-wave-side.jpg",
      "image/deep-wave-back.jpg",
      "image/deep-wave-detail.jpg",
    ],
  },

  {
    id: 16,
    category: "Wigs & Human Hair",
    name: "Water Wave Wig",
    price: 30,
    image: "image/water-wave.jpg",
    desc: "Soft water wave texture suitable for different occasions.",
    gallery: [
      "image/water-wave.jpg",
      "image/water-wave-side.jpg",
      "image/water-wave-back.jpg",
      "image/water-wave-detail.jpg",
    ],
  },

  {
    id: 17,
    category: "Wigs & Human Hair",
    name: "Bob Wig",
    price: 10,
    image: "image/bob-wig.jpg",
    desc: "Classic short bob hairstyle with a clean modern look.",
    gallery: [
      "image/bob-wig.jpg",
      "image/bob-wig-side.jpg",
      "image/bob-wig-back.jpg",
      "image/bob-wig-detail.jpg",
    ],
  },

  {
    id: 18,
    category: "Wigs & Human Hair",
    name: "Pixie Cut Wig",
    price: 15,
    image: "image/pixie-cut.jpg",
    desc: "Short stylish pixie cut for a simple and fashionable appearance.",
    gallery: [
      "image/pixie-cut.jpg",
      "image/pixie-cut-side.jpg",
      "image/pixie-cut-back.jpg",
      "image/pixie-cut-detail.jpg",
    ],
  },

  {
    id: 19,
    category: "Wigs & Human Hair",
    name: "Glueless Lace Wig",
    price: 20,
    image: "image/glueless-lace.jpg",
    desc: "Convenient lace wig designed for a natural-looking finish.",
    gallery: [
      "image/glueless-lace.jpg",
      "image/glueless-lace-side.jpg",
      "image/glueless-lace-back.jpg",
      "image/glueless-lace-detail.jpg",
    ],
  },

  {
    id: 20,
    category: "Wigs & Human Hair",
    name: "Blonde Luxury Wig",
    price: 30,
    image: "image/blonde-luxury.jpg",
    desc: "Luxury blonde style for a bold and elegant appearance.",
    gallery: [
      "image/blonde-luxury.jpg",
      "image/blonde-luxury-side.jpg",
      "image/blonde-luxury-back.jpg",
      "image/blonde-luxury-detail.jpg",
    ],
  },

  {
    id: 21,
    category: "Phones",
    name: "Apple Iphone 17, 256GB",
    price: 800,
    image: "image/Apple Iphone 17, 256GB.jpg",
    desc: "High-performance smartphone with generous storage.",
    gallery: [
      "image/Apple Iphone 17, 256GB.jpg",
      "image/Apple Iphone 17, 256GB-back.jpg",
      "image/Apple Iphone 17, 256GB-side.jpg",
      "image/Apple Iphone 17, 256GB-detail.jpg",
    ],
  },

  {
    id: 22,
    category: "Phones",
    name: "iPhone 16 Pro Unlocked, 128GB",
    price: 770,
    image: "image/iPhone 16 Pro Unlocked, 128GB.jpg",
    desc: "Reliable everyday smartphone with a bright display.",
    gallery: [
      "image/iPhone 16 Pro Unlocked, 128GB.jpg",
      "image/iPhone 16 Pro Unlocked, 128GB-back.jpg",
      "image/iPhone 16 Pro Unlocked, 128GB-side.jpg",
      "image/iPhone 16 Pro Unlocked, 128GB-detail.jpg",
    ],
  },

  {
    id: 23,
    category: "Phones",
    name: "2026 Latest 4G Smartphone, 4GB+64GB",
    price: 100,
    image: "image/2026 Latest 4G Smartphone, 4GB+64GB.jpg",
    desc: "Premium smartphone with modern features and powerful performance.",
    gallery: [
      "image/2026 Latest 4G Smartphone, 4GB+64GB.jpg",
      "image/2026 Latest 4G Smartphone, 4GB+64GB-back.jpg",
      "image/2026 Latest 4G Smartphone, 4GB+64GB-side.jpg",
      "image/2026 Latest 4G Smartphone, 4GB+64GB-detail.jpg",
    ],
  },

  {
    id: 24,
    category: "Phones",
    name: "Iphone 17, 256GB",
    price: 930,
    image: "image/Iphone 17, 256GB.jpg",
    desc: "Affordable smartphone for everyday communication and entertainment.",
    gallery: [
      "image/Iphone 17, 256GB.jpg",
      "image/Iphone 17, 256GB-back.jpg",
      "image/Iphone 17, 256GB-side.jpg",
      "image/Iphone 17, 256GB-detail.jpg",
    ],
  },

  {
    id: 25,
    category: "Phones",
    name: "SAMSUNG Galaxy A56 5G",
    price: 380,
    image: "image/SAMSUNG Galaxy A56 5G.jpg",
    desc: "Modern 5G smartphone with fast connectivity.",
    gallery: [
      "image/SAMSUNG Galaxy A56 5G.jpg",
      "image/SAMSUNG Galaxy A56 5G-back.jpg",
      "image/SAMSUNG Galaxy A56 5G-side.jpg",
      "image/SAMSUNG Galaxy A56 5G-detail.jpg",
    ],
  },

  {
    id: 26,
    category: "Phones",
    name: "iPhone 18 pro max dark cherry 256GB",
    price: 1000,
    image: "image/iPhone 18 pro max dark cherry.jpg",
    desc: "iPhone 18 pro max featuring an advanced camera system.",
    gallery: [
      "image/iPhone 18 pro max dark cherry.jpg",
      "image/iPhone 18 pro max dark cherry-back.jpg",
      "image/iPhone 18 pro max dark cherry-side.jpg",
      "image/iPhone 18 pro max dark cherry-detail.jpg",
    ],
  },

  {
    id: 27,
    category: "Phones",
    name: "SAMSUNG Galaxy A26 5G",
    price: 150,
    image: "image/SAMSUNG Galaxy A26 5G.jpg",
    desc: "Powerful smartphone designed for mobile gaming.",
    gallery: [
      "image/SAMSUNG Galaxy A26 5G.jpg",
      "image/SAMSUNG Galaxy A26 5G-back.jpg",
      "image/SAMSUNG Galaxy A26 5G-side.jpg",
      "image/SAMSUNG Galaxy A26 5G-detail.jpg",
    ],
  },

  {
    id: 28,
    category: "Phones",
    name: "Xiaomi Redmi 14C Smartphone",
    price: 90,
    image: "image/Xiaomi Redmi 14C Smartphone.jpg",
    desc: "Innovative smartphone with modern features and a flexible display.",
    gallery: [
      "image/Xiaomi Redmi 14C Smartphone.jpg",
      "image/Xiaomi Redmi 14C Smartphone-back.jpg",
      "image/Xiaomi Redmi 14C Smartphone-side.jpg",
      "image/Xiaomi Redmi 14C Smartphone-detail.jpg",
    ],
  },

  {
    id: 29,
    category: "Phones",
    name: "POCO F8 Pro Smartphone Dual SIM Card",
    price: 150,
    image: "image/POCO F8 Pro Smartphone Dual SIM Card.jpg",
    desc: "Compact smartphone that is easy to carry and use.",
    gallery: [
      "image/POCO F8 Pro Smartphone Dual SIM Card.jpg",
      "image/POCO F8 Pro Smartphone Dual SIM Card-back.jpg",
      "image/POCO F8 Pro Smartphone Dual SIM Card-side.jpg",
      "image/POCO F8 Pro Smartphone Dual SIM Card-detail.jpg",
    ],
  },

  {
    id: 30,
    category: "Phones",
    name: "POCO X8 Pro Max Smartphone Dual SIM",
    price: 390,
    image: "image/POCO X8 Pro Max Smartphone Dual SIM.jpg",
    desc: "Reliable smartphone suitable for work and business communication.",
    gallery: [
      "image/POCO X8 Pro Max Smartphone Dual SIM.jpg",
      "image/POCO X8 Pro Max Smartphone Dual SIM-back.jpg",
      "image/POCO X8 Pro Max Smartphone Dual SIM-side.jpg",
      "image/POCO X8 Pro Max Smartphone Dual SIM-detail.jpg",
    ],
  },

  {
    id: 31,
    category: "Fashion",
    name: "Casual Shirt",
    price: 10,
    image: "image/Casual Shirt.jpg",
    desc: "Versatile fashion piece designed for a polished look.",
    gallery: [
      "image/Casual Shirt.jpg",
      "image/Casual Shirt-side.jpg",
      "image/Casual Shirt-back.jpg",
      "image/Casual Shirt-detail.jpg",
    ],
  },

  {
    id: 32,
    category: "Fashion",
    name: "British Vintage Sneaker",
    price: 50,
    image: "image/British Vintage Sneaker.jpg",
    desc: "Comfortable casual sneakers for everyday style.",
    gallery: [
      "image/British Vintage Sneaker.jpg",
      "image/British Vintage Sneaker-side.jpg",
      "image/British Vintage Sneaker-back.jpg",
      "image/British Vintage Sneaker-detail.jpg",
    ],
  },

  {
    id: 33,
    category: "Fashion",
    name: "Casual T-Shirt",
    price: 20,
    image: "image/casual-tshirt.jpg",
    desc: "Comfortable casual t-shirt for everyday wear.",
    gallery: [
      "image/casual-tshirt.jpg",
      "image/casual-tshirt-side.jpg",
      "image/casual-tshirt-back.jpg",
      "image/casual-tshirt-detail.jpg",
    ],
  },

  {
    id: 34,
    category: "Fashion",
    name: "Classic Jeans",
    price: 15,
    image: "image/classic-jeans.jpg",
    desc: "Classic jeans designed for comfortable everyday outfits.",
    gallery: [
      "image/classic-jeans.jpg",
      "image/classic-jeans-side.jpg",
      "image/classic-jeans-back.jpg",
      "image/classic-jeans-detail.jpg",
    ],
  },

  {
    id: 35,
    category: "Fashion",
    name: "Leather Jacket",
    price: 25,
    image: "image/leather-jacket.jpg",
    desc: "Stylish jacket designed to complement a modern wardrobe.",
    gallery: [
      "image/leather-jacket.jpg",
      "image/leather-jacket-side.jpg",
      "image/leather-jacket-back.jpg",
      "image/leather-jacket-detail.jpg",
    ],
  },

  {
    id: 36,
    category: "Fashion",
    name: "Designer Handbag",
    price: 30,
    image: "image/designer-handbag.jpg",
    desc: "Elegant handbag suitable for everyday and special occasions.",
    gallery: [
      "image/designer-handbag.jpg",
      "image/designer-handbag-side.jpg",
      "image/designer-handbag-back.jpg",
      "image/designer-handbag-detail.jpg",
    ],
  },

  {
    id: 37,
    category: "Fashion",
    name: "Classic Wristwatch",
    price: 30,
    image: "image/classic-watch.jpg",
    desc: "Classic wristwatch with a sophisticated appearance.",
    gallery: [
      "image/classic-watch.jpg",
      "image/classic-watch-side.jpg",
      "image/classic-watch-back.jpg",
      "image/classic-watch-detail.jpg",
    ],
  },

  {
    id: 38,
    category: "Fashion",
    name: "Fashion Sunglasses",
    price: 55,
    image: "image/fashion-sunglasses.jpg",
    desc: "Stylish sunglasses designed to complement your outfit.",
    gallery: [
      "image/fashion-sunglasses.jpg",
      "image/fashion-sunglasses-side.jpg",
      "image/fashion-sunglasses-back.jpg",
      "image/fashion-sunglasses-detail.jpg",
    ],
  },

  {
    id: 39,
    category: "Fashion",
    name: "Formal Shirt",
    price: 10,
    image: "image/formal-shirt.jpg",
    desc: "Smart formal shirt suitable for work and special occasions.",
    gallery: [
      "image/formal-shirt.jpg",
      "image/formal-shirt-side.jpg",
      "image/formal-shirt-back.jpg",
      "image/formal-shirt-detail.jpg",
    ],
  },

  {
    id: 40,
    category: "Fashion",
    name: "Premium Hoodie",
    price: 20,
    image: "image/premium-hoodie.jpg",
    desc: "Comfortable hoodie designed for casual everyday wear.",
    gallery: [
      "image/premium-hoodie.jpg",
      "image/premium-hoodie-side.jpg",
      "image/premium-hoodie-back.jpg",
      "image/premium-hoodie-detail.jpg",
    ],
  },

  {
    id: 41,
    category: "Electronics",
    name: "Wireless Headphones",
    price: 20,
    image: "image/wireless-headphones.jpg",
    desc: "Wireless audio for music, calls and entertainment.",
    gallery: [
      "image/wireless-headphones.jpg",
      "image/wireless-headphones-side.jpg",
      "image/wireless-headphones-back.jpg",
      "image/wireless-headphones-detail.jpg",
    ],
  },

  {
    id: 42,
    category: "Electronics",
    name: "Smart 4K 43inches Television",
    price: 200,
    image: "image/smart-tv.jpg",
    desc: "Large-screen entertainment for your home.",
    gallery: [
      "image/smart-tv.jpg",
      "image/smart-tv-side.jpg",
      "image/smart-tv-back.jpg",
      "image/smart-tv-detail.jpg",
    ],
  },

  {
    id: 43,
    category: "Electronics",
    name: "Bluetooth Speaker",
    price: 30,
    image: "image/bluetooth-speaker.jpg",
    desc: "Portable wireless speaker for music and entertainment.",
    gallery: [
      "image/bluetooth-speaker.jpg",
      "image/bluetooth-speaker-side.jpg",
      "image/bluetooth-speaker-back.jpg",
      "image/bluetooth-speaker-detail.jpg",
    ],
  },

  {
    id: 44,
    category: "Electronics",
    name: "Tablet Laptop",
    price: 100,
    image: "image/Tablet Laptop.jpg",
    desc: "Modern laptop suitable for work, school and entertainment.",
    gallery: [
      "image/Tablet Laptop.jpg",
      "image/Tablet Laptop-side.jpg",
      "image/Tablet Laptop-back.jpg",
      "image/Tablet Laptop-detail.jpg",
    ],
  },

  {
    id: 45,
    category: "Electronics",
    name: "Android 11 Tablet",
    price: 40,
    image: "image/Android 11 Tablet.jpg",
    desc: "Portable tablet for browsing, entertainment and productivity.",
    gallery: [
      "image/Android 11 Tablet.jpg",
      "image/Android 11 Tablet-side.jpg",
      "image/Android 11 Tablet-back.jpg",
      "image/Android 11 Tablet-detail.jpg",
    ],
  },

  {
    id: 46,
    category: "Electronics",
    name: "Smartwatch",
    price: 10,
    image: "image/smartwatch.jpg",
    desc: "Modern smartwatch for everyday convenience.",
    gallery: [
      "image/smartwatch.jpg",
      "image/smartwatch-side.jpg",
      "image/smartwatch-back.jpg",
      "image/smartwatch-detail.jpg",
    ],
  },

  {
    id: 47,
    category: "Electronics",
    name: "Wireless Keyboard",
    price: 25,
    image: "image/wireless-keyboard.jpg",
    desc: "Convenient wireless keyboard for your computer setup.",
    gallery: [
      "image/wireless-keyboard.jpg",
      "image/wireless-keyboard-side.jpg",
      "image/wireless-keyboard-back.jpg",
      "image/wireless-keyboard-detail.jpg",
    ],
  },

  {
    id: 48,
    category: "Electronics",
    name: "Cooling Station for Ps5/Slim",
    price: 15,
    image: "image/Cooling Station for Ps5-Slim.jpg",
    desc: "High-quality display suitable for work and entertainment.",
    gallery: [
      "image/Cooling Station for Ps5-Slim.jpg",
      "image/Cooling Station for Ps5-Slim-side.jpg",
      "image/Cooling Station for Ps5-Slim-back.jpg",
      "image/Cooling Station for Ps5-Slim-detail.jpg",
    ],
  },

  {
    id: 49,
    category: "Electronics",
    name: "ZOSTUIC 8K 88MP Digital Camera",
    price: 110,
    image: "image/ZOSTUIC 8K 88MP Digital Camera.jpg",
    desc: "Digital camera for photography and creative projects.",
    gallery: [
      "image/ZOSTUIC 8K 88MP Digital Camera.jpg",
      "image/ZOSTUIC 8K 88MP Digital Camera-side.jpg",
      "image/ZOSTUIC 8K 88MP Digital Camera-back.jpg",
      "image/ZOSTUIC 8K 88MP Digital Camera-detail.jpg",
    ],
  },

  {
    id: 50,
    category: "Electronics",
    name: "NewRixing 6W Power Bank 1800mAh",
    price: 10,
    image: "image/power-bank.jpg",
    desc: "Portable power bank for charging compatible devices.",
    gallery: [
      "image/power-bank.jpg",
      "image/power-bank-side.jpg",
      "image/power-bank-back.jpg",
      "image/power-bank-detail.jpg",
    ],
  },

  {
    id: 51,
    category: "Other Products",
    name: "Travel Backpack",
    price: 10,
    image: "image/backpack.jpg",
    desc: "Practical everyday backpack with useful storage space.",
    gallery: [
      "image/backpack.jpg",
      "image/backpack-side.jpg",
      "image/backpack-back.jpg",
      "image/backpack-detail.jpg",
    ],
  },

  {
    id: 52,
    category: "Other Products",
    name: "Hibrew 20Bar Semi Automatic Espresso Coffee Machine",
    price: 75,
    image: "image/coffee-maker.jpg",
    desc: "Convenient coffee maker for your home or office.",
    gallery: [
      "image/coffee-maker.jpg",
      "image/coffee-maker-side.jpg",
      "image/coffee-maker-back.jpg",
      "image/coffee-maker-detail.jpg",
    ],
  },

  {
    id: 53,
    category: "Other Products",
    name: "Water Bottle",
    price: 5,
    image: "image/water-bottle.jpg",
    desc: "Reusable water bottle suitable for everyday use.",
    gallery: [
      "image/water-bottle.jpg",
      "image/water-bottle-side.jpg",
      "image/water-bottle-back.jpg",
      "image/water-bottle-detail.jpg",
    ],
  },

  {
    id: 54,
    category: "Other Products",
    name: "Telescopic Trolley Travel Bag",
    price: 20,
    image: "image/travel-suitcase.jpg",
    desc: "Durable suitcase designed for convenient travel.",
    gallery: [
      "image/travel-suitcase.jpg",
      "image/travel-suitcase-side.jpg",
      "image/travel-suitcase-back.jpg",
      "image/travel-suitcase-detail.jpg",
    ],
  },

  {
    id: 55,
    category: "Other Products",
    name: "Home Decor Set",
    price: 15,
    image: "image/home-decor.jpg",
    desc: "Decorative pieces designed to add style to your space.",
    gallery: [
      "image/home-decor.jpg",
      "image/home-decor-side.jpg",
      "image/home-decor-back.jpg",
      "image/home-decor-detail.jpg",
    ],
  },

  {
    id: 56,
    category: "Other Products",
    name: "Ergonomic Computer Office Chair",
    price: 34,
    image: "image/office-chair.jpg",
    desc: "Comfortable chair suitable for home and office workspaces.",
    gallery: [
      "image/office-chair.jpg",
      "image/office-chair-side.jpg",
      "image/office-chair-back.jpg",
      "image/office-chair-detail.jpg",
    ],
  },

  {
    id: 57,
    category: "Other Products",
    name: "21pcs Non-Stick Cookware Set",
    price: 50,
    image: "image/kitchen-set.jpg",
    desc: "Useful kitchen essentials for everyday cooking.",
    gallery: [
      "image/kitchen-set.jpg",
      "image/kitchen-set-side.jpg",
      "image/kitchen-set-back.jpg",
      "image/kitchen-set-detail.jpg",
    ],
  },

  {
    id: 58,
    category: "Other Products",
    name: "Fitness Bag",
    price: 15,
    image: "image/fitness-bag.jpg",
    desc: "Practical bag for carrying fitness and everyday essentials.",
    gallery: [
      "image/fitness-bag.jpg",
      "image/fitness-bag-side.jpg",
      "image/fitness-bag-back.jpg",
      "image/fitness-bag-detail.jpg",
    ],
  },

  {
    id: 59,
    category: "Other Products",
    name: "Desk Lamp",
    price: 40,
    image: "image/desk-lamp.jpg",
    desc: "Modern desk lamp suitable for study and office spaces.",
    gallery: [
      "image/desk-lamp.jpg",
      "image/desk-lamp-side.jpg",
      "image/desk-lamp-back.jpg",
      "image/desk-lamp-detail.jpg",
    ],
  },

  {
    id: 60,
    category: "Other Products",
    name: "Storage Organizer",
    price: 11,
    image: "image/storage-organizer.jpg",
    desc: "Practical organizer for keeping your belongings neatly arranged.",
    gallery: [
      "image/storage-organizer.jpg",
      "image/storage-organizer-side.jpg",
      "image/storage-organizer-back.jpg",
      "image/storage-organizer-detail.jpg",
    ],
  },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Westfield Marketplace Products",
  url: "https://westfield-marketplace.netlify.app/",
  numberOfItems: products.length,
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      description: product.desc,
      image: `https://westfield-marketplace.netlify.app/${product.image}`,
      category: product.category,
      offers: {
        "@type": "Offer",
        price: product.price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://westfield-marketplace.netlify.app/",
      },
    },
  })),
};

const productSchemaScript = document.createElement("script");
productSchemaScript.type = "application/ld+json";
productSchemaScript.textContent = JSON.stringify(productSchema);
document.head.appendChild(productSchemaScript);

const productReviews = {
  1: [
    {
      name: "Sarah",
      rating: 5,
      comment:
        "The GLE450 looks even better in person. I really like the coupe shape and the interior finish.",
    },
    {
      name: "Daniel",
      rating: 5,
      comment:
        "Beautiful vehicle with a very clean interior. The black finish gives it a really classy look.",
    },
    {
      name: "Michael",
      rating: 4,
      comment:
        "The design is excellent and the car has a very premium feel overall.",
    },
  ],

  2: [
    {
      name: "Jessica",
      rating: 5,
      comment:
        "The AMG styling caught my attention immediately. The car looks sporty without losing its luxury appearance.",
    },
    {
      name: "David",
      rating: 5,
      comment:
        "Very attractive coupe and the interior looks fantastic. I especially like the dashboard design.",
    },
    {
      name: "Brian",
      rating: 4,
      comment:
        "A really sharp-looking Mercedes. The overall finish is impressive.",
    },
  ],

  3: [
    {
      name: "Amanda",
      rating: 5,
      comment:
        "The 2024 GLE53 has such a modern appearance. Everything about the design looks well finished.",
    },
    {
      name: "Chris",
      rating: 5,
      comment:
        "I like the balance between the sporty exterior and comfortable-looking interior.",
    },
    {
      name: "Rebecca",
      rating: 4,
      comment:
        "The body design is beautiful and the vehicle looks very well maintained.",
    },
  ],

  4: [
    {
      name: "Sophia",
      rating: 5,
      comment:
        "The all-black Maybach look is absolutely beautiful. It has a very elegant and executive appearance.",
    },
    {
      name: "James",
      rating: 5,
      comment:
        "The interior looks extremely luxurious and the exterior finish is impressive.",
    },
    {
      name: "Kevin",
      rating: 5,
      comment:
        "This is the type of car that immediately stands out. The black-on-black design looks excellent.",
    },
  ],

  5: [
    {
      name: "Olivia",
      rating: 5,
      comment:
        "The Lexus RX350 has a very clean and modern design. The interior looks comfortable and spacious.",
    },
    {
      name: "Andrew",
      rating: 5,
      comment:
        "I really like the exterior styling. It has a nice balance between luxury and everyday practicality.",
    },
    {
      name: "Grace",
      rating: 4,
      comment:
        "The vehicle looks elegant and the interior details are nicely finished.",
    },
  ],

  6: [
    {
      name: "Nathan",
      rating: 5,
      comment:
        "The Camry has a clean and modern appearance. I particularly like the exterior design.",
    },
    {
      name: "Emily",
      rating: 5,
      comment:
        "A very nice-looking sedan with a comfortable-looking interior and plenty of space.",
    },
    {
      name: "Samuel",
      rating: 4,
      comment: "The overall design is simple, stylish and easy to appreciate.",
    },
  ],

  7: [
    {
      name: "Victoria",
      rating: 5,
      comment:
        "The A-Class has a really nice compact design. The interior looks modern and well organized.",
    },
    {
      name: "Alex",
      rating: 5,
      comment:
        "I like how sporty and clean the exterior looks. The interior is also very attractive.",
    },
    {
      name: "Megan",
      rating: 4,
      comment:
        "A stylish Mercedes with a beautiful dashboard and a premium appearance.",
    },
  ],

  8: [
    {
      name: "Joshua",
      rating: 5,
      comment:
        "The Accord Sport has a very nice sporty appearance. The black interior makes it look even better.",
    },
    {
      name: "Lauren",
      rating: 5,
      comment:
        "Clean design and a really attractive exterior. It looks like a great everyday car.",
    },
    {
      name: "Anthony",
      rating: 4,
      comment:
        "The Sport trim gives the Accord a nice aggressive look without being too much.",
    },
  ],

  9: [
    {
      name: "Ryan",
      rating: 5,
      comment:
        "The SF90 design is stunning. The red exterior really brings out the shape of the car.",
    },
    {
      name: "Nicole",
      rating: 5,
      comment:
        "Everything about the Ferrari looks special, especially the exterior lines and interior finish.",
    },
    {
      name: "Jason",
      rating: 5,
      comment:
        "A beautiful performance car with an unmistakable Ferrari appearance.",
    },
  ],

  10: [
    {
      name: "Daniel",
      rating: 5,
      comment:
        "The Corolla has a clean modern appearance and the interior looks comfortable.",
    },
    {
      name: "Hannah",
      rating: 5,
      comment:
        "I like the simple but stylish design. It looks practical while still being attractive.",
    },
    {
      name: "Mark",
      rating: 4,
      comment: "A very neat-looking Toyota with a clean exterior finish.",
    },
  ],

  11: [
    {
      name: "Tiffany",
      rating: 5,
      comment:
        "The body wave pattern looks beautiful and gives the hair a soft, natural appearance.",
    },
    {
      name: "Chloe",
      rating: 5,
      comment:
        "I love how full the hair looks. The waves are really pretty and easy to style.",
    },
    {
      name: "Maria",
      rating: 4,
      comment:
        "The texture looks soft and the wave pattern gives it a lovely finish.",
    },
  ],

  12: [
    {
      name: "Jessica",
      rating: 5,
      comment:
        "The lace blends nicely and the hairline gives the wig a very natural-looking finish.",
    },
    {
      name: "Faith",
      rating: 5,
      comment:
        "I really like the frontal design. It gives plenty of room for different styling options.",
    },
    {
      name: "Ashley",
      rating: 4,
      comment:
        "The hair looks smooth and the lace gives the overall style a clean appearance.",
    },
  ],

  13: [
    {
      name: "Samantha",
      rating: 5,
      comment:
        "The straight texture is beautiful and very easy to style. It has a smooth finish.",
    },
    {
      name: "Angela",
      rating: 5,
      comment:
        "Simple, elegant and versatile. I really like the natural-looking straight texture.",
    },
    {
      name: "Rachel",
      rating: 4,
      comment: "The hair has a nice shine without looking overly artificial.",
    },
  ],

  14: [
    {
      name: "Diana",
      rating: 5,
      comment:
        "The curls are full and beautiful. The texture gives the wig a lovely natural look.",
    },
    {
      name: "Monica",
      rating: 5,
      comment:
        "I love the volume of the curls. It gives the hairstyle a very lively appearance.",
    },
    {
      name: "Janet",
      rating: 4,
      comment: "The curl pattern is attractive and the hair looks soft.",
    },
  ],

  15: [
    {
      name: "Stephanie",
      rating: 5,
      comment:
        "The deep wave pattern is gorgeous. It gives the hair plenty of movement and volume.",
    },
    {
      name: "Linda",
      rating: 5,
      comment: "Very beautiful wave pattern and a nice full appearance.",
    },
    {
      name: "Naomi",
      rating: 4,
      comment:
        "The waves look defined and the overall style is very attractive.",
    },
  ],

  16: [
    {
      name: "Esther",
      rating: 5,
      comment:
        "The water wave texture looks soft and natural. I really like the movement of the hair.",
    },
    {
      name: "Caroline",
      rating: 5,
      comment:
        "Beautiful waves with a relaxed look. The texture is one of my favorite things about it.",
    },
    {
      name: "Deborah",
      rating: 4,
      comment:
        "The hair has a nice natural-looking wave pattern and good volume.",
    },
  ],

  17: [
    {
      name: "Victoria",
      rating: 5,
      comment:
        "The bob cut is neat and stylish. It gives a very clean and classy appearance.",
    },
    {
      name: "Grace",
      rating: 5,
      comment:
        "I love the simplicity of this wig. The length makes it easy to wear for different occasions.",
    },
    {
      name: "Nina",
      rating: 4,
      comment: "A lovely short style with a polished finish.",
    },
  ],

  18: [
    {
      name: "Michelle",
      rating: 5,
      comment:
        "The pixie cut is stylish and easy-looking. It gives the face a very neat frame.",
    },
    {
      name: "Rose",
      rating: 5,
      comment:
        "I like the short design because it looks modern and effortless.",
    },
    {
      name: "Wendy",
      rating: 4,
      comment:
        "A beautiful short hairstyle with a clean and fashionable appearance.",
    },
  ],

  19: [
    {
      name: "Brianna",
      rating: 5,
      comment:
        "The glueless design is convenient and the overall hairstyle looks very natural.",
    },
    {
      name: "Kimberly",
      rating: 5,
      comment:
        "I really like the natural finish. The wig has a nice shape and looks easy to wear.",
    },
    {
      name: "Patricia",
      rating: 4,
      comment: "The style is beautiful and the hairline looks nicely finished.",
    },
  ],

  20: [
    {
      name: "Isabella",
      rating: 5,
      comment:
        "The blonde shade is beautiful and gives the wig a bold but elegant appearance.",
    },
    {
      name: "Taylor",
      rating: 5,
      comment:
        "The color really stands out. I also like how smooth and full the hair looks.",
    },
    {
      name: "Cynthia",
      rating: 4,
      comment: "A beautiful blonde style with a very polished finish.",
    },
  ],

  21: [
    {
      name: "Ethan",
      rating: 5,
      comment:
        "The iPhone 17 has a really clean design and the display looks sharp and modern.",
    },
    {
      name: "Sophie",
      rating: 5,
      comment:
        "I like the storage size and the overall design. It looks like a great everyday phone.",
    },
    {
      name: "Noah",
      rating: 4,
      comment:
        "The phone looks sleek and premium, especially with the clean screen design.",
    },
  ],

  22: [
    {
      name: "Daniel",
      rating: 5,
      comment:
        "The Pro design looks excellent and the display is one of the things that stands out.",
    },
    {
      name: "Emma",
      rating: 5,
      comment:
        "Very clean-looking phone with a premium finish. I especially like the camera design.",
    },
    {
      name: "Lucas",
      rating: 4,
      comment:
        "The phone has a beautiful design and feels like a proper premium device.",
    },
  ],

  23: [
    {
      name: "William",
      rating: 5,
      comment:
        "2026 Latest 4G Smartphone, 4GB+64GB-side is impressive. The large display makes it look great for watching videos.",
    },
    {
      name: "Sophia",
      rating: 5,
      comment: "The camera setup and overall design are really attractive.",
    },
    {
      name: "Henry",
      rating: 4,
      comment:
        "A very premium-looking iPhone with a large and beautiful display.",
    },
  ],

  24: [
    {
      name: "Benjamin",
      rating: 5,
      comment:
        "The Pro Max design looks excellent and the camera setup is very impressive.",
    },
    {
      name: "Ella",
      rating: 5,
      comment: "I really like the modern appearance and large display.",
    },
    {
      name: "Jacob",
      rating: 5,
      comment:
        "The phone looks premium from every angle and has a very clean design.",
    },
  ],

  25: [
    {
      name: "Liam",
      rating: 5,
      comment:
        "The SAMSUNG Galaxy A56 has a clean design and the size makes it comfortable-looking for everyday use.",
    },
    {
      name: "Mia",
      rating: 5,
      comment: "I like the simple appearance and the camera layout.",
    },
    {
      name: "Oliver",
      rating: 4,
      comment: "A stylish phone with a nice display and modern finish.",
    },
  ],

  26: [
    {
      name: "Samuel",
      rating: 5,
      comment:
        "iPhone 18 pro max dark cherry has a clean design and the large display looks really nice.",
    },
    {
      name: "Zoe",
      rating: 5,
      comment: "The phone looks modern and practical for everyday use.",
    },
    {
      name: "Daniel",
      rating: 4,
      comment: "I like the simple design and the overall look of the device.",
    },
  ],

  27: [
    {
      name: "Matthew",
      rating: 5,
      comment:
        "The S24 Ultra looks extremely premium. The large screen and camera setup are impressive.",
    },
    {
      name: "Amelia",
      rating: 5,
      comment: "Beautiful Samsung design with a very sharp-looking display.",
    },
    {
      name: "Nathan",
      rating: 5,
      comment:
        "The phone has a professional appearance and the camera layout looks excellent.",
    },
  ],

  28: [
    {
      name: "Caleb",
      rating: 5,
      comment:
        "Xiaomi Redmi 14C Smartphone-detail has a nice modern design and the camera section looks really attractive.",
    },
    {
      name: "Faith",
      rating: 5,
      comment: "A good-looking phone with a clean display and stylish finish.",
    },
    {
      name: "Isaac",
      rating: 4,
      comment:
        "The overall design is attractive and the phone looks comfortable to use.",
    },
  ],

  29: [
    {
      name: "Aaron",
      rating: 5,
      comment:
        "POCO F8 Pro Smartphone Dual SIM Card has a very clean appearance. The camera bar gives it a distinctive look.",
    },
    {
      name: "Hannah",
      rating: 5,
      comment:
        "I really like the simple design and the premium-looking finish.",
    },
    {
      name: "Joshua",
      rating: 4,
      comment:
        "A sleek phone with a modern design and attractive camera setup.",
    },
  ],

  30: [
    {
      name: "David",
      rating: 5,
      comment:
        "POCO X8 Pro Max Smartphone Dual SIM-back has a nice modern appearance and a large-looking display.",
    },
    {
      name: "Chiamaka",
      rating: 5,
      comment:
        "I like the design and the camera layout. It looks stylish for everyday use.",
    },
    {
      name: "Peter",
      rating: 4,
      comment: "The phone has a clean finish and a nice overall appearance.",
    },
  ],

  31: [
    {
      name: "Sarah",
      rating: 5,
      comment:
        "The dress has a beautiful design and looks very elegant when worn.",
    },
    {
      name: "Grace",
      rating: 5,
      comment:
        "I really like the finish and the overall style. It looks suitable for different occasions.",
    },
    {
      name: "Emily",
      rating: 4,
      comment: "A lovely dress with a neat and fashionable appearance.",
    },
  ],

  32: [
    {
      name: "Jordan",
      rating: 5,
      comment:
        "The sneakers have a clean design and look easy to pair with different outfits.",
    },
    {
      name: "Michael",
      rating: 5,
      comment:
        "I like the shape and overall finish. They have a really modern appearance.",
    },
    {
      name: "Kevin",
      rating: 4,
      comment: "Simple, stylish sneakers that look good with casual clothing.",
    },
  ],

  33: [
    {
      name: "Alex",
      rating: 5,
      comment:
        "The T-shirt has a clean casual look and the design is easy to style.",
    },
    {
      name: "Brian",
      rating: 5,
      comment:
        "I like the simple design. It can easily work with jeans or shorts.",
    },
    {
      name: "Marcus",
      rating: 4,
      comment:
        "A nice everyday shirt with a clean and comfortable-looking style.",
    },
  ],

  34: [
    {
      name: "Daniel",
      rating: 5,
      comment:
        "The jeans have a classic look and are easy to match with different tops.",
    },
    {
      name: "Rebecca",
      rating: 5,
      comment: "I really like the clean finish and simple design.",
    },
    {
      name: "Chris",
      rating: 4,
      comment: "A good-looking pair of jeans with a timeless style.",
    },
  ],

  35: [
    {
      name: "James",
      rating: 5,
      comment:
        "The leather jacket has a strong premium look. The design is stylish without being too complicated.",
    },
    {
      name: "Nicole",
      rating: 5,
      comment:
        "I love the clean finish and classic shape. It gives outfits a more polished appearance.",
    },
    {
      name: "Ryan",
      rating: 4,
      comment: "A stylish jacket with a very nice overall finish.",
    },
  ],

  36: [
    {
      name: "Victoria",
      rating: 5,
      comment:
        "The handbag looks elegant and the design is easy to match with different outfits.",
    },
    {
      name: "Ashley",
      rating: 5,
      comment:
        "I really like the shape and finish. It has a classy appearance.",
    },
    {
      name: "Laura",
      rating: 4,
      comment: "A beautiful handbag with a clean and fashionable design.",
    },
  ],

  37: [
    {
      name: "Robert",
      rating: 5,
      comment:
        "The wristwatch has a classic appearance and looks very smart on the wrist.",
    },
    {
      name: "Sophia",
      rating: 5,
      comment:
        "I like the simple design. It can work with both casual and formal outfits.",
    },
    {
      name: "Thomas",
      rating: 4,
      comment: "A neat-looking watch with a timeless style.",
    },
  ],

  38: [
    {
      name: "Megan",
      rating: 5,
      comment:
        "The sunglasses have a stylish frame and give a really polished look.",
    },
    {
      name: "Taylor",
      rating: 5,
      comment:
        "I like the shape of the frame. It looks modern and fashionable.",
    },
    {
      name: "Amber",
      rating: 4,
      comment: "A nice pair of sunglasses with a clean and trendy design.",
    },
  ],

  39: [
    {
      name: "Andrew",
      rating: 5,
      comment: "The formal shirt has a clean and professional appearance.",
    },
    {
      name: "Samuel",
      rating: 5,
      comment:
        "I like the simple design and neat finish. It looks good for formal occasions.",
    },
    {
      name: "Daniel",
      rating: 4,
      comment: "A classic shirt with a smart and polished appearance.",
    },
  ],

  40: [
    {
      name: "Jason",
      rating: 5,
      comment:
        "The hoodie has a nice modern design and looks very easy to style.",
    },
    {
      name: "Eric",
      rating: 5,
      comment:
        "I like the simple look. It would work well with jeans or sneakers.",
    },
    {
      name: "Kevin",
      rating: 4,
      comment: "A clean casual hoodie with a good-looking finish.",
    },
  ],

  41: [
    {
      name: "Daniel",
      rating: 5,
      comment:
        "The headphones have a clean design and look comfortable for everyday listening.",
    },
    {
      name: "Sophie",
      rating: 5,
      comment:
        "I like the wireless design because it keeps things simple and convenient.",
    },
    {
      name: "Mark",
      rating: 4,
      comment: "A nice-looking pair of headphones with a modern design.",
    },
  ],

  42: [
    {
      name: "Michael",
      rating: 5,
      comment:
        "The large screen makes this television look great for movies and entertainment.",
    },
    {
      name: "Jessica",
      rating: 5,
      comment:
        "The 4K display looks sharp and the overall television design is very clean.",
    },
    {
      name: "William",
      rating: 4,
      comment: "A modern-looking TV with a nice large display.",
    },
  ],

  43: [
    {
      name: "Chris",
      rating: 5,
      comment:
        "The speaker has a compact design and looks convenient for moving around.",
    },
    {
      name: "Emma",
      rating: 5,
      comment:
        "I like the wireless setup. It makes the speaker easy to use in different places.",
    },
    {
      name: "David",
      rating: 4,
      comment: "A nice-looking Bluetooth speaker with a simple design.",
    },
  ],

  44: [
    {
      name: "James",
      rating: 5,
      comment:
        "The laptop has a clean professional appearance and looks suitable for work and study.",
    },
    {
      name: "Olivia",
      rating: 5,
      comment: "I like the slim-looking design and the large screen.",
    },
    {
      name: "Henry",
      rating: 4,
      comment: "A smart-looking laptop with a clean and practical design.",
    },
  ],

  45: [
    {
      name: "Emily",
      rating: 5,
      comment:
        "The tablet has a nice large display and looks convenient for everyday use.",
    },
    {
      name: "Noah",
      rating: 5,
      comment:
        "I like the simple design. It looks useful for browsing, entertainment and work.",
    },
    {
      name: "Grace",
      rating: 4,
      comment: "A clean-looking tablet with a nice screen size.",
    },
  ],

  46: [
    {
      name: "Nathan",
      rating: 5,
      comment:
        "The smartwatch has a modern appearance and looks great on the wrist.",
    },
    {
      name: "Mia",
      rating: 5,
      comment: "I like the compact design and the clean-looking display.",
    },
    {
      name: "Lucas",
      rating: 4,
      comment: "A stylish smartwatch with a simple modern finish.",
    },
  ],

  47: [
    {
      name: "Alex",
      rating: 5,
      comment:
        "The wireless keyboard keeps the setup looking clean without extra cables.",
    },
    {
      name: "Hannah",
      rating: 5,
      comment: "I like the simple layout and modern appearance.",
    },
    {
      name: "Peter",
      rating: 4,
      comment:
        "A neat-looking keyboard that fits nicely into a clean desk setup.",
    },
  ],

  48: [
    {
      name: "Daniel",
      rating: 5,
      comment:
        "The Ps5-Slim has a clean modern design and the Appearance looks excellent.",
    },
    {
      name: "Lauren",
      rating: 5,
      comment:
        "I like the slim-looking frame and the overall professional appearance.",
    },
    {
      name: "Matthew",
      rating: 4,
      comment:
        "A nice Ps5-Slim with a clean design that would fit well for your TV.",
    },
  ],

  49: [
    {
      name: "Ryan",
      rating: 5,
      comment:
        "The camera has a professional-looking design and the lens setup looks impressive.",
    },
    {
      name: "Samantha",
      rating: 5,
      comment: "I really like the design and compact appearance of the camera.",
    },
    {
      name: "Adam",
      rating: 4,
      comment:
        "A good-looking digital camera with a clean professional finish.",
    },
  ],

  50: [
    {
      name: "Joshua",
      rating: 5,
      comment:
        "The power bank has a simple design and looks convenient to carry around.",
    },
    {
      name: "Chloe",
      rating: 5,
      comment:
        "I like the compact appearance. It looks useful for keeping devices powered while travelling.",
    },
    {
      name: "Benjamin",
      rating: 4,
      comment: "A practical-looking power bank with a clean finish.",
    },
  ],

  51: [
    {
      name: "Sarah",
      rating: 5,
      comment:
        "The backpack has a nice practical design and looks suitable for travelling.",
    },
    {
      name: "David",
      rating: 5,
      comment:
        "I like the simple appearance and the amount of space it seems to provide.",
    },
    {
      name: "Rachel",
      rating: 4,
      comment: "A good-looking backpack with a clean travel-friendly design.",
    },
  ],

  52: [
    {
      name: "Grace",
      rating: 5,
      comment:
        "The coffee maker has a neat design and would look great on a kitchen counter.",
    },
    {
      name: "Michael",
      rating: 5,
      comment: "I like the simple design and compact appearance.",
    },
    {
      name: "Anna",
      rating: 4,
      comment:
        "A clean-looking coffee maker that would fit nicely in a modern kitchen.",
    },
  ],

  53: [
    {
      name: "Emily",
      rating: 5,
      comment:
        "The bottle has a clean design and looks convenient to carry around.",
    },
    {
      name: "Daniel",
      rating: 5,
      comment: "I like the simple appearance and practical shape.",
    },
    {
      name: "Lucy",
      rating: 4,
      comment: "A nice-looking bottle with a clean and useful design.",
    },
  ],

  54: [
    {
      name: "James",
      rating: 5,
      comment:
        "The suitcase has a stylish appearance and looks ready for travelling.",
    },
    {
      name: "Sophia",
      rating: 5,
      comment:
        "I really like the design. It looks spacious and easy to take on trips.",
    },
    {
      name: "George",
      rating: 4,
      comment: "A neat-looking suitcase with a modern travel design.",
    },
  ],

  55: [
    {
      name: "Olivia",
      rating: 5,
      comment:
        "The decor set adds a really nice touch to the room and has a beautiful design.",
    },
    {
      name: "Maria",
      rating: 5,
      comment:
        "I like the combination of the pieces. They work nicely together.",
    },
    {
      name: "Ella",
      rating: 4,
      comment: "A lovely decorative set with a clean and stylish appearance.",
    },
  ],

  56: [
    {
      name: "Andrew",
      rating: 5,
      comment:
        "The office chair has a professional-looking design and would fit nicely in a workspace.",
    },
    {
      name: "Victoria",
      rating: 5,
      comment:
        "I like the shape and overall appearance. It looks suitable for a modern office.",
    },
    {
      name: "Robert",
      rating: 4,
      comment: "A clean and professional-looking office chair.",
    },
  ],

  57: [
    {
      name: "Linda",
      rating: 5,
      comment:
        "The kitchen set has a neat appearance and the pieces look useful for everyday cooking.",
    },
    {
      name: "Joseph",
      rating: 5,
      comment: "I like how everything is presented as a matching set.",
    },
    {
      name: "Esther",
      rating: 4,
      comment: "A practical-looking kitchen set with a nice finish.",
    },
  ],

  58: [
    {
      name: "Nicole",
      rating: 5,
      comment:
        "The fitness bag has a sporty design and looks convenient for carrying workout items.",
    },
    {
      name: "Kevin",
      rating: 5,
      comment: "I like the simple shape and practical appearance.",
    },
    {
      name: "Rachel",
      rating: 4,
      comment: "A nice-looking fitness bag with a clean sporty style.",
    },
  ],

  59: [
    {
      name: "Daniel",
      rating: 5,
      comment:
        "The desk lamp has a simple modern design and would look great on a work desk.",
    },
    {
      name: "Hannah",
      rating: 5,
      comment:
        "I like the compact shape. It would fit nicely into a small workspace.",
    },
    {
      name: "Mark",
      rating: 4,
      comment: "A clean and practical-looking desk lamp.",
    },
  ],

  60: [
    {
      name: "Amanda",
      rating: 5,
      comment:
        "The storage organizer has a simple design and looks useful for keeping things arranged.",
    },
    {
      name: "Chris",
      rating: 5,
      comment:
        "I like the practical design. It would be useful for keeping a space tidy.",
    },
    {
      name: "Rebecca",
      rating: 4,
      comment: "A neat-looking organizer with a simple and useful design.",
    },
  ],
};

const categoryOrder = [
  "Cars",
  "Wigs & Human Hair",
  "Phones",
  "Fashion",
  "Electronics",
  "Other Products",
];

let cart = JSON.parse(localStorage.getItem("westfieldCart") || "[]");

const $ = (id) => document.getElementById(id);

const money = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

const slug = (text) => {
  return text.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
};

function productCard(product) {
  return `
    <article class="product-card">

      <div class="product-image">

  <span class="verified-badge">
    ✓ Verified
  </span>

  <button
    type="button"
    class="favorite-btn"
    aria-label="Add to favourites"
  >
    ♡
  </button>

  <img
    src="${product.image}"
    alt="${product.name}"
    loading="lazy"
    decoding="async"
    onerror="this.style.display='none';"
  >

</div>

      <div class="product-info">

        <span class="product-category">
          ${product.category}
        </span>

        <h3>
          ${product.name}
        </h3>

        <p>
          ${product.desc}
        </p>

        <div class="product-bottom">

         <div class="product-bottom">
  <div class="price-area">
    <strong>
      ${money(product.price)}
    </strong>

    <span class="pay-small-badge">
      💳 Pay Small Small
    </span>
  </div>

          <div class="product-actions">

            <button
              type="button"
              class="view-more-btn"
              data-view="${product.id}">
              View More
            </button>

            <button
              type="button"
              class="add-btn"
              data-add="${product.id}">
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </article>
  `;
}

function renderStars(rating) {
  const fullStars = "★".repeat(Math.round(rating));
  const emptyStars = "☆".repeat(5 - Math.round(rating));

  return fullStars + emptyStars;
}

function getReviewAverage(reviews) {
  if (!reviews || reviews.length === 0) return 0;

  const total = reviews.reduce((sum, review) => {
    return sum + review.rating;
  }, 0);

  return total / reviews.length;
}

function renderProductReviews(product) {
  const reviews = productReviews[product.id] || [];

  if (reviews.length === 0) {
    return `
      <section class="product-reviews">
        <h3>Featured Reviews</h3>
        <p>No reviews available yet.</p>
      </section>
    `;
  }

  const average = getReviewAverage(reviews);

  return `
    <section class="product-reviews">

      <div class="reviews-header">
        <div>
          <h3>Featured Reviews</h3>
          <p class="reviews-count">
            ${reviews.length} reviews
          </p>
        </div>

        <div class="review-summary">
          <strong>${average.toFixed(1)}</strong>
          <span class="review-stars">
            ${renderStars(average)}
          </span>
          <small>out of 5</small>
        </div>
      </div>

      <div class="reviews-list">

        ${reviews
          .map(
            (review) => `
          <article class="review-item">

            <div class="review-top">
              <strong>${review.name}</strong>

              <span class="review-rating">
                ${renderStars(review.rating)}
              </span>
            </div>

            <p>${review.comment}</p>

          </article>
        `,
          )
          .join("")}

      </div>

    </section>
  `;
}

function openProductDetails(id) {
  const product = products.find((item) => item.id === id);

  if (!product) {
    console.error("Product not found:", id);
    return;
  }

  const gallery =
    Array.isArray(product.gallery) && product.gallery.length
      ? product.gallery
      : [product.image];

  /* Remove an already-open product modal */
  const existingModal = document.querySelector(".product-modal");

  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement("div");

  modal.className = "product-modal";

  modal.innerHTML = `
    <div
      class="product-modal-overlay"
      data-close-product>
    </div>

    <div
      class="product-modal-content"
      role="dialog"
      aria-modal="true"
      aria-label="${product.name}"
    >

      <button
        type="button"
        class="product-modal-close"
        data-close-product
        aria-label="Close product details">
        ×
      </button>


      <!-- PRODUCT GALLERY -->

      <div class="product-modal-gallery">

        <div class="product-main-image">

         <img
  id="productMainImage"
  src="${gallery[0]}"
  alt="${product.name}"
  decoding="async"
>

        </div>


        <div class="product-thumbnails">

          ${gallery
            .map(
              (image, index) => `
                <button
                  type="button"
                  class="product-thumbnail ${index === 0 ? "active" : ""}"
                  data-gallery-image="${image}"
                  aria-label="View ${product.name} image ${index + 1}"
                >
<img
  src="${image}"
  alt="${product.name} view ${index + 1}"
  loading="lazy"
  decoding="async"
  onerror="
    this.closest('.product-thumbnail').style.display='none';
  "
>

                </button>
              `,
            )
            .join("")}

        </div>

      </div>


      <!-- PRODUCT INFORMATION -->

      <div class="product-modal-details">

        <span class="product-category">
          ${product.category}
        </span>

        <h2>
          ${product.name}
        </h2>

        <strong class="product-modal-price">
          ${money(product.price)}
        </strong>

        <p>
          ${product.desc}
        </p>


        <div class="product-modal-buttons">

          <button
            type="button"
            class="add-btn product-modal-cart"
            data-add="${product.id}">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
    ${renderProductReviews(product)}
  `;

  document.body.appendChild(modal);

  document.body.classList.add("no-scroll");
  document.documentElement.classList.add("modal-open");

  requestAnimationFrame(() => {
    modal.classList.add("show");
  });
}

function closeProductDetails() {
  const modal = document.querySelector(".product-modal");

  if (!modal) {
    return;
  }

  modal.classList.remove("show");

  setTimeout(() => {
    modal.remove();

    /*
      Only remove no-scroll if the cart is also closed.
    */
    const cartDrawer = document.getElementById("cartDrawer");

    if (!cartDrawer || !cartDrawer.classList.contains("open")) {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("modal-open");
    }
  }, 250);
}

function renderCategories() {
  const container = $("categorySections");

  if (!container) {
    return;
  }

  container.innerHTML = categoryOrder
    .map((category) => {
      const categoryProducts = products.filter(
        (product) => product.category === category,
      );

      return `
        <section
          class="product-category-section"
          id="category-${slug(category)}"
        >

          <div class="category-title">

            <div>

              <span class="eyebrow">
                ${category === "Other Products" ? "MORE TO SHOP" : "SHOP NOW"}
              </span>

              <h2>
                ${category}
              </h2>

              <p>
                ${categoryProducts.length}
                products available
              </p>

            </div>

            <a href="#products">
              View section ↑
            </a>

          </div>


          <div class="product-grid">

            ${categoryProducts.map(productCard).join("")}

          </div>

        </section>
      `;
    })
    .join("");
}

function renderSearchResults() {
  const searchInput = $("searchInput");
  const categoryFilter = $("categoryFilter");

  if (!searchInput || !categoryFilter) {
    return;
  }

  const searchTerm = searchInput.value.trim().toLowerCase();

  const selectedCategory = categoryFilter.value;

  const searching = searchTerm || selectedCategory !== "All Categories";

  const resultsBox = $("searchResults");
  const statusBox = $("searchStatus");

  if (resultsBox) {
    resultsBox.hidden = !searching;
  }

  if (statusBox) {
    statusBox.hidden = !searching;
  }

  if (!searching) {
    if (resultsBox) {
      resultsBox.innerHTML = "";
    }

    if (statusBox) {
      statusBox.textContent = "";
    }

    $("categorySections")?.classList.remove("dimmed");

    return;
  }

  const matches = products.filter((product) => {
    const categoryMatches =
      selectedCategory === "All Categories" ||
      product.category === selectedCategory;

    const searchableText = `
      ${product.name}
      ${product.category}
      ${product.desc}
    `.toLowerCase();

    const textMatches = !searchTerm || searchableText.includes(searchTerm);

    return categoryMatches && textMatches;
  });

  if (statusBox) {
    statusBox.textContent = `${matches.length} product${
      matches.length === 1 ? "" : "s"
    } found${searchTerm ? ` for "${searchTerm}"` : ""}${
      selectedCategory !== "All Categories" ? ` in ${selectedCategory}` : ""
    }.`;
  }

  if (resultsBox) {
    if (matches.length) {
      resultsBox.innerHTML = `
        <div class="search-result-grid">
          ${matches.map(productCard).join("")}
        </div>
      `;
    } else {
      resultsBox.innerHTML = `
        <div class="no-results">

          <span>
            🔎
          </span>

          <h3>
            No products found
          </h3>

          <p>
            Try another search term
            or choose a different
            category.
          </p>

        </div>
      `;
    }
  }

  $("categorySections")?.classList.toggle("dimmed", searching);
}

function saveCart() {
  localStorage.setItem("westfieldCart", JSON.stringify(cart));
}

function updateCart() {
  const cartCount = cart.reduce((total, item) => total + item.qty, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  if ($("cartCount")) {
    $("cartCount").textContent = cartCount;
  }

  if ($("cartTotal")) {
    $("cartTotal").textContent = money(totalPrice);
  }

  if ($("cartItems")) {
    $("cartItems").innerHTML = cart.length
      ? cart
          .map(
            (item) => `
              <div class="cart-item">

                <div class="cart-icon">

                  <img
                    src="${item.image}"
                    alt="${item.name}"
                    onerror="this.style.display='none';"
                  >

                </div>


                <div class="cart-detail">

                  <h4>
                    ${item.name}
                  </h4>

                  <strong>
                    ${money(item.price)}
                  </strong>


                  <div class="qty">

                    <button
                      type="button"
                      data-minus="${item.id}">
                      −
                    </button>

                    <span>
                      ${item.qty}
                    </span>

                    <button
                      type="button"
                      data-plus="${item.id}">
                      +
                    </button>

                    <button
                      type="button"
                      class="remove"
                      data-remove="${item.id}">
                      Remove
                    </button>

                  </div>

                </div>

              </div>
            `,
          )
          .join("")
      : `
          <div class="empty-cart">

            <span>
              🛒
            </span>

            <h3>
              Your cart is empty
            </h3>

            <p>
              Add products from the
              category sections to
              get started.
            </p>

          </div>
        `;
  }

  saveCart();
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);

  if (!product) {
    console.error("Product not found:", id);
    return;
  }

  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      ...product,
      qty: 1,
    });
  }

  updateCart();

  showToast(`${product.name} added to cart`);
}

function showToast(message) {
  const toast = $("toast");

  if (!toast) {
    return;
  }

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function openCart() {
  if ($("cartDrawer")) {
    $("cartDrawer").classList.add("open");
  }

  if ($("cartOverlay")) {
    $("cartOverlay").classList.add("show");
  }

  document.body.classList.add("no-scroll");
}

function closeCart() {
  if ($("cartDrawer")) {
    $("cartDrawer").classList.remove("open");
  }

  if ($("cartOverlay")) {
    $("cartOverlay").classList.remove("show");
  }

  const productModal = document.querySelector(".product-modal");

  if (!productModal) {
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("modal-open");
  }
}

document.addEventListener("click", (event) => {
  const viewMoreButton = event.target.closest(".view-more-btn");

  if (viewMoreButton) {
    const id = Number(viewMoreButton.getAttribute("data-view"));

    console.log("VIEW MORE CLICKED");
    console.log("Product ID:", id);

    if (!id) {
      console.error("View More button has no valid product ID.");
      return;
    }

    openProductDetails(id);

    return;
  }

  const galleryButton = event.target.closest("[data-gallery-image]");

  if (galleryButton) {
    const mainImage = document.getElementById("productMainImage");

    if (mainImage) {
      mainImage.src = galleryButton.dataset.galleryImage;
    }

    document.querySelectorAll(".product-thumbnail").forEach((button) => {
      button.classList.remove("active");
    });

    galleryButton.classList.add("active");

    return;
  }

  if (event.target.closest("[data-close-product]")) {
    closeProductDetails();

    return;
  }

  const addButton = event.target.closest("[data-add]");

  if (addButton) {
    addToCart(Number(addButton.dataset.add));

    return;
  }

  const plusButton = event.target.closest("[data-plus]");

  if (plusButton) {
    const id = Number(plusButton.dataset.plus);

    const item = cart.find((product) => product.id === id);

    if (item) {
      item.qty++;
    }

    updateCart();

    return;
  }

  const minusButton = event.target.closest("[data-minus]");

  if (minusButton) {
    const id = Number(minusButton.dataset.minus);

    const item = cart.find((product) => product.id === id);

    if (item) {
      item.qty--;

      if (item.qty <= 0) {
        cart = cart.filter((product) => product.id !== id);
      }
    }

    updateCart();

    return;
  }

  const removeButton = event.target.closest("[data-remove]");

  if (removeButton) {
    const id = Number(removeButton.dataset.remove);

    cart = cart.filter((product) => product.id !== id);

    updateCart();

    return;
  }

  if (event.target.closest("#openCart")) {
    openCart();

    return;
  }

  if (event.target.closest("#closeCart") || event.target.id === "cartOverlay") {
    closeCart();

    return;
  }

  if (event.target.closest("#goToOrder")) {
    closeCart();

    const orderSection = document.querySelector(".order-section");

    if (orderSection) {
      orderSection.scrollIntoView({
        behavior: "smooth",
      });
    }

    return;
  }

  if (event.target.closest("#clearSearch")) {
    if ($("searchInput")) {
      $("searchInput").value = "";
    }

    if ($("categoryFilter")) {
      $("categoryFilter").value = "All Categories";
    }

    renderSearchResults();

    return;
  }

  if (event.target.closest("#searchBtn")) {
    renderSearchResults();

    const results = $("searchResults");

    if (results && !results.hidden) {
      results.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    return;
  }

  if (event.target.closest("#menuBtn")) {
    if ($("mainNav")) {
      $("mainNav").classList.toggle("open");
    }

    return;
  }
});

if ($("searchInput")) {
  $("searchInput").addEventListener("input", renderSearchResults);
}

if ($("categoryFilter")) {
  $("categoryFilter").addEventListener("change", renderSearchResults);
}

if ($("orderForm")) {
  $("orderForm").addEventListener("submit", (event) => {
    event.preventDefault();

    if (!cart.length) {
      showToast("Please add at least one product to your cart.");

      openCart();

      return;
    }

    const orderItems = cart
      .map((item) => {
        return `• ${item.name} x${item.qty} — ${money(item.price * item.qty)}`;
      })
      .join("\n");

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const customerName = $("customerName") ? $("customerName").value : "";

    const customerEmail = $("customerEmail") ? $("customerEmail").value : "";

    const customerPhone = $("customerPhone") ? $("customerPhone").value : "";

    const deliveryAddress = $("deliveryAddress")
      ? $("deliveryAddress").value
      : "";

    const orderNotes = $("orderNotes")
      ? $("orderNotes").value || "None"
      : "None";

    const message = `Hello Westfield Marketplace,

I would like to place an order.

CUSTOMER DETAILS

Name: ${customerName}

Email: ${customerEmail}

Phone: ${customerPhone}

Delivery Address: ${deliveryAddress}


ORDER

${orderItems}


TOTAL: ${money(total)}


Order Notes:

${orderNotes}


Please confirm availability,
delivery details and payment instructions.

Thank you.`;

    const whatsappURL = `https://wa.me/08069256823?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");

    cart = [];

    saveCart();

    updateCart();

    $("orderForm").reset();

    showToast("Order sent to WhatsApp. Your cart has been cleared.");
  });
}

if ($("year")) {
  $("year").textContent = new Date().getFullYear();
}

renderCategories();

updateCart();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch((error) => {
      console.warn("Service worker registration failed:", error);
    });
  });
}

document.addEventListener("click", function (event) {
  const favoriteButton = event.target.closest(".favorite-btn");

  if (!favoriteButton) return;

  event.stopPropagation();

  favoriteButton.classList.toggle("active");

  if (favoriteButton.classList.contains("active")) {
    favoriteButton.textContent = "♥";

    favoriteButton.setAttribute("aria-label", "Remove from favourites");
  } else {
    favoriteButton.textContent = "♡";

    favoriteButton.setAttribute("aria-label", "Add to favourites");
  }
});
