import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import EditorButtonComponent from "../components/atoms/EditorButtonComponent/EditorButtonComponent";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";
import { useEffect } from "react";
import { useTreeStructureStore } from "../store/treeStuctureStore";


const ProjectPlayground = () => {
    const { projectId: projectIdFromUrl } = useParams();

    const { setProjectId, projectId } = useTreeStructureStore()

    useEffect(() => {
        setProjectId(projectIdFromUrl);
    }, [setProjectId, projectIdFromUrl]);
    return (
        <>
            projectId: {projectIdFromUrl};s
            {projectId && (<div className="bg-[#333254] pr-4 pt[0.3vh] min-w-[250px] max-w-[25%] h-[99.7vh] overflow-auto">
                <TreeStructure />
            </div>)}
            <EditorComponent />
            <EditorButtonComponent isActive={false} />
            <EditorButtonComponent isActive={true} />

        </>
    )
}

export default ProjectPlayground;  