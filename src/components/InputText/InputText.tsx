import React, { ChangeEvent } from 'react'
import styled from './InputText.style'
export type InputTextProps = {
  typeInput?: string
  typeText?: string
  size?: number
  placeHolder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export default function InputText({
  typeInput = 'text',
  // typeText = 'input',
  placeHolder,
  size = 276,
  onChange,
}: InputTextProps) {
  return (
    <styled.InputText
      onChange={onChange}
      placeholder={placeHolder}
      type={typeInput}
      width={size}
    />
  )
}
