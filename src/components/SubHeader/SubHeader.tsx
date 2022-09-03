import React from 'react'
import styled from './SubHeader.style'
export type SubHeader = {
  title?: string
}
export default function SubHeader({ title }: SubHeader) {
  const isEmpty = !title
  return (
    <styled.SubHeaderTitle className="mt-2" isEmpty={isEmpty}>
      {title}
    </styled.SubHeaderTitle>
  )
}
