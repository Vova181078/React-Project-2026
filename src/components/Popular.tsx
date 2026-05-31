

import { useEffect, useState } from "react";
import { getPopular } from "../services/movie.service";
import MoviesListCard from "./MoviesListCard";
import type {IPopularModel} from "../models/PopularModel.ts";
import {useSearchParams} from "react-router-dom";
import "../menu/menu.css"

const Popular = () => {
    const [movies, setMovies] = useState<IPopularModel[]>([]);
     const [query,setQuery] = useSearchParams();
    useEffect(() => {
        const page = +(query.get("page") || 1)
        if (!query.get("page")) {
            setQuery({ page: "1" })
        }
        getPopular(page).then(res => {
            setMovies(res.results);
        });
    }, [query]);

    return (
        <div className= "movies-grid">
            {movies.map(movie => (
                <MoviesListCard
                    key={movie.id}
                    item={movie}
                />
            ))}

        </div>
    );
};

export default Popular;