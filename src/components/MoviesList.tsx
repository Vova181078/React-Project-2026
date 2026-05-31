import {useEffect, useState} from "react";
import type {INowPlayingModel} from "../models/NowPlayingModel.ts";
import type {IPopularModel} from "../models/PopularModel.ts";
import type {ITopRatedModel} from "../models/TopRatedModel.ts";
import type {IUpcomingModel} from "../models/UpcomingModel.ts";
import {getNowPlaying, getPopular, getTopRated, getUpcoming} from "../services/movie.service.ts";
import MoviesListCard from "./MoviesListCard.tsx";
import {useSearchParams} from "react-router-dom";
import "../menu/menu.css"


const MoviesList = () => {
    const [playing, setPlaying] = useState<INowPlayingModel[]>([]);
  const [popular, setPopular] = useState<IPopularModel[]>([]);
  const [topRated, setTopRated] = useState<ITopRatedModel[]>([]);
  const [upcoming, setUpcoming] = useState<IUpcomingModel[]>([]);
   const [query,setQuery] = useSearchParams();

      useEffect(() => {
        const page = +(query.get("page") || 1);
          if (!query.get("page")) {
              setQuery({ page: "1" })
          }
        getNowPlaying(page).then(res => {
              setPlaying(res.results)
          })
          getPopular(page).then(res => {
              setPopular(res.results)
          })
          getTopRated(page).then(res => {
              setTopRated(res.results)
          })
          getUpcoming(page).then(res => {
              setUpcoming(res.results)
          })
      }, [query])
    return (
        <div className= "movies-grid">
            {playing.map(play => <MoviesListCard key={play.id} item={play}/>)}
            {popular.map(popula => <MoviesListCard key={popula.id} item={popula}/>)}
            {topRated.map(toprated => <MoviesListCard key={toprated.id} item={toprated}/>)}
            {upcoming.map(upcome => <MoviesListCard key={upcome.id} item={upcome}/>)}


        </div>
    );
};

export default MoviesList;