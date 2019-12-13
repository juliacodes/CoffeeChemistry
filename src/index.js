import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Views/App';
import Recipes from './Views/Recipes';

import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const routing = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/recipes' component={Recipes} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
