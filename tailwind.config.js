/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //Gradient
        softViolet: "hsl(273, 75%, 66%)",
        softBlue: "hsl(240, 73%, 65%)",
        //Text
        veryDarkGrayishBlue: "hsl(237, 12%, 33%)",
        darkGrayishBlue: "hsl(240, 6%, 50%)",
        //Dividers
        lightGrayishBlue: "hsl(240, 5%, 91%)",
      },
      fontFamily: {
        kumbhSans: ["Kumbh Sans", "sans-serif"],
      },
      margin: {
        large: "28rem"
      }
    },
  },
  plugins: [],
}
