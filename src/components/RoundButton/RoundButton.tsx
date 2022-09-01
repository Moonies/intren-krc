import React, { ButtonHTMLAttributes } from 'react'
import styled from './RoundButton.style'
export type RoundButton = ButtonHTMLAttributes<'button'> & {
  title: string
  fontSize: number
  color: string
  width?: number
  onClick: () => void
}
export default function RoundButton({
  title,
  onClick,
  fontSize,
  color,
  width,
}: RoundButton) {
  return (
    <styled.SubHeaderTitle
      onClick={onClick}
      color={color}
      fontSize={fontSize}
      width={width}
    >
      {title}
    </styled.SubHeaderTitle>
  )
}
