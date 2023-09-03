// import parse from './parse'
import { diffLines } from 'diff'
import render from './render'

export default function diffProcess(json1: string, json2: string) {
  // const jsonAstList = parse([json1, json2])
  //
  // if (jsonAstList.length === 0) {
  //   return
  // }
  //
  // console.log(jsonAstList)

  const lineDiffRes = diffLines(json1, json2)

  console.log({
    input: [json1, json2],
    output: lineDiffRes,
  })

  render(lineDiffRes)
}
