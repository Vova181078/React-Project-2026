import TopRated from "../components/TopRated";
import Pagination from "../pagination/Pagination.tsx";

const TopRatedPage = () => {
    return (
        <div>
            <h2>Top Rated</h2>
            <Pagination/>
            <TopRated />
        </div>
    );
};

export default TopRatedPage;
