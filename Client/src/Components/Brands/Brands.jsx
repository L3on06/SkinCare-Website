import React from "react";
import css from "./Brands.module.css"
import { AllBrands } from "../../data/Brands"
import SearchBar from "../SearchBar/SearchBar";

const Brands = () => {
    return (
        <div className={css.container}>
            <SearchBar />
            <div className={css.BrandsContainer}>
                <h1>Feature Brands</h1>
                <div className={css.ImgContainer}>
                    {
                        AllBrands.map((product, idx) => (
                            <div className={css.product}>
                                <div >
                                    <a href={product.url} target="_blank" rel="noreferrer"><img src={product.img} alt="Products" className={css.img} /></a>
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
