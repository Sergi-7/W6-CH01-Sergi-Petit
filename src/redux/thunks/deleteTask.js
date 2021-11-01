import { deleteTaskAction } from "../actions/actionCreators";

const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteTaskAction(id));
  }
};

export default deleteTaskThunk;
