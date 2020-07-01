import {create} from 'tailwind-rn';
import styles from '../styles.json';

const {tailwind, getColor} = create(styles);

export const textPrimary = tailwind('text-blue-500 text-opacity-50');
//=> {color: 'rgba(66, 153, 225, 0.5)'}
