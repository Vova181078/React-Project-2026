import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/movie.service.ts";
import type IMovieDetails from "../models/MovieDetails.ts";

const MovieDetails = () => {

    const { id } = useParams();

    const [movie, setMovie] = useState<IMovieDetails | null>(null);

    useEffect(() => {

        if (!id) return;

        getMovieDetails(id).then(res => {
            setMovie(res);
        });

    }, [id]);

    return (
        <div>

            <h1>{movie?.title}</h1>

            <img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt={movie?.title}
            />

            <p>{movie?.overview}</p>

            <p>{movie?.vote_average}</p>

        </div>
    );
};

export default MovieDetails;