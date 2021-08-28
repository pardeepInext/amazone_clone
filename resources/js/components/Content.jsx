import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Product from '../views/Product';

const Content = () => {
    return (
        <Switch>
            <Route path={'/'} exact>
                <Home />
            </Route>
            <Route path={'/product'} exact>
                <Product />
            </Route>
        </Switch>
    )
}

export default Content
