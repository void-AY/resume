import daisyui from "daisyui";

export default {
  purge: ['../assets/main.css', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'green-light': '#005055',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [daisyui],
}
