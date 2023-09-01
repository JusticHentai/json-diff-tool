import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-tomorrow'
import { useState } from 'react'
import { diff as DiffEditor } from 'react-ace'
import diffProcess from '../utils/diff/process'

const DiffIde = () => {
  const [diffText, setDiffText] = useState(['', ''])

  const onChange = (newValue) => {
    diffProcess(newValue[0], newValue[1])
    setDiffText(newValue)
    console.log('change', newValue)
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
