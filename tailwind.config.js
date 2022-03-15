module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(204, 88%, 53%)",
          dark: "hsl(204, 88%, 46%)",
          light: "hsl(204, 88%, 96%)",
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          extraLight: "#E1E8ED",
          lightest: "#F5F8FA"
        },
        black: "#14171A",
      },
    },
  },
  plugins: [],
}
