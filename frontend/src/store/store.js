import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';


const Store = createStore(
  rootReducer, //rootReducer
  {}, //intialState
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;