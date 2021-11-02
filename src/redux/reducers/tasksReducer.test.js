import { createTaskAction, deleteTaskAction } from "../actions/actionCreators";
import tasksReducer from "./tasksReducer.js";
import {
  getRandomTask,
  getRandomTaskslist,
} from "../../components/factories/tasksFactory";
import actionTypes from "../actions/actionTypes";

describe("Given a tasksReducer", () => {
  describe("When it receives a deleteTask action", () => {
    test("Then it should return a list without the specified id task", () => {
      const taskList = getRandomTaskslist(3);
      const deletedTask = taskList[1];

      const action = deleteTaskAction(deletedTask.id);
      const newTaskList = tasksReducer(taskList, action);

      expect(newTaskList).not.toContain(deletedTask);
    });
  });
  describe("When it receives a createTask action", () => {
    test("Then it should return a list with the new task", () => {
      const taskList = getRandomTaskslist(3);
      const newTask = getRandomTask();

      const action = createTaskAction(newTask);
      const newTaskList = tasksReducer(taskList, action);

      expect(newTaskList).toContain(newTask);
    });
  });
  describe("When it receives a loadTasks action with a taskslist", () => {
    test("Then it should return a list with all the tasks", () => {
      const initialTaskslist = [];
      const tasksList = getRandomTaskslist(3);
      const action = {
        type: actionTypes.loadTasksList,
        taskslist: tasksList,
      };

      const newList = tasksReducer(initialTaskslist, action);

      expect(newList).toEqual(tasksList);
    });
  });
});
