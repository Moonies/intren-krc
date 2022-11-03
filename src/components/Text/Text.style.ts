import styled from 'styled-components'
const Text = styled.p<{
  fontSize: number
  color: string
  textDecoration: string
  fontWeight: number
}>`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  white-space: pre-wrap;
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`

export default {
  Text,
}
