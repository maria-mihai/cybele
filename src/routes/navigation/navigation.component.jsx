import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.css";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import DropDown from "../../components/dropdown/dropdown.component";
import { CartContext } from "../../contexts/cart.context";
const Navigation = ()=> {
    const {currentUser} = useContext(UserContext);
    const {selected, setSelected} = useContext(CartContext);
    const cartIconClicked = () => {
        const newValue = !selected;
        setSelected(newValue);
    }
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
            <div onClick={cartIconClicked}><CartIcon /></div>
            {selected? <DropDown /> : null}
        </div>
        <Outlet></Outlet>
        </Fragment>
    )
}

export default Navigation;