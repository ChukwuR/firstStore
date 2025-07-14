import React, {useEffect, useState} from 'react';
import './addCartTwo.css'

function AddCartTwo(){

    return(
        <>
            <button onClick={() => addToCart(product)} className="cateCartBtn"><i className="bi bi-bag-plus"></i> Add to Cart</button>
        </>
    )
}
export default AddCartTwo;