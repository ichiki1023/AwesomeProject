import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import reducer from './modules/reducer';
import { composeWithDevTools } from 'remote-redux-devtools';

export default function createStore() {
  const middlewares = [
    //TODO: ここに必要なmiddlewareを追加していく
  ];


  let enhancer = {};
  if(process.env.NODE_ENV !== "production") {
    enhancer = composeWithDevTools(
      applyMiddleware(...middlewares)
    );
  } else {
    enhancer = compose(
      applyMiddleware(...middlewares)
    );
  }

  const store = _createStore(reducer, {}, enhancer);

  return store;
}
