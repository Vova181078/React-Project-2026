import { useEffect, useState } from "react";
import { searchMovie } from "../services/movie.service.ts";
import type { IMovie } from "../models/IMovie.ts";
import {Link} from "react-router-dom";


const SearchMovie = () => {

    const [query, setQuery] = useState<string>("");
    const [results, setResults] = useState<IMovie[]>([]);

    useEffect(() => {

        searchMovie(query)
            .then((res) => {
            setResults(res.results);
        });

    }, [query]);

    return (
        <div>

            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search movie..."
            />

            <div>

                {results.map((movie) => (
                    <div key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default SearchMovie;