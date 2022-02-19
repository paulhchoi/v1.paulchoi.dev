// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        accent: 'var(--color-bg-accent)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        accent: 'var(--color-text-accent)',
      },
    },
  },
  // eslint-disable-next-line no-undef
  // plugins: [require('@tailwindcss/ui')],
  purge: false,
};
