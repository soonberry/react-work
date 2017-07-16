import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import getRoutes from './routes';
import registerServiceWorker from './registerServiceWorker';

let routes = getRoutes();

function renderApp() {
  render(
    <Router>
      <div id="root-app">
        {routes}
      </div>
    </Router>,
    document.getElementById('root'),
  );
}

renderApp();

registerServiceWorker();
