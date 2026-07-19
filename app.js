// --- TRIP DATABASE DATA ---
const legsData = [
  {
    id: "leg-paris",
    city: "Paris, France",
    days: "3 Days",
    dates: "Fri, 1 Oct – Sun, 3 Oct 2027",
    latlng: [48.8566, 2.3522],
    transit: "✈️ <strong>Outbound Flight:</strong> Thursday, 30 Sept from OR Tambo (JNB) landing at Paris (CDG) on 1 Oct.<br>✈️ <strong>Transit to Venice:</strong> Direct budget airline flight from Paris to Venice (VCE) on Monday, 4 Oct.",
    accommodation: "🏨 <strong>Self-Catering Apartment:</strong> Located near Gare de Lyon.<br>🔹 <em>Constraints:</em> Kitchen, in-unit washing machine, 2 separate sleeping spaces (Twin Room setup or bedroom + living room sleeper couch). Walkable to Gare de Lyon.",
    dining: {
      lunch: "🍴 <strong>L'As du Fallafel</strong> (Marais street food, famous for the best falafels in Paris) or <strong>Chez Alain Miam Miam</strong> (huge, delicious griddled sandwiches in the Marché des Enfants Rouges).",
      dinner: "🍷 <strong>Le Train Bleu</strong> (inside Gare de Lyon, stunning historic dining hall, perfect for a special meal) or <strong>Bouillon Julien</strong> (beautiful Art Nouveau bistro serving high-quality, budget-friendly French classics)."
    },
    sights: [
      "Eiffel Tower (Spectacular night viewing and light show)",
      "The Louvre Museum (Explore historical galleries)"
    ]
  },
  {
    id: "leg-venice",
    city: "Venice, Italy",
    days: "3 Days",
    dates: "Mon, 4 Oct – Wed, 6 Oct 2027",
    latlng: [45.4344, 12.3388],
    transit: "✈️ <strong>Arrival:</strong> Direct budget airline flight from Paris on Monday, 4 Oct.<br>🚄 <strong>Transit to Florence:</strong> High-speed train (Trenitalia or Italo) from Venezia Mestre to Firenze SMN on Thursday, 7 Oct.",
    accommodation: "🏨 <strong>Self-Catering Apartment:</strong> Target properties near Venezia Mestre station (saves cost, within easy walking distance to platform).<br>🔹 <em>Constraints:</em> Full kitchen, washing machine, 2 separate beds.",
    dining: {
      lunch: "🍴 <strong>Osteria al Squero</strong> (order Venice's famous small open-faced sandwiches 'Cicchetti' while watching gondolas built across the canal) or <strong>Cantina Do Spade</strong> (historic tavern serving delicious fried seafood cones).",
      dinner: "🍷 <strong>Trattoria Al Gazzettino</strong> (local Venetian cuisine, excellent seafood and squid ink pasta) or <strong>Osteria da Alberto</strong> (cozy local spot beloved by residents)."
    },
    sights: [
      "St. Mark's Basilica & St. Mark's Square",
      "Grand Canal water bus (vaporetto) scenic routes"
    ]
  },
  {
    id: "leg-florence",
    city: "Florence, Italy",
    days: "4 Days",
    dates: "Thu, 7 Oct – Sun, 10 Oct 2027",
    latlng: [43.7696, 11.2558],
    transit: "🚄 <strong>Arrival:</strong> High-speed train from Venice on Thursday, 7 Oct.<br>🚄 <strong>Transit to Rome:</strong> High-speed train (Trenitalia or Italo) from Firenze SMN to Roma Termini on Monday, 11 Oct.",
    accommodation: "🏨 <strong>Self-Catering Apartment:</strong> Located within walking distance of Firenze Santa Maria Novella (SMN) station.<br>🔹 <em>Constraints:</em> Kitchen, washing machine, 2 separate sleeping spaces.",
    dining: {
      lunch: "🍴 <strong>All'Antico Vinaio</strong> (world-famous warm flatbread sandwiches filled with local cold cuts - lines move fast!) or <strong>Mercato Centrale</strong> (upstairs food hall featuring delicious artisan pizza, pasta, and panigacci).",
      dinner: "🍷 <strong>Trattoria Za Za</strong> (traditional Tuscan ribollita soup, truffle pastas, and steaks) or <strong>Trattoria dall'Oste</strong> (specialist for authentic Florentine T-bone steak)."
    },
    sights: [
      "Michelangelo's David at the Accademia Gallery",
      "Leaning Tower of Pisa (Quick regional train day trip from Florence SMN)"
    ]
  },
  {
    id: "leg-rome",
    city: "Rome, Italy",
    days: "5 Days",
    dates: "Mon, 11 Oct – Fri, 15 Oct 2027",
    latlng: [41.9028, 12.4964],
    transit: "🚄 <strong>Arrival:</strong> High-speed train from Florence on Monday, 11 Oct.<br>🚄 <strong>Transit to Naples:</strong> High-speed train (Trenitalia or Italo) from Roma Termini to Napoli Centrale on Saturday, 16 Oct.",
    accommodation: "🏨 <strong>Self-Catering Apartment:</strong> Sized for siblings near Roma Termini station (minimizes bag hauling).<br>🔹 <em>Constraints:</em> Equipped kitchen, washing machine, twin layout/sleeper.",
    dining: {
      lunch: "🍴 <strong>Bonci Pizzarium</strong> (Rome's best gourmet pizza by the slice, topped with high-quality seasonal ingredients) or <strong>Da Enzo al 29</strong> (iconic, tiny Trastevere trattoria famous for Carbonara and fried artichokes).",
      dinner: "🍷 <strong>Osteria da Fortunata</strong> (watch local grandmas roll fresh pasta in the window, then enjoy hand-pulled strozzapreti cacio e pepe) or <strong>Cantina e Cucina</strong> (lively, hospitable spot for Roman pinsa and local wine)."
    },
    sights: [
      "The Colosseum & Roman Forum",
      "Sistine Chapel & Vatican Museums",
      "Papal Audience at the Vatican (Blocked off for Wednesday morning, 13 October)"
    ]
  },
  {
    id: "leg-naples",
    city: "Naples & Amalfi Coast",
    days: "5 Days",
    dates: "Sat, 16 Oct – Wed, 20 Oct 2027",
    latlng: [40.8518, 14.2681],
    transit: "🚄 <strong>Arrival:</strong> High-speed train from Rome on Saturday, 16 Oct.<br>✈️ <strong>Inbound Return Flight:</strong> Departing Naples (NAP) on Wednesday, 20 Oct arriving back at JNB.",
    accommodation: "🏨 <strong>Self-Catering Apartment:</strong> Apartment near Napoli Centrale.<br>🔹 <em>Constraints:</em> Fully functional kitchen, washing machine, 2 separate sleeping setups.",
    dining: {
      lunch: "🍴 <strong>L'Antica Pizzeria da Michele</strong> (legendary, historic pizzeria serving only classic Margherita and Marinara wood-fired pizzas since 1870) or <strong>Gino Sorbillo</strong> (renowned Neapolitan pizza on Via dei Tribunali).",
      dinner: "🍷 <strong>Trattoria da Nennella</strong> (lively Spanish Quarters spot where staff sing and joke, famous for cheap pasta e patate with provola) or <strong>Osteria Il Gobbetto</strong> (cozy spot for fresh local seafood)."
    },
    sights: [
      "Pompeii Ruins (Full-day regional train trip from Napoli Centrale)",
      "Scenic ferry day-trip routes out to Capri or Positano / Amalfi"
    ]
  }
];

// --- BOOKING CALENDAR DATABASE ---
const bookingItems = [
  {
    id: "book-int-flight",
    desc: "International Flights (JNB to CDG, NAP to JNB)",
    category: "flight",
    windowText: "11 Months Prior",
    openDate: "2026-11-01"
  },
  {
    id: "book-paris-flight",
    desc: "Paris (CDG) to Venice (VCE) Budget Flight",
    category: "flight",
    windowText: "8 Months Prior",
    openDate: "2027-02-04"
  },
  {
    id: "book-train-ven-flo",
    desc: "High-Speed Train: Venice to Florence",
    category: "transit",
    windowText: "4 Months Prior",
    openDate: "2027-06-07"
  },
  {
    id: "book-train-flo-rom",
    desc: "High-Speed Train: Florence to Rome",
    category: "transit",
    windowText: "4 Months Prior",
    openDate: "2027-06-11"
  },
  {
    id: "book-train-rom-nap",
    desc: "High-Speed Train: Rome to Naples",
    category: "transit",
    windowText: "4 Months Prior",
    openDate: "2027-06-16"
  },
  {
    id: "book-louvre",
    desc: "Louvre Museum Tickets (Paris)",
    category: "sight",
    windowText: "3 Months Prior",
    openDate: "2027-07-02"
  },
  {
    id: "book-accademia",
    desc: "Accademia Gallery Tickets (Florence - David)",
    category: "sight",
    windowText: "3 Months Prior",
    openDate: "2027-07-08"
  },
  {
    id: "book-vatican",
    desc: "Vatican Museums & Sistine Chapel Tickets",
    category: "sight",
    windowText: "60 Days Prior",
    openDate: "2027-08-12"
  },
  {
    id: "book-papal",
    desc: "Papal Audience Ticket Requests (Rome)",
    category: "sight",
    windowText: "6 Months Prior",
    openDate: "2027-04-13"
  }
];

// --- APP STATE INITIALIZATION ---
let map = null;
let markers = [];
let routePolyline;
let activeLegId = null;

const defaultExpenses = [
  { desc: "Flights JNB to CDG / NAP to JNB", amount: 24500, paidBy: "Brother 1", category: "Flights", date: "2026-06-15" },
  { desc: "Paris Self-Catering Airbnb Deposit", amount: 6200, paidBy: "Brother 2", category: "Accommodation", date: "2026-06-18" },
  { desc: "Louvre Advanced Group Tickets", amount: 980, paidBy: "Brother 1", category: "Sights", date: "2026-06-20" }
];

let expenses = JSON.parse(localStorage.getItem("trip_expenses")) || defaultExpenses;
let bookingStates = JSON.parse(localStorage.getItem("booking_states")) || {};

const customSystemDate = new Date("2026-06-21T19:48:08");

// --- INITIALIZE ON LOAD ---
document.addEventListener("DOMContentLoaded", () => {
  const badge = document.getElementById("system-date-badge");
  if (badge) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    badge.textContent = customSystemDate.toLocaleDateString('en-US', options);
  }

  // Attempt to load functions safely
  try { initMap(); } catch(e) { console.log("Map layout waiting for app entry."); }
  try { renderItineraryTimeline(); } catch(e) { console.log("Timeline layout waiting."); }
  try { renderBookingCalendar(); } catch(e) { console.log("Calendar waiting."); }
  try { renderExpenseSplitter(); } catch(e) { console.log("Expenses waiting."); }
  
  if (typeof renderDiningSection === 'function') {
    renderDiningSection();
  }
  
  startBackgroundSlideshow();
  runTripCountdown();
});

// --- LANDING PAGE ENTER ---
window.enterApp = function() {
  console.log("Button clicked safely!");

  const landingPage = document.getElementById("landing-page");
  if (landingPage) {
    landingPage.style.display = "none";
  }

  const mainApp = document.getElementById("main-app-container");
  if (mainApp) {
    mainApp.style.display = "flex";
  }

  // Now that the dashboard is visible, render structural elements properly
  try {
    if (!map) {
      initMap();
    } else {
      map.invalidateSize();
    }
    renderItineraryTimeline();
  } catch (e) {
    console.error("Error setting up maps on application entry:", e);
  }

  if (typeof switchTab === 'function') {
    switchTab('tab-cities');
  }
};

// --- LANDING COUNTDOWN ---
function runTripCountdown() {
  const targetDate = new Date("October 1, 2027 00:00:00").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const daysElement = document.getElementById("countdown-days");
    if (!daysElement) return;

    if (difference <= 0) {
      daysElement.innerText = "0";
      clearInterval(timerInterval);
      return;
    }

    const totalDaysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
    daysElement.innerText = totalDaysRemaining;
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

// --- BACKGROUND SLIDESHOW ANIMATION ---
function startBackgroundSlideshow() {
  const slides = document.querySelectorAll('.bg-slide');
  if (slides.length === 0) return;
  
  let currentSlideIndex = 0;
  setInterval(() => {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
  }, 4000);
}

// --- TAB SWITCHER LOGIC ---
window.switchTab = function(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
  
  const targetTab = document.getElementById(tabId);
  if (targetTab) targetTab.classList.add("active");
  
  if (tabId === "tab-cities") {
    const btn = document.getElementById("btn-cities");
    if (btn) btn.classList.add("active");
    document.getElementById("current-view-title").textContent = "5 Cities Itinerary";
    document.getElementById("current-view-subtitle").textContent = "Overview of our 20-day sibling journey.";
  } else if (tabId === "tab-map") {
    const btn = document.getElementById("btn-map");
    if (btn) btn.classList.add("active");
    document.getElementById("current-view-title").textContent = "Interactive Map & Route";
    document.getElementById("current-view-subtitle").textContent = "Explore our linear European route and legs.";
    if (map) setTimeout(() => { map.invalidateSize(); }, 150);
  } else if (tabId === "tab-calendar") {
    const btn = document.getElementById("btn-calendar");
    if (btn) btn.classList.add("active");
    document.getElementById("current-view-title").textContent = "Booking Calendars";
    document.getElementById("current-view-subtitle").textContent = "Keep track of active and upcoming advance booking windows.";
  } else if (tabId === "tab-meals") {
    const btn = document.getElementById("btn-meals");
    if (btn) btn.classList.add("active");
    document.getElementById("current-view-title").textContent = "Dining Recommendations";
    document.getElementById("current-view-subtitle").textContent = "Recommended local lunch spots and dinner restaurants for each city.";
  } else if (tabId === "tab-expenses") {
    const btn = document.getElementById("btn-expenses");
    if (btn) btn.classList.add("active");
    document.getElementById("current-view-title").textContent = "Expense Splitter";
    document.getElementById("current-view-subtitle").textContent = "Track joint vacation costs and calculate splits.";
  }
};

window.selectCityFromHome = function(legId) {
  switchTab('tab-map');
  selectLeg(legId);
};

// --- MAP MODULE ---
function initMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  if (typeof L === 'undefined') {
    console.log("Leaflet map library not loaded yet.");
    return;
  }

  map = L.map("map", {
    center: [44.8, 11.5],
    zoom: 5,
    zoomControl: true,
    attributionControl: false
  });
  
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(map);
  
  const routePoints = [];
  markers = [];
  
  legsData.forEach((leg, index) => {
    routePoints.push(leg.latlng);
    
    const marker = L.marker(leg.latlng)
      .addTo(map)
      .bindPopup(`
        <div class="map-popup-header">Leg ${index + 1}: ${leg.city}</div>
        <div class="map-popup-text">
          <strong>Dates:</strong> ${leg.dates}<br>
          <strong>Sights:</strong> ${leg.sights.join(', ')}
        </div>
      `);
      
    markers.push({ id: leg.id, marker: marker, latlng: leg.latlng });
    
    marker.on('click', () => {
      selectLeg(leg.id);
    });
  });
  
  routePolyline = L.polyline(routePoints, {
    color: '#f97316',
    weight: 3,
    dashArray: '8, 8',
    opacity: 0.8
  }).addTo(map);
  
  map.fitBounds(routePolyline.getBounds(), { padding: [40, 40] });
}

function renderItineraryTimeline() {
  const container = document.getElementById("legs-timeline");
  if (!container) return;
  container.innerHTML = "";
  
  legsData.forEach((leg, index) => {
    const legEl = document.createElement("div");
    legEl.className = `leg-item ${activeLegId === leg.id ? 'active' : ''}`;
    legEl.id = `timeline-${leg.id}`;
    legEl.onclick = () => selectLeg(leg.id);
    
    legEl.innerHTML = `
      <div class="leg-item-header">
        <span class="leg-title">Leg ${index + 1}: ${leg.city}</span>
        <span class="leg-days">${leg.days}</span>
      </div>
      <div class="leg-dates-label">${leg.dates}</div>
    `;
    
    container.appendChild(legEl);
  });
}

window.selectLeg = function(legId) {
  activeLegId = legId;
  
  document.querySelectorAll(".leg-item").forEach(item => item.classList.remove("active"));
  const activeTimelineItem = document.getElementById(`timeline-${legId}`);
  if (activeTimelineItem) activeTimelineItem.classList.add("active");
  
  const leg = legsData.find(l => l.id === legId);
  if (!leg) return;
  
  const detailsContainer = document.getElementById("leg-detail-card");
  if (!detailsContainer) return;
  
  let sightsHtml = "";
  leg.sights.forEach(sight => {
    sightsHtml += `<li>${sight}</li>`;
  });
  
  detailsContainer.innerHTML = `
    <div class="detail-card-content">
      <h4>📍 ${leg.city} Details</h4>
      <div class="detail-section">
        <h5>📅 Dates & Duration</h5>
        <p>${leg.dates} (${leg.days})</p>
      </div>
      <div class="detail-section">
        <h5>✈️ Transit & Logistics</h5>
        <p>${leg.transit}</p>
      </div>
      <div class="detail-section">
        <h5>🛏️ Sibling Accommodation</h5>
        <p>${leg.accommodation}</p>
      </div>
      <div class="detail-section">
        <h5>🍕 Dining Recommendations</h5>
        <p>${leg.dining.lunch}</p>
        <p style="margin-top: 6px;">${leg.dining.dinner}</p>
      </div>
      <div class="detail-section">
        <h5>🏛️ Core Highlights</h5>
        <ul class="highlight-list">
          ${sightsHtml}
        </ul>
      </div>
    </div>
  `;
  
  const markerObj = markers.find(m => m.id === legId);
  if (markerObj && map) {
    map.setView(markerObj.latlng, 7, { animate: true, duration: 0.8 });
    markerObj.marker.openPopup();
  }
};

// --- BOOKING CALENDAR MODULE ---
function renderBookingCalendar() {
  const body = document.getElementById("booking-table-body");
  if (!body) return;
  body.innerHTML = "";
  
  let completedCount = 0;
  let pendingCount = 0;
  
  bookingItems.forEach(item => {
    const isBooked = bookingStates[item.id] || false;
    const openDate = new Date(item.openDate);
    
    const timeDiff = openDate.getTime() - customSystemDate.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    let statusClass = "future";
    let statusBadgeText = "";
    
    if (isBooked) {
      statusClass = "completed";
      statusBadgeText = "✅ Booked";
      completedCount++;
    } else {
      pendingCount++;
      if (diffDays <= 0) {
        statusClass = "urgent";
        statusBadgeText = `🚨 Window Active (Open ${Math.abs(diffDays)}d)`;
      } else if (diffDays <= 30) {
        statusClass = "soon";
        statusBadgeText = `⏳ Opens in ${diffDays} days`;
      } else {
        statusClass = "future";
        statusBadgeText = `📅 Opens in ${diffDays} days`;
      }
    }
    
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="td-item-title">${item.desc}</td>
      <td><span class="category-pill ${item.category}">${item.category.toUpperCase()}</span></td>
      <td>${item.windowText}</td>
      <td>${openDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
      <td>
        <span class="status-indicator ${statusClass}">
          <span class="status-dot"></span>
          ${statusBadgeText}
        </span>
      </td>
      <td>
        <button class="checkbox-btn ${isBooked ? 'checked' : ''}" onclick="toggleBookingState('${item.id}')">
          ${isBooked ? 'Unmark' : 'Mark Booked'}
        </button>
      </td>
    `;
    body.appendChild(row);
  });
  
  document.getElementById("booking-completed-count").textContent = completedCount;
  document.getElementById("booking-pending-count").textContent = pendingCount;
}

window.toggleBookingState = function(itemId) {
  bookingStates[itemId] = !bookingStates[itemId];
  localStorage.setItem("booking_states", JSON.stringify(bookingStates));
  renderBookingCalendar();
};

// --- EXPENSE SPLITTER MODULE ---
function renderExpenseSplitter() {
  const list = document.getElementById("expense-ledger-list");
  if (!list) return;
  list.innerHTML = "";
  
  expenses.forEach((exp, index) => {
    const item = document.createElement("li");
    item.className = "ledger-item-row";
    
    let catIcon = "💰";
    if (exp.category === "Accommodation") catIcon = "🛏️";
    else if (exp.category === "Transit" || exp.category === "Flights") catIcon = "✈️";
    else if (exp.category === "Food") catIcon = "🍕";
    else if (exp.category === "Sights") catIcon = "🏛️";
    
    item.innerHTML = `
      <div class="ledger-item-left">
        <div class="category-icon">${catIcon}</div>
        <div class="ledger-item-info">
          <h4>${exp.desc}</h4>
          <p>${exp.paidBy} paid | ${exp.category}</p>
        </div>
      </div>
      <div class="ledger-item-right">
        <span class="ledger-amount">R ${exp.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
        <button class="delete-expense-btn" onclick="deleteExpense(${index})" title="Delete expense">✕</button>
      </div>
    `;
    list.appendChild(item);
  });
  
  updateExpenseStats();
}

function updateExpenseStats() {
  let total = 0;
  let p1Paid = 0;
  let p2Paid = 0;
  
  expenses.forEach(exp => {
    const amt = parseFloat(exp.amount) || 0;
    total += amt;
    if (exp.paidBy === "Brother 1") {
      p1Paid += amt;
    } else {
      p2Paid += amt;
    }
  });
  
  const totalSpentEl = document.getElementById("exp-total-spent");
  const p1PaidEl = document.getElementById("exp-p1-paid");
  const p2PaidEl = document.getElementById("exp-p2-paid");

  if (totalSpentEl) totalSpentEl.textContent = `R ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (p1PaidEl) p1PaidEl.textContent = `R ${p1Paid.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (p2PaidEl) p2PaidEl.textContent = `R ${p2Paid.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  
  const settlementCard = document.getElementById("settlement-card");
  const settlementEl = document.getElementById("exp-settlement");
  
  if (!settlementEl) return;

  if (total === 0) {
    settlementEl.textContent = "Settle Up (R 0.00)";
    if (settlementCard) settlementCard.className = "exp-summary-card accent";
    return;
  }
  
  const halfShare = total / 2;
  
  if (p1Paid === p2Paid) {
    settlementEl.textContent = "Perfectly Split!";
    if (settlementCard) settlementCard.className = "exp-summary-card accent-owed";
  } else if (p1Paid > halfShare) {
    const diff = p1Paid - halfShare;
    settlementEl.textContent = `Brother owes you R ${diff.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (settlementCard) settlementCard.className = "exp-summary-card accent-owed";
  } else {
    const diff = p2Paid - halfShare;
    settlementEl.textContent = `You owe Brother R ${diff.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    if (settlementCard) settlementCard.className = "exp-summary-card accent";
  }
}

window.handleExpenseSubmit = function(event) {
  event.preventDefault();
  
  const desc = document.getElementById("exp-desc").value.trim();
  const amount = parseFloat(document.getElementById("exp-amount").value);
  const paidBy = document.getElementById("exp-paid-by").value;
  const category = document.getElementById("exp-category").value;
  
  if (!desc || isNaN(amount) || amount <= 0) return;
  
  const newExpense = {
    desc: desc,
    amount: amount,
    paidBy: paidBy,
    category: category,
    date: new Date().toISOString().split('T')[0]
  };
  
  expenses.push(newExpense);
  localStorage.setItem("trip_expenses", JSON.stringify(expenses));
  
  const form = document.getElementById("add-expense-form");
  if (form) form.reset();
  
  renderExpenseSplitter();
};

window.deleteExpense = function(index) {
  expenses.splice(index, 1);
  localStorage.setItem("trip_expenses", JSON.stringify(expenses));
  renderExpenseSplitter();
};

window.clearExpenses = function() {
  if (confirm("Are you sure you want to clear the entire expense ledger?")) {
    expenses = [];
    localStorage.removeItem("trip_expenses");
    renderExpenseSplitter();
  }
};
