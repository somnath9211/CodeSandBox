import { createProjectService, getProjectTreeService } from "../service/projectService.js";

export const createProjectController = async (req, res) => {
    const projectId = await createProjectService();
    return res.status(200).json({ message: 'Project created successfully!', data: projectId });
}

export const getProjectTree = async (req, res) => {
    const tree = await getProjectTreeService(req.params.projectId);
    return res.status(200).json({ success: true, message: 'Project tree fetched successfully!', data: tree });
}