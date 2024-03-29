import React from "react";
import css from "./Virtual.module.css"
import Shade from "../../assets/Decoration/shade.png"
import ReactCompareImage from 'react-compare-image'
import Before from "../../assets/Virtual/before.png"
import After from "../../assets/Virtual/after.png"

const Virtual = () => {
    return (
        <div className={css.virtual}>
            <div className={css.left}>
                <span>Virtual Try-On</span>
                <span>Never buy the wrong shade agean</span>
                <span>Try Now!</span>
                <img src={Shade} alt="" />
            </div>
            <div className={css.right}>
                <div className={css.wrapper}>
                    <ReactCompareImage leftImage={Before} rightImage={After} />
                </div>
            </div>
        </div>
    )
};

export default Virtual;
