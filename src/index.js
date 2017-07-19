import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import RecipeItem from './Recipe/RecipeItem'

render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/recipe/:id" component={RecipeItem} />
        </div>
    </Router>,
    document.getElementById('root'),
);

registerServiceWorker();
