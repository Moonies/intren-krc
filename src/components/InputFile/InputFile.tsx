import RoundButton from 'components/RoundButton'
import React, { ChangeEvent, useCallback, useRef } from 'react'
import { colors } from 'theme'
import styled from './InputFile.style'
export type InputFileProps = {
  title: string
  fontSize: number
  fontColor?: string
  color: string
  outlineColor?: string
  width?: number
  fontWeight?: number
  height?: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export default function InputFile({
  title,
  fontSize,
  fontColor = colors.white,
  fontWeight = 0,
  height = 56,
  width,
  color,
  outlineColor = color,
  onChange,
}: InputFileProps) {
  const uploadInputRef = useRef<HTMLInputElement>(null)
  const onClickUpload = useCallback(() => {
    uploadInputRef.current?.click()
  }, [])
  return (
    <>
      <styled.InputUploadFile
        ref={uploadInputRef}
        type="file"
        id="img"
        name="img"
        accept="image/*"
        onChange={onChange}
      />
      <RoundButton
        title={title}
        fontColor={fontColor}
        fontSize={fontSize}
        width={width}
        outlineColor={outlineColor}
        color={color}
        height={height}
        fontWeight={fontWeight}
        onClick={onClickUpload}
      />
    </>
  )
}
