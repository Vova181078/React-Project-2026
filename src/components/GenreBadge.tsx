import type { FC } from "react";

interface GenreBadgeProps {
    genre: string;
}

const GenreBadge: FC<GenreBadgeProps> = ({ genre }) => {
    return (
        <div>
            <span>{genre}</span>
        </div>
    );
};

export default GenreBadge;
