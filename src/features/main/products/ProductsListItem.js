import React from 'react'
import { Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../cart/cartSlice'

export const ProductsListItem = ({ product, columns }) => {
    const dispatch = useDispatch()
    return (
        <Col sm={columns} lg={columns === 12 ? 8 : columns} className="mx-auto">
            <div className={columns === 4 ? 'product-grid' : 'product-list'}>
                <img
                    className="product__img"
                    src={product.image}
                    alt="product"
                />
                <p className="product__title">
                    {product.title.slice(0, 15)}...
                </p>
                <p className="product__price">${product.price}</p>
                <div>
                    <Link
                        to={`/product/${product.id}`}
                        className="product__btn-more"
                    >
                        More
                    </Link>
                    <button
                        onClick={() => dispatch(addToCart(product))}
                        className="product__btn-addToCart"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </Col>
    )
}
