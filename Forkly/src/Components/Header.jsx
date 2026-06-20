import { Link, NavLink } from "react-router-dom";
import "../css/variable.css";
export default function Header() {
    return (
        <>
            <header className=" flex justify-between shadow-md items-center p-10">
                <div>
                    <p className="text-2xl text-brand">Forkly</p>
                    <p className="text-md">We deliver the best</p>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="
                        bg-brand-light
                        w-100
                        rounded-lg
                        outline-none
                        border-none
                        focus:outline-none
                        focus:ring-0
                        text-center
                        placeholder:text-center
                        px-4
                        py-2    
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
                    <Link to="#" className="btn-primary">Register Now</Link>


                </div>
            </header>
        </>
    )
}