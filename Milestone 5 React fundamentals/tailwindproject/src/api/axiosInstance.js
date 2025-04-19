import axios from "axios";

// Create a new Axios instance
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Using a placeholder for now
  timeout: 5000,
  headers: {
    Accept: "*/*",
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add request ID
    config.headers["X-Request-ID"] = generateRequestId();

    // Add token if it exists in localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Generate unique ID for each request
function generateRequestId() {
  return Math.random().toString(36).substring(2, 10);
}

export const makeCancelableRequest = (url, data = {}) => {
  const controller = new AbortController();

  const promise = axiosInstance.post(url, data, {
    signal: controller.signal,
  });

  return { promise, cancel: () => controller.abort() };
};

export default axiosInstance;
