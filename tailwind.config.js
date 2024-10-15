/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      white: '#ffffff',
      black: '#151515',
      gray: {
        200: '#eeeeee',
        500: '#666666',
        800: '#151515',
        900: '#111111'
      },
      blue: {
        100: '#597dff',
        200: '#0038ff'
      },
      point:'#81ff6f'
    },
    extend: {
      // 사용자 정의 spacing 추가
      spacing: {
        'vw-10': '10vw',
        'vw-20': '20vw',
        'vw-30': '30vw',
        'vw-40': '40vw',
        'vw-50': '50vw',
        // 필요한 만큼 추가...
      },
    },
  },
  plugins: [],
}
