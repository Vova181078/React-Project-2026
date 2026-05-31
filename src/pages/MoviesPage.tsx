

import MoviesList from "../components/MoviesList.tsx";
import Pagination from "../pagination/Pagination.tsx";


const MoviesPage = () => {


    return (
        <div>
            <h2>Movies List</h2>
         <Pagination/>
           <MoviesList/>


        </div>
    );
};

export default MoviesPage;