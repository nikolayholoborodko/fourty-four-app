import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
    return (
        <div className="products-loader">
            <Spinner animation="border" variant="warning" />
            <p className="products-loader__title">loading products...</p>
        </div>
    )
}
