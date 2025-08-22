import { useQuery } from "@tanstack/react-query";
import { getProjectTreeApi } from "../../../apis/project";
export const useProjectTree = (projectId) => {
    const { isLoading, isError, data: projectTree, error } = useQuery({
        queryKey: ['projectTree'],
        queryFn: () => getProjectTreeApi({ projectId }),
    })
    return {
        isLoading,
        isError,
        projectTree,
        error
    }
}  