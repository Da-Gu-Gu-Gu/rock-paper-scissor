/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sglf: "#ec9e0e",
        sglt: "#eca922",
        pglf: "#4865f4",
        pglt: "#5671f5",
        rglf: "#dc2e4e",
        rglt: "#dd405d",
        lglf: "#834fe3",
        lglt: "#8c5de5",
        spglf: "#40b9ce",
        spglt: "#52bed1",
        dtex: "hsl(229, 25%, 31%)",
        stex: "hsl(229, 64%, 46%)",
        hout: "hsl(217, 16%, 45%)",
      },
    },
  },
  plugins: [],
};
