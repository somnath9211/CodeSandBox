import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises';
import uuid4 from 'uuid4';
import { REACT_PROJECT_COMMAND } from '../config/serverConfig.js';

const execPromise = util.promisify(child_process.exec);

export const createProjectController = async (req, res) => {
    // 1st Create a unique id and then inside Projects folder create a new folder with that id

    const porjectId = uuid4();
    await fs.mkdir(`./projects/${porjectId}`);
    // 2nd after this call the npm create vite command to create a new vite project inside the folder created in step 1
    const response = await execPromise(REACT_PROJECT_COMMAND, { cwd: `./projects/${porjectId}` });
    return res.status(200).json({ message: 'Project created successfully!', data: porjectId });
}