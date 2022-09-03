import styled, { css } from 'styled-components'
import { colors, fontSizes } from 'theme'
const SubHeaderTitle = styled.div<{
  isEmpty: boolean
}>`
  ${props => {
    switch (props.isEmpty) {
      case true:
        return css`
          background-color: ${colors.primary};
          color: ${colors.text};
          height: 8px;
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
