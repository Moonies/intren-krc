import styled, { css } from 'styled-components'
import { colors, fontSizes } from 'theme'
const SubHeaderTitle = styled.div<{
  isEmpty: boolean
  height: number
}>`
  ${props => {
    switch (props.isEmpty) {
      case true:
        return css`
          background-color: ${colors.primary};
          color: ${colors.text};
          height: ${props.height}px;
        `

      default:
        return css`
          background-color: ${colors.primary};
          font-size: ${fontSizes[4]}px;
        `
    }
  }}
`

export default {
  SubHeaderTitle,
}
