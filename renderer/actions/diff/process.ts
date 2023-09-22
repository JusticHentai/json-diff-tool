import { Change, diffChars, diffLines } from 'diff'

export default function diffProcess(
  json1: string,
  json2: string
): {
  diff: Change[]
  format: [string, string]
} {
  const formatJson1 = json1 // format(json1)
  const formatJson2 = json2 // format(json2)

  const lineDiffRes = diffLines(formatJson1, formatJson2)
  const charDiffRes = diffChars(formatJson1, formatJson2)

  console.log({
    input: [json1, json2],
    format: [formatJson1, formatJson2],
    lineDiff: lineDiffRes,
    charDiff: charDiffRes,
  })

  return {
    diff: lineDiffRes,
    format: [formatJson1 || json1, formatJson2 || json2],
  }
}
