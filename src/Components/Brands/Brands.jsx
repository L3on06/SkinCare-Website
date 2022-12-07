import React from "react";
import css from "./Brands.module.css"
import { AllBrands } from "../../data/Brands"

const Brands = () => {
    return (
        <div className={css.container}>
            <div className={css.search}>
                <h1>Brands</h1>
                <input type="text" className={css.search} placeholder="Search Our Brands" spellCheck="false"></input>
            </div>
            <div className={css.BrandsSearch}>
                {/* <ul className={css.BrandsByFeatured}> */}
                {/* </ul> */}
                <ul className={css.BrandsByStartingName}>
                    <li>Featured</li>
                    <li>New</li>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                    <li>F</li>
                    <li>G</li>
                    <li>H</li>
                    <li>I</li>
                    <li>J</li>
                    <li>K</li>
                    <li>L</li>
                    <li>M</li>
                    <li>N</li>
                    <li>O</li>
                    <li>P</li>
                    <li>Q</li>
                    <li>R</li>
                    <li>S</li>
                    <li>T</li>
                    <li>U</li>
                    <li>V</li>
                    <li>W</li>
                    <li>X</li>
                    <li>Y</li>
                    <li>Z</li>
                </ul>
            </div>
            <div className={css.BrandsContainer}>
                <h1>Feature Brands</h1>
                <div className={css.ImgContainer}>
                    {
                        AllBrands.map((product, idx) => (
                            <div className={css.product}>
                                <div>
                                    <img src={product.img} alt="Products" className={css.img} />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
};

export default Brands;
