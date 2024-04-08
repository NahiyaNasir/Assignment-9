import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Roots = () => {
    return (
        <div className="">
            <div className="h-16">
            <Navbar></Navbar>
            </div>
         
                   <div className="min-h-[calc(100vh-116)] mx-auto">
                   <Outlet></Outlet>
                   </div>
           
        </div>
    );
};

export default Roots;