import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer as routing, push } from 'react-router-redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import user from './reducers/user';
import userActions from './actions/user';
import setting from './reducers/setting';
import settingActions from './actions/setting';

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const actionCreators = {
    ...userActions,
    ...settingActions,
    push
  };

  const reducers = {
    user,
    routing,
    setting
  };

  const middlewares = [ thunk, router ];

  let enhancer;
  // DONOT persistState in dev
  if (process.env.NODE_ENV === 'development') {
    let devCompose = compose;
    const compose_ = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if(compose_) {
      devCompose = compose_({ actionCreators });
    }
    enhancer = devCompose(applyMiddleware(...middlewares));
  }
  else {
    enhancer = compose(applyMiddleware(...middlewares), persistState());
  }
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, initialState, enhancer);
}
