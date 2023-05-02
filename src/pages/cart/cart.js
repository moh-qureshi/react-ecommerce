import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";

export const Cart = () =>{
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    return(
        <div class = "cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div class="cartItems">
                {PRODUCTS.map ((product) => {
                if (cartItems[product.id] !== 0){
                    return <CartItem data={product} />
                }
                })}
            </div>
            <div class="checkout">
                <p>Subtotal: £{totalAmount}</p>
                <button>Continue Shopping</button>
                <button>Checkout</button>
            </div>
        </div>
    )
};