import React, { useState } from "react";
import css from "./Header.module.css"
import Logo from "../../assets/General/logo.png"
import { CgShoppingBag } from "react-icons/cg"
import { GoThreeBars } from "react-icons/go"
import { GrClose } from "react-icons/gr"
import { Link } from "react-router-dom"

const Header = () => {
    const [showmenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showmenu)
    }

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <Link to="/"><img src={Logo} alt="Logo" /></Link>
                <span><Link to="/">Skin Care</Link></span>
            </div>

            <div className={css.right}>
                <div className={css.bars} onClick={toggleMenu} style={{ left: showmenu ? "1.7rem" : "0" }}>
                    {
                        showmenu ? <GrClose /> : <GoThreeBars />
                    }
                </div>

                <ul className={css.menu} style={{ display: showmenu ? "inherit" : "none" }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/Brands">Brands</Link></li>
                </ul>

                <CgShoppingBag className={css.cart} />
            </div>
        </div>
    )
};

export default Header;
