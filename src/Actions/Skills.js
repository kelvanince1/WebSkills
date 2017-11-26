import { FETCH_SKILLS } from './ActionTypes';

export const skillsAction = () => ({type: FETCH_SKILLS});

// export function createSkill(props) {
//
// }

// export const getUserSkills = () => async dispatch => {
//   const res = await fetch('');
//   let json = await res.json();
//   json = json.Items.shift();
//
//   dispatch({type: GET_SKILLS, payload: json});
// }
