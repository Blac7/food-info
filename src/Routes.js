import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Dishes from './components/Dishes'
import Dish from './foodPages/Dish'
import Categories from './components/Categories'
import Category from './components/Category'
import Ingredients from './components/Ingredients'
import Ingredient from './components/Ingredient'
import Cuisines from './components/Cuisines'
import Cuisine from './components/Cuisine'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/dishes" exact component={Dishes} />
                <Route path="/dish/:id" exact component={Dish} />
                <Route path="/categories" exact component={Categories} />
                <Route path="/category/:name" exact component={Category} />
                <Route path="/ingredients" exact component={Ingredients} />
                <Route path="/ingredient/:name" exact component={Ingredient} />
                <Route path="/cuisines" exact component={Cuisines} />
                <Route path="/cuisine/:name" exact component={Cuisine} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
