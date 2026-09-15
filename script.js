/* =========================================================
   WESTFIELD MARKETPLACE
   FRONTEND-ONLY E-COMMERCE WEBSITE
   60 PRODUCTS / 10 PRODUCTS PER CATEGORY
========================================================= */

/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [
  /* =========================
     CARS — 10 PRODUCTS
  ========================= */

  {
    id: 1,
    category: "Cars",
    name: "Premium Sedan",
    price: 28500,
    image: "image/premium-sedan.jpg",
    desc: "Comfortable premium sedan for everyday and executive driving.",
  },

  {
    id: 2,
    category: "Cars",
    name: "Modern SUV",
    price: 36500,
    image: "image/modern-suv.jpg",
    desc: "Spacious SUV with a modern look and versatile interior.",
  },

  {
    id: 3,
    category: "Cars",
    name: "Luxury Coupe",
    price: 42000,
    image: "image/luxury-coupe.jpg",
    desc: "Stylish coupe designed for a premium driving experience.",
  },

  {
    id: 4,
    category: "Cars",
    name: "Family Minivan",
    price: 33000,
    image: "image/family-minivan.jpg",
    desc: "Spacious and practical vehicle suitable for family transportation.",
  },

  {
    id: 5,
    category: "Cars",
    name: "Executive Car",
    price: 45000,
    image: "image/executive-car.jpg",
    desc: "Elegant executive vehicle with a refined interior.",
  },

  {
    id: 6,
    category: "Cars",
    name: "kia seltos",
    price: 21500,
    image: "image/kia seltos.jpg",
    desc: "Efficient kia seltos car designed for convenient city driving.",
  },

  {
    id: 7,
    category: "Cars",
    name: "Off-Road SUV",
    price: 48500,
    image: "image/off-road-suv.jpg",
    desc: "Rugged SUV designed for versatile road conditions.",
  },

  {
    id: 8,
    category: "Cars",
    name: "Jeep Wrangler",
    price: 62000,
    image: "image/jeep wrangler.jpg",
    desc: "Premium vehicle combining comfort, style and performance.",
  },

  {
    id: 9,
    category: "Cars",
    name: "Electric Car",
    price: 39500,
    image: "image/electric-car.jpg",
    desc: "Modern electric vehicle with a clean and futuristic design.",
  },

  {
    id: 10,
    category: "Cars",
    name: "Pickup Truck",
    price: 41000,
    image: "image/pickup-truck.jpg",
    desc: "Strong and practical pickup truck for work and everyday use.",
  },

  /* =========================
     WIGS & HUMAN HAIR — 10
  ========================= */

  {
    id: 11,
    category: "Wigs & Human Hair",
    name: "Luxury Body Wave Wig",
    price: 180,
    image: "image/body-wave.jpg",
    desc: "Elegant body wave style suitable for everyday and special occasions.",
  },

  {
    id: 12,
    category: "Wigs & Human Hair",
    name: "HD Lace Frontal Wig",
    price: 240,
    image: "image/hd-lace-frontal.jpg",
    desc: "Premium-looking lace frontal style with a natural finish.",
  },

  {
    id: 13,
    category: "Wigs & Human Hair",
    name: "Straight Human Hair Wig",
    price: 220,
    image: "image/straight-human-hair.jpg",
    desc: "Smooth straight hair style with a sophisticated appearance.",
  },

  {
    id: 14,
    category: "Wigs & Human Hair",
    name: "Curly Human Hair Wig",
    price: 250,
    image: "image/curly-human-hair.jpg",
    desc: "Beautiful curly style with a full and elegant appearance.",
  },

  {
    id: 15,
    category: "Wigs & Human Hair",
    name: "Deep Wave Wig",
    price: 210,
    image: "image/deep-wave.jpg",
    desc: "Deep wave texture for a stylish and glamorous appearance.",
  },

  {
    id: 16,
    category: "Wigs & Human Hair",
    name: "Water Wave Wig",
    price: 195,
    image: "image/water-wave.jpg",
    desc: "Soft water wave texture suitable for different occasions.",
  },

  {
    id: 17,
    category: "Wigs & Human Hair",
    name: "Bob Wig",
    price: 160,
    image: "image/bob-wig.jpg",
    desc: "Classic short bob hairstyle with a clean modern look.",
  },

  {
    id: 18,
    category: "Wigs & Human Hair",
    name: "Pixie Cut Wig",
    price: 145,
    image: "image/pixie-cut.jpg",
    desc: "Short stylish pixie cut for a simple and fashionable appearance.",
  },

  {
    id: 19,
    category: "Wigs & Human Hair",
    name: "Glueless Lace Wig",
    price: 230,
    image: "image/glueless-lace.jpg",
    desc: "Convenient lace wig designed for a natural-looking finish.",
  },

  {
    id: 20,
    category: "Wigs & Human Hair",
    name: "Blonde Luxury Wig",
    price: 275,
    image: "image/blonde-luxury.jpg",
    desc: "Luxury blonde style for a bold and elegant appearance.",
  },

  /* =========================
     PHONES — 10 PRODUCTS
  ========================= */

  {
    id: 21,
    category: "Phones",
    name: "Pro Smartphone 256GB",
    price: 799,
    image: "image/pro-smartphone-256.jpg",
    desc: "High-performance smartphone with generous storage.",
  },

  {
    id: 22,
    category: "Phones",
    name: "Iphone 13 pro max 128GB",
    price: 549,
    image: "image/iphone 13 pro max-128.jpg",
    desc: "Reliable everyday smartphone with a bright display.",
  },

  {
    id: 23,
    category: "Phones",
    name: "Iphone 16 pro max",
    price: 899,
    image: "image/iphone 16 pro max.jpg",
    desc: "Premium smartphone with modern features and powerful performance.",
  },

  {
    id: 24,
    category: "Phones",
    name: "Iphone 17 pro max",
    price: 299,
    image: "image/iphone 17 pro max.jpg",
    desc: "Affordable smartphone for everyday communication and entertainment.",
  },

  {
    id: 25,
    category: "Phones",
    name: "Iphone 16",
    price: 699,
    image: "image/iphone 16.jpg",
    desc: "Modern 5G smartphone with fast connectivity.",
  },

  {
    id: 26,
    category: "Phones",
    name: "Samsung Galaxy A17",
    price: 749,
    image: "image/samsung galaxy a17.jpg",
    desc: "Smartphone featuring an advanced camera system.",
  },

  {
    id: 27,
    category: "Phones",
    name: "Samsung galaxy S24 ultra",
    price: 849,
    image: "image/samsung galaxy s24 ultra.jpg",
    desc: "Powerful smartphone designed for mobile gaming.",
  },

  {
    id: 28,
    category: "Phones",
    name: "Tecno Camon40",
    price: 1299,
    image: "image/tecno camon40.jpg",
    desc: "Innovative smartphone with modern features and a flexible display.",
  },

  {
    id: 29,
    category: "Phones",
    name: "Google Pixel 10 Pro",
    price: 499,
    image: "image/google pixel 10 pro.jpg",
    desc: "Compact smartphone that is easy to carry and use.",
  },

  {
    id: 30,
    category: "Phones",
    name: "Tecno Spark 40",
    price: 679,
    image: "image/tecno spark 40.jpg",
    desc: "Reliable smartphone suitable for work and business communication.",
  },

  /* =========================
     FASHION — 10 PRODUCTS
  ========================= */

  {
    id: 31,
    category: "Fashion",
    name: "Classic Fashion Dress",
    price: 85,
    image: "image/classic-dress.jpg",
    desc: "Versatile fashion piece designed for a polished look.",
  },

  {
    id: 32,
    category: "Fashion",
    name: "Premium Sneakers",
    price: 120,
    image: "image/premium-sneaker.jpg",
    desc: "Comfortable casual sneakers for everyday style.",
  },

  {
    id: 33,
    category: "Fashion",
    name: "Casual T-Shirt",
    price: 35,
    image: "image/casual-tshirt.jpg",
    desc: "Comfortable casual t-shirt for everyday wear.",
  },

  {
    id: 34,
    category: "Fashion",
    name: "Classic Jeans",
    price: 65,
    image: "image/classic-jeans.jpg",
    desc: "Classic jeans designed for comfortable everyday outfits.",
  },

  {
    id: 35,
    category: "Fashion",
    name: "Leather Jacket",
    price: 150,
    image: "image/leather-jacket.jpg",
    desc: "Stylish jacket designed to complement a modern wardrobe.",
  },

  {
    id: 36,
    category: "Fashion",
    name: "Designer Handbag",
    price: 130,
    image: "image/designer-handbag.jpg",
    desc: "Elegant handbag suitable for everyday and special occasions.",
  },

  {
    id: 37,
    category: "Fashion",
    name: "Classic Wristwatch",
    price: 95,
    image: "image/classic-watch.jpg",
    desc: "Classic wristwatch with a sophisticated appearance.",
  },

  {
    id: 38,
    category: "Fashion",
    name: "Fashion Sunglasses",
    price: 55,
    image: "image/fashion-sunglasses.jpg",
    desc: "Stylish sunglasses designed to complement your outfit.",
  },

  {
    id: 39,
    category: "Fashion",
    name: "Formal Shirt",
    price: 60,
    image: "image/formal-shirt.jpg",
    desc: "Smart formal shirt suitable for work and special occasions.",
  },

  {
    id: 40,
    category: "Fashion",
    name: "Premium Hoodie",
    price: 75,
    image: "image/premium-hoodie.jpg",
    desc: "Comfortable hoodie designed for casual everyday wear.",
  },

  /* =========================
     ELECTRONICS — 10 PRODUCTS
  ========================= */

  {
    id: 41,
    category: "Electronics",
    name: "Wireless Headphones",
    price: 95,
    image: "image/wireless-headphones.jpg",
    desc: "Wireless audio for music, calls and entertainment.",
  },

  {
    id: 42,
    category: "Electronics",
    name: "Smart 4K Television",
    price: 620,
    image: "image/smart-tv.jpg",
    desc: "Large-screen entertainment for your home.",
  },

  {
    id: 43,
    category: "Electronics",
    name: "Bluetooth Speaker",
    price: 80,
    image: "image/bluetooth-speaker.jpg",
    desc: "Portable wireless speaker for music and entertainment.",
  },

  {
    id: 44,
    category: "Electronics",
    name: "Laptop Computer",
    price: 899,
    image: "image/laptop.jpg",
    desc: "Modern laptop suitable for work, school and entertainment.",
  },

  {
    id: 45,
    category: "Electronics",
    name: "Tablet",
    price: 399,
    image: "image/tablet.jpg",
    desc: "Portable tablet for browsing, entertainment and productivity.",
  },

  {
    id: 46,
    category: "Electronics",
    name: "Smartwatch",
    price: 180,
    image: "image/smartwatch.jpg",
    desc: "Modern smartwatch for everyday convenience.",
  },

  {
    id: 47,
    category: "Electronics",
    name: "Wireless Keyboard",
    price: 55,
    image: "image/wireless-keyboard.jpg",
    desc: "Convenient wireless keyboard for your computer setup.",
  },

  {
    id: 48,
    category: "Electronics",
    name: "Computer Monitor",
    price: 280,
    image: "image/computer-monitor.jpg",
    desc: "High-quality display suitable for work and entertainment.",
  },

  {
    id: 49,
    category: "Electronics",
    name: "Digital Camera",
    price: 720,
    image: "image/digital-camera.jpg",
    desc: "Digital camera for photography and creative projects.",
  },

  {
    id: 50,
    category: "Electronics",
    name: "Power Bank",
    price: 45,
    image: "image/power-bank.jpg",
    desc: "Portable power bank for charging compatible devices.",
  },

  /* =========================
     OTHER PRODUCTS — 10
  ========================= */

  {
    id: 51,
    category: "Other Products",
    name: "Travel Backpack",
    price: 65,
    image: "image/backpack.jpg",
    desc: "Practical everyday backpack with useful storage space.",
  },

  {
    id: 52,
    category: "Other Products",
    name: "Home Coffee Maker",
    price: 75,
    image: "image/coffee-maker.jpg",
    desc: "Convenient coffee maker for your home or office.",
  },

  {
    id: 53,
    category: "Other Products",
    name: "Water Bottle",
    price: 25,
    image: "image/water-bottle.jpg",
    desc: "Reusable water bottle suitable for everyday use.",
  },

  {
    id: 54,
    category: "Other Products",
    name: "Travel Suitcase",
    price: 110,
    image: "image/travel-suitcase.jpg",
    desc: "Durable suitcase designed for convenient travel.",
  },

  {
    id: 55,
    category: "Other Products",
    name: "Home Decor Set",
    price: 90,
    image: "image/home-decor.jpg",
    desc: "Decorative pieces designed to add style to your space.",
  },

  {
    id: 56,
    category: "Other Products",
    name: "Office Chair",
    price: 160,
    image: "image/office-chair.jpg",
    desc: "Comfortable chair suitable for home and office workspaces.",
  },

  {
    id: 57,
    category: "Other Products",
    name: "Kitchen Set",
    price: 125,
    image: "image/kitchen-set.jpg",
    desc: "Useful kitchen essentials for everyday cooking.",
  },

  {
    id: 58,
    category: "Other Products",
    name: "Fitness Bag",
    price: 55,
    image: "image/fitness-bag.jpg",
    desc: "Practical bag for carrying fitness and everyday essentials.",
  },

  {
    id: 59,
    category: "Other Products",
    name: "Desk Lamp",
    price: 40,
    image: "image/desk-lamp.jpg",
    desc: "Modern desk lamp suitable for study and office spaces.",
  },

  {
    id: 60,
    category: "Other Products",
    name: "Storage Organizer",
    price: 35,
    image: "image/storage-organizer.jpg",
    desc: "Practical organizer for keeping your belongings neatly arranged.",
  },
];

/* =========================================================
   CATEGORY ORDER
========================================================= */

const categoryOrder = [
  "Cars",
  "Wigs & Human Hair",
  "Phones",
  "Fashion",
  "Electronics",
  "Other Products",
];

/* =========================================================
   CART
========================================================= */

let cart = JSON.parse(localStorage.getItem("westfieldCart") || "[]");

/* =========================================================
   HELPER FUNCTIONS
========================================================= */

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

/* =========================================================
   PRODUCT CARD
========================================================= */

function productCard(product) {
  return `
    <article class="product-card">

      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
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

          <strong>
            ${money(product.price)}
          </strong>

          <button
            class="add-btn"
            data-add="${product.id}">
            Add to Cart
          </button>

        </div>

      </div>

    </article>
  `;
}

/* =========================================================
   RENDER CATEGORY SECTIONS
========================================================= */

function renderCategories() {
  const container = $("categorySections");

  if (!container) return;

  container.innerHTML = categoryOrder
    .map((category) => {
      const categoryProducts = products.filter(
        (product) => product.category === category,
      );

      return `
        <section
          class="product-category-section"
          id="category-${slug(category)}">

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

/* =========================================================
   SEARCH
========================================================= */

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

/* =========================================================
   SAVE CART
========================================================= */

function saveCart() {
  localStorage.setItem("westfieldCart", JSON.stringify(cart));
}

/* =========================================================
   UPDATE CART
========================================================= */

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
                    data-minus="${item.id}">
                    −
                  </button>

                  <span>
                    ${item.qty}
                  </span>

                  <button
                    data-plus="${item.id}">
                    +
                  </button>

                  <button
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

/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(id) {
  const product = products.find((item) => item.id === id);

  if (!product) return;

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

/* =========================================================
   TOAST MESSAGE
========================================================= */

function showToast(message) {
  const toast = $("toast");

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

/* =========================================================
   OPEN CART
========================================================= */

function openCart() {
  if ($("cartDrawer")) {
    $("cartDrawer").classList.add("open");
  }

  if ($("cartOverlay")) {
    $("cartOverlay").classList.add("show");
  }

  document.body.classList.add("no-scroll");
}

/* =========================================================
   CLOSE CART
========================================================= */

function closeCart() {
  if ($("cartDrawer")) {
    $("cartDrawer").classList.remove("open");
  }

  if ($("cartOverlay")) {
    $("cartOverlay").classList.remove("show");
  }

  document.body.classList.remove("no-scroll");
}

/* =========================================================
   CLICK EVENTS
========================================================= */

document.addEventListener("click", (event) => {
  /* ADD TO CART */

  const addButton = event.target.closest("[data-add]");

  if (addButton) {
    addToCart(Number(addButton.dataset.add));

    return;
  }

  /* PLUS */

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

  /* MINUS */

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

  /* REMOVE */

  const removeButton = event.target.closest("[data-remove]");

  if (removeButton) {
    const id = Number(removeButton.dataset.remove);

    cart = cart.filter((product) => product.id !== id);

    updateCart();

    return;
  }

  /* OPEN CART */

  if (event.target.closest("#openCart")) {
    openCart();

    return;
  }

  /* CLOSE CART */

  if (event.target.closest("#closeCart") || event.target.id === "cartOverlay") {
    closeCart();

    return;
  }

  /* GO TO ORDER */

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

  /* CLEAR SEARCH */

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

  /* SEARCH BUTTON */

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

  /* MOBILE MENU */

  if (event.target.closest("#menuBtn")) {
    if ($("mainNav")) {
      $("mainNav").classList.toggle("open");
    }

    return;
  }
});

/* =========================================================
   SEARCH INPUT
========================================================= */

if ($("searchInput")) {
  $("searchInput").addEventListener("input", renderSearchResults);
}

/* =========================================================
   CATEGORY FILTER
========================================================= */

if ($("categoryFilter")) {
  $("categoryFilter").addEventListener("change", renderSearchResults);
}

/* =========================================================
   ORDER FORM
========================================================= */

if ($("orderForm")) {
  $("orderForm").addEventListener("submit", (event) => {
    event.preventDefault();

    /* CHECK CART */

    if (!cart.length) {
      showToast("Please add at least one product to your cart.");

      openCart();

      return;
    }

    /* ORDER ITEMS */

    const orderItems = cart
      .map((item) => {
        return `• ${item.name} x${item.qty} — ${money(item.price * item.qty)}`;
      })
      .join("\n");

    /* TOTAL */

    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    /* CUSTOMER DETAILS */

    const customerName = $("customerName") ? $("customerName").value : "";

    const customerEmail = $("customerEmail") ? $("customerEmail").value : "";

    const customerPhone = $("customerPhone") ? $("customerPhone").value : "";

    const deliveryAddress = $("deliveryAddress")
      ? $("deliveryAddress").value
      : "";

    const orderNotes = $("orderNotes")
      ? $("orderNotes").value || "None"
      : "None";

    /* WHATSAPP MESSAGE */

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

    /* OPEN WHATSAPP */

    const whatsappURL = `https://wa.me/16573181208?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    /* =====================================================
         CLEAR CART AFTER ORDER IS SENT TO WHATSAPP
      ===================================================== */

    cart = [];

    saveCart();

    updateCart();

    /* =====================================================
         RESET ORDER FORM
      ===================================================== */

    $("orderForm").reset();

    /* =====================================================
         CONFIRMATION MESSAGE
      ===================================================== */

    showToast("Order sent to WhatsApp. Your cart has been cleared.");
  });
}

/* =========================================================
   FOOTER YEAR
========================================================= */

if ($("year")) {
  $("year").textContent = new Date().getFullYear();
}

/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

renderCategories();

updateCart();

/* =========================================================
   SERVICE WORKER
========================================================= */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
