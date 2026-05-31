
import Menu from "../menu/Menu.tsx";
import { Outlet } from "react-router-dom";
import '../menu/menu.css';
import Header from "../components/Header.tsx";


const MainLayout = () => {


    return (
        <div>
            <Header/>
            <Menu />
            <Outlet/>
        </div>
    );
};

export default MainLayout;
