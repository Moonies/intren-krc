import styled from 'styled-components'
const Text = styled.p<{
  fontSize: number
  color: string
  textDecoration: string
}>`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  white-space: pre-wrap;
  text-decoration: ${props => props.textDecoration};
`

export default {
  Text,
}
