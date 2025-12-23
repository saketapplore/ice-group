/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // ✅ IMPORTANT (safe catch-all)
  ],
  theme: {
    extend: {
      keyframes: {
        scrollClients: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        scrollClients: "scrollClients 40s linear infinite",
        fadeInLeft: "fadeInLeft 0.8s ease-out both",
      },
    },

  },
  plugins: [],
};
