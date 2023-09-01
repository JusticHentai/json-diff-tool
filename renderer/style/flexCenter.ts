import { css, SerializedStyles } from '@emotion/react'

enum FLEX_PROPERTY {
  justifyContent = 'center',
  alignItems = 'center',
}

export type RevertProps = Array<keyof typeof FLEX_PROPERTY>

export default function flexCenter(
  revertProps: RevertProps = []
): SerializedStyles {
  const res = { ...FLEX_PROPERTY }

  for (const key of revertProps) {
    if (!res[key]) {
      continue
    }

    delete res[key]
  }

  return css({
    display: 'flex',
    ...res,
  })
}
