/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf0",
          100: "#dbfddc",
          200: "#baf8bc",
          300: "#84f188",
          400: "#47e14e",
          500: "#20d529",
          600: "#13a61a",
          700: "#128318",
          800: "#14671a",
          900: "#135418",
          950: "#042f08",
        },
        customPrimary: "rgb(32, 213, 41)",
        customSecondary: "rgb(19, 195, 28)",
        customHover: "rgb(75, 245, 65)",
        customPrimaryBorder: "rgba(32, 213, 41, 0.5)",
        customDarkBg1: "rgb(31, 32, 35)",
        customDarkBg2: "rgb(38, 39, 43)",
        customDarkBg3: "rgb(48, 49, 54)",
        customDarkBg3Hover: "rgb(55, 56, 62)",
        customContentSubtitle: "rgb(178, 184, 205)",
        customGrayBorder: "rgb(255,255,255,0.1)",
        customGrayText: "rgb(174, 178, 183)",
        customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
};
