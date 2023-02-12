/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Poppins", "sans-serif"],
      },
      colors: {
        mainColor: "#007AFF",
        accentColor: "#00FF7F",
        backgroundColor: "#F5F5DC",
        textColor: "#333333",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
    },
  },
  plugins: [],
}
