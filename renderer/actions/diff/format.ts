/**
 * 将非标准 json 格式化成常规 json
 * @param json
 */
export default function format(json: string): string | undefined {
  let formatJson

  try {
    formatJson = JSON.parse(json)
  } catch (e) {
    return ''
  }

  return JSON.stringify(formatJson, null, 2)
}
