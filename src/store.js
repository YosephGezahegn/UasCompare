import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { loadState, saveState } from './localStorage'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const persistedState = loadState()
const store =
    createStoreWithMiddleware(
        reducers,
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()

    )
store.subscribe(() => {
    saveState(store.getState())
})


export default store;