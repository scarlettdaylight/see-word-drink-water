import * as React from 'react';
import { Text, TextProps } from './Themed';
import { tailwind, textPrimary } from 'tailwind';

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }, textPrimary]} />;
}

export function PrimaryText(props: TextProps) {
  return <Text {...props} style={[props.style, tailwind('text-gray-900')]} />;
}

export function SecondaryText(props: TextProps) {
  return <Text {...props} style={[props.style, tailwind('text-gray-500')]} />;
}
