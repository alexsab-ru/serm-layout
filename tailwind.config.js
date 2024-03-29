import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,json}']
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
    midnight: '#05141f',
    vk: '#4B76A8',
    odnk: '#F7931D',
    fb: '#3C5A99',
    youtube: '#FF0018',
    tiktok: '#000000',
    telegram: '#2FACE1',
    grade: {
      100: '#ed1c24',
      300: '#f26522',
      500: '#f1c331',
      700: '#7ba343',
      900: '#279548',
    }
  },
  extend: {
    fontFamily: {
      'sans': ['KiaFont', ...defaultTheme.fontFamily.sans],
    },
  },
}
export const plugins = []

