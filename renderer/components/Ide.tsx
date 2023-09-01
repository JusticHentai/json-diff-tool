import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-tomorrow'
import AceEditor from 'react-ace'

const Ide = () => {
  const onChange = (newValue) => {
    console.log('change', newValue)
  }

  return (
    <AceEditor
      mode="json"
      theme="tomorrow"
      onChange={onChange}
      name="json-diff"
      width="50%"
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
  )
}

export default Ide
