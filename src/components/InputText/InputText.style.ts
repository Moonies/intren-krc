import styled from 'styled-components'
import { colors, fontSizes } from 'theme'

const InputText = styled.input<{
  //   color: string
  //   fontSize: number
  width?: number
}>`
    height: '48px',
    fontSize: ${fontSizes[5]}'px',
    border: 'solid 1px ${colors.gray[0]}',
    borderRadius: '8px',
`

export default {
  InputText,
}
