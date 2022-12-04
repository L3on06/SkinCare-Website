import React from "react";
import css from './Hero.module.css'
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri"
import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"
import CountUp from "react-countup";


const Hero = () => {

    const transition = { duration: 3, type: "spring" }

    return (
        <div className={css.container}>
            <div className={css.h_sliders}>
                <motion.span
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className={css.text1}>Skin Protect Care</motion.span>
                <motion.div
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>Blanditiis voluptatum pariatur repellendus!</span>
                </motion.div>
            </div>

            <div className={css.wrapper}>
                <motion.div
                    initial={{ bottom: "5rem" }}
                    whileInView={{ bottom: "0rem" }}
                    transition={transition}
                    className={css.blueCircle}>
                </motion.div>
                <motion.img
                    initial={{ bottom: "-5rem" }}
                    whileInView={{ bottom: "0rem" }}
                    transition={transition}
                    src={HeroImg} alt="Hero Img" width={600} />
                <motion.div
                    initial={{ right: "14%" }}
                    whileInView={{ right: "0%" }}
                    transition={transition}
                    className={css.cart2}>
                    <RiShoppingBagFill />
                    <div className={css.signup}>
                        <span>Best Sign up Offers</span>
                        <div>
                            <BsArrowRight />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className={css.h_sliders}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className={css.traffic}>
                    <span><CountUp end={1.8} duration={5} suffix="m" decimals={1} /></span>
                    <span>Monthy Traffic</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className={css.customers}>
                    <span><CountUp end={100} duration={5} suffix="K" /></span>
                    <span>Happy Customers</span>
                </motion.div>
            </div>
        </div>
    )
};

export default Hero;
