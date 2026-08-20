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

let expenses = [];
let bookingStates = {};
let contributions = { nthabi: 70000, kevin: 43000 };

const customSystemDate = new Date("2026-06-21T19:48:08");

// --- FIRESTORE SYNC (shared data between Nthabi's and Kevin's devices) ---
// Everything lives in one document, trip/shared. Firestore pushes live
// updates to every open tab/device via onSnapshot, so the ledger and
// booking checkmarks stay in sync without anyone refreshing.
const tripDocRef = db.collection("trip").doc("shared");

tripDocRef.onSnapshot((docSnap) => {
  if (docSnap.exists) {
    const data = docSnap.data();
    expenses = data.expenses || [];
    bookingStates = data.bookingStates || {};
    contributions = data.contributions || { nthabi: 70000, kevin: 43000 };
  } else {
    // First device to ever load the app — seed the shared document.
    tripDocRef.set({ expenses, bookingStates, contributions });
  }

  // Re-render whatever is currently on screen so both devices update live.
  try { renderBookingCalendar(); } catch (e) {}
  try { renderExpenseSplitter(); } catch (e) {}

  const contribNthabiEl = document.getElementById("contrib-nthabi");
  const contribKevinEl = document.getElementById("contrib-kevin");
  if (contribNthabiEl && document.activeElement !== contribNthabiEl) contribNthabiEl.value = contributions.nthabi;
  if (contribKevinEl && document.activeElement !== contribKevinEl) contribKevinEl.value = contributions.kevin;
}, (err) => {
  console.error("Firestore sync error:", err);
});

// Merges a partial update (e.g. { expenses } or { bookingStates }) into
// the shared trip document. Other devices pick it up via onSnapshot above.
function saveTripData(partial) {
  tripDocRef.set(partial, { merge: true }).catch((err) => {
    console.error("Firestore save error:", err);
  });
}

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

  if (typeof renderDailyItinerary === 'function') {
    renderDailyItinerary();
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
  } else if (tabId === "tab-itinerary") {
    const btn = document.getElementById("btn-itinerary");
    if (btn) btn.classList.add("active");
    document.getElementById("current-view-title").textContent = "Daily Itinerary";
    document.getElementById("current-view-subtitle").textContent = "Hour-by-hour plan for all 21 days, from Johannesburg to Rome.";
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
  } else if (tabId === "tab-notes") {
    const btn = document.getElementById("btn-notes");
    if (btn) btn.classList.add("active");
    document.getElementById("current-view-title").textContent = "Ideas & Notes";
    document.getElementById("current-view-subtitle").textContent = "A shared space for anything either of you wants to flag.";
  } else if (tabId === "tab-photos") {
    const btn = document.getElementById("btn-photos");
    if (btn) btn.classList.add("active");
    document.getElementById("current-view-title").textContent = "Trip Photos";
    document.getElementById("current-view-subtitle").textContent = `Shared photo dump for ${currentPhotoCity}.`;
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
        <h5>🛏️ Accommodation</h5>
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
  saveTripData({ bookingStates });
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
          <span class="meal-time">Afternoon</span>
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

// --- DAILY ITINERARY MODULE ---
// Full hour-by-hour schedule, 18 September - 8 October 2027.
const itineraryData = [
  { id: "d1", date: "18 Sep", city: "France", title: "Departure from Johannesburg", events: [
    { time: "11:00 AM", desc: "Collect luggage, finalise travel documents, and arrive at O.R. Tambo International Airport." },
    { time: "1:30 PM", desc: "Flight departs from Johannesburg." },
    { time: "10:45 PM", desc: "Arrive in Dubai for a late-night international transit layover." }
  ]},
  { id: "d2", date: "19 Sep", city: "France", title: "Arrival in Paris & Historical Core", events: [
    { time: "Morning", desc: "Land in Paris, clear immigration, and check into your accommodation." },
    { time: "1:00 PM", desc: "Explore the Latin Quarter, walking past the Sorbonne and down the vibrant Rue Mouffetard." },
    { time: "3:00 PM", desc: "View the exterior architectural restoration progress of Notre Dame Cathedral." },
    { time: "5:30 PM", desc: "Take an hour-long sunset Seine River Cruise departing near the historical centre." }
  ]},
  { id: "d3", date: "20 Sep", city: "France", title: "Art Masterpieces & Iconic Landmarks", events: [
    { time: "9:00 AM", desc: "Enter The Louvre via the Carousel entrance to beat crowds; target the Denon Wing for top masterpieces." },
    { time: "2:30 PM", desc: "Take a casual afternoon City Bus Tour to see the Champs-Élysées and Place de la Concorde." },
    { time: "5:00 PM", desc: "Ride to the top of the Eiffel Tower (book the final elevator slot ahead of time for golden hour)." }
  ]},
  { id: "d4", date: "21 Sep", city: "France", title: "Royal Palaces & Military Tributes", events: [
    { time: "8:30 AM", desc: "Take the RER C train from central Paris out to the suburban Palace of Versailles." },
    { time: "9:00 AM", desc: "Tour the Hall of Mirrors and grand state apartments before exploring the vast gardens." },
    { time: "3:30 PM", desc: "Return to the city centre and ascend to the rooftop of the Arc de Triomphe for panoramic views." }
  ]},
  { id: "d5", date: "22 Sep", city: "France", title: "Day Trip to Reims Champagne Region", events: [
    { time: "8:00 AM", desc: "Board a high-speed TGV train from Gare de l'Est to Reims (45-minute travel time)." },
    { time: "9:30 AM", desc: "Visit the historic Reims Cathedral, where French kings were traditionally crowned." },
    { time: "11:30 AM", desc: "Tour local Champagne houses (like Taittinger or Veuve Clicquot) for chalk cellar viewings and tastings." },
    { time: "6:00 PM", desc: "Return to Paris by rail for your final evening in France." }
  ]},
  { id: "d6", date: "23 Sep", city: "Venice", title: "Flight to Venice & Grand Canal Entry", events: [
    { time: "Morning", desc: "Flight from Paris to Venice Marco Polo Airport, followed by a water bus (Alilaguna) into the lagoon." },
    { time: "2:00 PM", desc: "Tour the Venetian-Gothic architecture of Doge's Palace and cross the Bridge of Sighs." },
    { time: "4:00 PM", desc: "Step inside the golden mosaics of St. Mark's Basilica." },
    { time: "6:30 PM", desc: "Experience a classic Gondola Ride through the quiet back canals, followed by an evening opera performance." }
  ]},
  { id: "d7", date: "24 Sep", city: "Venice", title: "Alpine Day Trip to the Dolomites", events: [
    { time: "7:30 AM", desc: "Depart on a full-day guided coach tour or rental drive north towards the Dolomites." },
    { time: "10:30 AM", desc: "Stop at the picturesque Lake Misurina and view the dramatic peaks of Tre Cime di Lavaredo." },
    { time: "2:00 PM", desc: "Walk through the alpine resort town of Cortina d'Ampezzo before returning to Venice." }
  ]},
  { id: "d8", date: "25 Sep", city: "Venice", title: "Lagoon Islands & Renaissance Art", events: [
    { time: "9:00 AM", desc: "Take a Vaporetto boat north to Murano for glassblowing, then to Burano for its brightly painted houses." },
    { time: "3:00 PM", desc: "Return to Venice proper to view the monumental mannerist art collections at Palazzo Grimani." }
  ]},
  { id: "d9", date: "26 Sep", city: "Florence", title: "Rail to Florence & Renaissance Panoramas", events: [
    { time: "8:30 AM", desc: "Board a Frecciarossa high-speed train from Venezia Santa Lucia to Firenze Santa Maria Novella (2 hours)." },
    { time: "11:30 AM", desc: "Walk through the heart of the city to view the marble facade of Piazza del Duomo." },
    { time: "2:00 PM", desc: "View Renaissance fine arts (including Botticelli's work) at the world-renowned Uffizi Gallery." },
    { time: "5:30 PM", desc: "Walk up to Piazzale Michelangelo to watch the sunset over the Arno River and Florentine rooftops." }
  ]},
  { id: "d10", date: "27 Sep", city: "Florence", title: "Leonardo's Trails & Tuscan Wine", events: [
    { time: "8:30 AM", desc: "Travel slightly north to Fiesole to hike the Monte Ceceri Trails, where Leonardo da Vinci tested his flying machines." },
    { time: "1:00 PM", desc: "Head south into the countryside for an afternoon Chianti Wine Tasting at a historic estate." }
  ]},
  { id: "d11", date: "28 Sep", city: "Florence", title: "Local Markets & Tuscan Day Trip", events: [
    { time: "8:30 AM", desc: "Explore the bustling ground floor of Mercato Centrale for local cheeses, cured meats, and fresh pastries." },
    { time: "10:30 AM", desc: "Take a regional train to Pisa to see the Leaning Tower, then continue to the medieval walled city of Lucca." },
    { time: "6:00 PM", desc: "Return to Florence for a relaxed dinner." }
  ]},
  { id: "d12", date: "29 Sep", city: "Florence", title: "Famous Sculptures & Regal Gardens", events: [
    { time: "9:00 AM", desc: "Stand before Michelangelo's original Statue of David inside the Galleria dell'Accademia." },
    { time: "12:00 PM", desc: "Head back to Mercato Centrale's top floor food court for an upscale artisanal lunch." },
    { time: "2:30 PM", desc: "Cross the Ponte Vecchio to explore the expansive Renaissance sculptures and landscaping of the Boboli Gardens." }
  ]},
  { id: "d13", date: "30 Sep", city: "Naples", title: "Transit to Naples & Underground Exploration", events: [
    { time: "8:00 AM", desc: "High-speed train south from Florence to Napoli Centrale (under 3 hours)." },
    { time: "11:30 AM", desc: "Walk the ancient street grid of Spaccanapoli and see the majolica tiled cloister of Santa Chiara." },
    { time: "2:00 PM", desc: "View the incredible Veiled Christ sculpture inside the Sansevero Chapel Museum (advance booking strictly required)." },
    { time: "4:00 PM", desc: "Walk past the artisan workshops of Via San Gregorio Armeno, then descend 40 metres deep for a tour of Naples Underground." }
  ]},
  { id: "d14", date: "1 Oct", city: "Naples", title: "Ancient Volcanoes & Archeology", events: [
    { time: "8:30 AM", desc: "Take the Circumvesuviana train out to the ancient, preserved Roman city at the Pompeii Ruins." },
    { time: "2:00 PM", desc: "Take a shuttle bus up the slopes of Mount Vesuvius and hike up to the crater rim." }
  ]},
  { id: "d15", date: "2 Oct", city: "Naples", title: "Clifftop Coastal Gateway & Cooking", events: [
    { time: "9:00 AM", desc: "Travel further south on the rail line to the coastal clifftop town of Sorrento." },
    { time: "1:00 PM", desc: "Explore the historical center and lemon groves." },
    { time: "5:00 PM", desc: "Join an interactive authentic Neapolitan Pizza Making Class for dinner." }
  ]},
  { id: "d16", date: "3 Oct", city: "Naples", title: "Dramatic Coastal Roadways", events: [
    { time: "8:30 AM", desc: "Board a regional ferry or a scenic coastal bus heading directly along the cliffside to Amalfi." },
    { time: "11:00 AM", desc: "Visit the Cathedral of St. Andrew, then relax along the beachfront before exploring the mountain paths of Positano." }
  ]},
  { id: "d17", date: "4 Oct", city: "Naples", title: "Glamorous Island Excursion", events: [
    { time: "8:30 AM", desc: "Catch a morning jetfoil ferry from the coast out to the rugged Island of Capri." },
    { time: "10:00 AM", desc: "Take a boat excursion around the island to see the Faraglioni rocks, or ride the chairlift up Mount Solaro." }
  ]},
  { id: "d18", date: "5 Oct", city: "Rome", title: "Rome Arrival & Baroque Squares", events: [
    { time: "9:00 AM", desc: "Travel from the Campania region up to Roma Termini station via high-speed rail (70 minutes)." },
    { time: "1:00 PM", desc: "Walk through Rome's historic center to view the architectural marvel of the Pantheon and toss a coin into the Trevi Fountain." },
    { time: "3:30 PM", desc: "Walk over to sit by the Spanish Steps and explore the fountains of Piazza Navona." }
  ]},
  { id: "d19", date: "6 Oct", city: "Rome", title: "Vatican Sovereignty & Papal Events", events: [
    { time: "8:30 AM", desc: "Head to St. Peter's Square to secure a spot for the weekly Papal Audience (held on Wednesday mornings)." },
    { time: "1:30 PM", desc: "Tour the vast collections of the Vatican Museums, ending inside the Sistine Chapel." },
    { time: "4:30 PM", desc: "Step inside the massive interior of St. Peter's Basilica." }
  ]},
  { id: "d20", date: "7 Oct", city: "Rome", title: "Imperial Antiquities & Bohemian Nights", events: [
    { time: "8:30 AM", desc: "Walk through the ancient amphitheatre of the Colosseum, then explore the ruins of the Roman Forum and Palatine Hill." },
    { time: "3:00 PM", desc: "Cross the Tiber River to explore the narrow cobblestone alleyways of the bohemian Trastevere neighbourhood." }
  ]},
  { id: "d21", date: "8 Oct", city: "Rome", title: "Master Sculptures & Homeward Flight", events: [
    { time: "9:00 AM", desc: "Tour the Bernini sculptures and Caravaggio paintings inside the Galleria Borghese (entry slots strictly timed, book weeks in advance)." },
    { time: "2:00 PM", desc: "Pick up your luggage and head out to Leonardo da Vinci–Fiumicino Airport (FCO)." },
    { time: "10:10 PM", desc: "Homeward flight departs from FCO airport back towards South Africa." }
  ]}
];

function renderDailyItinerary() {
  const picker = document.getElementById("itinerary-day-picker");
  if (!picker) return;

  picker.innerHTML = "";

  // Group consecutive days by city so the picker reads as Paris -> Venice -> Florence -> Naples -> Rome
  let currentCity = null;
  let groupEl = null;

  itineraryData.forEach((day) => {
    if (day.city !== currentCity) {
      currentCity = day.city;
      groupEl = document.createElement("div");
      groupEl.className = "itinerary-city-group";
      const label = document.createElement("div");
      label.className = "itinerary-city-label";
      label.textContent = currentCity;
      groupEl.appendChild(label);
      picker.appendChild(groupEl);
    }

    const btn = document.createElement("button");
    btn.className = "itinerary-day-btn" + (day.id === "d1" ? " active" : "");
    btn.id = `itinerary-pill-${day.id}`;
    btn.onclick = () => selectItineraryDay(day.id);
    btn.innerHTML = `<span class="day-date">${day.date}</span><span class="day-title">${day.title}</span>`;
    groupEl.appendChild(btn);
  });

  selectItineraryDay("d1", false);
}

window.selectItineraryDay = function(dayId, userInitiated = true) {
  document.querySelectorAll(".itinerary-day-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`itinerary-pill-${dayId}`);
  if (activeBtn) activeBtn.classList.add("active");

  const day = itineraryData.find(d => d.id === dayId);
  const pane = document.getElementById("itinerary-details-pane");
  if (!day || !pane) return;

  const eventsHtml = day.events.map(ev => `
    <div class="itinerary-event">
      <div class="itinerary-event-dot"></div>
      <div class="itinerary-event-time">${ev.time}</div>
      <div class="itinerary-event-desc">${ev.desc}</div>
    </div>
  `).join("");

  pane.innerHTML = `
    <div class="meals-pane-header">
      <h3>${day.date} — ${day.title}</h3>
      <p>${day.city}</p>
    </div>
    <div class="itinerary-timeline">
      ${eventsHtml}
    </div>
  `;

  // On narrow/mobile layouts the picker and detail pane stack vertically,
  // so bring the newly selected day's detail into view automatically —
  // but only when the user actually tapped a day, not on initial load.
  if (userInitiated && window.innerWidth <= 1024) {
    pane.scrollIntoView({ behavior: "smooth", block: "start" });
  }
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
    settlementEl.textContent = `-${fmt(balance)}`;
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
  saveTripData({ contributions });
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
  saveTripData({ expenses });
  
  const form = document.getElementById("add-expense-form");
  if (form) form.reset();
  
  renderExpenseSplitter();
};

window.deleteExpense = function(index) {
  expenses.splice(index, 1);
  saveTripData({ expenses });
  renderExpenseSplitter();
};

window.clearExpenses = function() {
  if (confirm("Are you sure you want to clear the entire expense ledger?")) {
    expenses = [];
    saveTripData({ expenses });
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

// --- IDEAS & NOTES MODULE ---
// Comments live in their own Firestore collection (not the trip/shared doc)
// since they grow open-endedly — each note is its own document, newest first.

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

const commentsRef = db.collection("comments").orderBy("createdAt", "desc");

commentsRef.onSnapshot((snapshot) => {
  const list = document.getElementById("notes-list");
  if (!list) return;
  list.innerHTML = "";

  if (snapshot.empty) {
    list.innerHTML = '<li class="ledger-item-row" style="justify-content:center; color: var(--text-muted);">No notes yet — be the first to add one.</li>';
    return;
  }

  snapshot.forEach((doc) => {
    const data = doc.data();
    const when = data.createdAt
      ? data.createdAt.toDate().toLocaleString('en-ZA', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
      : "Just now";

    const item = document.createElement("li");
    item.className = "ledger-item-row";
    item.innerHTML = `
      <div class="ledger-item-left">
        <div class="category-icon">${data.author === "Kevin" ? "🧔" : "👩"}</div>
        <div class="ledger-item-info note-item-info">
          <h4>${escapeHtml(data.author || "Unknown")}</h4>
          <p>${escapeHtml(data.text || "")}</p>
          <p class="note-meta">${when}</p>
        </div>
      </div>
      <div class="ledger-item-right">
        <button class="delete-expense-btn" onclick="deleteComment('${doc.id}')" title="Delete note">✕</button>
      </div>
    `;
    list.appendChild(item);
  });
}, (err) => {
  console.error("Comments sync error:", err);
});

window.handleCommentSubmit = function(event) {
  event.preventDefault();

  const author = document.getElementById("comment-author").value;
  const text = document.getElementById("comment-text").value.trim();

  if (!text) return;

  db.collection("comments").add({
    author: author,
    text: text,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).catch((err) => console.error("Failed to post note:", err));

  // Auto-notification so the other person sees a new idea/note was added
  const preview = text.length > 60 ? text.slice(0, 60) + "…" : text;
  db.collection("notifications").add({
    type: "note",
    author: author,
    message: `${author} added a note: "${preview}"`,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).catch((err) => console.error("Failed to create notification:", err));

  const form = document.getElementById("add-comment-form");
  if (form) form.reset();
};

window.deleteComment = function(commentId) {
  db.collection("comments").doc(commentId).delete().catch((err) => {
    console.error("Failed to delete note:", err);
  });
};

// --- PHOTOS TAB (Cloudinary + Firestore) ---

let currentPhotoCity = "Paris"; // defaults to the first trip city
let unsubscribePhotos = null;

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("photo-city-switcher");
  if (switcher) {
    switcher.querySelectorAll(".city-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        switcher.querySelectorAll(".city-chip").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentPhotoCity = btn.dataset.city;
        const subtitle = document.getElementById("current-view-subtitle");
        if (subtitle) subtitle.textContent = `Shared photo dump for ${currentPhotoCity}.`;
        loadPhotosForCity(currentPhotoCity);
      });
    });
  }

  const uploadInput = document.getElementById("photo-upload-input");
  if (uploadInput) {
    uploadInput.addEventListener("change", async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const uploader = document.getElementById("photo-uploader").value;
      const statusEl = document.getElementById("photo-upload-status");
      statusEl.textContent = "Uploading...";

      try {
        await uploadPhoto(file, currentPhotoCity, uploader);
        statusEl.textContent = "Uploaded!";
        setTimeout(() => (statusEl.textContent = ""), 2000);
      } catch (err) {
        console.error("Photo upload failed:", err);
        statusEl.textContent = "Upload failed. Please try again.";
      }

      e.target.value = ""; // allows re-selecting the same file later
    });
  }

  // Load the default city's gallery as soon as Firestore is ready
  loadPhotosForCity(currentPhotoCity);
});

async function uploadPhoto(file, city, uploader) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", `eurotrip2027/${city.toLowerCase()}`);

  const response = await fetch(CLOUDINARY_UPLOAD_URL, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Cloudinary upload failed (${response.status})`);
  }

  const data = await response.json();

  await db.collection("photos").add({
    city: city,
    uploader: uploader,
    imageUrl: data.secure_url,
    publicId: data.public_id,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

function loadPhotosForCity(city) {
  const gallery = document.getElementById("photo-gallery");
  if (!gallery) return;

  if (unsubscribePhotos) unsubscribePhotos();

  unsubscribePhotos = db
    .collection("photos")
    .where("city", "==", city)
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      gallery.innerHTML = "";

      if (snapshot.empty) {
        gallery.innerHTML = `<p class="photo-empty" style="color: var(--text-muted);">No photos yet for ${city} — be the first to add one.</p>`;
        return;
      }

      snapshot.forEach((doc) => {
        const photo = doc.data();
        const card = document.createElement("div");
        card.className = "photo-card";
        card.innerHTML = `
          <img src="${photo.imageUrl}" alt="Photo from ${escapeHtml(photo.city || "")}" loading="lazy">
          <div class="photo-meta">
            <span>${escapeHtml(photo.uploader || "")}</span>
            <button class="delete-photo-btn" onclick="deletePhoto('${doc.id}')" title="Delete photo">✕</button>
          </div>
        `;
        gallery.appendChild(card);
      });
    }, (err) => {
      console.error("Photos sync error:", err);
    });
}

window.deletePhoto = function(photoId) {
  // Removes the photo from the shared gallery (Firestore). The file stays
  // in Cloudinary's library for now — deleting it there requires a signed
  // request, which we'll add as a small follow-up step if you want fully
  // clean storage.
  db.collection("photos").doc(photoId).delete().catch((err) => {
    console.error("Failed to delete photo:", err);
  });
};

// --- NOTIFICATIONS (in-app feed) ---
// No login system, so "unread" is tracked per-device via localStorage:
// each device remembers the last time it opened the panel, and anything
// created after that counts as unread on that device/browser.

const NOTIF_LAST_SEEN_KEY = "eurotrip_notif_last_seen";
let latestNotifTimestampMs = 0;

function getLastSeenMs() {
  const stored = localStorage.getItem(NOTIF_LAST_SEEN_KEY);
  return stored ? parseInt(stored, 10) : 0;
}

function setLastSeenNow() {
  localStorage.setItem(NOTIF_LAST_SEEN_KEY, Date.now().toString());
}

window.toggleNotifPanel = function() {
  const panel = document.getElementById("notif-panel");
  if (!panel) return;
  const opening = !panel.classList.contains("open");
  panel.classList.toggle("open");

  if (opening) {
    setLastSeenNow();
    // Re-render immediately so unread highlighting/badge clears without
    // waiting for the next Firestore snapshot.
    db.collection("notifications").orderBy("createdAt", "desc").get()
      .then(renderNotifications)
      .catch((err) => console.error("Failed to refresh notifications:", err));
  }
};

// Close the panel when clicking outside of it
document.addEventListener("click", (e) => {
  const wrapper = document.querySelector(".notif-wrapper");
  const panel = document.getElementById("notif-panel");
  if (wrapper && panel && panel.classList.contains("open") && !wrapper.contains(e.target)) {
    panel.classList.remove("open");
  }
});

let unreadNotifCount = 0;

function renderNotifications(snapshot) {
  const list = document.getElementById("notif-list");
  const badge = document.getElementById("notif-badge");
  if (!list) return;

  list.innerHTML = "";
  const lastSeen = getLastSeenMs();
  unreadNotifCount = 0;

  if (snapshot.empty) {
    list.innerHTML = `<li class="notif-empty">No notifications yet.</li>`;
  }

  snapshot.forEach((doc) => {
    const notif = doc.data();
    const createdMs = notif.createdAt && notif.createdAt.toMillis ? notif.createdAt.toMillis() : Date.now();
    latestNotifTimestampMs = Math.max(latestNotifTimestampMs, createdMs);
    const isUnread = createdMs > lastSeen;
    if (isUnread) unreadNotifCount++;

    const li = document.createElement("li");
    li.className = "notif-item" + (isUnread ? " unread" : "");

    const dueLabel = notif.dueDate ? ` · due ${escapeHtml(notif.dueDate)}` : "";
    const whenLabel = notif.createdAt && notif.createdAt.toDate
      ? notif.createdAt.toDate().toLocaleDateString(undefined, { month: "short", day: "numeric" })
      : "";

    li.innerHTML = `
      <div class="notif-item-body">
        <div>${escapeHtml(notif.message || "")}</div>
        <div class="notif-item-meta">${whenLabel}${dueLabel}</div>
      </div>
      <button class="delete-notif-btn" onclick="deleteNotification('${doc.id}')" title="Remove">✕</button>
    `;
    list.appendChild(li);
  });

  if (badge) {
    if (unreadNotifCount > 0) {
      badge.style.display = "flex";
      badge.textContent = unreadNotifCount > 9 ? "9+" : unreadNotifCount;
    } else {
      badge.style.display = "none";
    }
  }
}

db.collection("notifications")
  .orderBy("createdAt", "desc")
  .onSnapshot(renderNotifications, (err) => {
    console.error("Notifications sync error:", err);
  });

window.handleReminderSubmit = function(event) {
  event.preventDefault();

  const textInput = document.getElementById("reminder-text");
  const dueInput = document.getElementById("reminder-due");
  const text = textInput.value.trim();
  if (!text) return;

  db.collection("notifications").add({
    type: "reminder",
    message: text,
    dueDate: dueInput.value || null,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).catch((err) => console.error("Failed to add reminder:", err));

  textInput.value = "";
  dueInput.value = "";
};

window.deleteNotification = function(notifId) {
  db.collection("notifications").doc(notifId).delete().catch((err) => {
    console.error("Failed to delete notification:", err);
  });
};