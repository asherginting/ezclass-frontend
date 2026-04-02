import { useQuery } from "@tanstack/react-query";
import { getPlacementResult } from "../services/placementTestApi";
import { PlacementResult } from "../types";

export function useResultPolling(taskId: string) {
  return useQuery<PlacementResult>({
    queryKey: ["result", taskId],
    queryFn: () => getPlacementResult(taskId),
    enabled: !!taskId,
    refetchInterval: (query) => {
      const data = query.state.data;

      if (data?.status === "completed") return false;
      return 2000;
    },
  });
}
