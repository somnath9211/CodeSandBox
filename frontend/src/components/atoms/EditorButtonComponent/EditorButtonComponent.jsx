import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const EditorButtonComponent = ({ isActive }) => {
    const [visible, setVisible] = useState(true);

    const handleClose = (e) => {
        e.stopPropagation();
        setVisible(false);
    };

    const handleClick = () => {
        console.log('Button clicked!');
    };

    if (!visible) return null;

    return (
        <div className="relative inline-block">
            <button
                className={`${isActive
                    ? 'bg-[#f7b9dd] text-black'
                    : 'bg-[#303242] text-white'
                    } font-bold text-sm h-[30px] min-w-[100px] px-[7px] py-[3px] rounded border-t-[1px] border-t-[#f7b9dd] hover:bg-gray-700 focus:outline-none flex items-center justify-between`}
                onClick={handleClick}
            >
                <span>{isActive ? 'Active File' : 'New File'}</span>
                <span
                    className="ml-2 text-lg text-gray-400 hover:text-red-500 cursor-pointer"
                    onClick={handleClose}
                >
                    <IoMdClose />
                </span>
            </button>
        </div>
    );
};

export default EditorButtonComponent;