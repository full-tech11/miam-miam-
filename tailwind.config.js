/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {    
    extend: {
      
      borderRadius: {
        'custom-sm': '4px',
        'custom-md': '8px',
        'custom-lg': '12px',
        'custom-full': '9999px',
      },
      
      colors: {
        primary: {
          100: '#d1fae5',
          500: '#10b981',
          900: '#065f46',
        },
        secondary: {
          100: '#FFA500',
          500: '#FF6600',
          900: '#FB4C0D',
        },
        gray:{
          100:'#f2f2f2',
          500:'#e5e5e5',
          700: '#808080',
          900:'#333333',
        },
        white: '#ffffff',
      },

      fontSize: {
        small: '0.875rem',
        large: '1.5rem',
        xlarge: '2rem',
      },
      lineHeight: {
        small: '1.25rem',
        large: '2rem',
        xlarge: '2.25rem',
      },
      letterSpacing: {
        small: '0.05rem',
        large: '0.1rem',
        xlarge: '0.15rem',
      },
      fontWeight: {
        small: '400',
        large: '600',
        xlarge: '800',
      },
    },
  },
  plugins: [],
};

