import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']
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
  },
  extend: {
    fontFamily: {
      'sans': ['KiaFont', ...defaultTheme.fontFamily.sans],
    },
  },
}
export const plugins = []

