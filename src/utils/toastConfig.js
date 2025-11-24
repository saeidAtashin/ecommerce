/**
 * Centralized Toast Configuration Utility
 * Provides consistent toast notification settings across the application
 * Optimized for performance with memoized configurations
 */

// Base toast configuration - optimized for performance
const baseConfig = {
  position: "bottom-left",
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

// Default toast configuration
export const toastConfig = {
  ...baseConfig,
  autoClose: 3000,
};

// Toast configurations for different notification types - optimized autoClose times
export const toastTypes = {
  success: {
    ...baseConfig,
    autoClose: 2000, // Shorter for success messages
  },
  error: {
    ...baseConfig,
    autoClose: 4000, // Longer for errors to ensure user sees them
  },
  info: {
    ...baseConfig,
    autoClose: 3000,
  },
  warning: {
    ...baseConfig,
    autoClose: 3500,
  },
  dark: {
    ...baseConfig,
    autoClose: 3000,
  },
};

// Helper function to get toast config with optional overrides
export const getToastConfig = (type = "default", overrides = {}) => {
  const baseConfig = toastTypes[type] || toastConfig;
  return { ...baseConfig, ...overrides };
};


