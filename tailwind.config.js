/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
            css: [
                {
                    a: {
                        color: 'var(--accent)',
                        textDecoration: "none",
                        fontWeight: 'auto',
                    },
                }
            ]
        }
      }
    },
  },
}
