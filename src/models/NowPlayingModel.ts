export interface Dates  {
  maximum: string;
  minimum: string;
}

export interface INowPlayingModel  {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface responseNowPlaying  {
  dates: Dates;
  page: number;
  results: INowPlayingModel[];
  total_pages: number;
  total_results: number;
}