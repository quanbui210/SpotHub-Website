import './navBar.css'
import NavItem from './navItem'
import React from "react"
const navBar = () => {
    return (
        <div className="header">
        <div className="navbar">
            <NavItem/>
        </div>
        </div>
    )
}

export default navBar