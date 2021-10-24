import { createStore, combineReducers } from 'redux';

import {fetchReducer} from '../reducers/fetchreducer';

const rootReducer = combineReducers({
    fetch: fetchReducer,
});

const configureStore = () => {

return createStore(rootReducer);

}

export default configureStore;