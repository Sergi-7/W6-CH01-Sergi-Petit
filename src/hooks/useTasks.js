import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCurrentTaskAction } from "../redux/actions/actionCreators";
import loadTasksThunk from "../redux/thunks";
import createTaskThunk from "../redux/thunks/createTask";
import deleteTaskThunk from "../redux/thunks/deleteTask";
import updateTaskThunk from "../redux/thunks/updateTask";

const useTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(({ tasks }) => tasks);

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  const createTasks = (task) => {
    dispatch(createTaskThunk(task));
  };

  const deleteTasks = (id) => {
    dispatch(deleteTaskThunk(id));
  };

  const updateTask = (task) => {
    dispatch(updateTaskThunk(task));
  };

  const loadTask = (task) => {
    dispatch(loadCurrentTaskAction(task));
  };

  return {
    tasks,
    loadTasks,
    createTasks,
    deleteTasks,
    updateTask,
    loadTask,
  };
};

export default useTasks;
