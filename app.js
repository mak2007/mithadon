/**
 * Mukesh Misthan Bhandar - Phone-Friendly Mobile First App Logic
 * Features: Story category filtering, Swiggy-style Add/Counter buttons,
 * Weight chips, Custom Hamper builder, Bottom sheet cart, WhatsApp checkout
 */

// 1. Food Catalog (Default with Exact Verified Images)
let MENU_DATA = [
  // --- Pure Desi Ghee Sweets ---
  {
    id: "ghee-motichoor",
    title: "Pure Desi Ghee Motichoor Ladoo",
    category: "desi-ghee",
    diet: ["ghee", "bestseller"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 240 },
      { label: "1kg", price: 460 }
    ],
    bestseller: true
  },
  {
    id: "ghee-besan",
    title: "Shuddh Desi Ghee Besan Ladoo",
    category: "desi-ghee",
    diet: ["ghee"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 250 },
      { label: "1kg", price: 480 }
    ],
    bestseller: false
  },
  {
    id: "ghee-mysore-pak",
    title: "Royal Desi Ghee Mysore Pak",
    category: "desi-ghee",
    diet: ["ghee", "bestseller"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 150 },
      { label: "500g", price: 290 },
      { label: "1kg", price: 560 }
    ],
    bestseller: true
  },
  {
    id: "ghee-balushahi",
    title: "Crispy Shahi Balushahi",
    category: "desi-ghee",
    diet: ["ghee"],
    image: "https://images.unsplash.com/photo-1591465619339-60fce055bc82?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 120 },
      { label: "500g", price: 230 },
      { label: "1kg", price: 440 }
    ],
    bestseller: false
  },

  // --- Kaju & Dry Fruit ---
  {
    id: "kaju-katli",
    title: "Signature Silver Kaju Katli",
    category: "kaju-dryfruit",
    diet: ["bestseller"],
    image: "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 240 },
      { label: "500g", price: 460 },
      { label: "1kg", price: 890 }
    ],
    bestseller: true
  },
  {
    id: "kaju-pista-roll",
    title: "Shahi Kaju Pista Roll",
    category: "kaju-dryfruit",
    diet: ["bestseller"],
    image: "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 280 },
      { label: "500g", price: 530 },
      { label: "1kg", price: 1020 }
    ],
    bestseller: true
  },
  {
    id: "anjeer-barfi",
    title: "Anjeer Dry Fruit Barfi (Sugar-Free)",
    category: "kaju-dryfruit",
    diet: ["sugarfree"],
    image: "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 290 },
      { label: "500g", price: 550 },
      { label: "1kg", price: 1050 }
    ],
    bestseller: false
  },
  {
    id: "dryfruit-laddu",
    title: "Panchmeva Dry Fruit Laddu",
    category: "kaju-dryfruit",
    diet: ["sugarfree", "ghee"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 260 },
      { label: "500g", price: 490 },
      { label: "1kg", price: 950 }
    ],
    bestseller: false
  },

  // --- Milk & Khoya ---
  {
    id: "milk-gulab-jamun",
    title: "Garma Garam Gulab Jamun",
    category: "milk-khoya",
    diet: ["ghee", "bestseller"],
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 120 },
      { label: "500g", price: 230 },
      { label: "1kg", price: 440 }
    ],
    bestseller: true
  },
  {
    id: "milk-cake",
    title: "Authentic Alwar Milk Cake",
    category: "milk-khoya",
    diet: ["bestseller"],
    image: "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 140 },
      { label: "500g", price: 270 },
      { label: "1kg", price: 520 }
    ],
    bestseller: true
  },
  {
    id: "milk-kalakand",
    title: "Danedar Doodh Kalakand",
    category: "milk-khoya",
    diet: [],
    image: "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 150 },
      { label: "500g", price: 290 },
      { label: "1kg", price: 560 }
    ],
    bestseller: false
  },
  {
    id: "milk-rasmalai",
    title: "Chilled Kesar Rasmalai",
    category: "milk-khoya",
    diet: ["bestseller"],
    image: "https://images.unsplash.com/photo-1714799263412-2e0c1f875959?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "4 Pcs", price: 160 },
      { label: "8 Pcs", price: 300 },
      { label: "12 Pcs", price: 440 }
    ],
    bestseller: true
  },

  // --- Hot Snacks (Exact Photos) ---
  {
    id: "snack-samosa",
    title: "Desi Ghee Paneer Samosa",
    category: "snacks",
    diet: ["ghee", "bestseller"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "2 Pcs", price: 40 },
      { label: "4 Pcs", price: 80 },
      { label: "8 Pcs", price: 150 }
    ],
    bestseller: true
  },
  {
    id: "snack-bedai",
    title: "Mathura Bedai & Hing Aloo",
    category: "snacks",
    diet: ["bestseller"],
    image: "https://images.unsplash.com/photo-1591465619339-60fce055bc82?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "4 Pcs", price: 70 },
      { label: "8 Pcs", price: 130 }
    ],
    bestseller: true
  },
  {
    id: "snack-jalebi",
    title: "Garma Garam Desi Ghee Jalebi",
    category: "snacks",
    diet: ["ghee", "bestseller"],
    image: "https://images.unsplash.com/photo-1760263216784-a4ca9a841ff5?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 100 },
      { label: "500g", price: 190 },
      { label: "1kg", price: 360 }
    ],
    bestseller: true
  },
  {
    id: "snack-dhokla",
    title: "Spongy Nylon Khaman Dhokla",
    category: "snacks",
    diet: [],
    image: "https://images.unsplash.com/photo-1714799263291-272975db795a?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 70 },
      { label: "500g", price: 130 },
      { label: "1kg", price: 240 }
    ],
    bestseller: false
  },

  // --- Bengali (Exact Photos) ---
  {
    id: "bengali-rasgulla",
    title: "Kolkata Spongy Rasgulla",
    category: "bengali",
    diet: ["bestseller"],
    image: "https://images.unsplash.com/photo-1714799263412-2e0c1f875959?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "4 Pcs", price: 110 },
      { label: "8 Pcs", price: 210 },
      { label: "16 Pcs", price: 400 }
    ],
    bestseller: true
  },
  {
    id: "bengali-rajbhog",
    title: "Shahi Kesar Rajbhog",
    category: "bengali",
    diet: [],
    image: "https://images.unsplash.com/photo-1714799263412-2e0c1f875959?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 140 },
      { label: "500g", price: 270 },
      { label: "1kg", price: 520 }
    ],
    bestseller: false
  },

  // --- Gift Hampers (Exact Packaging) ---
  {
    id: "hamper-shahi",
    title: "Shahi Utsav 4-in-1 Mithai Box",
    category: "hampers",
    diet: ["bestseller"],
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "Box (800g)", price: 650 }
    ],
    bestseller: true
  },
  {
    id: "hamper-royal-velvet",
    title: "Royal Velvet 6-Section Box",
    category: "hampers",
    diet: ["bestseller"],
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "Box (1.4kg)", price: 1250 }
    ],
    bestseller: true
  }
];

// 2. Application State
let activeCategory = "all";
let activeDiet = "all";
let searchQuery = "";
const chosenPortions = {}; // { [id]: idx }
let cart = []; // [ { key, id, title, portion, price, qty, image } ]
let appliedPromo = null;

const PROMO_CODES = {
  "MITHAI10": { pct: 10, min: 299, desc: "10% Festive Discount" },
  "FESTIVE50": { flat: 50, min: 499, desc: "₹50 Off Special" }
};

// Hamper Builder State
const hamperState = {
  type: "shahi-4",
  name: "Shahi 4-Partition",
  boxCost: 150,
  slots: 4,
  sweets: [MENU_DATA[4], MENU_DATA[0], MENU_DATA[8], MENU_DATA[9]]
};

// 3. Init on DOM Load
const CATALOG_VERSION = "2014_v2";

document.addEventListener("DOMContentLoaded", () => {
  // Sync with Admin Inventory (with version refresh for exact images)
  const currentVersion = localStorage.getItem("mmb_version");
  if (currentVersion !== CATALOG_VERSION) {
    localStorage.setItem("mmb_inventory", JSON.stringify(MENU_DATA));
    localStorage.setItem("mmb_version", CATALOG_VERSION);
  } else {
    const savedInv = localStorage.getItem("mmb_inventory");
    if (savedInv) {
      try {
        const parsed = JSON.parse(savedInv);
        if (Array.isArray(parsed) && parsed.length > 0) {
          MENU_DATA = parsed;
        }
      } catch (e) {}
    }
  }

  // Sync with Admin Settings
  const savedSettings = localStorage.getItem("mmb_settings");
  if (savedSettings) {
    try {
      const cfg = JSON.parse(savedSettings);
      if (cfg.announcement) {
        const promoEl = document.querySelector(".promo-sub");
        if (promoEl) promoEl.textContent = cfg.announcement;
      }
    } catch (e) {}
  }

  // Track Visitor Analytics
  trackStoreVisit();

  MENU_DATA.forEach(p => { chosenPortions[p.id] = 0; });
  renderFoodGrid();
  initHamper();
  bindEvents();
  updateCart();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Analytics Tracker
function trackStoreVisit() {
  try {
    let analytics = JSON.parse(localStorage.getItem("mmb_analytics") || "{}");
    const todayStr = new Date().toISOString().slice(0, 10);
    if (analytics.lastDate !== todayStr) {
      analytics.lastDate = todayStr;
      analytics.todayVisitors = 1;
    } else {
      analytics.todayVisitors = (analytics.todayVisitors || 0) + 1;
    }
    analytics.totalVisitors = (analytics.totalVisitors || 0) + 1;
    analytics.viewsBySweet = analytics.viewsBySweet || {};
    localStorage.setItem("mmb_analytics", JSON.stringify(analytics));
  } catch (e) {}
}

function trackSweetView(id) {
  try {
    let analytics = JSON.parse(localStorage.getItem("mmb_analytics") || "{}");
    analytics.viewsBySweet = analytics.viewsBySweet || {};
    analytics.viewsBySweet[id] = (analytics.viewsBySweet[id] || 0) + 1;
    localStorage.setItem("mmb_analytics", JSON.stringify(analytics));
  } catch (e) {}
}

// 4. Render 2-Column Food Grid
function renderFoodGrid() {
  const grid = document.getElementById("foodGrid");
  const noRes = document.getElementById("noResultsCard");
  const heading = document.getElementById("currentCategoryHeading");
  const countLabel = document.getElementById("itemsCountLabel");

  if (!grid) return;

  const filtered = MENU_DATA.filter(item => {
    const catOk = (activeCategory === "all") || (item.category === activeCategory);
    let dietOk = true;
    if (activeDiet === "ghee") dietOk = item.diet.includes("ghee");
    if (activeDiet === "bestseller") dietOk = item.diet.includes("bestseller") || item.bestseller;
    if (activeDiet === "sugarfree") dietOk = item.diet.includes("sugarfree");

    let qOk = true;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      qOk = item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
    }
    return catOk && dietOk && qOk;
  });

  if (heading) {
    const titles = {
      "all": "All Sweets & Snacks",
      "desi-ghee": "Pure Desi Ghee Sweets",
      "kaju-dryfruit": "Royal Kaju & Dry Fruit",
      "milk-khoya": "Khoya & Milk Delights",
      "bengali": "Bengali Ras Mithai",
      "snacks": "Fresh Samosa, Bedai & Chaat",
      "hampers": "Festive Gift Boxes"
    };
    heading.textContent = titles[activeCategory] || "Our Menu";
  }

  if (countLabel) {
    countLabel.textContent = `Showing ${filtered.length} freshly prepared items`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (noRes) noRes.style.display = "block";
    return;
  }

  if (noRes) noRes.style.display = "none";

  grid.innerHTML = filtered.map(item => {
    const pIdx = chosenPortions[item.id] || 0;
    const currentPortion = item.portions[pIdx] || item.portions[0];
    const cartKey = `${item.id}-${currentPortion.label}`;
    const cartItem = cart.find(c => c.key === cartKey);
    const inCartQty = cartItem ? cartItem.qty : 0;

    const chipsHtml = item.portions.map((p, idx) => `
      <button type="button" 
        class="weight-btn ${idx === pIdx ? 'active' : ''}" 
        onclick="setPortion('${item.id}', ${idx})">
        ${p.label}
      </button>
    `).join("");

    const isAvailable = item.inStock !== false;

    let actionHtml = '';
    if (!isAvailable) {
      actionHtml = `<button class="btn-add-item disabled" disabled style="background:#F1F5F9; color:#94A3B8; border-color:#CBD5E1; cursor:not-allowed;">Sold Out</button>`;
    } else if (inCartQty > 0) {
      actionHtml = `
        <div class="card-counter">
          <button onclick="updateQty('${cartKey}', -1)">−</button>
          <span>${inCartQty}</span>
          <button onclick="updateQty('${cartKey}', 1)">+</button>
        </div>
      `;
    } else {
      actionHtml = `
        <button class="btn-add-item" onclick="addItem('${item.id}')">
          + ADD
        </button>
      `;
    }

    return `
      <div class="food-card" data-id="${item.id}" onclick="trackSweetView('${item.id}')">
        <div class="food-card-img-wrap">
          <img src="${item.image}" alt="${item.title}" class="food-card-img" loading="lazy">
          <div class="card-veg-indicator"><div class="veg-dot"></div></div>
          ${!isAvailable ? '<span class="card-badge-bestseller" style="background:#EF4444; color:#FFF;">Sold Out</span>' : (item.bestseller ? '<span class="card-badge-bestseller">★ Bestseller</span>' : '')}
        </div>
        <div class="food-card-body">
          <h3 class="food-card-title">${item.title}</h3>
          
          <div class="weight-selector-row">
            ${chipsHtml}
          </div>

          <div class="card-bottom-row">
            <div class="card-price-wrap">
              <span class="card-price" id="cardPrice-${item.id}">₹${currentPortion.price}</span>
              <span class="card-tax">incl. taxes</span>
            </div>
            <div class="add-btn-wrap" id="actionWrap-${item.id}">
              ${actionHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 5. Weight Portion Change
window.setPortion = function(id, idx) {
  chosenPortions[id] = idx;
  const item = MENU_DATA.find(m => m.id === id);
  if (!item) return;

  const priceEl = document.getElementById(`cardPrice-${id}`);
  if (priceEl) priceEl.textContent = `₹${item.portions[idx].price}`;

  const card = document.querySelector(`.food-card[data-id="${id}"]`);
  if (card) {
    const btns = card.querySelectorAll(".weight-btn");
    btns.forEach((b, i) => b.classList.toggle("active", i === idx));
  }

  // Update action button state for this new portion
  const cartKey = `${id}-${item.portions[idx].label}`;
  const cartItem = cart.find(c => c.key === cartKey);
  const actionWrap = document.getElementById(`actionWrap-${id}`);
  if (actionWrap) {
    if (cartItem && cartItem.qty > 0) {
      actionWrap.innerHTML = `
        <div class="card-counter">
          <button onclick="updateQty('${cartKey}', -1)">−</button>
          <span>${cartItem.qty}</span>
          <button onclick="updateQty('${cartKey}', 1)">+</button>
        </div>
      `;
    } else {
      actionWrap.innerHTML = `
        <button class="btn-add-item" onclick="addItem('${id}')">+ ADD</button>
      `;
    }
  }
};

// 6. Cart Management
window.addItem = function(id) {
  const item = MENU_DATA.find(m => m.id === id);
  if (!item) return;

  const pIdx = chosenPortions[id] || 0;
  const portion = item.portions[pIdx];
  const cartKey = `${id}-${portion.label}`;

  const existing = cart.find(c => c.key === cartKey);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key: cartKey,
      id: item.id,
      title: item.title,
      portion: portion.label,
      price: portion.price,
      qty: 1,
      image: item.image
    });
  }

  updateCart();
  renderFoodGrid();
  showToast(`Added ${item.title} (${portion.label}) to your Box!`);
};

window.updateQty = function(cartKey, delta) {
  const item = cart.find(c => c.key === cartKey);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(c => c.key !== cartKey);
  }

  updateCart();
  renderFoodGrid();
};

window.removeCartItem = function(cartKey) {
  cart = cart.filter(c => c.key !== cartKey);
  updateCart();
  renderFoodGrid();
  showToast("Item removed from box");
};

function updateCart() {
  const totalCount = cart.reduce((s, c) => s + c.qty, 0);
  const subtotal = cart.reduce((s, c) => s + (c.price * c.qty), 0);

  // Headers & Badges
  const hCount = document.getElementById("headerCartCount");
  const hTotal = document.getElementById("headerCartTotal");
  const bCount = document.getElementById("bottomNavCartCount");
  const dCount = document.getElementById("cartItemCountDisplay");

  if (hCount) hCount.textContent = totalCount;
  if (hTotal) hTotal.textContent = `₹${subtotal}`;
  if (bCount) bCount.textContent = totalCount;
  if (dCount) dCount.textContent = `(${totalCount} item${totalCount !== 1 ? 's' : ''})`;

  // Floating Cart Bar (App-style bottom bar)
  const floatBar = document.getElementById("floatingCartBar");
  const fCount = document.getElementById("floatCartCount");
  const fTotal = document.getElementById("floatCartTotal");

  if (floatBar) {
    if (totalCount > 0) {
      floatBar.style.display = "block";
      if (fCount) fCount.textContent = `${totalCount} Item${totalCount !== 1 ? 's' : ''}`;
      if (fTotal) fTotal.textContent = `₹${subtotal}`;
    } else {
      floatBar.style.display = "none";
    }
  }

  // Delivery Progress (Target: ₹499)
  const threshold = 499;
  const perkText = document.getElementById("perkText");
  const perkFill = document.getElementById("perkProgressFill");
  let deliveryFee = 50;

  if (subtotal >= threshold) {
    deliveryFee = 0;
    if (perkText) perkText.innerHTML = "🎉 You unlocked <strong>FREE Express Delivery</strong>!";
    if (perkFill) perkFill.style.width = "100%";
  } else {
    const diff = threshold - subtotal;
    const pct = Math.min(100, Math.round((subtotal / threshold) * 100));
    if (perkText) perkText.innerHTML = `Add <strong>₹${diff}</strong> more for <strong>FREE Delivery</strong>!`;
    if (perkFill) perkFill.style.width = `${pct}%`;
  }

  // Discount
  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.pct) discount = Math.round((subtotal * appliedPromo.pct) / 100);
    else if (appliedPromo.flat) discount = appliedPromo.flat;
  }
  const grandTotal = Math.max(0, subtotal - discount + (subtotal > 0 ? deliveryFee : 0));

  // Render Drawer Items
  const itemsContainer = document.getElementById("drawerCartItems");
  const emptyState = document.getElementById("drawerEmptyState");
  const drawerFooter = document.getElementById("drawerFooter");

  if (cart.length === 0) {
    if (itemsContainer) itemsContainer.innerHTML = "";
    if (emptyState) emptyState.style.display = "flex";
    if (drawerFooter) drawerFooter.style.display = "none";
  } else {
    if (emptyState) emptyState.style.display = "none";
    if (drawerFooter) drawerFooter.style.display = "block";

    if (itemsContainer) {
      itemsContainer.innerHTML = cart.map(c => `
        <div class="cart-row-item">
          <img src="${c.image}" alt="${c.title}" class="cart-row-thumb">
          <div class="cart-row-details">
            <h4 class="cart-row-title">${c.title}</h4>
            <div class="cart-row-portion">${c.portion}</div>
            <div class="cart-row-counter">
              <button onclick="updateQty('${c.key}', -1)">−</button>
              <span>${c.qty}</span>
              <button onclick="updateQty('${c.key}', 1)">+</button>
            </div>
          </div>
          <div class="cart-row-price-col">
            <div class="cart-row-total">₹${c.price * c.qty}</div>
            <button class="cart-row-remove" onclick="removeCartItem('${c.key}')">Remove</button>
          </div>
        </div>
      `).join("");
    }
  }

  // Update Bill in Drawer
  const bSub = document.getElementById("billSubtotal");
  const bDel = document.getElementById("billDelivery");
  const bDiscLine = document.getElementById("billDiscountLine");
  const bDisc = document.getElementById("billDiscount");
  const bGrand = document.getElementById("billGrandTotal");

  if (bSub) bSub.textContent = `₹${subtotal}`;
  if (bDel) bDel.textContent = subtotal > 0 ? (deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`) : "₹0";

  if (discount > 0) {
    if (bDiscLine) bDiscLine.style.display = "flex";
    if (bDisc) bDisc.textContent = `-₹${discount}`;
  } else {
    if (bDiscLine) bDiscLine.style.display = "none";
  }

  if (bGrand) bGrand.textContent = `₹${grandTotal}`;
}

// 7. Hamper Builder Mobile
function initHamper() {
  const boxRadios = document.querySelectorAll('input[name="boxType"]');
  boxRadios.forEach(r => {
    r.addEventListener("change", (e) => {
      const val = e.target.value;
      if (val === "shahi-4") {
        hamperState.type = "shahi-4";
        hamperState.name = "Shahi 4-Partition";
        hamperState.boxCost = 150;
        hamperState.slots = 4;
      } else if (val === "royal-6") {
        hamperState.type = "royal-6";
        hamperState.name = "Royal 6-Partition";
        hamperState.boxCost = 250;
        hamperState.slots = 6;
      } else if (val === "utsav-2") {
        hamperState.type = "utsav-2";
        hamperState.name = "Utsav 2-Partition";
        hamperState.boxCost = 90;
        hamperState.slots = 2;
      }

      while (hamperState.sweets.length < hamperState.slots) {
        hamperState.sweets.push(MENU_DATA[0]);
      }
      hamperState.sweets = hamperState.sweets.slice(0, hamperState.slots);

      document.querySelectorAll(".box-pill-option").forEach(b => b.classList.remove("active"));
      e.target.closest(".box-pill-option").classList.add("active");

      renderHamperSlots();
    });
  });

  renderHamperSlots();

  const addHamperBtn = document.getElementById("addHamperBtn");
  if (addHamperBtn) {
    addHamperBtn.addEventListener("click", () => {
      const recipient = document.getElementById("hamperRecipient")?.value.trim() || "";
      const sweetsList = hamperState.sweets.map(s => s.title).join(", ");
      const sweetsCost = hamperState.sweets.reduce((sum, s) => sum + s.portions[0].price, 0);
      const total = sweetsCost + hamperState.boxCost;

      cart.push({
        key: `custom-hamper-${Date.now()}`,
        id: `hamper-${hamperState.type}`,
        title: `🎁 ${hamperState.name} Box`,
        portion: `${hamperState.slots} Sweets: ${sweetsList}${recipient ? ' | For: ' + recipient : ''}`,
        price: total,
        qty: 1,
        image: "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500&auto=format&fit=crop&q=80"
      });

      updateCart();
      openDrawer();
      showToast(`🎁 Custom ${hamperState.name} added to your box!`);
    });
  }
}

function renderHamperSlots() {
  const container = document.getElementById("mobileSlotsGrid");
  const totalAmountEl = document.getElementById("hamperTotalAmount");
  if (!container) return;

  container.innerHTML = "";
  let sweetsTotal = 0;

  for (let i = 0; i < hamperState.slots; i++) {
    const sw = hamperState.sweets[i] || MENU_DATA[0];
    sweetsTotal += sw.portions[0].price;

    const slotCard = document.createElement("div");
    slotCard.className = "mobile-slot-card filled";
    slotCard.innerHTML = `
      <img src="${sw.image}" alt="${sw.title}" class="slot-thumb">
      <span class="slot-name">Slot #${i + 1}: ${sw.title}</span>
      <select class="slot-dropdown" onchange="pickHamperSweet(${i}, this.value)">
        ${MENU_DATA.filter(m => m.category !== "snacks" && m.category !== "hampers").map(m => `
          <option value="${m.id}" ${m.id === sw.id ? 'selected' : ''}>
            ${m.title} (+₹${m.portions[0].price})
          </option>
        `).join("")}
      </select>
    `;
    container.appendChild(slotCard);
  }

  const grandTotal = sweetsTotal + hamperState.boxCost;
  if (totalAmountEl) totalAmountEl.textContent = `₹${grandTotal}`;
}

window.pickHamperSweet = function(slotIdx, id) {
  const sw = MENU_DATA.find(m => m.id === id);
  if (!sw) return;
  hamperState.sweets[slotIdx] = sw;
  renderHamperSlots();
};

// 8. Event Bindings
function bindEvents() {
  // Story Categories
  const storyBtns = document.querySelectorAll(".story-cat-item");
  storyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      storyBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-cat");
      renderFoodGrid();
    });
  });

  // Dietary Chips
  const chips = document.querySelectorAll(".chip-filter");
  chips.forEach(c => {
    c.addEventListener("click", () => {
      chips.forEach(b => b.classList.remove("active"));
      c.classList.add("active");
      activeDiet = c.getAttribute("data-filter");
      renderFoodGrid();
    });
  });

  // Search
  const searchInput = document.getElementById("menuSearchInput");
  const clearSearch = document.getElementById("clearSearchBtn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearSearch) clearSearch.style.display = searchQuery ? "flex" : "none";
      renderFoodGrid();
    });
  }

  if (clearSearch) {
    clearSearch.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      searchQuery = "";
      clearSearch.style.display = "none";
      renderFoodGrid();
    });
  }

  const resetFiltersBtn = document.getElementById("resetFiltersBtn");
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      activeCategory = "all";
      activeDiet = "all";
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      storyBtns.forEach(b => b.classList.toggle("active", b.getAttribute("data-cat") === "all"));
      chips.forEach(c => c.classList.toggle("active", c.getAttribute("data-filter") === "all"));
      renderFoodGrid();
    });
  }

  // Drawer Open/Close
  const openCartBtn = document.getElementById("openCartBtn");
  const viewCartTriggerBtn = document.getElementById("viewCartTriggerBtn");
  const bottomNavCartBtn = document.getElementById("bottomNavCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const overlay = document.getElementById("cartOverlay");
  const startBrowsingBtn = document.getElementById("startBrowsingBtn");

  if (openCartBtn) openCartBtn.addEventListener("click", openDrawer);
  if (viewCartTriggerBtn) viewCartTriggerBtn.addEventListener("click", openDrawer);
  if (bottomNavCartBtn) bottomNavCartBtn.addEventListener("click", openDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);
  if (startBrowsingBtn) startBrowsingBtn.addEventListener("click", closeDrawer);

  // Promo Code
  const applyPromoBtn = document.getElementById("applyCouponBtn");
  const promoInput = document.getElementById("couponCodeInput");
  const promoMsg = document.getElementById("couponMessage");

  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener("click", () => {
      const code = promoInput.value.trim().toUpperCase();
      const subtotal = cart.reduce((s, c) => s + (c.price * c.qty), 0);
      const promo = PROMO_CODES[code];

      if (promo) {
        if (subtotal < promo.min) {
          promoMsg.className = "coupon-msg error";
          promoMsg.textContent = `Order min ₹${promo.min} required for ${code}`;
        } else {
          appliedPromo = promo;
          promoMsg.className = "coupon-msg success";
          promoMsg.textContent = `Applied! ${promo.desc}`;
          updateCart();
          showToast(`Coupon ${code} applied successfully!`);
        }
      } else {
        promoMsg.className = "coupon-msg error";
        promoMsg.textContent = "Invalid code. Try 'MITHAI10'";
      }
    });
  }

  // WhatsApp Order
  const waBtn = document.getElementById("whatsAppCheckoutBtn");
  if (waBtn) {
    waBtn.addEventListener("click", () => {
      if (cart.length === 0) return;
      dispatchWhatsApp();
    });
  }

  // Direct Checkout
  const directBtn = document.getElementById("directCheckoutBtn");
  const addrModal = document.getElementById("addressModal");
  const closeAddrModal = document.getElementById("closeAddressModal");

  if (directBtn && addrModal) {
    directBtn.addEventListener("click", () => {
      if (cart.length === 0) return;
      closeDrawer();
      addrModal.classList.add("active");
    });
  }

  if (closeAddrModal && addrModal) {
    closeAddrModal.addEventListener("click", () => addrModal.classList.remove("active"));
  }

  // Success Done
  const successCloseBtn = document.getElementById("successCloseBtn");
  const successModal = document.getElementById("successModal");
  if (successCloseBtn && successModal) {
    successCloseBtn.addEventListener("click", () => successModal.classList.remove("active"));
  }
}

function openDrawer() {
  document.getElementById("cartDrawer")?.classList.add("open");
  document.getElementById("cartOverlay")?.classList.add("active");
}

function closeDrawer() {
  document.getElementById("cartDrawer")?.classList.remove("open");
  document.getElementById("cartOverlay")?.classList.remove("active");
}

function dispatchWhatsApp() {
  const subtotal = cart.reduce((s, c) => s + (c.price * c.qty), 0);
  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.pct) discount = Math.round((subtotal * appliedPromo.pct) / 100);
    else if (appliedPromo.flat) discount = appliedPromo.flat;
  }
  const delivery = subtotal >= 499 ? 0 : 50;
  const grandTotal = subtotal - discount + delivery;

  // Track WhatsApp Click
  try {
    let analytics = JSON.parse(localStorage.getItem("mmb_analytics") || "{}");
    analytics.waClicks = (analytics.waClicks || 0) + 1;
    localStorage.setItem("mmb_analytics", JSON.stringify(analytics));
  } catch (e) {}

  // Log Order in Admin
  try {
    const orders = JSON.parse(localStorage.getItem("mmb_orders") || "[]");
    const randId = `MMB-${Math.floor(1000 + Math.random() * 9000)}`;
    const itemsSummary = cart.map(c => `${c.title} (${c.portion}) x ${c.qty}`).join(", ");
    orders.unshift({
      id: randId,
      customer: "WhatsApp Customer",
      phone: "In WhatsApp Chat",
      address: "Provided in Chat",
      items: itemsSummary,
      total: grandTotal,
      payType: "WhatsApp Order",
      status: "New",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    localStorage.setItem("mmb_orders", JSON.stringify(orders));
  } catch (e) {}

  let msg = `*New Order - Mukesh Misthan Bhandar*\n`;
  msg += `------------------------------------\n`;
  cart.forEach((c, i) => {
    msg += `${i + 1}. *${c.title}* (${c.portion})\n`;
    msg += `   Qty: ${c.qty} × ₹${c.price} = ₹${c.price * c.qty}\n`;
  });
  msg += `------------------------------------\n`;
  msg += `Subtotal: ₹${subtotal}\n`;
  if (discount > 0) msg += `Festive Discount: -₹${discount}\n`;
  msg += `Delivery: ${delivery === 0 ? 'FREE' : '₹' + delivery}\n`;
  msg += `*Grand Total: ₹${grandTotal}*\n`;
  msg += `------------------------------------\n`;
  msg += `Please deliver to my address!`;

  const cfg = JSON.parse(localStorage.getItem("mmb_settings") || "{}");
  const waPhone = cfg.waPhone || "919811234567";
  window.open(`https://wa.me/${waPhone}?text=${encodeURIComponent(msg)}`, "_blank");
}

window.handleOrderSubmit = function(e) {
  e.preventDefault();
  const addrModal = document.getElementById("addressModal");
  const successModal = document.getElementById("successModal");
  const orderTag = document.getElementById("successOrderTag");

  const custName = document.getElementById("custName")?.value || "Customer";
  const custPhone = document.getElementById("custPhone")?.value || "";
  const custAddress = document.getElementById("custAddress")?.value || "";
  const payType = document.querySelector('input[name="payType"]:checked')?.value || "Cash on Delivery";

  const subtotal = cart.reduce((s, c) => s + (c.price * c.qty), 0);
  let discount = 0;
  if (appliedPromo) {
    if (appliedPromo.pct) discount = Math.round((subtotal * appliedPromo.pct) / 100);
    else if (appliedPromo.flat) discount = appliedPromo.flat;
  }
  const delivery = subtotal >= 499 ? 0 : 50;
  const grandTotal = subtotal - discount + delivery;
  const randId = `MMB-${Math.floor(1000 + Math.random() * 9000)}`;

  // Log Order in Admin
  try {
    const orders = JSON.parse(localStorage.getItem("mmb_orders") || "[]");
    const itemsSummary = cart.map(c => `${c.title} (${c.portion}) x ${c.qty}`).join(", ");
    orders.unshift({
      id: randId,
      customer: custName,
      phone: custPhone,
      address: custAddress,
      items: itemsSummary,
      total: grandTotal,
      payType: payType,
      status: "New",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    localStorage.setItem("mmb_orders", JSON.stringify(orders));
  } catch (e) {}

  if (addrModal) addrModal.classList.remove("active");
  if (orderTag) orderTag.textContent = `#${randId}`;
  if (successModal) successModal.classList.add("active");

  cart = [];
  updateCart();
  renderFoodGrid();
  return false;
};

// 9. Toast Helper
function showToast(text) {
  const box = document.getElementById("toastBox");
  if (!box) return;

  const toast = document.createElement("div");
  toast.className = "toast-item";
  toast.textContent = text;
  box.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 20);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 250);
  }, 2500);
}
