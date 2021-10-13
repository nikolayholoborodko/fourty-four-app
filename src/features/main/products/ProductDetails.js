import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { selectProductbyId } from './productsSlice'
import { Link } from 'react-router-dom'

export const ProductDetails = () => {
    //useRouteMatch hook to get id parameters
    const match = useRouteMatch()
    const productId = Number(match.params.id)
    //find product by id in our state in redux
    const productById = useSelector(state =>
        selectProductbyId(state, productId)
    )
    return (
        <div className="product-details-wrapper">
            <Container>
                <Col md={7} className="product-details mx-auto">
                    <img
                        className="product-details__img"
                        src={productById.image}
                        alt="product"
                    />
                    <p className="product-details__title">
                        {productById.title}
                    </p>
                    <p className="product-details__category">
                        category: <strong>{productById.category}</strong>
                    </p>
                    <p className="product-details__description">
                        {productById.description}
                    </p>
                    <p className="product-details__price">
                        ${productById.price}
                    </p>
                    <Link to="/" className="product-details__btn">
                        Back
                    </Link>
                </Col>
            </Container>
        </div>
    )
}
