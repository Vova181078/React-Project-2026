import NowPlaying from "../components/NowPlaying";
import Pagination from "../pagination/Pagination.tsx";


const NowPlayingPage = () => {
    return (
        <div>
            <h2>Now Playing</h2>
            <Pagination/>
            <NowPlaying />

        </div>
    );
};

export default NowPlayingPage;