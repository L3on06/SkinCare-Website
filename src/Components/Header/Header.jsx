import React, { useState } from "react";
import css from "./Header.module.css"
import Logo from "../../assets/logo.png"
import { CgShoppingBag } from "react-icons/cg"
import { GoThreeBars } from "react-icons/go"
import { GrClose } from "react-icons/gr"


const Header = () => {
    const [showmenu, setShowMenu] = useState(true);


    const toggleMenu = () => {
        setShowMenu(!showmenu)
    }
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="Logo" />
                <span>Skin Care</span>
            </div>

            <div className={css.right}>

                <div className={css.bars} onClick={toggleMenu} style={{ left: showmenu ? "1.7rem" : "0" }}>
                    {
                        showmenu ? <GrClose /> : <GoThreeBars />
                    }
                </div>

                <ul className={css.menu} style={{ display: showmenu ? "inherit" : "none" }}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Brands</li>
                </ul>

                <input type="text" className={css.search} placeholder="Search..." />
                <CgShoppingBag className={css.cart} />
            </div>
        </div>
    )
};

export default Header;
