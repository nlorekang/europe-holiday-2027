// flight-status.js
//
// Frontend widget for live Emirates flight status.
// Calls YOUR OWN /api/flight-status endpoint (never the AviationStack API
// directly), so no key is exposed to the browser.
//
// Drop this <script> into your page and add a container div, e.g.:
//   <div id="flight-status-EK762"></div>
//   <script src="flight-status.js"></script>
//   <script>renderFlightStatus('EK762', 'flight-status-EK762');</script>

async function fetchFlightStatus(flightNumber) {
  const res = await fetch(`/api/flight-status?flight=${encodeURIComponent(flightNumber)}`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Request failed (${res.status})`);
  }
  return res.json();
}

function formatTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleString(undefined, {
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function statusLabel(status) {
  const map = {
    scheduled: 'Scheduled',
    active: 'In the air',
    landed: 'Landed',
    cancelled: 'Cancelled',
    incident: 'Incident',
    diverted: 'Diverted',
  };
  return map[status] || status || 'Unknown';
}

async function renderFlightStatus(flightNumber, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = `<div class="flight-status flight-status--loading">Loading ${flightNumber} status…</div>`;

  try {
    const data = await fetchFlightStatus(flightNumber);

    el.innerHTML = `
      <div class="flight-status">
        <div class="flight-status__header">
          <span class="flight-status__number">${data.flight_iata || flightNumber}</span>
          <span class="flight-status__badge flight-status__badge--${data.status}">${statusLabel(data.status)}</span>
        </div>
        <div class="flight-status__legs">
          <div class="flight-status__leg">
            <div class="flight-status__airport">${data.departure.iata || '—'}</div>
            <div class="flight-status__time">${formatTime(data.departure.estimated || data.departure.scheduled)}</div>
            ${data.departure.gate ? `<div class="flight-status__meta">Gate ${data.departure.gate}</div>` : ''}
          </div>
          <div class="flight-status__arrow">→</div>
          <div class="flight-status__leg">
            <div class="flight-status__airport">${data.arrival.iata || '—'}</div>
            <div class="flight-status__time">${formatTime(data.arrival.estimated || data.arrival.scheduled)}</div>
            ${data.arrival.baggage ? `<div class="flight-status__meta">Baggage ${data.arrival.baggage}</div>` : ''}
          </div>
        </div>
        <div class="flight-status__updated">Updated ${new Date(data.updated_at).toLocaleTimeString()}</div>
      </div>
    `;
  } catch (err) {
    el.innerHTML = `<div class="flight-status flight-status--error">Couldn't load ${flightNumber}: ${err.message}</div>`;
  }
}

// Optional: auto-refresh every 5 minutes if the page stays open
function watchFlightStatus(flightNumber, containerId, intervalMs = 5 * 60 * 1000) {
  renderFlightStatus(flightNumber, containerId);
  return setInterval(() => renderFlightStatus(flightNumber, containerId), intervalMs);
}
