import { tailwind, getColor } from 'tailwind'

const tintColorLight = '#2f95dc'
const tintColorDark = '#fff'

export default {
  light: {
    text: getColor('gray-900'),
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
}
