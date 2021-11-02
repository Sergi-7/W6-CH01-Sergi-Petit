import { createTaskAction } from "../actions/actionCreators";

const createTaskThunk = (task) => {
  return async (dispatch) => {
    const response = await fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json",
      },
    });
    const newTask = await response.json();
    dispatch(createTaskAction(newTask));
  };
};

export default createTaskThunk;
