import { createStore } from 'redux';
import rootReducer from './reducers';  // You will create this in the next step

const store = createStore(rootReducer);

export default store;
