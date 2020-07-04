import { create } from 'tailwind-rn'
import styles from '../styles.json'

const stylePack = create(styles)

export const tailwind = stylePack.tailwind
export const getColor = stylePack.getColor
export const textPrimary = tailwind('text-blue-500 text-opacity-50')
//=> {color: 'rgba(66, 153, 225, 0.5)'}
