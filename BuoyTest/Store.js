import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './src/reducers';
import { searchCockatilSaga } from './src/actions';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(searchCockatilSaga);
  return store;
}

export default configureStore;
