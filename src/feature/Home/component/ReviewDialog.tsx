import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { addToast } from "@heroui/react";

import { useCreateReview } from "@/hooks/useCreateReview";
import { useMenu } from "@/hooks/useMenu";
import type { MenuItem } from "@/types/menu";

export const ReviewDialog = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const { data: menus } = useMenu();

  const [menuItemId, setMenuItemId] = useState<string>("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const { mutate, isPending } = useCreateReview();

  const handleSubmit = () => {
    mutate(
      {
        menuItemId,
        reviewerName: name,
        rating,
        comment,
      },
      {
        onSuccess: () => {
          addToast({
            title: "Success",
            description: "Review created successfully!",
            color: "success",
            variant: "solid",
          });
          onOpenChange(false);
          setMenuItemId("");
          setName("");
          setComment("");
          setRating(5);
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Your Review</DialogTitle>
          <DialogDescription>
            Share your experience with our menu.
          </DialogDescription>
        </DialogHeader>

        <Select
          value={menuItemId}
          onValueChange={(value) => setMenuItemId(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a menu" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Menu</SelectLabel>
              {menus?.map((item: MenuItem) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="space-y-4">
          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Rating */}
          <div className="flex gap-1">
            <h2 className="font-mono font-semibold">Rate :</h2>
            {[1, 2, 3, 4, 5].map((star) => (
              <button type="button" key={star} onClick={() => setRating(star)}>
                <Star
                  className="w-6 h-6 transition-colors"
                  fill={star <= rating ? "#FFE52A" : "none"}
                  stroke="#000"
                />
              </button>
            ))}
          </div>

          <Textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <DialogFooter>
          <Button
            onClick={handleSubmit}
            disabled={isPending || !menuItemId || !name || !comment}
            className="w-full"
          >
            {isPending ? "Submitting..." : "Submit Review"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
