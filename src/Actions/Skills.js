import { SKILLS_DATA } from './ActionTypes';

// Asynchronously await updates in the URL endpoint. When a new item is added,
// grab it and pull it into the app.

// This data will be passed through to the components as State.
export const skillsData = () => async dispatch => {
  const res = await fetch(`http://skills.us-east-1.elasticbeanstalk.com/skills`);
  const json = await res.json();

  console.log('Data is ', json);

  // dispatch({type: actionTypes.SKILLS_DATA, payload: jsonWithId});
}
