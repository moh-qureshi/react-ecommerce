import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) =>{
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
    return(
        <ProductStyled>
            <div class= "productCard">
                <img class="productImage" src={productImage} />
                <div class="productText">
                    <h1>{productName}</h1>
                    <h3>&#163;{price}</h3>
                </div>
                <button class="add-btn" onClick={() => addToCart(id)}>
                    Add
                    {cartItemAmount > 0 && <> ({cartItemAmount})</>} 
                </button>
            </div>
        </ProductStyled>
    )
};

const ProductStyled = styled.div`
    .productCard{
        width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px;
    }
    
    .productText{
        color: red;
        text-align: center;
    }

    .productImage{
        height: 20vh;
        width: 20vw;
    }

    .add-btn{
        width: 50px;
    }
`