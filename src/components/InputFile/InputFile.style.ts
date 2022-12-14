import styled from 'styled-components'
import { fontSizes } from 'theme'

const InputUploadFile = styled.input`
  display: none;
`

const ButtonUpload = styled.div<{
  color: string
  fontSize: number
  fontColor: string
  outlineColor: string
  width?: number
  fontWeight: number
  height: number
}>`
  background-color: ${props => props.color};
  color: ${props => props.fontColor};
  font-size: ${props => props.fontSize || fontSizes[2]}px;
  border-radius: 24px;
  height: ${props => props.height}px;
  width: ${props => props.width || '256'}px;
  box-shadow: 0px 7px 8px;
  outline: 3px solid ${props => props.outlineColor};
  font-weight: ${props => props.fontWeight};
`

export default {
  InputUploadFile,
  ButtonUpload,
}
