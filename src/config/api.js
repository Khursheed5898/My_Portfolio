// Dynamic API Base URL configuration for Local Dev and Render Production
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";
