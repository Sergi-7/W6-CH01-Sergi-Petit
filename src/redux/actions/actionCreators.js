import actionTypes from "./actionTypes";

export const loadTasksListAction = (taskslist) => ({
  type: actionTypes.loadTasksList,
  taskslist,
});

export const createTaskAction = (task) => ({
  type: actionTypes.createTask,
  task,
});

export const deleteTaskAction = (id) => ({
  type: actionTypes.deleteTask,
  id,
});

export const updateTaskAction = (task) => ({
  type: actionTypes.updateTask,
  task,
});

export const loadCurrentTaskAction = (task) => ({
  type: actionTypes.loadCurrentTask,
  task,
});
