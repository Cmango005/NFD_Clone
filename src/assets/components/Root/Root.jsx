import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="p-5" >
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;