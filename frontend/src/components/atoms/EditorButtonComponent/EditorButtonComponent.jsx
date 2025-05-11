import React from 'react';

const EditorButtonComponent = ({ isActive }) => {
    return (
        <div>
            <button
                className={`${isActive
                        ? 'bg-[#f7b9dd] text-black' // Active state styles
                        : 'bg-[#303242] text-white' // Inactive state styles
                    } font-bold text-sm h-[30px] min-w-[100px] px-[7px] py-[3px] rounded border-t-[1px] border-t-[#f7b9dd] hover:bg-gray-700 focus:outline-none`}
            >
                {isActive ? 'Active File' : 'New File'}
            </button>
        </div>
    );
};

export default EditorButtonComponent;