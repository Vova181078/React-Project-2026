import {type FC} from "react";
import UserInfo from "./UserInfo.tsx";

import SearchMovie from "./SearchMovie.tsx";



const Header:FC = () => {

    return (
        <div>



        <header>

                <h1>
                   TMDB_Movies
                </h1>

            <div>
                <UserInfo />
            </div>

            <div>
                <SearchMovie/>

            </div>
        </header>
        </div>
    );
};

export default Header;