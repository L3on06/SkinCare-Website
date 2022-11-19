import React from "react";
import css from "./Header.module.css"
import Logo from "../../assets/logo.png"
import { CgShoppingBag } from "react-icons/cg"

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="Logo" />
                <span>Skin Care</span>
            </div>

            <div className={css.right}>
                <div className={css.menu}>
                    <ul className={css.menu}>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Brands</li>
                    </ul>
                </div>

                <input type="text" className={css.search} placeholder="Search..." />
                <CgShoppingBag className={css.cart} />
            </div>
        </div>
    )
};

export default Header;
