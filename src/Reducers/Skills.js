import { FETCH_SKILLS } from '../Actions/ActionTypes';

const initialState = {
  skills: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SKILLS:
      return {
         ...state,
         skills: action.skills
      };
    default:
      return state;
  }
}
