import React from 'react'
import { colors } from 'theme'
import styled from './ListItem.style'
export type ListItemTypeProps = {
  size?: number
  color?: string
}
export default function ListItem({
  size = 14,
  color = colors.primary,
}: ListItemTypeProps) {
  return <styled.ListItem size={size} color={color} />
}
