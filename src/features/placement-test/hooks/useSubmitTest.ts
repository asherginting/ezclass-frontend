import { useMutation } from "@tanstack/react-query";
import { submitPlacementTest } from "../services/placementTestApi";

export function useSubmitTest() {
  return useMutation({
    mutationFn: submitPlacementTest,
  });
}
