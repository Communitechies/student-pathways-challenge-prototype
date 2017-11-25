import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

// Reducers

export const history = createHistory()

const reducer = combineReducers({
  // users,
  routing: routerReducer
})

const store = createStore(
  reducer,
  applyMiddleware(ReduxThunk, routerMiddleware(history))
)

export default store
