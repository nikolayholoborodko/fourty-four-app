import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { App } from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { loadProducts } from './features/main/products/productsSlice'
import { BrowserRouter as Router } from 'react-router-dom'
store.dispatch(loadProducts())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
