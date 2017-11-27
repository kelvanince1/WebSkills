import { SKILLS_DATA } from './ActionTypes';

// Asynchronously await updates in the URL endpoint. When a new item is added,
// grab it and pull it into the app.

// This data will be passed through to the components as State.
export const skillsData = () => async dispatch => {
  const resWithId = await fetch(``);
  // const json = await res.json();
  const jsonWithId = await resWithId.json();
  const jsonWithIdShift = jsonWithId.Items.shift();

  // dispatch({type: actionTypes.SKILLS_DATA, payload: jsonWithId});
}
