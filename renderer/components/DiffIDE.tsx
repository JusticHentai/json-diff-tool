import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-tomorrow'
import { useEffect, useState } from 'react'
import { diff as DiffEditor } from 'react-ace'
import diffProcess from '../actions/diff/process'
import render from '../actions/render/render'

const DiffIde = () => {
  const [diffText, setDiffText] = useState(['', ''])
  const [diff, setDiff] = useState([])

  useEffect(() => {
    setTimeout(() => {
      render(diff)
    }, 100)
  }, [diff])

  const onChange = (newValue) => {
    const { diff: diffLine, format } = diffProcess(newValue[0], newValue[1])

    setDiffText(format)
    setDiff(diffLine)
  }

  return (
    <>
      <DiffEditor
        value={diffText}
        mode="json"
        theme="tomorrow"
        onChange={onChange}
        name="json-diff"
        width="100%"
        height="100%"
        editorProps={{
          $blockScrolling: true,
        }}
        setOptions={{
          useWorker: false,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          tabSize: 2,
        }}
      />
    </>
  )
}

export default DiffIde
