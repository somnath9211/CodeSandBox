import React from 'react'
import Editor from '@monaco-editor/react'

const EditorComponent = () => {
    return (
        <>
            <Editor
                height="90vh"
                defaultLanguage="javascript"
                defaultValue="// some comment"
                theme="vs-dark"
                options={{
                    fontSize: 16,
                    fontFamily: 'Fira Code, monospace',
                    fontLigatures: true,
                    lineNumbers: 'on',
                    minimap: {
                        enabled: true,
                        scale: 1.5,
                    },
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                }}
            />
        </>
    )
}

export default EditorComponent