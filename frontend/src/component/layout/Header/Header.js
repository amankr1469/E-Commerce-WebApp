import React, { useState } from 'react';
import {
    AiOutlineShopping,
    AiOutlineHeart,
    AiOutlineUser,
    AiOutlineSearch,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useHistory } from 'react-router-dom';
import { HiMenuAlt4, HiX } from "react-icons/hi";
import Logo from "../../../images/logo.png"
import "./Header.scss";
import { BsFacebook, BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";

const Header = () => {
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const history = useHistory();

    const openWishDialog = () => {
        // dispatch(setWishOpen(true));
    };

    const openCartDialog = () => {
        // dispatch(setCartOpen(true));
    };

    function openSearch() {
        history.push('/search');
    }

    function openCart() {
        history.push('/cart');
    }

    function openProfile() {
      history.push('/login');
    }

    return (
        <div className="wrapper__nav ">
            <div className="top__nav nav-contain">
                <div className="social__icon">
                    <a href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsInstagram />
                    </a>

                    <a href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsTwitter />
                    </a>

                    <a href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsWhatsapp />
                    </a>

                    <a href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsFacebook />
                    </a>

                </div>
                <p className="header-sale">
                    LEVEL-UP YOUR GAME
                </p>
            </div>
            <nav className="navbar-items nav-contain">
                <div className="container nav__container">
                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <ul className="app__navbar-links">

                        <Link to={`/`}>Home</Link>
                        <Link to={`/about`}>About us</Link>
                        <Link to={`/products`}>Show Now</Link>
                        <Link to={`/storelocator`}>Store Locator</Link>
                        <Link to={`/contactus`}>Reach Us</Link>

                    </ul>
                    <div className="right">
                        <AiOutlineSearch onClick={openSearch}/>
                        <AiOutlineHeart />
                        <AiOutlineUser onClick={openProfile}/>
                        <AiOutlineShopping onClick={openCart} />
                    </div>
                </div>

                <div className="responsive__menu">
                    <AiOutlineSearch
                        size={25}
                        style={{ marginRight: "10px" }}
                        onClick={openSearch} />
                    <AiOutlineHeart
                        size={25}
                        style={{ marginRight: "10px" }}
                    />
                    <AiOutlineShopping
                        size={25}
                        style={{ marginRight: "10px" }}
                        onClick={openCart}
                    />
                        <AiOutlineUser size={25} onClick={openProfile}/>
                    <div className="app__navbar-menu">
                        <HiMenuAlt4 onClick={() => setToggle(true)} />
                        {toggle && (
                            <div
                                // whileInView={{ x: [200, 0] }}
                                // transition={{ duration: 0.85, ease: "easeOut" }}
                            >
                                <HiX onClick={() => setToggle(false)} />
                                <ul className='mobile'>
                                    <Link to={`/`}>Home</Link>
                                    <Link to={`/about`}>About us</Link>
                                    <Link to={`/products`}>Shop Now</Link>
                                    <Link to={`/storelocator`}>Store Locator</Link>
                                    <Link to={`/contactus`}>Reach Us</Link>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* {isCartOpen && <Cart carts={carts} />} */}

        </div>
    )
}
export default Header;