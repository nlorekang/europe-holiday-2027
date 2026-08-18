// api/flight-status.js
//
// Vercel Serverless Function — proxies flight status requests to AviationStack
// so the API key never gets exposed in your public GitHub repo or client-side JS.
//
// SETUP:
// 1. Sign up at https://aviationstack.com/ and grab your free API key.
// 2. In your Vercel project dashboard: Settings -> Environment Variables
//      Name:  AVIATIONSTACK_API_KEY
//      Value: <your key>
//    (Or via CLI: vercel env add AVIATIONSTACK_API_KEY)
// 3. Redeploy so the function picks up the new env var.
//
// USAGE (from your frontend):
//   fetch('/api/flight-status?flight=EK762')
//     .then(res => res.json())
//     .then(data => console.log(data));
//
// flight = the IATA flight number, e.g. EK762 (Emirates JNB->DXB) or EK073 (DXB->CDG)

export default async function handler(req, res) {
  const { flight } = req.query;

  if (!flight) {
    return res.status(400).json({ error: 'Missing required "flight" query parameter, e.g. ?flight=EK762' });
  }

  const apiKey = process.env.AVIATIONSTACK_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Server is not configured with an AviationStack API key.' });
  }

  const url = `https://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${encodeURIComponent(flight)}`;

  try {
    const upstream = await fetch(url);

    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: `AviationStack request failed with status ${upstream.status}` });
    }

    const data = await upstream.json();

    if (!data.data || data.data.length === 0) {
      return res.status(404).json({ error: `No live data found for flight ${flight}` });
    }

    const f = data.data[0];

    // Trim the response down to what the frontend actually needs.
    const summary = {
      flight_iata: f.flight?.iata,
      airline: f.airline?.name,
      status: f.flight_status, // scheduled, active, landed, cancelled, incident, diverted
      departure: {
        airport: f.departure?.airport,
        iata: f.departure?.iata,
        scheduled: f.departure?.scheduled,
        estimated: f.departure?.estimated,
        actual: f.departure?.actual,
        terminal: f.departure?.terminal,
        gate: f.departure?.gate,
        delay_minutes: f.departure?.delay,
      },
      arrival: {
        airport: f.arrival?.airport,
        iata: f.arrival?.iata,
        scheduled: f.arrival?.scheduled,
        estimated: f.arrival?.estimated,
        actual: f.arrival?.actual,
        terminal: f.arrival?.terminal,
        gate: f.arrival?.gate,
        baggage: f.arrival?.baggage,
        delay_minutes: f.arrival?.delay,
      },
      live: f.live
        ? {
            latitude: f.live.latitude,
            longitude: f.live.longitude,
            altitude: f.live.altitude,
            speed_horizontal: f.live.speed_horizontal,
            is_ground: f.live.is_ground,
          }
        : null,
      updated_at: new Date().toISOString(),
    };

    // Cache at the edge for 60s so repeated page loads don't burn API calls.
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');

    return res.status(200).json(summary);
  } catch (err) {
    console.error('flight-status error:', err);
    return res.status(500).json({ error: 'Unexpected error fetching flight status.' });
  }
}