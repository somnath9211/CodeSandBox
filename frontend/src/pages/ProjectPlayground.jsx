import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import EditorButtonComponent from "../components/atoms/EditorButtonComponent/EditorButtonComponent";


const ProjectPlayground = () => {
    const { projectId } = useParams();
    return (
        <>
            projectId: {projectId};
            <EditorComponent />
            <EditorButtonComponent />
        </>
    )
}

export default ProjectPlayground;