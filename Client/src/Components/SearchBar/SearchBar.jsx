import React from "react";
import css from "./SearchBar.module.css"

const SearchBar = () => {
    return (
        <div className={css.container}>
            <div>
                <div className={css.search}>
                    <h1>Brands</h1>
                    <input type="text" className={css.search} placeholder="Search Our Brands" spellCheck="false"></input>
                </div>
                <div className={css.BrandsSearch}>
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
            </div>
        </div>
    )
};

export default SearchBar;
