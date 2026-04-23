// 🔥 SINGLE SOURCE API CONFIG
const API_BASE = "https://script.google.com/macros/s/AKfycbzRNSkMcVfTNAgp83pfgdhSuPPNCHLs9OX9vg3OXIHX2v4NXCU-dg-ek1uA6GzSLhSo7A/exec";

// 🔥 ALL ENDPOINTS
const API = {
  stats: API_BASE + "?type=stats",

  lookup: (order) =>
    API_BASE + "?type=lookup&order_id=" + encodeURIComponent(order),

  track: (order, tracking) =>
    API_BASE + "?type=track&order_id=" + encodeURIComponent(order) +
    "&tracking=" + encodeURIComponent(tracking),

  // ✅ LEDGER GET
 ledgerGet:(cat)=> API_BASE + "?type=ledger&category=" + cat,
fabricSave: API_BASE

  // ✅ LEDGER POST (add/edit/delete)
  ledgerPost: API_BASE,

  // COMMON POST
  post: API_BASE
};
