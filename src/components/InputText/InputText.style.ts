import styled from 'styled-components'
import { colors, fontSizes } from 'theme'

const InputText = styled.input<{
  //   color: string
  //   fontSize: number
  width?: number
}>`
  height: 48px;
  font-size: ${fontSizes[5]}px;
  border: solid 1px ${colors.gray[0]};
  box-shadow: inset 1px 2px 6px;
  color: ${colors.gray[1]};
  width: ${props => props.width}px;
  :focus {
    outline: 3px solid ${colors.lightBlue};
    color: ${colors.lightNavy};
  }
  ::placeholder{
    color: #d7d6d6;
  }
  ,
`

export default {
  InputText,
}
