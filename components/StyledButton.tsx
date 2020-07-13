import * as React from 'react'
import { Button, ButtonProps } from './Themed'
import { getColor } from 'tailwind'

export const PrimaryButton = ({ onPress, title, accessibilityLabel, ...props }: ButtonProps) => {
  return (
    <Button
      onPress={onPress}
      title={title}
      color={getColor('blue-500')}
      accessibilityLabel={accessibilityLabel}
    />
  )
}
