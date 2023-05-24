/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'logo-bg':"url('../src/assets/img/logo-background.jpg')"
      },

      fontFamily:{
        Mukta:'Mukta',
        Pinstripe: 'Alumni Sans Pinstripe'
      },

      colors: {
        'olive': 'rgba(132, 152, 111)',
        'olivedunkel': '#52574d',
        'lavendeldunkeldunkel': '#483f49',
        'lavendeldunkel': '#816884',
        'lavendel': '#9d7fa4'
      },
    },
  },
  plugins: [],
}
