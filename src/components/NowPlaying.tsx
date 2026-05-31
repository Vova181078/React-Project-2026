

import { useEffect, useState } from "react";
import { getNowPlaying } from "../services/movie.service";
import MoviesListCard from "./MoviesListCard";
import type {INowPlayingModel} from "../models/NowPlayingModel.ts";
import {useSearchParams} from "react-router-dom";
import "../menu/menu.css"


const NowPlaying = () => {
    const [movies, setMovies] = useState<INowPlayingModel[]>([]);


    const [query,setQuery] = useSearchParams();
    useEffect(() => {
       const page = +(query.get("page") || 1)
        if (!query.get("page")) {
            setQuery({ page: "1" });
        }
        getNowPlaying(page).then(res => {
            setMovies(res.results);

        });
    }, [query]);

    return (
        <div className= "movies-grid">
            {movies.map(movie => (
                <MoviesListCard key={movie.id} item={movie} />
            ))}


        </div>
    );
};

export default NowPlaying;