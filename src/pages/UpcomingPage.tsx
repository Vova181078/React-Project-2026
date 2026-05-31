import Upcoming from "../components/Upcoming";
import Pagination from "../pagination/Pagination.tsx";

const UpcomingPage = () => {
    return (
        <div>
            <h2>Upcoming</h2>
            <Pagination/>
            <Upcoming />
        </div>
    );
};

export default UpcomingPage;