/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-desktop": "url('./images/bg-header-desktop.svg')",
        "header-mobile": "url('./images/bg-header-mobile.svg')",
      },
      backgroundColor: {
        "bg-light-grayish-cyan": "hsl(180, 52%, 96%)",
        "filter-light-grayish-cyan": "hsl(180, 31%, 95%)",
        "span-grayish-cyan": "hsl(180, 46%, 49%)",
        "grayish-cyan": "hsl(180, 23%, 51%)",
        "v-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
      colors: {
        "t-grayish-cyan": "hsl(180, 8%, 52%)",
        "h-grayish-cyan": "hsl(180, 46%, 49%)",
        "v-dark-grayish-cyan": "hsl(180, 14%, 20%)",
      },
      boxShadow: {
        "shadow-job": "2px 2px 7px 0px hsl(180, 8%, 52%)",
      },
    },
  },
  plugins: [],
};
