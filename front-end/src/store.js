import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddlerware from 'redux-saga';
import userReducer from './reducer/userReducer.js';
import rootSaga from './saga';

const SagaMiddleware = createSagaMiddlerware();
const store = createStore(
  userReducer,
  compose(applyMiddleware(SagaMiddleware))
);

SagaMiddleware.run(rootSaga);
export default store;
