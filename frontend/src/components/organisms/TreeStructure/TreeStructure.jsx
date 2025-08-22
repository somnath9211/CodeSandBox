import { useTreeStructureStore } from "../../../store/treeStuctureStore";
import { useEffect } from "react";
import TreeNode from "../../molecules/TreeNode/TreeNode";

export const TreeStructure = () => {

    const { treeStructure, setTreeStructure } = useTreeStructureStore();


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
                <TreeNode fileFolderData={treeStructure} />
            </div>
        </div>
    );
}
