import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import EditorButtonComponent from "../components/atoms/EditorButtonComponent/EditorButtonComponent";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";
import { useEffect } from "react";
import { useTreeStructureStore } from "../store/treeStuctureStore";
import { useEditorSocketStore } from "../store/editorSocketStore";
import { io } from "socket.io-client";
import BrowserTerminal from "../components/molecules/BrowserTerminal/BrowserTerminal";

const ProjectPlayground = () => {
    const { projectId: projectIdFromUrl } = useParams();
    const { setProjectId, projectId } = useTreeStructureStore();

    const { setEditorSocket } = useEditorSocketStore();

    useEffect(() => {
        if (projectIdFromUrl) {
            setProjectId(projectIdFromUrl);
            const editorSocketConnection = io(`${import.meta.env.VITE_BACKEND_URL}/editor`, {
                query: { projectId: projectIdFromUrl },
                // transports: ['websocket'],
                // reconnectionAttempts: 5,
                // timeout: 10000,
            });
            setEditorSocket(editorSocketConnection);
        }

    }, [setProjectId, projectIdFromUrl, setEditorSocket]);

    return (
        <div className="w-screen h-screen bg-[#232238] flex flex-col">

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                {projectId && (
                    <aside className="bg-[#333254] min-w-[250px] max-w-[25%] h-full overflow-auto py-4 px-2 border-r border-[#232238]">
                        <TreeStructure />
                    </aside>
                )}
                {/* Editor Area */}
                <main className="flex-1 h-full overflow-auto bg-[#232238] p-0 flex flex-col">
                    {/* Tabs Bar (Editor Buttons) */}
                    <div className="flex items-center gap-1 px-2 py-0 border-b border-[#333254] bg-[#232238]">
                        <EditorButtonComponent isActive={true} />
                        <EditorButtonComponent isActive={false} />
                        {/* Add more EditorButtonComponent for more tabs */}
                    </div>
                    {/* Editor Content */}
                    <div className="flex-1 p-0">
                        <EditorComponent />
                        <div>
                            <BrowserTerminal />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ProjectPlayground;