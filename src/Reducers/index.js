import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const indexReducer = combineReducers({
  form: formReducer
});

export default indexReducer;
