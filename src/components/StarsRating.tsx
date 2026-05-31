import type { FC } from "react";

interface StarsRatingProps {
    rating: number;
}

const StarsRating: FC<StarsRatingProps> = ({ rating }) => {
    return (
        <div>
            <span>Рейтинг: {rating}</span>
        </div>
    );
};

export default StarsRating;