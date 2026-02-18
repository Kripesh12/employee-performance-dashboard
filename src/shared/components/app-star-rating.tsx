import { FaRegStar } from "react-icons/fa";

interface AppStarRatingProps {
  total: number;
}

export function AppStarRating({ total = 5 }: AppStarRatingProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map(() => (
        <FaRegStar color="orange" />
      ))}
    </div>
  );
}
