module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'baby-blue': '#89CFF0',
          'baby-pink': '#F4C2C2',
          'baby-green': '#ABEBC6',
          'baby-yellow': '#FFED8A',
        },
        fontFamily: {
          'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
        },
        boxShadow: {
          'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        height: {
          'hero': '500px',
        },
      },
    },
    plugins: [],
  }