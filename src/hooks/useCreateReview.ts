import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReview } from "@/services/review.service";

type CreateReviewPayload = {
  menuItemId: string;
  reviewerName: string;
  rating: number;
  comment: string;
};

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateReviewPayload) => createReview(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
  });
};
