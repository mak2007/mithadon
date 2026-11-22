/**
 * Mukesh Misthan Bhandar - Admin Dashboard Logic
 * Easy-to-use control center for small business owners.
 * Manages: Inventory stock, price updates, visitor analytics, orders log.
 */

// Default PIN
const DEFAULT_PIN = "2014";

// Initial Catalog Data
const DEFAULT_MENU_DATA = [
  {
    id: "ghee-motichoor",
    title: "Pure Desi Ghee Motichoor Ladoo",
    category: "desi-ghee",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 240 },
      { label: "1kg", price: 460 }
    ],
    inStock: true
  },
  {
    id: "ghee-besan",
    title: "Shuddh Desi Ghee Besan Ladoo",
    category: "desi-ghee",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 130 },
      { label: "500g", price: 250 },
      { label: "1kg", price: 480 }
    ],
    inStock: true
  },
  {
    id: "ghee-mysore-pak",
    title: "Royal Desi Ghee Mysore Pak",
    category: "desi-ghee",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 150 },
      { label: "500g", price: 290 },
      { label: "1kg", price: 560 }
    ],
    inStock: true
  },
  {
    id: "ghee-balushahi",
    title: "Crispy Shahi Balushahi",
    category: "desi-ghee",
    image: "https://images.unsplash.com/photo-1591465619339-60fce055bc82?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 120 },
      { label: "500g", price: 230 },
      { label: "1kg", price: 440 }
    ],
    inStock: true
  },
  {
    id: "kaju-katli",
    title: "Signature Silver Kaju Katli",
    category: "kaju-dryfruit",
    image: "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 240 },
      { label: "500g", price: 460 },
      { label: "1kg", price: 890 }
    ],
    inStock: true
  },
  {
    id: "kaju-pista-roll",
    title: "Shahi Kaju Pista Roll",
    category: "kaju-dryfruit",
    image: "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 280 },
      { label: "500g", price: 530 },
      { label: "1kg", price: 1020 }
    ],
    inStock: true
  },
  {
    id: "anjeer-barfi",
    title: "Anjeer Dry Fruit Barfi (Sugar-Free)",
    category: "kaju-dryfruit",
    image: "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 290 },
      { label: "500g", price: 550 },
      { label: "1kg", price: 1050 }
    ],
    inStock: true
  },
  {
    id: "dryfruit-laddu",
    title: "Panchmeva Dry Fruit Laddu",
    category: "kaju-dryfruit",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 260 },
      { label: "500g", price: 490 },
      { label: "1kg", price: 950 }
    ],
    inStock: true
  },
  {
    id: "milk-gulab-jamun",
    title: "Garma Garam Gulab Jamun",
    category: "milk-khoya",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 120 },
      { label: "500g", price: 230 },
      { label: "1kg", price: 440 }
    ],
    inStock: true
  },
  {
    id: "milk-cake",
    title: "Authentic Alwar Milk Cake",
    category: "milk-khoya",
    image: "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 140 },
      { label: "500g", price: 270 },
      { label: "1kg", price: 520 }
    ],
    inStock: true
  },
  {
    id: "milk-kalakand",
    title: "Danedar Doodh Kalakand",
    category: "milk-khoya",
    image: "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 150 },
      { label: "500g", price: 290 },
      { label: "1kg", price: 560 }
    ],
    inStock: true
  },
  {
    id: "milk-rasmalai",
    title: "Chilled Kesar Rasmalai",
    category: "milk-khoya",
    image: "https://images.unsplash.com/photo-1714799263412-2e0c1f875959?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "4 Pcs", price: 160 },
      { label: "8 Pcs", price: 300 },
      { label: "12 Pcs", price: 440 }
    ],
    inStock: true
  },
  {
    id: "snack-samosa",
    title: "Desi Ghee Paneer Samosa",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "2 Pcs", price: 40 },
      { label: "4 Pcs", price: 80 },
      { label: "8 Pcs", price: 150 }
    ],
    inStock: true
  },
  {
    id: "snack-bedai",
    title: "Mathura Bedai & Hing Aloo",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1591465619339-60fce055bc82?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "4 Pcs", price: 70 },
      { label: "8 Pcs", price: 130 }
    ],
    inStock: true
  },
  {
    id: "snack-jalebi",
    title: "Garma Garam Desi Ghee Jalebi",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1760263216784-a4ca9a841ff5?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 100 },
      { label: "500g", price: 190 },
      { label: "1kg", price: 360 }
    ],
    inStock: true
  },
  {
    id: "snack-dhokla",
    title: "Spongy Nylon Khaman Dhokla",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1714799263291-272975db795a?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 70 },
      { label: "500g", price: 130 },
      { label: "1kg", price: 240 }
    ],
    inStock: true
  },
  {
    id: "bengali-rasgulla",
    title: "Kolkata Spongy Rasgulla",
    category: "bengali",
    image: "https://images.unsplash.com/photo-1714799263412-2e0c1f875959?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "4 Pcs", price: 110 },
      { label: "8 Pcs", price: 210 },
      { label: "16 Pcs", price: 400 }
    ],
    inStock: true
  },
  {
    id: "bengali-rajbhog",
    title: "Shahi Kesar Rajbhog",
    category: "bengali",
    image: "https://images.unsplash.com/photo-1714799263412-2e0c1f875959?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "250g", price: 140 },
      { label: "500g", price: 270 },
      { label: "1kg", price: 520 }
    ],
    inStock: true
  },
  {
    id: "hamper-shahi",
    title: "Shahi Utsav 4-in-1 Mithai Box",
    category: "hampers",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "Box (800g)", price: 650 }
    ],
    inStock: true
  },
  {
    id: "hamper-royal-velvet",
    title: "Royal Velvet 6-Section Box",
    category: "hampers",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80",
    portions: [
      { label: "Box (1.4kg)", price: 1250 }
    ],
    inStock: true
  }
];

// Current Inventory in memory
let inventory = [];

document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  checkAuth();
  setTodayDateLabel();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

function initStorage() {
  const CATALOG_VERSION = "2014_v2";
  // Inventory (reset if older catalog version)
  if (localStorage.getItem("mmb_version") !== CATALOG_VERSION) {
    inventory = DEFAULT_MENU_DATA;
    localStorage.setItem("mmb_inventory", JSON.stringify(inventory));
    localStorage.setItem("mmb_version", CATALOG_VERSION);
  } else {
    const savedInv = localStorage.getItem("mmb_inventory");
    if (savedInv) {
      try {
        inventory = JSON.parse(savedInv);
      } catch (e) {
        inventory = DEFAULT_MENU_DATA;
      }
    } else {
      inventory = DEFAULT_MENU_DATA;
      localStorage.setItem("mmb_inventory", JSON.stringify(inventory));
    }
  }

  // Analytics defaults
  if (!localStorage.getItem("mmb_analytics")) {
    const initialAnalytics = {
      todayVisitors: 28, // starter baseline for owner
      totalVisitors: 312,
      waClicks: 14,
      phoneCalls: 6,
      viewsBySweet: {
        "kaju-katli": 84,
        "milk-gulab-jamun": 67,
        "ghee-motichoor": 52,
        "snack-samosa": 49,
        "snack-bedai": 38
      }
    };
    localStorage.setItem("mmb_analytics", JSON.stringify(initialAnalytics));
  }

  // Demo Orders if none exist
  if (!localStorage.getItem("mmb_orders")) {
    const starterOrders = [
      {
        id: "MMB-9021",
        customer: "Vikram Malhotra",
        phone: "+91 98711 22334",
        address: "House 24, Sector 16, Faridabad",
        items: "Kaju Katli (500g) x 1, Motichoor Ladoo (1kg) x 1",
        total: 700,
        payType: "Cash on Delivery",
        status: "Completed",
        time: "10:30 AM"
      },
      {
        id: "MMB-9022",
        customer: "Sunita Aggarwal",
        phone: "+91 98100 44556",
        address: "Flat 402, BPTP Park Elite, Sector 78",
        items: "Desi Ghee Paneer Samosa (4 pcs) x 2, Jalebi (500g) x 1",
        total: 350,
        payType: "UPI on Delivery",
        status: "Preparing",
        time: "12:15 PM"
      }
    ];
    localStorage.setItem("mmb_orders", JSON.stringify(starterOrders));
  }
}

// Authentication Check
function checkAuth() {
  const isAuth = sessionStorage.getItem("mmb_admin_auth");
  const loginScreen = document.getElementById("loginScreen");
  const dashboardScreen = document.getElementById("dashboardScreen");

  if (isAuth === "true") {
    if (loginScreen) loginScreen.style.display = "none";
    if (dashboardScreen) dashboardScreen.style.display = "block";
    loadDashboard();
  } else {
    if (loginScreen) loginScreen.style.display = "flex";
    if (dashboardScreen) dashboardScreen.style.display = "none";
  }
}

window.handleAdminLogin = function(e) {
  e.preventDefault();
  const pinInput = document.getElementById("adminPin").value.trim();
  const savedPin = localStorage.getItem("mmb_admin_pin") || DEFAULT_PIN;
  const errorEl = document.getElementById("loginError");

  if (pinInput === savedPin) {
    sessionStorage.setItem("mmb_admin_auth", "true");
    if (errorEl) errorEl.style.display = "none";
    checkAuth();
  } else {
    if (errorEl) errorEl.style.display = "block";
  }
  return false;
};

window.handleLogout = function() {
  sessionStorage.removeItem("mmb_admin_auth");
  checkAuth();
};

function setTodayDateLabel() {
  const el = document.getElementById("todayDatePill");
  if (el) {
    const now = new Date();
    el.textContent = `Today: ${now.toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}`;
  }
}

// Tab Switching
window.switchTab = function(tabName) {
  document.querySelectorAll(".admin-tab").forEach(t => {
    t.classList.toggle("active", t.getAttribute("data-tab") === tabName);
  });
  document.querySelectorAll(".tab-pane").forEach(p => {
    p.classList.toggle("active", p.id === `pane-${tabName}`);
  });
};

// ==========================================
// Dashboard Load & Render
// ==========================================
function loadDashboard() {
  renderAnalytics();
  renderInventoryTable();
  renderOrdersTable();
  loadSettingsForm();
}

function renderAnalytics() {
  const analyticsData = JSON.parse(localStorage.getItem("mmb_analytics") || "{}");
  const orders = JSON.parse(localStorage.getItem("mmb_orders") || "[]");

  const statTodayVisitors = document.getElementById("statTodayVisitors");
  const statTotalVisitors = document.getElementById("statTotalVisitors");
  const statWaClicks = document.getElementById("statWaClicks");
  const statPhoneCalls = document.getElementById("statPhoneCalls");
  const statTotalSales = document.getElementById("statTotalSales");
  const statOrdersCount = document.getElementById("statOrdersCount");

  if (statTodayVisitors) statTodayVisitors.textContent = analyticsData.todayVisitors || 0;
  if (statTotalVisitors) statTotalVisitors.textContent = `Total all-time visits: ${analyticsData.totalVisitors || 0}`;
  if (statWaClicks) statWaClicks.textContent = analyticsData.waClicks || 0;
  if (statPhoneCalls) statPhoneCalls.textContent = analyticsData.phoneCalls || 0;

  const totalSalesVal = orders.reduce((sum, o) => sum + (o.total || 0), 0);
  if (statTotalSales) statTotalSales.textContent = `₹${totalSalesVal.toLocaleString("en-IN")}`;
  if (statOrdersCount) statOrdersCount.textContent = `${orders.length} total orders recorded`;

  // Render Popular Sweets
  const popularContainer = document.getElementById("popularSweetsList");
  if (popularContainer && analyticsData.viewsBySweet) {
    const sorted = Object.entries(analyticsData.viewsBySweet)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    popularContainer.innerHTML = sorted.map(([id, views], idx) => {
      const sweet = inventory.find(i => i.id === id) || { title: id, image: "" };
      return `
        <div class="popular-sweet-item">
          <div class="psi-left">
            <span class="psi-rank">#${idx + 1}</span>
            <img src="${sweet.image || 'https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=100'}" alt="${sweet.title}" class="psi-thumb">
            <span class="psi-title">${sweet.title}</span>
          </div>
          <span class="psi-views">${views} views</span>
        </div>
      `;
    }).join("");
  }
}

// ==========================================
// Inventory & Price Management
// ==========================================
function renderInventoryTable(itemsToRender = null) {
  const tbody = document.getElementById("inventoryTableBody");
  const badge = document.getElementById("stockCountBadge");
  if (!tbody) return;

  const list = itemsToRender || inventory;
  if (badge) badge.textContent = inventory.length;

  tbody.innerHTML = list.map(item => {
    const isAvailable = item.inStock !== false;
    const priceText = item.portions.map(p => `${p.label}: <strong>₹${p.price}</strong>`).join(" | ");

    return `
      <tr>
        <td>
          <div class="table-sweet-cell">
            <img src="${item.image}" alt="${item.title}" class="table-sweet-thumb">
            <div>
              <div class="table-sweet-name">${item.title}</div>
              <small style="color:#64748B;">ID: ${item.id}</small>
            </div>
          </div>
        </td>
        <td><span class="badge-tag">${item.category}</span></td>
        <td>${priceText}</td>
        <td>
          <label class="switch" title="Toggle Stock">
            <input type="checkbox" ${isAvailable ? 'checked' : ''} onchange="toggleItemStock('${item.id}', this.checked)">
            <span class="slider"></span>
          </label>
          <span class="stock-status-pill ${isAvailable ? 'in-stock' : 'out-of-stock'}" style="margin-left: 8px;">
            ${isAvailable ? 'In Stock' : 'Sold Out'}
          </span>
        </td>
        <td>
          <button class="btn-table-edit" onclick="openPriceModal('${item.id}')">
            <i data-lucide="edit-2"></i> Edit Price
          </button>
        </td>
      </tr>
    `;
  }).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.toggleItemStock = function(id, inStock) {
  const item = inventory.find(i => i.id === id);
  if (!item) return;

  item.inStock = inStock;
  saveInventory();
  renderInventoryTable();
  showAdminToast(`${item.title} marked as ${inStock ? '🟢 IN STOCK' : '🔴 SOLD OUT'} on live website`);
};

window.openPriceModal = function(id) {
  const item = inventory.find(i => i.id === id);
  if (!item) return;

  document.getElementById("editSweetId").value = item.id;
  document.getElementById("modalSweetName").textContent = `Edit Prices: ${item.title}`;

  const container = document.getElementById("pricePortionsInputs");
  container.innerHTML = item.portions.map((p, idx) => `
    <div class="portion-edit-row">
      <label>${p.label}:</label>
      <input type="number" id="portionPriceInput_${idx}" value="${p.price}" min="1" required>
    </div>
  `).join("");

  document.getElementById("editPriceModal").classList.add("active");
};

window.closePriceModal = function() {
  document.getElementById("editPriceModal").classList.remove("active");
};

window.saveEditedPrices = function() {
  const id = document.getElementById("editSweetId").value;
  const item = inventory.find(i => i.id === id);
  if (!item) return;

  item.portions.forEach((p, idx) => {
    const input = document.getElementById(`portionPriceInput_${idx}`);
    if (input) {
      p.price = parseInt(input.value) || p.price;
    }
  });

  saveInventory();
  closePriceModal();
  renderInventoryTable();
  showAdminToast(`Updated prices for ${item.title}! Changes are live now.`);
};

// Add Sweet Modal
window.openAddSweetModal = function() {
  document.getElementById("addSweetModal").classList.add("active");
};

window.closeAddSweetModal = function() {
  document.getElementById("addSweetModal").classList.remove("active");
};

window.handleAddNewSweet = function(e) {
  e.preventDefault();
  const name = document.getElementById("newSweetName").value.trim();
  const cat = document.getElementById("newSweetCat").value;
  const img = document.getElementById("newSweetImg").value.trim() || "https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?w=500";
  const p250 = parseInt(document.getElementById("newSweetP250").value) || 120;
  const p500 = parseInt(document.getElementById("newSweetP500").value) || 230;
  const p1000 = parseInt(document.getElementById("newSweetP1000").value) || 440;

  const newId = `custom-${Date.now()}`;
  inventory.unshift({
    id: newId,
    title: name,
    category: cat,
    image: img,
    portions: [
      { label: "250g", price: p250 },
      { label: "500g", price: p500 },
      { label: "1kg", price: p1000 }
    ],
    inStock: true
  });

  saveInventory();
  closeAddSweetModal();
  renderInventoryTable();
  document.getElementById("addNewSweetForm").reset();
  showAdminToast(`Added "${name}" to your live menu!`);
  return false;
};

window.filterInventory = function() {
  const q = document.getElementById("invSearchInput").value.toLowerCase();
  const cat = document.getElementById("invCatFilter").value;

  const filtered = inventory.filter(item => {
    const matchCat = (cat === "all") || (item.category === cat);
    const matchQ = item.title.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  renderInventoryTable(filtered);
};

function saveInventory() {
  localStorage.setItem("mmb_inventory", JSON.stringify(inventory));
}

// ==========================================
// Orders Table Management
// ==========================================
function renderOrdersTable() {
  const orders = JSON.parse(localStorage.getItem("mmb_orders") || "[]");
  const tbody = document.getElementById("ordersTableBody");
  const noOrders = document.getElementById("noOrdersState");
  const countBadge = document.getElementById("ordersCountBadge");

  if (!tbody) return;
  if (countBadge) countBadge.textContent = orders.length;

  if (orders.length === 0) {
    tbody.innerHTML = "";
    if (noOrders) noOrders.style.display = "block";
    return;
  }

  if (noOrders) noOrders.style.display = "none";

  tbody.innerHTML = orders.map((o, idx) => `
    <tr>
      <td><strong>${o.id}</strong><br><small style="color:#64748B;">${o.time || 'Today'}</small></td>
      <td><strong>${o.customer}</strong><br><small style="color:#64748B;">${o.address || ''}</small></td>
      <td><a href="tel:${o.phone}" style="color:#3B82F6; font-weight:700;">${o.phone}</a></td>
      <td style="max-width: 250px;">${o.items}</td>
      <td><strong style="color:#E65100; font-size:1rem;">₹${o.total}</strong><br><small>${o.payType || 'COD'}</small></td>
      <td>
        <select onchange="updateOrderStatus(${idx}, this.value)" style="padding:4px 8px; border-radius:4px; font-size:0.78rem;">
          <option value="New" ${o.status === 'New' ? 'selected' : ''}>New</option>
          <option value="Preparing" ${o.status === 'Preparing' ? 'selected' : ''}>Preparing</option>
          <option value="Out for Delivery" ${o.status === 'Out for Delivery' ? 'selected' : ''}>Out for Delivery</option>
          <option value="Completed" ${o.status === 'Completed' ? 'selected' : ''}>Completed</option>
        </select>
      </td>
      <td>
        <a href="https://wa.me/${o.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(o.customer)},%20this%20is%20Mukesh%20Misthan%20Bhandar%20regarding%20your%20order%20${o.id}." target="_blank" class="btn-sm-action" style="color:#10B981;">
          WhatsApp
        </a>
      </td>
    </tr>
  `).join("");
}

window.updateOrderStatus = function(orderIndex, newStatus) {
  const orders = JSON.parse(localStorage.getItem("mmb_orders") || "[]");
  if (orders[orderIndex]) {
    orders[orderIndex].status = newStatus;
    localStorage.setItem("mmb_orders", JSON.stringify(orders));
    showAdminToast(`Order ${orders[orderIndex].id} updated to ${newStatus}`);
  }
};

window.exportOrdersCSV = function() {
  const orders = JSON.parse(localStorage.getItem("mmb_orders") || "[]");
  if (orders.length === 0) {
    alert("No orders to export!");
    return;
  }

  let csv = "Order ID,Customer,Phone,Address,Items,Total,Payment,Status\n";
  orders.forEach(o => {
    csv += `"${o.id}","${o.customer}","${o.phone}","${o.address}","${o.items}",${o.total},"${o.payType}","${o.status}"\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", `MMB_Orders_${new Date().toISOString().slice(0, 10)}.csv`);
  a.click();
};

// ==========================================
// Settings Form
// ==========================================
function loadSettingsForm() {
  const cfg = JSON.parse(localStorage.getItem("mmb_settings") || "{}");
  if (cfg.waPhone) document.getElementById("cfgWaPhone").value = cfg.waPhone;
  if (cfg.callPhone) document.getElementById("cfgCallPhone").value = cfg.callPhone;
  if (cfg.freeDelivery) document.getElementById("cfgFreeDelivery").value = cfg.freeDelivery;
  if (cfg.deliveryFee) document.getElementById("cfgDeliveryFee").value = cfg.deliveryFee;
  if (cfg.announcement) document.getElementById("cfgAnnouncement").value = cfg.announcement;
}

window.saveStoreSettings = function(e) {
  e.preventDefault();
  const wa = document.getElementById("cfgWaPhone").value.trim();
  const call = document.getElementById("cfgCallPhone").value.trim();
  const free = document.getElementById("cfgFreeDelivery").value.trim();
  const fee = document.getElementById("cfgDeliveryFee").value.trim();
  const ann = document.getElementById("cfgAnnouncement").value.trim();
  const newPin = document.getElementById("cfgNewPin").value.trim();

  const cfg = {
    waPhone: wa,
    callPhone: call,
    freeDelivery: parseInt(free) || 499,
    deliveryFee: parseInt(fee) || 50,
    announcement: ann
  };

  localStorage.setItem("mmb_settings", JSON.stringify(cfg));

  if (newPin && newPin.length >= 4) {
    localStorage.setItem("mmb_admin_pin", newPin);
    showAdminToast("Settings & New PIN saved successfully!");
  } else {
    showAdminToast("Settings saved and applied to live website!");
  }
  return false;
};

// Toast
function showAdminToast(msg) {
  const container = document.getElementById("adminToast");
  if (!container) return;

  const t = document.createElement("div");
  t.className = "admin-toast";
  t.innerHTML = `<span>${msg}</span>`;
  container.appendChild(t);

  setTimeout(() => t.remove(), 3500);
}
