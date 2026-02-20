import './App.css'
import MainLayout from "./layouts/MainLayout.tsx";
import {Outlet} from "react-router-dom";





function App() {


    return (
        <>
            <MainLayout/>
            <Outlet/>


        </>
    )
}

export default App
