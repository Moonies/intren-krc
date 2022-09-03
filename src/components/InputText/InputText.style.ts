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
  border-radius: 8px;
  color: ${colors.gray[1]};
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
