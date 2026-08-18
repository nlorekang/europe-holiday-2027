// --- TRIP DATABASE DATA ---
const legsData = [
  {
    id: "leg-paris",
    city: "Paris, France",
    days: "4 Days",
    dates: "Sun, 19 Sep – Wed, 22 Sep 2027",
    latlng: [48.8566, 2.3522],
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    transit: "✈️ <strong>Outbound Flight:</strong> Saturday, 18 Sept from OR Tambo (JNB) landing at Paris (CDG) on 19 Sep.<br>✈️ <strong>Transit to Venice:</strong> Direct budget airline flight from Paris to Venice (VCE) on Thursday, 23 Sep.",
    accommodation: "🏨 <strong>Self-Catering Apartment:</strong> Located near Gare de Lyon.<br>🔹 <em>Constraints:</em> Kitchen, in-unit washing machine, 2 separate sleeping spaces (Twin Room setup or bedroom + living room sleeper couch). Walkable to Gare de Lyon.",
    dining: {
      lunch: "🍴 <strong>L'As du Fallafel</strong> (Marais street food, famous for the best falafels in Paris) or <strong>Chez Alain Miam Miam</strong> (huge, delicious griddled sandwiches in the Marché des Enfants Rouges).",
      dinner: "🍷 <strong>Le Train Bleu</strong> (inside Gare de Lyon, stunning historic dining hall, perfect for a special meal) or <strong>Bouillon Julien</strong> (beautiful Art Nouveau bistro serving high-quality, budget-friendly French classics).",
      market: "<strong>Marché d'Aligre</strong> (12th arr., open Tue–Sun mornings, one of Paris's best-value fresh markets) for produce, cheese and charcuterie; a <strong>Franprix or Monoprix</strong> for pantry basics.",
      prepIdea: "Grab a fresh baguette, rotisserie chicken, and a wedge of cheese from the market for an easy no-cook lunch back at the apartment."
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
    dates: "Thu, 23 Sep – Sat, 25 Sep 2027",
    latlng: [45.4344, 12.3388],
    heroImage: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=800&q=80",
    transit: "✈️ <strong>Arrival:</strong> Direct budget airline flight from Paris on Thursday, 23 Sep.<br>🚄 <strong>Transit to Florence:</strong> High-speed train (Trenitalia or Italo) from Venezia Mestre to Firenze SMN on Sunday, 26 Sep.",
    accommodation: "🏨 <strong>Self-Catering Apartment:</strong> Target properties near Venezia Mestre station (saves cost, within easy walking distance to platform).<br>🔹 <em>Constraints:</em> Full kitchen, washing machine, 2 separate beds.",
    dining: {
      lunch: "🍴 <strong>Osteria al Squero</strong> (order Venice's famous small open-faced sandwiches 'Cicchetti' while watching gondolas built across the canal) or <strong>Cantina Do Spade</strong> (historic tavern serving delicious fried seafood cones).",
      dinner: "🍷 <strong>Trattoria Al Gazzettino</strong> (local Venetian cuisine, excellent seafood and squid ink pasta) or <strong>Osteria da Alberto</strong> (cozy local spot beloved by residents).",
      market: "<strong>Rialto Market</strong> (Mercato di Rialto) — the fish hall runs Tue–Sat, 7:30am–12pm; the fruit & veg stalls run Mon–Sat from 7:30am. Go early for the best selection.",
      prepIdea: "Pick up fresh fish or seasonal vegetables from the Erberia stalls and do a simple pan-fried dinner at the apartment — the quality is hard to beat."
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
    dates: "Sun, 26 Sep – Wed, 29 Sep 2027",
    latlng: [43.7696, 11.2558],
    heroImage: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?auto=format&fit=crop&w=800&q=80",
    transit: "🚄 <strong>Arrival:</strong> High-speed train from Venice on Sunday, 26 Sep.<br>🚄 <strong>Transit to Naples:</strong> High-speed train (Trenitalia or Italo) from Firenze SMN to Napoli Centrale on Thursday, 30 Sep.",
    accommodation: "🏨 <strong>Self-Catering Apartment:</strong> Located within walking distance of Firenze Santa Maria Novella (SMN) station.<br>🔹 <em>Constraints:</em> Kitchen, washing machine, 2 separate sleeping spaces.",
    dining: {
      lunch: "🍴 <strong>All'Antico Vinaio</strong> (world-famous warm flatbread sandwiches filled with local cold cuts - lines move fast!) or <strong>Mercato Centrale</strong> (upstairs food hall featuring delicious artisan pizza, pasta, and panigacci).",
      dinner: "🍷 <strong>Trattoria Za Za</strong> (traditional Tuscan ribollita soup, truffle pastas, and steaks) or <strong>Trattoria dall'Oste</strong> (specialist for authentic Florentine T-bone steak).",
      market: "<strong>Mercato di Sant'Ambrogio</strong> (Mon–Sat, 7am–2pm, closed Sunday) — Florence's local market, less touristy than Mercato Centrale, great for pecorino, cured meats, and seasonal produce.",
      prepIdea: "Build a simple Tuscan antipasto lunch: pecorino, prosciutto, fresh artichokes and good bread from the market stalls."
    },
    sights: [
      "Michelangelo's David at the Accademia Gallery",
      "Leaning Tower of Pisa (Quick regional train day trip from Florence SMN)"
    ]
  },
  {
    id: "leg-naples",
    city: "Naples & Amalfi Coast",
    days: "5 Days",
    dates: "Thu, 30 Sep – Mon, 04 Oct 2027",
    latlng: [40.8518, 14.2681],
    heroImage: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80",
    transit: "🚄 <strong>Arrival:</strong> High-speed train from Florence on Thursday, 30 Sep.<br>🚄 <strong>Transit to Rome:</strong> High-speed train (Trenitalia or Italo) from Napoli Centrale to Roma Termini on Tuesday, 5 Oct.",
    accommodation: "🏨 <strong>Self-Catering Apartment:</strong> Apartment near Napoli Centrale.<br>🔹 <em>Constraints:</em> Fully functional kitchen, washing machine, 2 separate sleeping setups.",
    dining: {
      lunch: "🍴 <strong>L'Antica Pizzeria da Michele</strong> (legendary, historic pizzeria serving only classic Margherita and Marinara wood-fired pizzas since 1870) or <strong>Gino Sorbillo</strong> (renowned Neapolitan pizza on Via dei Tribunali).",
      dinner: "🍷 <strong>Trattoria da Nennella</strong> (lively Spanish Quarters spot where staff sing and joke, famous for cheap pasta e patate with provola) or <strong>Osteria Il Gobbetto</strong> (cozy spot for fresh local seafood).",
      market: "<strong>Mercato della Pignasecca</strong> (open daily, 9am–7pm) — Naples' oldest and most characteristic market, good for fresh mozzarella, tomatoes, seafood and produce.",
      prepIdea: "A classic Caprese-style lunch: fresh buffalo mozzarella, ripe tomatoes and basil from the market, drizzled with good olive oil — no cooking required."
    },
    sights: [
      "Pompeii Ruins (Full-day regional train trip from Napoli Centrale)",
      "Scenic ferry day-trip routes out to Capri or Positano / Amalfi"
    ]
  },
  {
    id: "leg-rome",
    city: "Rome, Italy",
    days: "4 Days",
    dates: "Tue, 05 Oct – Fri, 08 Oct 2027",
    latlng: [41.9028, 12.4964],
    heroImage: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    transit: "🚄 <strong>Arrival:</strong> High-speed train from Naples on Tuesday, 5 Oct.<br>✈️ <strong>Inbound Return Flight:</strong> Departing Rome (FCO) on Friday, 8 Oct arriving back at JNB.",
    accommodation: "🏨 <strong>Self-Catering Apartment:</strong> Sized for siblings near Roma Termini station (minimizes bag hauling).<br>🔹 <em>Constraints:</em> Equipped kitchen, washing machine, twin layout/sleeper.",
    dining: {
      lunch: "🍴 <strong>Bonci Pizzarium</strong> (Rome's best gourmet pizza by the slice, topped with high-quality seasonal ingredients) or <strong>Da Enzo al 29</strong> (iconic, tiny Trastevere trattoria famous for Carbonara and fried artichokes).",
      dinner: "🍷 <strong>Osteria da Fortunata</strong> (watch local grandmas roll fresh pasta in the window, then enjoy hand-pulled strozzapreti cacio e pepe) or <strong>Cantina e Cucina</strong> (lively, hospitable spot for Roman pinsa and local wine).",
      market: "<strong>Mercato Testaccio</strong> (Mon–Sat, 7am–3:30pm, closed Sunday) — a genuinely local food market with fresh produce, meats and cheeses, plus excellent street-food stalls if you'd rather eat there.",
      prepIdea: "Grab fresh pasta, market vegetables, and good olive oil for a quick home-cooked lunch — or just eat straight from the stalls (Mordi e Vai is a local favourite)."
    },
    sights: [
      "The Colosseum & Roman Forum",
      "Sistine Chapel & Vatican Museums",
      "Papal Audience at the Vatican (Blocked off for Wednesday morning, 6 October)"
    ]
  }
];

// --- BOOKING CALENDAR DATABASE ---
const bookingItems = [
  {
    id: "book-int-flight",
    desc: "International Flights (JNB to CDG, FCO to JNB)",
    category: "flight",
    windowText: "11 Months Prior",
    openDate: "2026-10-20"
  },
  {
    id: "book-paris-flight",
    desc: "Paris (CDG) to Venice (VCE) Budget Flight",
    category: "flight",
    windowText: "8 Months Prior",
    openDate: "2027-01-24"
  },
  {
    id: "book-train-ven-flo",
    desc: "High-Speed Train: Venice to Florence",
    category: "transit",
    windowText: "4 Months Prior",
    openDate: "2027-05-27"
  },
  {
    id: "book-train-flo-rom",
    desc: "High-Speed Train: Florence to Naples",
    category: "transit",
    windowText: "4 Months Prior",
    openDate: "2027-06-11"
  },
  {
    id: "book-train-rom-nap",
    desc: "High-Speed Train: Naples to Rome",
    category: "transit",
    windowText: "4 Months Prior",
    openDate: "2027-06-16"
  },
  {
    id: "book-louvre",
    desc: "Louvre Museum Tickets (Paris)",
    category: "sight",
    windowText: "3 Months Prior",
    openDate: "2027-06-20"
  },
  {
    id: "book-accademia",
    desc: "Accademia Gallery Tickets (Florence - David)",
    category: "sight",
    windowText: "3 Months Prior",
    openDate: "2027-06-27"
  },
  {
    id: "book-vatican",
    desc: "Vatican Museums & Sistine Chapel Tickets",
    category: "sight",
    windowText: "60 Days Prior",
    openDate: "2027-08-06"
  },
  {
    id: "book-papal",
    desc: "Papal Audience Ticket Requests (Rome)",
    category: "sight",
    windowText: "6 Months Prior",
    openDate: "2027-04-06"
  }
];

// --- APP STATE INITIALIZATION ---
let map = null;
let markers = [];
let routePolyline;
let activeLegId = null;

const defaultExpenses = [];

let expenses = JSON.parse(localStorage.getItem("trip_expenses")) || defaultExpenses;
let bookingStates = JSON.parse(localStorage.getItem("booking_states")) || {};
let contributions = JSON.parse(localStorage.getItem("trip_contributions")) || { nthabi: 70000, kevin: 43000 };

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

  const contribNthabiEl = document.getElementById("contrib-nthabi");
  const contribKevinEl = document.getElementById("contrib-kevin");
  if (contribNthabiEl) contribNthabiEl.value = contributions.nthabi;
  if (contribKevinEl) contribKevinEl.value = contributions.kevin;

  try {
    fetchExchangeRate();
    setInterval(fetchExchangeRate, 1000 * 60 * 60); // refresh once an hour
  } catch(e) { console.log("Exchange rate ticker waiting."); }
  
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
// --- LANDING COUNTDOWN ---
function runTripCountdown() {
  function updateTimer() {
    const now = new Date();
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const targetMidnight = new Date(2027, 8, 19); // month is 0-indexed: 8 = September

    const daysElement = document.getElementById("countdown-days");
    if (!daysElement) return;

    const msPerDay = 1000 * 60 * 60 * 24;
    const totalDaysRemaining = Math.round((targetMidnight - todayMidnight) / msPerDay);

    if (totalDaysRemaining <= 0) {
      daysElement.innerText = "0";
      clearInterval(timerInterval);
      return;
    }

    daysElement.innerText = totalDaysRemaining;
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000 * 60 * 60); // just needs to refresh once an hour, not every second
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
      <td class="td-item-title" data-label="Item">${item.desc}</td>
      <td data-label="Category"><span class="category-pill ${item.category}">${item.category.toUpperCase()}</span></td>
      <td data-label="Booking Window">${item.windowText}</td>
      <td data-label="Booking Date">${openDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
      <td data-label="Status">
        <span class="status-indicator ${statusClass}">
          <span class="status-dot"></span>
          ${statusBadgeText}
        </span>
      </td>
      <td data-label="Action">
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

// --- DINING / MEALS MODULE ---
function renderDiningSection() {
  const picker = document.getElementById("meals-city-picker");
  if (!picker) return;

  picker.innerHTML = "";
  legsData.forEach((leg, index) => {
    const btn = document.createElement("button");
    btn.className = "city-pill-btn" + (index === 0 ? " active" : "");
    btn.id = `meal-pill-${leg.id}`;
    btn.onclick = () => selectMealCity(leg.id);
    btn.innerHTML = `<span>${leg.city}</span><span>${leg.days}</span>`;
    picker.appendChild(btn);
  });

  selectMealCity(legsData[0].id);
}

window.selectMealCity = function(legId) {
  document.querySelectorAll(".city-pill-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`meal-pill-${legId}`);
  if (activeBtn) activeBtn.classList.add("active");

  const leg = legsData.find(l => l.id === legId);
  const pane = document.getElementById("meals-details-pane");
  if (!leg || !pane) return;

  pane.innerHTML = `
    <div class="meals-pane-header">
      <h3>${leg.city}</h3>
      <p>Recommended lunch and dinner spots for this leg of the trip.</p>
    </div>
    <div class="meal-block-grid">
      <div class="meal-card" style="background-image: linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.9) 100%), url('${leg.heroImage}'); background-size: cover; background-position: center;">
        <div class="meal-card-header">
          <span class="meal-type">Lunch</span>
          <span class="meal-time">Midday</span>
        </div>
        <p>${leg.dining.lunch}</p>
        <div class="market-highlights">
          <span class="market-label">Prefer to cook? Shop at:</span>
          <ul class="market-list">
            <li>${leg.dining.market}</li>
            <li>${leg.dining.prepIdea}</li>
          </ul>
        </div>
      </div>
      <div class="meal-card" style="background-image: linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.9) 100%), url('${leg.heroImage}'); background-size: cover; background-position: center;">
        <div class="meal-card-header">
          <span class="meal-type">Dinner</span>
          <span class="meal-time">Evening</span>
        </div>
        <p>${leg.dining.dinner}</p>
      </div>
    </div>
  `;
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

    const dateLabel = exp.date
      ? new Date(exp.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      : "";
    
    item.innerHTML = `
      <div class="ledger-item-left">
        <div class="category-icon">${catIcon}</div>
        <div class="ledger-item-info">
          <h4>${exp.desc}</h4>
          <p>${exp.category}${dateLabel ? " | " + dateLabel : ""}</p>
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
  expenses.forEach(exp => {
    total += parseFloat(exp.amount) || 0;
  });

  const nthabiAmt = parseFloat(contributions.nthabi) || 0;
  const kevinAmt = parseFloat(contributions.kevin) || 0;
  const pool = nthabiAmt + kevinAmt;
  const remaining = pool - total;
  const balance = nthabiAmt - kevinAmt; // positive = Kevin owes Nthabi to equalize contributions

  const fmt = (n) => `R ${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const totalSpentEl = document.getElementById("exp-total-spent");
  const p1PaidEl = document.getElementById("exp-p1-paid");
  const p2PaidEl = document.getElementById("exp-p2-paid");
  const remainingEl = document.getElementById("exp-remaining");

  if (totalSpentEl) totalSpentEl.textContent = fmt(total);
  if (p1PaidEl) p1PaidEl.textContent = fmt(nthabiAmt);
  if (p2PaidEl) p2PaidEl.textContent = fmt(kevinAmt);
  if (remainingEl) {
    remainingEl.textContent = remaining >= 0 ? fmt(remaining) : `-${fmt(Math.abs(remaining))}`;
    remainingEl.style.color = remaining >= 0 ? "" : "var(--accent-rose)";
  }

  const settlementCard = document.getElementById("settlement-card");
  const settlementEl = document.getElementById("exp-settlement");
  if (!settlementEl) return;

  if (balance === 0) {
    settlementEl.textContent = "Even";
    if (settlementCard) settlementCard.className = "exp-summary-card accent-owed";
  } else if (balance > 0) {
    settlementEl.textContent = `Kevin owes Nthabi ${fmt(balance)}`;
    if (settlementCard) settlementCard.className = "exp-summary-card accent-owed";
  } else {
    settlementEl.textContent = `Nthabi owes Kevin ${fmt(Math.abs(balance))}`;
    if (settlementCard) settlementCard.className = "exp-summary-card accent";
  }
}

window.handleContributionsSubmit = function(event) {
  event.preventDefault();
  const nthabiVal = parseFloat(document.getElementById("contrib-nthabi").value);
  const kevinVal = parseFloat(document.getElementById("contrib-kevin").value);

  if (isNaN(nthabiVal) || isNaN(kevinVal) || nthabiVal < 0 || kevinVal < 0) return;

  contributions = { nthabi: nthabiVal, kevin: kevinVal };
  localStorage.setItem("trip_contributions", JSON.stringify(contributions));
  updateExpenseStats();
};

window.handleExpenseSubmit = function(event) {
  event.preventDefault();
  
  const desc = document.getElementById("exp-desc").value.trim();
  const amount = parseFloat(document.getElementById("exp-amount").value);
  const category = document.getElementById("exp-category").value;
  
  if (!desc || isNaN(amount) || amount <= 0) return;
  
  const newExpense = {
    desc: desc,
    amount: amount,
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

// --- LIVE EXCHANGE RATE TICKER (ZAR -> EUR) ---
// Uses Frankfurter (European Central Bank data), a free, keyless, CORS-enabled API.
window.fetchExchangeRate = function() {
  const valueEl = document.getElementById("exchange-rate-value");
  const updatedEl = document.getElementById("exchange-rate-updated");
  if (!valueEl) return;

  valueEl.textContent = "Loading…";

  fetch("https://api.frankfurter.dev/v1/latest?base=ZAR&symbols=EUR")
    .then((res) => {
      if (!res.ok) throw new Error("Rate request failed");
      return res.json();
    })
    .then((data) => {
      const rate = data && data.rates && data.rates.EUR;
      if (!rate) throw new Error("Unexpected response");

      const eurPerRand = rate;
      const randPerEur = 1 / rate;

      valueEl.textContent = `R 1 = €${eurPerRand.toFixed(4)}  |  €1 = R ${randPerEur.toFixed(2)}`;

      if (updatedEl) {
        const now = new Date();
        updatedEl.textContent = `Updated ${now.toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' })}`;
      }
    })
    .catch(() => {
      valueEl.textContent = "Rate unavailable — check connection";
      if (updatedEl) updatedEl.textContent = "";
    });
};