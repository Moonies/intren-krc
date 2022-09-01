import React, {
  InputHTMLAttributes,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  ChangeEventHandler,
} from 'react'
import styled from './InputText.style'
export type InputTextProps = {
  typeInput?: string
  typeText?: string
  size?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export default function InputText({
  typeInput = 'text',
  typeText = 'input',
  onChange,
}: InputTextProps) {
  return <styled.InputText onChange={onChange} />
}
