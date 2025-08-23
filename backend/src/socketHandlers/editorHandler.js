import fs from 'fs/promises';
import path from 'path';

export const handleEditorSocketEvents = (socket) => {
    socket.on("writeFile", async ({ data, pathToFileOrFolder }) => {
        try {
            const response = await fs.writeFile(pathToFileOrFolder, data);
            socket.emit("writeFileSuccess", { data: "File written successfully" });
        } catch (error) {
            console.error("Error writing file:", error);
            socket.emit("writeFileError", { error: "Error writing file" });
        }
    });

    socket.on("createFile", async ({ pathToFileOrFolder }) => {
        const isFileExists = await fs.stat(pathToFileOrFolder);
        if (isFileExists) {
            socket.emit("createFileError", { error: "File already exists" });
            return;
        }
        try {
            const response = await fs.writeFile(pathToFileOrFolder, "");
            socket.emit("createFileSuccess", { data: "File created successfully" });
        } catch (error) {
            console.error("Error creating file:", error);
            socket.emit("createFileError", { error: "Error creating file" });
        }
    });

    socket.on("readFile", async ({ pathToFileOrFolder }) => {
        try {
            const response = await fs.readFile(pathToFileOrFolder, "utf-8");
            console.log("File read successfully:", response);
            socket.emit("readFileSuccess",
                {
                    value: response.toString(),
                    path: pathToFileOrFolder
                }
            );
        } catch (error) {
            console.error("Error reading file:", error);
            socket.emit("readFileError", { error: "Error reading file" });
        }
    });

    socket.on("deleteFile", async ({ pathToFileOrFolder }) => {
        try {
            const response = await fs.unlink(pathToFileOrFolder);
            socket.emit("deleteFileSuccess", { data: "File deleted successfully" });
        } catch (error) {
            console.error("Error deleting file:", error);
            socket.emit("deleteFileError", { error: "Error deleting file" });
        }
    });

    socket.on("createFolder", async ({ pathToFileOrFolder }) => {
        try {
            const response = await fs.mkdir(pathToFileOrFolder, { recursive: true });
            socket.emit("createFolderSuccess", { data: "Folder created successfully" });
        } catch (error) {
            console.error("Error creating folder:", error);
            socket.emit("createFolderError", { error: "Error creating folder" });
        }
    });

    socket.on("deleteFolder", async ({ pathToFileOrFolder }) => {
        try {
            const response = await fs.rmdir(pathToFileOrFolder, { recursive: true });
            socket.emit("deleteFolderSuccess", { data: "Folder deleted successfully" });
        } catch (error) {
            console.error("Error deleting folder:", error);
            socket.emit("deleteFolderError", { error: "Error deleting folder" });
        }
    });

    socket.on("rename", async ({ oldPath, newPath }) => {
        try {
            const response = await fs.rename(oldPath, newPath);
            socket.emit("renameSuccess", { data: "Renamed successfully" });
        } catch (error) {
            console.error("Error renaming:", error);
            socket.emit("renameError", { error: "Error renaming" });
        }
    });

} 