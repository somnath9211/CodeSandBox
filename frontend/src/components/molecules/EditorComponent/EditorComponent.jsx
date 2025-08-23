import React from 'react'
import Editor from '@monaco-editor/react'
import { useEditorSocketStore } from '../../../store/editorSocketStore';
import { useActiveFileTabStore } from '../../../store/activeFileTabStore';

const EditorComponent = () => {

    const { editorSocket } = useEditorSocketStore();
    const { activeFileTab, setActiveFileTab } = useActiveFileTabStore()
    console.log("Active File Tab:", activeFileTab);

    editorSocket?.on("readFileSuccess", (data) => {
        console.log("File data received:", data);
        setActiveFileTab(data.path, data.value)
    })
    return (
        <>
            <Editor
                height="90vh"
                defaultLanguage="undefined"
                value={activeFileTab?.value ? activeFileTab.value : "// Your code goes here..."}
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