// api/_lib/webauthn-config.js
// WebAuthn ties every credential to an exact domain — if this doesn't
// match the URL the app is actually served from, browsers will refuse
// to register or use passkeys, usually with a vague error. Update RP_ID
// and ORIGIN together if the app ever moves to a custom domain.

const RP_ID = "europe-holiday-2027.vercel.app";
const RP_NAME = "EuroTrip 2027";
const ORIGIN = "https://europe-holiday-2027.vercel.app";

module.exports = { RP_ID, RP_NAME, ORIGIN };
