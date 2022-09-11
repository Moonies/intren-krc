import React, { ChangeEvent } from 'react'
import styled from './InputTextArea.style'
export type InputTextAreaProps = {
  typeInput?: string
  typeText?: string
  size?: number
  placeHolder: string
  row?: number
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
export default function InputTextArea({
  onChange,
  placeHolder,
  size = 276,
  row = 3,
}: InputTextAreaProps) {
  return (
    <styled.InputTextArea
      onChange={onChange}
      placeholder={placeHolder}
      width={size}
      rows={row}
    />
  )
}
