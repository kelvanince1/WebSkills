import { SKILLS_DATA } from '../Actions/ActionTypes';

const initialState = {
  payload: {}
};

export default function skillsProfile(state = initialState, action) {
  switch(action.type) {
    case SKILLS_DATA:
      return {
        ...state,
        payload: action.payload
      }
    default:
      return state
  }
}
