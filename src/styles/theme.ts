export const theme = {
  colors: {
    primary: "#0F172A",
    secondary: "#1E293B",
    accent: "#475569",
    background: "#F9FAFB",
    card: "#FFFFFF",
    border: "#E2E8F0",
    text: "#1F2937",
    muted: "#6B7280",
    price: "#0F172A",
    buttonText: "#FFFFFF",
    highlight: "#60A5FA",
    success: "#1d9c52ff",
    danger: "#dc2626",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
  },

  borderRadius: {
    sm: 6,
    md: 10,
    lg: 16,
    pill: 50,
  },
  fontFamily: {
    regular: "Inter_400Regular",
    semibold: "Inter_600SemiBold",
    bold: "Inter_700Bold",
  },

  fontWeights: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  shadows: {
    sm: "0px 1px 2px rgba(0,0,0,0.04)",
    md: "0px 4px 6px rgba(0,0,0,0.06)",
    lg: "0px 10px 15px rgba(0,0,0,0.08)",
  },
};

export type AppTheme = typeof theme;
