import React from "react";
import css from './Hero.module.css'
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri"
import { BsArrowRight } from "react-icons/bs"

const Hero = () => {
    return (
        <div className={css.container}>
            <div className={css.h_sliders}>
                <span className={css.text1}>Skin Protect Care</span>
                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>Blanditiis voluptatum commodi officiis magni optio, pariatur repellendus!</span>
                </div>
            </div>

            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={HeroImg} alt="Hero Img" width={600} />
                <div className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best Sign up Offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>


            <div className={css.h_sliders}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthy Traffic</span>
                </div>

                <div className={css.customers}>
                    <span>200k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
};

export default Hero;
