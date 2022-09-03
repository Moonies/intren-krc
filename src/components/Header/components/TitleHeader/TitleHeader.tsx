import React from 'react'
import styled from './TitleHeader.style'
export type TitleHeader = {
  title?: string
}
export default function TitleHeader({ title }: TitleHeader) {
  return (
    <styled.HeaderTitle className="flex justify-center items-center mt-2">
      {title}
    </styled.HeaderTitle>
  )
}
