import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadTasksThunk from "../redux/thunks";
import createTaskThunk from "../redux/thunks/createTask";
import deleteTaskThunk from "../redux/thunks/deleteTask";

const useTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(({ tasks }) => tasks);

  const loadTasks = useCallback(() => {
    dispatch(loadTasksThunk());
  }, [dispatch]);

  const createTasks = (task) => {
    dispatch(createTaskThunk(task));
  };

  const deleteTasks = (task) => {
    dispatch(deleteTaskThunk(task));
  };
  return {
    tasks,
    loadTasks,
    createTasks,
    deleteTasks,
  };
};

export default useTasks;
