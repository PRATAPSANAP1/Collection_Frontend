const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

console.log("hello host : ",isLocalhost);
const API_BASE_URL = isLocalhost
  ? "http://localhost:3400" // local backend
  : "https://collection-backend-pq2f.onrender.com"; // hosted backend

// make it globally accessible
window.Backend_URL = API_BASE_URL;
