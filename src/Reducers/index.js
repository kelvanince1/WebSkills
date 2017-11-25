import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import skills from './Skills';

const indexReducer = combineReducers({
  form: formReducer
});

export default indexReducer;
