import { Link, NavLink } from "react-router-dom";
import "../css/variable.css";
import { useState } from "react";
import AuthDrawer from "./AuthDrawer";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState("signup");
    return (
        <>
            <header className=" flex
    flex-col
    sm:flex-row
    items-center
    justify-between
    gap-4
    px-4
    sm:px-6
    lg:px-10
    py-4
    shadow-md
    w-full">
                <div>
                    <p className="text-2xl text-brand">Forkly</p>
                    <p className="text-md">We deliver the best</p>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="
                        sm:w-64
                        md:w-80
                        lg:w-[400px]
                        bg-brand-light
                        rounded-lg
                        px-4
                        py-2
                        outline-none
                        focus:ring-0
                        text-center
                        placeholder:text-center
                    "
                    />
                </div>
                <div className="flex justify-spacearound gap-10 items-center">
                    <NavLink
                        to="/"
                        className={({ isActive }) => {
                            return isActive ? "text-brand" : "";
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/food"
                        className={({ isActive }) => {
                            return isActive ? "text-brand" : "";
                        }}
                    >
                        Food
                    </NavLink>
                    <NavLink
                        to="/restaurants"
                        className={({ isActive }) => {
                            return isActive ? "text-brand" : "";
                        }}
                    >
                        Restaurants
                    </NavLink>
                    <NavLink
                        to="/restaurants"
                        className={({ isActive }) => {
                            return isActive ? "text-brand" : "";
                        }}
                    >
                        Offers
                    </NavLink>
                    <Link to="#">Login</Link>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="px-6 py-3 bg-red-500 text-white rounded-lg"
                    >
                        Sign Up
                    </button>

                    <AuthDrawer
                        isOpen={isOpen}
                        mode={mode}
                        onClose={() => setIsOpen(false)}
                        switchMode={setMode}
                    />


                </div>
            </header>
        </>
    )
}