import jsonParse from 'json-to-ast'

export default function parse(jsonStrList: string[]) {
  const res = []

  for (const jsonStr of jsonStrList) {
    const str = jsonStr.replace(/[\r\n]/g, '')

    try {
      res.push(jsonParse(str))
    } catch (e) {
      console.log(e)
    }
  }

  return res
}
