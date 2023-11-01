import {Outlet, NavLink } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className="nav">
                <h4><NavLink to="/" className={({ isActive }) => [isActive ? "home" : ""].join(" ")}>Home</NavLink></h4>
                <h4><NavLink className={({ isActive }) => [isActive ? "home" : ""].join(" ")} to="about">About</NavLink></h4>
                <h4><NavLink className={({ isActive }) => [isActive ? "home" : ""].join(" ")} to="items">Items</NavLink></h4>
            </div>
            <Outlet/>
        </>
    )
}

export default Navbar