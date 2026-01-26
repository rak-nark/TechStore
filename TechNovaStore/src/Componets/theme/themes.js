// Shared theme properties
const sharedTheme = {
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    wide: "1280px",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
  },
  borderRadius: {
    default: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  fonts: {
    display: "'Space Grotesk', sans-serif",
    body: "'Space Grotesk', sans-serif",
  },
};

export const darkTheme = {
  ...sharedTheme,
  mode: "dark",
  header: {
    background: "#101622",
    border: "#232f48",
  },
  body: {
    background: "#121926",
  },
  card: {
    background: "#1e2a3a",
  },
  colors: {
    primary: "#2b6cee",
    primaryLight: "rgba(43, 108, 238, 0.1)",
    primaryDark: "#1e4eb8",
    textPrimary: "#ffffff",
    textSecondary: "#cbd5e1",
    textMuted: "#64748b",
    text: "#ffffff",
    surface: "#232f48",
    avatar: "#64748b",
    background: "#101622",
    backgroundSecondary: "#1e2a3a",
    cardBackground: "#1e2a3a",
    border: "#232f48",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
  },
};

export const lightTheme = {
  ...sharedTheme,
  mode: "light",
  header: {
    background: "rgba(255,255,255,0.8)",
    border: "#e2e8f0",
  },
  body: {
    background: "#ffffff",
  },
  card: {
    background: "#f1f5f9",
    ButtonSecondary: "#e2e8f0",
  },
  colors: {
    primary: "#2b6cee",
    primaryLight: "rgba(43, 108, 238, 0.1)",
    primaryDark: "#1e4eb8",
    textPrimary: "#0f172a",
    textSecondary: "#334155",
    textMuted: "#64748b",
    text: "#0f172a",
    surface: "#f1f5f9",
    avatar: "#cbd5e1",
    background: "#ffffff",
    backgroundSecondary: "#f1f5f9",
    cardBackground: "#ffffff",
    border: "#e2e8f0",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
  },
};
