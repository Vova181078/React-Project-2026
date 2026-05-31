import type { FC } from "react";

export interface PosterProps {
    posterPath: string;
    title: string;
}

const PosterPreview: FC<PosterProps> = ({posterPath,title }) => {
    return (
        <div>
            <img src={`https://tmdb.org/t/p/w500${posterPath}`} alt={title} />
        </div>
    );
};

export default PosterPreview;