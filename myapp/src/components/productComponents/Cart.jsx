import React, {useEffect, useState} from 'react';
import style from './product.module.css'

function Cart(){

    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) setCartItems(savedCart);
    }, []);

    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);



    return(
        <>
            <button onClick={() => addToCart(product)} className={style.cart}><i class="bi bi-bag-plus"></i> Add to Cart</button>
        </>
    )
}
export default Cart;