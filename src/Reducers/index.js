import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import SkillsReducer from './Skills';

const indexReducer = combineReducers({
  form: formReducer,
  skills: SkillsReducer
});

export default indexReducer;
