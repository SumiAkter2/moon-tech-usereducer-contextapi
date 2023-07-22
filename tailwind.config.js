/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {
        primary: "#d1d5db",

        secondary: "#fbbf24",

        accent: "#9ca3af",

        neutral: "#06b6d4",

        "base-100": "#FFFFFF",

        info: "#6b7280",

        success: "#facc15",

        warning: "#eab308",

        error: "#e11d48",
      },
    },
  ],
  plugins: [require("daisyui")],
};

