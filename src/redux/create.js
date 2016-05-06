import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

export default function create() {
  const middleware = compose(
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
