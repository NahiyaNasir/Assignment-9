import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Roots = () => {
    return (
        <div className="">
            <div className="h-16 mx-auto">
            <Navbar></Navbar>
            </div>
         
                   <div className="max-w-6xl mx-auto">
                   <Outlet></Outlet>
                   </div>
         <Footer></Footer>
        </div>
    );
};

export default Roots;