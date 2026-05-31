import type {IMovie} from "./IMovie.ts";

export type IResponseMovie = {
    id: number;
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}