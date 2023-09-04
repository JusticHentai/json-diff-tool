import { Change } from 'diff'
export default function render(lineDiffRes: Change[]) {
  const nodeList = getRenderDom()

  // getRenderRes(lineDiffRes)

  resetStyle()

  addStyle(nodeList, lineDiffRes)
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

enum DIFF_STYLE {
  'REMOVED' = '#ebdaec',
  'ADDED' = '#ceeedf',
}

function addStyle(nodeList: Element[], lineDiffRes: Change[]) {
  const currentLine = [0, 0]

  for (const change of lineDiffRes) {
    if (!isChangeLine(change)) {
      currentLine[0] += change.count
      currentLine[1] += change.count

      continue
    }

    const diffTree = change.added ? 1 : 0
    const color = change.added ? DIFF_STYLE.ADDED : DIFF_STYLE.REMOVED

    for (let i = 1; i <= change.count; i++) {
      const current = i + currentLine[diffTree]

      nodeList[diffTree].children[current - 1].style.backgroundColor = color

      elementMap.set(nodeList[diffTree].children[current - 1], {
        backgroundColor: color,
      })
    }

    currentLine[diffTree] += change.count
  }
}

const elementMap = new Map<
  Element,
  {
    marginTop?: string
    backgroundColor: string
  }
>()

function resetStyle() {
  for (const [key, value] of elementMap) {
    for (const valueKey in value) {
      key.style[valueKey] = 'transparent'
    }
  }

  elementMap.clear()
}
