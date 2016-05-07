import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
//import createSagaMiddleware from 'redux-saga';
//import sagas from './sagas';

export default function create() {
  //const sagaMiddleware = createSagaMiddleware(sagas);

  const middleware = compose(
    //applyMiddleware(sagaMiddleware),
    __DEVELOPMENT__ &&
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() :
      f => f
  );
  const store = createStore(reducers, middleware);

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'));
    });
  }

  return store;
}
