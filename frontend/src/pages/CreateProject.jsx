import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";


const CreateProject = () => {

    const { createProjectMutation, isPending } = useCreateProject();

    async function handleCreateProject() {
        console.log("Creating project...");
        try {
            await createProjectMutation();
            console.log("Project created successfully:");
        } catch (error) {
            console.error("Error creating project:", error);
        }
    }
    return (
        <div>
            <h1>Create Project</h1>
            <button onClick={handleCreateProject}>Create Project</button>
        </div>
    )
}

export default CreateProject;