import React, { ReactNode } from 'react'
import styled from './Text.style'
import { fontSizeDefault, colors } from 'theme'
export type TextTypeProps = {
  fontSize?: number
  color?: string
  children: ReactNode
}
export default function Text({
  fontSize = fontSizeDefault,
  color = colors.text,
  children,
}: TextTypeProps) {
  return (
    <styled.Text fontSize={fontSize} color={color}>
      {children}
    </styled.Text>
  )
}
