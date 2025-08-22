import { FaJs, FaHtml5, FaCss3Alt, FaFileAlt, FaReact } from 'react-icons/fa';
import { SiTypescript, SiJson, SiMarkdown } from 'react-icons/si';

export const FileIcon = ({ extension }) => {
    switch (extension) {
        case 'js':
            return <FaJs className="text-yellow-500" />;
        case 'jsx':
            return <FaReact className="text-blue-500" />; // Use React icon for JSX
        case 'ts':
        case 'tsx':
            return <SiTypescript className="text-blue-500" />;
        case 'html':
            return <FaHtml5 className="text-orange-500" />;
        case 'css':
            return <FaCss3Alt className="text-blue-400" />;
        case 'json':
            return <SiJson className="text-green-500" />;
        case 'md':
            return <SiMarkdown className="text-gray-400" />;
        default:
            return <FaFileAlt className="text-gray-400" />;
    }
};

