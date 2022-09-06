import React from 'react'
import styled from './SubHeader.style'
export type SubHeader = {
  title?: string
  height?: number
}
export default function SubHeader({ title, height = 8 }: SubHeader) {
  const isEmpty = !title
  return (
    <styled.SubHeaderTitle className="mt-2" isEmpty={isEmpty} height={height}>
      {title}
    </styled.SubHeaderTitle>
  )
}
