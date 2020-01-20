import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Views/App';
import Chemex from './Views/Chemex';
import ScrollToTop from './Handler/ScrollToTop';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import French from './Views/French';
import Aeropress from './Views/Aeropress';
import Espresso from './Views/Espresso';
import Pourover from './Views/Pourover';

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
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
