import { FETCH_USER } from '../Actions/ActionTypes';

const initialState = {
  username: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
         ...state,
         username: action.username
      };
    default:
      return state;
  }
}
