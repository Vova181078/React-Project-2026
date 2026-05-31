

import { useEffect, useState } from "react";
import { getUpcoming } from "../services/movie.service";
import MoviesListCard from "./MoviesListCard";
import type {IUpcomingModel} from "../models/UpcomingModel.ts";
import {useSearchParams} from "react-router-dom";
import "../menu/menu.css"

const Upcoming = () => {
    const [movies, setMovies] = useState<IUpcomingModel[]>([]);
    const [query,setQuery] = useSearchParams();


    useEffect(() => {
        const page = +(query.get("page") || 1)
        if (!query.get("page")) {
            setQuery({ page: "1" })
        }
        getUpcoming(page).then(res => {
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

export default Upcoming;