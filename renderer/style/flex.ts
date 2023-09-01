import { css, SerializedStyles } from '@emotion/react'

export interface flexProps {
  direction?: 'row' | 'column'
  childFlex: number[]
}

export default function flex(props: flexProps): {
  container: SerializedStyles
  child: SerializedStyles[]
} {
  const { direction, childFlex } = props

  const container = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: direction || 'row',
    width: '100%',
    height: '100%',
  })

  const child = []
  const childDirection = direction === 'column' ? 'width' : 'height'

  for (const item of childFlex) {
    child.push(
      css({
        flex: item,
        [childDirection]: '100%',
      })
    )
  }

  return {
    container,
    child,
  }
}
