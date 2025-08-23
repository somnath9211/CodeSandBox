import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { FileIcon } from '../../atoms/FileIcon/FileIcon';
import { useEditorSocketStore } from '../../../store/editorSocketStore';

const TreeNode = ({ fileFolderData }) => {
    const [visibility, setVisibility] = useState({});

    const { editorSocket } = useEditorSocketStore();

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

    return (
        <div className="ml-2">
            {fileFolderData.children ? (
                <button
                    className="flex items-center gap-2 px-2 py-1 rounded transition-colors text-left w-full text-white bg-transparent font-medium cursor-pointer hover:bg-gray-800"
                    onClick={() => toggleVisibility(fileFolderData.name)}
                >
                    {visibility[fileFolderData.name] ? (
                        <IoIosArrowDown />
                    ) : (
                        <IoIosArrowForward />
                    )}
                    <p onDoubleClick={() => handleDoubleClick(fileFolderData)}>{fileFolderData.name}</p>
                </button>
            ) : (
                <div className="flex items-center gap-2 px-2 py-1 rounded transition-colors text-left w-full text-white bg-transparent font-medium cursor-pointer hover:bg-gray-700">
                    <FileIcon extension={getExtension(fileFolderData.name)} />
                    <p className="font-bold" onDoubleClick={() => handleDoubleClick(fileFolderData)}>{fileFolderData.name}</p>
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