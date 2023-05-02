import React from "react";
import { PRODUCTS } from "../../products"
import { Product } from "./product";
import styled from "styled-components";

export const Shop = () =>{
    return(
        <ShopStyled>
        <div class="shop">
            <div class="title">
                <h1>Muslim Craft</h1>
            </div>
            <div class="products">
            {PRODUCTS.map((product) =>(
            <Product data = {product}/>
            ))}
            </div>
        </div>
        </ShopStyled>
    )
};

const ShopStyled = styled.div`
display: flex;
justify-content: center;
.products{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
}
`