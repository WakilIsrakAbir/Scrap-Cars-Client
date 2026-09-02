import { API_URL } from "./constants";

// Helper to make API calls with JWT token
export async function apiFetch(endpoint, options = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

// Auth helpers
export function setToken(token) {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
    window.dispatchEvent(new Event("auth-change"));
  }
}

export function getToken() {
  return typeof window !== "undefined" ? localStorage.getItem("token") : null;
}

export function removeToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("auth-change"));
  }
}

export function getUser() {
  if (typeof window === "undefined") return null;
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function setUser(user) {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
    window.dispatchEvent(new Event("auth-change"));
  }
}

export function logout() {
  removeToken();
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("auth-change"));
    window.location.href = "/login";
  }
}

export function isAdmin() {
  const user = getUser();
  return user?.role === "ADMIN";
}
