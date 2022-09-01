import styled from 'styled-components'
import { colors, fontSizes } from 'theme'

const SubHeaderTitle = styled.button<{
  color: string
  fontSize: number
  width?: number
}>`
  background-color: ${props => props.color};
  color: ${colors.text};
  font-size: ${props => props.fontSize || fontSizes[2]}px;
  border-radius: 24px;
  height: 56px;
  width: ${props => props.width || '256'}px;
`

export default {
  SubHeaderTitle,
}
