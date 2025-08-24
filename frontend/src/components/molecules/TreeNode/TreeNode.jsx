import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { FileIcon } from '../../atoms/FileIcon/FileIcon';
import { useEditorSocketStore } from '../../../store/editorSocketStore';
import { useFileContextMenuStore } from '../../../store/fileContextMenuStore';
import { useFolderContextMenuStore } from '../../../store/folderContextMenuStore';

const TreeNode = ({ fileFolderData }) => {
    const [visibility, setVisibility] = useState({});

    const { editorSocket } = useEditorSocketStore();
    const {
        setFile,
        setIsVisible: setFileContextMenuVisible,
        setX: setFileContextMenuX,
        setY: setFileContextMenuY
    } = useFileContextMenuStore();

    const {
        setFolder,
        setIsVisible: setFolderContextMenuVisible,
        setX: setFolderContextMenuX,
        setY: setFolderContextMenuY
    } = useFolderContextMenuStore();

    function toggleVisibility(name) {
        setVisibility({
            ...visibility,
            [name]: !visibility[name]
        });
    }

    if (!fileFolderData) return null;

    const getExtension = (name) => {
        const parts = name.split('.');
        return parts.length > 1 ? parts.pop() : '';
    };

    function handleDoubleClick(fileFolderData) {
        console.log("Double clicked on:", fileFolderData);
        editorSocket.emit("readFile", { pathToFileOrFolder: fileFolderData.path });
    }

    function handleContextMenuForFile(e, path) {
        e.preventDefault();
        console.log("Right clicked on file:", path);
        // You can implement a custom context menu here
        setFile(path);
        setFileContextMenuX(e.clientX);
        setFileContextMenuY(e.clientY);
        setFileContextMenuVisible(true);
    }
    function handleContextMenuForFolder(e, path) {
        e.preventDefault();
        console.log("Right clicked on folder:", path);
        // You can implement a custom context menu here
        setFolder(path);
        setFolderContextMenuX(e.clientX);
        setFolderContextMenuY(e.clientY);
        setFolderContextMenuVisible(true);
    }

    return (
        <div className="ml-2">
            {fileFolderData.children ? (
                <button
                    className="flex items-center gap-2 px-2 py-1 rounded transition-colors text-left w-full text-white bg-transparent font-medium cursor-pointer hover:bg-gray-800"
                    onClick={() => toggleVisibility(fileFolderData.name)}
                    onContextMenu={(e) => handleContextMenuForFolder(e, fileFolderData.path)}
                >
                    {visibility[fileFolderData.name] ? (
                        <IoIosArrowDown />
                    ) : (
                        <IoIosArrowForward />
                    )}
                    {fileFolderData.name}
                </button>
            ) : (
                <div className="flex items-center gap-2 px-2 py-1 rounded transition-colors text-left w-full text-white bg-transparent font-medium cursor-pointer hover:bg-gray-700">
                    <FileIcon extension={getExtension(fileFolderData.name)} />
                    <p className="font-bold" onContextMenu={(e) => handleContextMenuForFile(e, fileFolderData.path)} onDoubleClick={() => handleDoubleClick(fileFolderData)}>{fileFolderData.name}</p>
                </div>
            )}
            {visibility[fileFolderData.name] && fileFolderData.children && (
                <div className="ml-4">
                    {fileFolderData.children.map((child) => (
                        <TreeNode key={child.name} fileFolderData={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TreeNode;