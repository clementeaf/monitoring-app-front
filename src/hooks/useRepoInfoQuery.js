import { useQuery } from "react-query";
import { fetchRepoInfo } from "../services/RepoInfoFetch";

export default function useRepoInfoQuery() {
    return useQuery({
        queryKey: ["repoInfoQuery"],
        queryFn: () => fetchRepoInfo(),
    })
}