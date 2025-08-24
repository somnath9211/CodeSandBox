import { useEditorSocketStore } from "../../../store/editorSocketStore"
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore"

export const FileContextMenu = ({
  x,
  y,
  path
}) => {


  const { setIsVisible } = useFileContextMenuStore();
  const { editorSocket } = useEditorSocketStore();

  function handleFileDelete(e) {
    e.preventDefault()
    console.log('File deleted at path:', path);
    editorSocket.emit("deleteFile", { pathToFileOrFolder: path });
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
        <button onClick={handleFileDelete} className="text-white hover:bg-[#4d4b4b] bg-[#363545] border-none outline-none w-[100%] h-8 cursor-pointer p-1.5"> Delete </button>
        <button className="text-white hover:bg-[#4d4b4b] bg-[#363545] border-none outline-none w-[100%] h-8 cursor-pointer p-1.5"> Rename File </button>

      </div>
    </div>
  )
}

