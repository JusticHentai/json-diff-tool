import { css, SerializedStyles } from '@emotion/react'

export default function right(rightValue = '0'): SerializedStyles {
  return css({
    position: 'absolute',
    right: rightValue,
  })
}
