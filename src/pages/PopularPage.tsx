import Popular from "../components/TopRated.tsx";
import Pagination from "../pagination/Pagination.tsx";


const PopularPage = () => {
    return (
        <div>
            <h2>Popular</h2>
            <Pagination/>
            <Popular />
        </div>
    );
};

export default PopularPage;