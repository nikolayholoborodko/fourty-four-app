import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectProductsInCart } from '../main/cart/cartSlice'

export const Header = () => {
    //quantity of products in the cart
    const cartSize = useSelector(selectProductsInCart).length
    return (
        <header className="header">
            <Navbar sticky="top" collapseOnSelect expand="sm" bg="danger">
                <Container>
                    <Navbar.Brand>FortyFourApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/" as={Link}>
                                Products
                            </Nav.Link>
                            <Nav.Link to="/cart" as={Link}>
                                Cart <Badge bg="dark">{cartSize}</Badge>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
