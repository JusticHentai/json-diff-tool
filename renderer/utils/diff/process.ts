import { diffChars } from 'diff'

export default function diffProcess(json1: string, json2: string) {
  const res = diffChars(json1, json2)

  console.log(res)
}
