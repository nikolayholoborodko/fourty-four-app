import React from 'react'
import { ProductsList } from './products/ProductsList'
import { ProductDetails } from './products/ProductDetails'
import { Cart } from './cart/Cart'
import { Switch, Route } from 'react-router-dom'

export const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route exact path="/" component={ProductsList} />
                <Route path="/product/:id" component={ProductDetails} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </main>
    )
}
