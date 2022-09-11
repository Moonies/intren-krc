import React, { ReactNode } from 'react'
import styled from './Text.style'
import { fontSizeDefault, colors } from 'theme'
export type TextTypeProps = {
  fontSize?: number
  color?: string
  children: ReactNode
  textDecoration?: string
}
export default function Text({
  fontSize = fontSizeDefault,
  color = colors.text,
  children,
  textDecoration = 'none',
}: TextTypeProps) {
  return (
    <styled.Text
      fontSize={fontSize}
      color={color}
      textDecoration={textDecoration}
    >
      {children}
    </styled.Text>
  )
}
