import { useQuery } from "@tanstack/react-query";
import { pingApi } from "../../../apis/ping";

export default function usePing() {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["ping"],
        queryFn: pingApi,
        staleTime: 1000 * 60 * 5, // 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes
    });

    return {
        isLoading,
        isError,
        data,
        error
    }
}; 