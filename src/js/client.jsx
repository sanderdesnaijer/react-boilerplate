import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

require('../style/style.sass');

// components
import App from './components/app';

const routes =(
    <Route path="/" component={App}>
            
    </Route>
);

ReactDom.render(
    <Router history={browserHistory}>
        {routes}
    </Router>,
    document.getElementById('app')
);
