import styled from 'styled-components'
const Text = styled.p<{
  fontSize: number
  color: string
}>`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  white-space: pre-wrap;
`

export default {
  Text,
}
