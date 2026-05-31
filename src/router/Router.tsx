import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage.tsx";
import NowPlayingPage from "../pages/NowPlayingPage.tsx";
import PopularPage from "../pages/PopularPage.tsx";
import TopRatedPage from "../pages/TopRatedPage.tsx";
import UpcomingPage from "../pages/UpcomingPage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";






const routes = createBrowserRouter([
    {path: "", element: <MainLayout/>,
        children: [
            {path: "movies", element: <MoviesPage/>},
            {path: "movies/now-playing", element: <NowPlayingPage/>},
            {path: "movies/popular", element: <PopularPage/>},
            {path: "movies/top-rated", element: <TopRatedPage/>},
            {path: "movies/upcoming", element: <UpcomingPage/>},
            {path: "movies/:id", element: <MovieDetailsPage/>}
        ]

    }
]);
export default routes;


