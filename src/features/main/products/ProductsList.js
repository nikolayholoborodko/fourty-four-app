import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductsListTitle } from './ProductsListTitle'
import { ProductsListItem } from './ProductsListItem'
import { selectAllProducts } from './productsSlice'
import { selectDataDownloadStatus } from './productsSlice'
import { Loader } from './Loader'
import { Container, Row } from 'react-bootstrap'
import './products.scss'

export const ProductsList = () => {
    //get all products
    const products = useSelector(selectAllProducts)
    //get status of the loading of products
    const status = useSelector(selectDataDownloadStatus)
    //state of the quantity of columns to control the display of products
    const [columns, setColumns] = useState(4)
    return (
        <>
            {status === 'loading' ? (
                <Loader />
            ) : (
                <div className="products">
                    <Container>
                        <ProductsListTitle setColumns={setColumns} />
                        <Row>
                            {products.map(product => (
                                <ProductsListItem
                                    key={product.id}
                                    product={product}
                                    columns={columns}
                                />
                            ))}
                        </Row>
                    </Container>
                </div>
            )}
        </>
    )
}
