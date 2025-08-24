import { create } from "zustand";
import { useActiveFileTabStore } from "./activeFileTabStore";
import { useTreeStructureStore } from "./treeStuctureStore";
export const useEditorSocketStore = create((set) => ({
    editorSocket: null,
    setEditorSocket: (incomingSocket) => {
        const activeFileTabSetter = useActiveFileTabStore.getState().setActiveFileTab;
        const projectTreeStructureSetter = useTreeStructureStore.getState().setTreeStructure;
        incomingSocket?.on("readFileSuccess", (data) => {
            console.log("File data received:", data);
            const fileExtension = data.path.split('.').pop();
            activeFileTabSetter(data.path, data.value, fileExtension);
        })

        incomingSocket?.on("writeFileSuccess", (data) => {
            console.log("File write successful:", data);
            // You can add additional logic here if needed
            incomingSocket.emit("readFile", { pathToFileOrFolder: data.path });
        })
        incomingSocket?.on("deleteFileSuccess", (data) => {
            console.log("File delete successful:", data);
            projectTreeStructureSetter();
            incomingSocket.emit("readFile", { pathToFileOrFolder: data.path });
        })
        incomingSocket?.on("renameFileSuccess", (data) => {
            console.log("File rename successful:", data);
            // You can add additional logic here if needed
            incomingSocket.emit("readFile", { pathToFileOrFolder: data.path });
        })
        incomingSocket?.on("createFileSuccess", (data) => {
            console.log("File create successful:", data);
            // You can add additional logic here if needed
            incomingSocket.emit("readFile", { pathToFileOrFolder: data.path });
        })

        incomingSocket?.on("createFolderSuccess", (data) => {
            console.log("Folder create successful:", data);
            // You can add additional logic here if needed
            incomingSocket.emit("readFile", { pathToFileOrFolder: data.path });
        })

        incomingSocket?.on("deleteFolderSuccess", (data) => {
            console.log("Folder delete successful:", data);
            projectTreeStructureSetter();
            incomingSocket.emit("readFile", { pathToFileOrFolder: data.path });
        })

        incomingSocket?.on("renameFolderSuccess", (data) => {
            console.log("Folder rename successful:", data);
            // You can add additional logic here if needed
            incomingSocket.emit("readFile", { pathToFileOrFolder: data.path });
        })

        set({ editorSocket: incomingSocket })
    },
}));
