import { useEditorSocketStore } from "../../../store/editorSocketStore"
import { useFolderContextMenuStore } from "../../../store/folderContextMenuStore";

export const FolderContextMenu = ({
    x,
    y,
    path
}) => {


    const { setIsVisible } = useFolderContextMenuStore();
    const { editorSocket } = useEditorSocketStore();

    function handleFolderDelete(e) {
        e.preventDefault()
        console.log('File deleted at path:', path);
        editorSocket.emit("deleteFolder", { pathToFileOrFolder: path });
    }



    return (
        <div>
            <div
                className="w-32 fixed bg-gray-800 text-white rounded shadow-lg z-50 border border-black"
                style={{ left: `${x}px`, top: `${y}px` }}
                onMouseLeave={() => {
                    setIsVisible(false);
                    console.log("Mouse left context menu, hiding it.");
                }}
            >
                <button className="text-white hover:bg-[#4d4b4b] bg-[#363545] border-none outline-none w-[100%] h-8 cursor-pointer p-1.5"> Create File </button>
                <button onClick={handleFolderDelete} className="text-white hover:bg-[#4d4b4b] bg-[#363545] border-none outline-none w-[100%] h-8 cursor-pointer p-1.5"> Delete Folder </button>
                <button className="text-white hover:bg-[#4d4b4b] bg-[#363545] border-none outline-none w-[100%] h-8 cursor-pointer p-1.5"> Rename Folder </button>

            </div>
        </div>
    )
}

