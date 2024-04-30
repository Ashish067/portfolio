/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        tiltshaking: {
          "0%,50%,100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "75%": { transform: "rotate(-5deg)" },
        },
      },
      animation: {
        tiltshaking: "tiltshaking .2s ease-in-out 2",
      },
    },
  },
  plugins: [],
};
