import type { FC } from "react";
import PosterPreview from "./PosterPreview.tsx";
import StarsRating from "./StarsRating.tsx";
import MovieInfo from "./MovieInfo.tsx";
import { Link } from "react-router-dom";

interface MoviesListCardProps {
    item: {
        id: number;
        title: string;
        poster_path: string;
        vote_average: number;
        overview: string;
        genre_ids: number[];
    };
}

const MoviesListCard: FC<MoviesListCardProps> = ({ item }) => {
    return (


            <div>
        <Link to={`/movies/${item.id}`}>

                <PosterPreview

                    posterPath={item.poster_path}
                    title={item.title}
                />
        </Link>

                <MovieInfo
                    title={item.title}
                    overview={item.overview}
                    genreIds={item.genre_ids}
                />

                <StarsRating rating={item.vote_average} />

                <p>ID фільму: {item.id}</p>

                <hr />

            </div>


    );
};

export default MoviesListCard;