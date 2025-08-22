import uuid4 from "uuid4";
import fs from 'fs/promises';
import { REACT_PROJECT_COMMAND } from '../config/serverConfig.js';
import { execPromise } from "../utils/execUtility.js";
import directoryTree from 'directory-tree';
import path from 'path';

export const createProjectService = async () => {
    // 1st Create a unique id and then inside Projects folder create a new folder with that id

    const projectId = uuid4();
    await fs.mkdir(`./projects/${projectId}`);
    // 2nd after this call the npm create vite command to create a new vite project inside the folder created in step 1
    const response = await execPromise(REACT_PROJECT_COMMAND, { cwd: `./projects/${projectId}` });

    return projectId;
}

export const getProjectTreeService = async (projectId) => {
    const projectPath = path.resolve(`./projects/${projectId}`);
    const tree = directoryTree(projectPath)
    return tree;
};
