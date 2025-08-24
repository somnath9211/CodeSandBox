
const extensioToTypenMap = {
    'js': 'javascript',
    'jsx': 'javascript',
    'ts': 'typescript',
    'tsx': 'typescript',
    'py': 'python',
    'java': 'java',
    'c': 'c',
    'cpp': 'cpp',
    'cs': 'csharp',
    'rb': 'ruby',
    'php': 'php',
    'html': 'html',
    'css': 'css',
    'json': 'json',
    'xml': 'xml',
    'md': 'markdown',
    "svg": "svg",
    'go': 'go',
    'rs': 'rust',
    'sh': 'shell',
    // Add more mappings as needed
};
export const extensionToFileType = (extension) => {
    if (!extension) return 'Undefined';
    console.log("File extension:", extensioToTypenMap[extension]);

    return extensioToTypenMap[extension]; // Return the mapped file type or undefined if not found
}  