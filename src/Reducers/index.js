import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import skills from './Skills';

const rootReducer = combineReducers({
  skills: skills
});

export default rootReducer;
