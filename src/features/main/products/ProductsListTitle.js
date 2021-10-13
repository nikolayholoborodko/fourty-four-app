import React, { useState } from 'react'
import { List, Grid } from 'react-bootstrap-icons'
import './products.scss'

export const ProductsListTitle = ({ setColumns }) => {
    //toggle button was clicked or no
    const [isClicked, setisClicked] = useState(false)
    return (
        <div className="products-title">
            <h2>Products</h2>
            <div className="view-controllers">
                <Grid
                    size={30}
                    className={isClicked ? '' : 'active'}
                    onClick={() => {
                        setColumns(4)
                        setisClicked(false)
                    }}
                />
                <List
                    size={30}
                    className={isClicked ? 'active' : ''}
                    onClick={() => {
                        setColumns(12)
                        setisClicked(true)
                    }}
                />
            </div>
        </div>
    )
}
