import React, { useState } from "react";
import css from "./Products.module.css"
import { ProductsData } from "../../data/Products"
import { useAutoAnimate } from "@formkit/auto-animate/react"

const Products = () => {

    const [parent] = useAutoAnimate()
    const [menuProducts, setMenuProducts] = useState(ProductsData);

    const filter = (type) => {
        setMenuProducts(ProductsData.filter((product) => product.type === type))
    }

    return (
        <div>
            <div className={css.container}>
                <div className={css.products}>
                    <ul className={css.menu}>
                        <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                        <li onClick={() => filter("skin care")}>Skin Care</li>
                        <li onClick={() => filter("conditioner")}>Conditioners</li>
                        <li onClick={() => filter("foundation")}>Foundations</li>
                    </ul>
                    <div className={css.list} ref={parent}>
                        {
                            menuProducts.map((product, idx) => (
                                <div className={css.product}>
                                    <div className={css.leftS}>
                                        <div className={css.name}>
                                            <span>{product.name}</span>
                                            <span>{product.detail}</span>
                                        </div>
                                        <div className={css.buy}>
                                            <span>{product.price}$</span>
                                            <div>show Now</div>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={product.img} alt="Products" className={css.img} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Products;
