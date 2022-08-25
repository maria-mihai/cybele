import React, { Fragment, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./navigation.styles.css";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import DropDown from "../../components/dropdown/dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import SearchElement from "../../components/search-icon/search-icon.component";
const Navigation = ()=> {
    const navigate = useNavigate();
    const {currentUser} = useContext(UserContext);
    const {selected, setSelected} = useContext(CartContext);
    const cartIconClicked = () => {
        const newValue = !selected;
        setSelected(newValue);
    }
    const searchIconClicked = () => {
        navigate('/search');
    }
    return (
        <Fragment>
        <div className="navigation">
            <Link className="logo" to="/">
                <img src="https://i.imgur.com/phYsUKB.png" alt="flower"></img>
            </Link>
            <div className="nav-links-container">
                <Link to="/about">ABOUT</Link>
                <Link to="/shop">SHOP</Link>
                { currentUser === null? <Link to="/authentication">SIGN IN</Link> : <span onClick={signOutUser}>SIGN OUT</span> }
            </div>
            <div onClick={searchIconClicked} className="search-icon"><SearchElement /></div>
            <div onClick={cartIconClicked}><CartIcon /></div>
            {selected? <DropDown /> : null}
        </div>
        <Outlet></Outlet>
        </Fragment>
    )
}

export default Navigation;