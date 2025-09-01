import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}']

export const theme = {
  extend: {
    colors: {
      primary: {
        white: '#f2fff0ff',
        gray: '#bbc5baff',
        lightGreen: '#168200ff',
        darkGreen: '#0c4600ff',
      },
    },
    fontFamily: {
      sans: ['Inter', ..._fontFamily.sans],
      serif: ['Merriweather', ..._fontFamily.serif],
    },
  },
}

export const plugins = [
  require('@tailwindcss/aspect-ratio'),
]
