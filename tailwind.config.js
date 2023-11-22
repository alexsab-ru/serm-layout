import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export const content = [
  './**/*.html',
  "./src/**/*.{html,js,ts,jsx,tsx,vue}",
]
export const theme = {
  container: {
    center: true,
    padding: '1rem',
  },
  screens: {
    'xs': '450px',
    'sm': '600px',
  },
  colors: {
    white: colors.white,
    black: colors.black,
    transparent: colors.transparent,
    accent: '#eA0029',
    yellow: '#f3c300',
    green: '#5d7d2b',
    midnight: '#05141f'
  },
  extend: {
    fontFamily: {
      'sans': ['KiaFont', ...defaultTheme.fontFamily.sans],
    },
  },
}
export const plugins = []

