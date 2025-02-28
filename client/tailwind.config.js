/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "376px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      fontSize: {
        body: "18px",
      },
      colors: {
        primary: {
          brightBlue: "hsl(220, 98%, 61%)",
          checkBackground:
            "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        },
        neutral: {
          lightTheme: {
            veryLightGray: "hsl(0, 0%, 98%)",
            veryLightGrayishBlue: "hsl(236, 33%, 92%)",
            lightGrayishBlue: "hsl(233, 11%, 84%)",
            darkGrayishBlue: "hsl(236, 9%, 61%)",
          },
          darkTheme: {
            veryDarkDesaturatedBlue: "hsl(235, 21%, 11%)",
            veryDarkGrayishBlue: "hsl(234, 39%, 85%)",
          },
        },
      },
    },
  },
  plugins: [],
};
