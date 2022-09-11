import React, { ButtonHTMLAttributes } from 'react'
import { colors } from 'theme'
import styled from './RoundButton.style'
export type RoundButtonProps = ButtonHTMLAttributes<'button'> & {
  title: string
  fontSize: number
  fontColor?: string
  color: string
  outlineColor?: string
  width?: number
  fontWeight?: number
  height?: number
  onClick: () => void
}
export default function RoundButton({
  title,
  onClick,
  fontSize,
  fontColor = colors.white,
  color,
  outlineColor = color,
  width,
  fontWeight = 0,
  height = 56,
}: RoundButtonProps) {
  return (
    <styled.Button
      onClick={onClick}
      color={color}
      fontSize={fontSize}
      width={width}
      fontColor={fontColor}
      outlineColor={outlineColor}
      fontWeight={fontWeight}
      height={height}
    >
      {title}
    </styled.Button>
  )
}
