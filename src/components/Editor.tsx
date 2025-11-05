import Editor from '@monaco-editor/react'
import './Editor.css'

interface EditorProps {
  value: string
  onChange: (value: string) => void
}

export default function LaTeXEditor({ value, onChange }: EditorProps) {
  const handleEditorChange = (value: string | undefined) => {
    onChange(value || '')
  }

  return (
    <div className="monaco-editor-container">
      <Editor
        height="100%"
        defaultLanguage="latex"
        value={value}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: true },
          scrollBeyondLastLine: false,
          fontSize: 14,
          lineNumbers: 'on',
          wordWrap: 'on',
          formatOnPaste: true,
          formatOnType: true,
          automaticLayout: true,
        }}
      />
    </div>
  )
}

