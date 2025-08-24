import { useTreeStructureStore } from "../../../store/treeStuctureStore";
import { useEffect } from "react";
import TreeNode from "../../molecules/TreeNode/TreeNode";
import { useFileContextMenuStore } from "../../../store/fileContextMenuStore";
import { FileContextMenu } from "../../molecules/ContextMenu/FileContextMenu";
import { useFolderContextMenuStore } from "../../../store/folderContextMenuStore";
import { FolderContextMenu } from "../../molecules/ContextMenu/FolderContextMenu";

export const TreeStructure = () => {

    const { treeStructure, setTreeStructure } = useTreeStructureStore();
    const { file, isVisible: isFileContextVisible, x: fileContextX, y: fileContextY } = useFileContextMenuStore();
    const { folder, isVisible: isFolderContextVisible, x: folderContextX, y: folderContextY } = useFolderContextMenuStore();


    useEffect(() => {
        if (treeStructure) {
            console.log(treeStructure);
        } else {
            setTreeStructure();
        }
    }, [setTreeStructure, treeStructure]);

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex-grow overflow-y-auto">
                {isFileContextVisible && fileContextX && fileContextY && (<FileContextMenu x={fileContextX} y={fileContextY} path={file} />)}
                {isFolderContextVisible && folderContextX && folderContextY && (<FolderContextMenu x={folderContextX} y={folderContextY} path={folder} />)}
                <TreeNode fileFolderData={treeStructure} />
            </div>
        </div>
    );
}
