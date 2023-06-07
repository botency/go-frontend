import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-center items-center p-6 bg-black">
            <div className="text-white">
                <Link to="/" className="hover:underline mx-2">
                    home
                </Link>
                <Link to="/form" className="hover:underline mx-2">
                    form
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
