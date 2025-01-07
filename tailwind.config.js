/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        blueSections: "#17242D"
      },
      backgroundImage: {
        mainMobile: "url(/img/bg-main-mobile.png)",
        waveProjectMobile: "url(/img/waves/wave-projects-mobile.png)"
      }
    },
  },
  plugins: [],
};
