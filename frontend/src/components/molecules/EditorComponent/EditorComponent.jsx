import React from 'react'
import Editor from '@monaco-editor/react'
import { useActiveFileTabStore } from '../../../store/activeFileTabStore';
import { useEditorSocketStore } from '../../../store/editorSocketStore';
import { extensionToFileType } from '../../../utils/extensionToFileType';

const EditorComponent = () => {

    let timerId = null;

    const { editorSocket } = useEditorSocketStore();

    const { activeFileTab } = useActiveFileTabStore()
    console.log("Active File Tab:", activeFileTab);

    function handleEditorChange(value) {
        // Debounce logic to limit the frequency of socket emissions
        // Clear the previous timer if it exists
        if (timerId !== null) {
            clearTimeout(timerId);
        }
        // Set a new timer to emit the socket event after 2 seconds of inactivity
        timerId = setTimeout(() => {
            const editorContent = value;
            console.log("Editor content changed:", value);
            editorSocket.emit("writeFile", { data: editorContent, pathToFileOrFolder: activeFileTab.path });
        }, 2000)
    }

    return (
        <>
            <Editor
                height="90vh"
                defaultLanguage="Undefined"
                value={activeFileTab?.value ? activeFileTab.value : "// Your code goes here..."}
                theme="vs-dark"
                language={extensionToFileType(activeFileTab?.extension)}
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
                onChange={handleEditorChange}
            />
        </>
    )
}

export default EditorComponent