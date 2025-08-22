/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      // Add custom colors, fonts, spacing if needed
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class', // optimized dark mode handling
  corePlugins: {
    // Disable unused core plugins if not used to reduce CSS
    preflight: true, // keep base styles
  },
  safelist: [
    // Include any dynamic Flowbite classes you use
    'bg-blue-500',
    'text-white',
    'hover:bg-blue-700',
    'md:hidden',
  ],
};
