import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import {Router, browserHistory} from 'react-router';
//Router= decide which react component to show according to the Url
//browserHistory= object that tells the Router how to interrupted changes to the Url

import routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.querySelector('.container')
);

// <Router history={browserHistory} routes={routes} /> //pass render control to Router
//browserHistory use the entire url when you want to know where you are
//hashHistory is similar to browserHistory but it use everything to the right of the hash url
