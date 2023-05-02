import React, { useContext } from "react";
import styled from "styled-components";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) =>{
    const {id, productName, price, productImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    return (
        <CartItemStyled>
        <div class="cartItem">
            <img src={productImage} class="productImage"/>
            <h1>{productName}</h1>
            &#163;{price}
        </div>
        <div class="count-btn">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
            <button onClick={() => addToCart(id)}> + </button>
        </div>
        </CartItemStyled>
    )
}

const CartItemStyled = styled.div`
.cartItem{
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid black;
}

.productImage{
    height: 75px;
    border: 1px solid black;
}
`