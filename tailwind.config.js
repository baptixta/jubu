/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "black": "var(--black)",
        "white": "var(--white)",
        "green": "var(--green)",
        "pink": "var(--pink)",
        "orange": "var(--orange)",
        "yellow": "var(--yellow)"
      }
    },
  },
  plugins: [],
}

