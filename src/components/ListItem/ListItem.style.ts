import styled from 'styled-components'
const ListItem = styled.div<{
  size: number
  color: string
}>`
  background: ${props => props.color};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  align-self: center;
  margin-inline: 4%;
`

export default {
  ListItem,
}
