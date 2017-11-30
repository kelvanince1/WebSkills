import { SKILLS_DATA } from './ActionTypes';

// Asynchronously await updates in the URL endpoint. When a new item is added,
// grab it and pull it into the app.

// This data will be passed through to the components as State.
export const skillsData = () => async dispatch => {
  const username = 'kelvanince';
  const res = await fetch(`http://skills.us-east-1.elasticbeanstalk.com/skills/${username}`);
  let json = await res.json();
  json = json.Items.shift();


  dispatch({type: SKILLS_DATA, payload: json});
}
