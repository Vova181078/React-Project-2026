import type { responseNowPlaying } from "../models/NowPlayingModel.ts";
import type { responsePopular } from "../models/PopularModel.ts";
import type { responseTopRated } from "../models/TopRatedModel.ts";
import type { responseUpComing } from "../models/UpcomingModel.ts";
import type IMovieDetails from "../models/MovieDetails.ts";
import type ISearchMovieModel from "../models/SearchMovieModel.ts";



const API_KEY = import.meta.env.VITE_TMDB_API_KEY as string;
export const BaseUrl = 'https://api.themoviedb.org/3/movie';





export const getNowPlaying = async (page: number = 1): Promise<responseNowPlaying> => {
    const resPlaying = await fetch(`${BaseUrl}/now_playing?api_key=${API_KEY}&page=${page}`);
    if (!resPlaying.ok) throw new Error(`Fetch error: ${resPlaying.status}`);
    return resPlaying.json();
};

export const getPopular = async (page: number = 1): Promise<responsePopular> => {
    const resPopular = await fetch(`${BaseUrl}/popular?api_key=${API_KEY}&page=${page}`);
    if (!resPopular.ok) throw new Error(`Fetch error: ${resPopular.status}`);
    return resPopular.json();
};

export const getTopRated = async (page: number = 1): Promise<responseTopRated> => {
    const resTopRated = await fetch(`${BaseUrl}/top_rated?api_key=${API_KEY}&page=${page}`);
    if (!resTopRated.ok) throw new Error(`Fetch error: ${resTopRated.status}`);
    return resTopRated.json();
};

export const getUpcoming = async (page: number = 1): Promise<responseUpComing> => {
    const resUpcoming = await fetch(`${BaseUrl}/upcoming?api_key=${API_KEY}&page=${page}`);
    if (!resUpcoming.ok) throw new Error(`Fetch error: ${resUpcoming.status}`);
    return resUpcoming.json();
};

export const getMovieDetails = async (id: string): Promise<IMovieDetails> => {
    const res = await fetch(`${BaseUrl}/${id}?api_key=${API_KEY}`);
    if (!res.ok) throw new Error(`Fetch error: ${res.status}`);
    return res.json();
};



export const searchMovie = async (
    query: string):Promise<ISearchMovieModel> => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    if (!res.ok) {throw new Error(`Fetch error: ${res.status}`);}
    return res.json();
};