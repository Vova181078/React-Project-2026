

import { useEffect, useState } from "react";
import { getTopRated} from "../services/movie.service";
import MoviesListCard from "./MoviesListCard";
import type {ITopRatedModel} from "../models/TopRatedModel.ts";
import {useSearchParams} from "react-router-dom";
import "../menu/menu.css"

const TopRated = () => {
    const [movies, setMovies] = useState<ITopRatedModel[]>([]);
    const [query,setQuery] = useSearchParams();

    useEffect(() => {
        const page = +(query.get("page") || 1)
        if (!query.get("page")) {
            setQuery({ page: "1" })
        }
        getTopRated(page).then(res => {
            setMovies(res.results);
        });
    }, [query]);

    return (
        <div className= "movies-grid">
            {movies.map(movie => (
                <MoviesListCard key={movie.id} item={movie}
                />
            ))}

        </div>
    );
};

export default TopRated;