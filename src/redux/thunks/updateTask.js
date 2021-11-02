import { updateTaskAction } from "../actions/actionCreators";

const updateTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${task.id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const updatedTask = await response.json();
  if (response.ok) {
    dispatch(updateTaskAction(updatedTask));
  }
};

export default updateTaskThunk;
