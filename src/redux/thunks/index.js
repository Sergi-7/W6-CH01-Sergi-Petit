import { loadTasksListAction } from "../actions/actionCreators";

const loadTasksThunk = () => {
  return async (dispatch) => {
    const response = await fetch(process.env.REACT_APP_API_URL);

    const tasksList = await response.json();
    dispatch(loadTasksListAction(tasksList));
  };
};

export default loadTasksThunk;
