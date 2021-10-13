import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from './cartSlice'
import { Col } from 'react-bootstrap'

export const CartItem = ({ productInCart }) => {
    const dispatch = useDispatch()
    return (
        <Col md={9} lg={7} className="cart-item mx-auto">
            <img
                className="cart-item__img"
                src={productInCart.image}
                alt="product"
            />
            <p className="cart-item__title">
                {productInCart.title.slice(0, 15)}...
            </p>
            <p className="cart-item__price">${productInCart.price}</p>
            <button
                className="cart-item__btn"
                onClick={() => dispatch(deleteFromCart(productInCart.id))}
            >
                Delete
            </button>
        </Col>
    )
}
