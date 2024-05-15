import React from "react";
import "../App.css"
import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">

            <Link to="/profile"
                className="link">
                My Profile
            </Link>

            <Link to="/drummachine"
                className="link">
                Drum Machine
            </Link>

            <Link to="/todo"
                className="link">
                Movie Watch Dog
            </Link>

            <Link to="/quotegenerator"
                className="link">
                Quote Generator
            </Link>

            <Link to="/pomodoro"
                className="link">
                Pomodoro Clock
            </Link>

            <Link to="/magiceightball"
                className="link">
                Magic Eight Ball
            </Link >
            <Outlet />
        </div>
    )
}

export default Navbar





