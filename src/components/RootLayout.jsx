import {Navbar} from "./Navbar.jsx";
import {Outlet} from "react-router-dom";
import Stopy from "./Stopka.jsx";
export const RootLayout = () => {
    return(
        <>
        <Navbar/>
        <Outlet/>
            <Stopy/>
        </>
    )
}