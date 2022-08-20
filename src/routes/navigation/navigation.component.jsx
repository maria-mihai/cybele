import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.css";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Navigation = ()=> {
    const {currentUser} = useContext(UserContext);
    return (
        <Fragment>
        <div className="navigation">
            <Link className="logo" to="/">
                <img src="https://i.imgur.com/wLlNbyV.png" alt="flower"></img>
            </Link>
            <div className="nav-links-container">
                <Link to="/shop">SHOP</Link>
                { currentUser === null? <Link to="/authentication">SIGN IN</Link> : <span onClick={signOutUser}>SIGN OUT</span> }
                
            </div>
        </div>
        <Outlet></Outlet>
        </Fragment>
    )
}

export default Navigation;