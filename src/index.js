import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ScrollToTop from './Handler/ScrollToTop';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './Views/App';
import Chemex from './Views/Recipes/Chemex';
import French from './Views/Recipes/French';
import Aeropress from './Views/Recipes/Aeropress';
import Espresso from './Views/Recipes/Espresso';
import Pourover from './Views/Recipes/Pourover';
import CoffeeOrigins from './Views/Guides/CoffeeOrigins';

const routing = (
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/chemex' component={Chemex} />
                <Route path='/french' component={French} />
                <Route path='/aeropress' component={Aeropress} />
                <Route path='/espresso' component={Espresso} />
                <Route path='/pourover' component={Pourover} />
                <Route path='/coffee-origins' component={CoffeeOrigins} />
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
