import * as React from 'react'
import { Text, TextProps } from './Themed'
import { tailwind, textPrimary } from 'tailwind'

export const MonoText = (props: TextProps) => {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }, textPrimary]} />
}

export const PrimaryText = (props: TextProps) => {
  return <Text {...props} style={[props.style, tailwind('text-gray-900')]} />
}

export const SecondaryText = (props: TextProps) => {
  return <Text {...props} style={[props.style, tailwind('text-gray-500')]} />
}

export const HightlightText = (props: TextProps) => {
  return <Text {...props} style={[props.style, tailwind('text-blue-500')]} />
}
