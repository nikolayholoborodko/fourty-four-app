import React from 'react'
import { useSelector } from 'react-redux'
import { selectProductsInCart } from './cartSlice'
import { CartItem } from './CartItem'
import { Container, Row } from 'react-bootstrap'
import './cart.scss'

export const Cart = () => {
    //get all products in the cart
    const productsInCart = useSelector(selectProductsInCart)
    return (
        <div className="cart">
            <Container>
                <Row>
                    {productsInCart.length === 0 ? (
                        <h2>your cart is empty...</h2>
                    ) : (
                        <>
                            {productsInCart.map(productInCart => (
                                <CartItem
                                    key={productInCart.id}
                                    productInCart={productInCart}
                                />
                            ))}
                        </>
                    )}
                </Row>
            </Container>
        </div>
    )
}
