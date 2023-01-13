import * as monacoEditor from 'monaco-editor'
import { onMount } from 'solid-js'

const value = ''
const height = 240
const defaultValue = ''
const readOnly = false

export default function Editor () {
  let dom: HTMLDivElement | ((el: HTMLDivElement) => void) | undefined
  onMount(() => {
    const editor = monacoEditor.editor.create(dom as HTMLElement, {
      value: value || defaultValue,
      theme: 'vs-dark',
      lineNumbers: 'on',
      automaticLayout: true,
      readOnly,
      minimap: {
        enabled: false
      },
      scrollBeyondLastLine: false,
      wordWrap: 'on',
      links: false,
      fontSize: 12,
    })
    editor.layout({ height: 482, width: 528 })

    // editor.onDidChangeModelContent(updateValue)
  })
  return (
    <div class="monaco-editor-container">
      <div ref={dom} class="monaco-editor-dom"></div>
    </div>
  )
}