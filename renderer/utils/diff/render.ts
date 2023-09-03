import { Change } from 'diff'
export default function render(lineDiffRes: Change[]) {
  const nodeList = getRenderDom()

  getRenderRes(lineDiffRes)

  console.log(nodeList)
}

export type ChangeItem = {
  added?: boolean
  removed?: boolean
  count: number
  emptyLine?: number
}

function getRenderDom(): Element[] {
  const nodeList = Array.from(
    document.querySelectorAll('.ace_content .ace_layer.ace_text-layer')
  )

  nodeList.splice(0, 1)

  return nodeList
}

function getRenderRes(lineDiffRes: Change[]) {
  const res: [ChangeItem[], ChangeItem[]] = [[], []]

  for (let i = 0; i < lineDiffRes.length; i++) {
    const currentChange = lineDiffRes[i]

    const nextChange =
      i + 1 === lineDiffRes.length ? undefined : lineDiffRes[i + 1]

    handleChange(currentChange, nextChange)
  }
}

function isChangeLine(change: Change): boolean {
  const { added, removed } = change

  return added || removed
}

function handleChange(currentChange: Change, nextChange: Change) {
  if (!isChangeLine(currentChange)) {
    return [{ count: currentChange.count }, { count: currentChange.count }]
  }

  const { added, removed, count } = currentChange

  if (!nextChange || !isChangeLine(nextChange)) {
    if (currentChange.added) {
      return [{ count }, { count }]
    } else {
    }
    const currentRes = { count }
  }

  const index = added ? 0 : 1
  const behavior = added ? 'added' : 'removed'

  for (let j = 0; j < count; j++) {
    const eachLine = {}

    eachLine[behavior] = true
  }
}
