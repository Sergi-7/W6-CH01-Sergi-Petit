import actionTypes from "../actions/actionTypes";

const tasksReducer = (tasks = [], action) => {
  let newTasksState = tasks;

  switch (action.type) {
    case actionTypes.loadTasksList:
      newTasksState = action.taskslist;
      break;

    case actionTypes.createTask:
      newTasksState = [...tasks, action.task];
      console.log(action.task);
      break;

    case actionTypes.deleteTask:
      newTasksState = tasks.filter((task) => task.id !== action.id);
      break;

    // case actionTypes.updateTask:
    //   newTasksState =
    //   break;
    default:
      return tasks;
  }
  return newTasksState;
};

export default tasksReducer;
