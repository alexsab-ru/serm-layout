import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export const content = [
  './**/*.html',
  "./src/**/*.{html,js,ts,jsx,tsx,vue}",
]
export const theme = {
  container: {
    center: true,
    padding: '1.25rem',
  },
  colors: {},
  extend: {
    fontFamily: {
      'sans': ['KiaFont', ...defaultTheme.fontFamily.sans],
    },
  },
}
export const plugins = []

