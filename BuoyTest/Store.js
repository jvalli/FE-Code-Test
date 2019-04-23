import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

const configureStore = () => {
  return createStore(reducers, {}, applyMiddleware(ReduxThunk));
}

export default configureStore;
