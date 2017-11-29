import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import skillsProfile from './Skills'

const indexReducer = combineReducers({
  form: formReducer,
  skillsProfile
});

export default indexReducer;
