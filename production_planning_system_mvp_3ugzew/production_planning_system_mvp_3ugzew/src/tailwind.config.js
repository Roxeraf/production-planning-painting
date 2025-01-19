module.exports = {
      content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            primary: '#4F46E5',
            secondary: '#6B7280',
            success: '#10B981',
            warning: '#F59E0B',
            danger: '#EF4444'
          },
          spacing: {
            '72': '18rem',
            '84': '21rem',
            '96': '24rem',
          }
        },
      },
      plugins: [],
    }
