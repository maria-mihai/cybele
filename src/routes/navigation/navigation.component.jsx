import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.css";
const Navigation = ()=> {
    return (
        <Fragment>
        <div className="navigation">
            <Link className="logo" to="/">
                <img src="https://i.imgur.com/wLlNbyV.png" alt="flower"></img>
            </Link>
            <div className="nav-links-container">
                <Link to="/shop">SHOP</Link>
                <Link to="/authentication">AUTHENTICATION</Link>
            </div>
        </div>
        <Outlet></Outlet>
        </Fragment>
    )
}

export default Navigation;