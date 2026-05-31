import type { FC } from "react";
import GenreBadge from "./GenreBadge.tsx";

interface MovieInfoProps {
    title: string;
    overview: string;
    genreIds: number[];
}

const MovieInfo: FC<MovieInfoProps> = ({ title, overview, genreIds }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{overview}</p>
            <div>
                {genreIds.map(id => (
                    <GenreBadge key={id} genre={`Жанр ID: ${id}`} />
                ))}
            </div>
        </div>
    );
};

export default MovieInfo;
