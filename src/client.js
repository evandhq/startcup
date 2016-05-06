import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'redux/create';
import getRoutes from 'routes';

const store = createStore();
const routes = getRoutes(store);
const rootEl = document.getElementById('content');
const element = (<Provider store={store}>{routes}</Provider>);
ReactDOM.render(element, rootEl);
