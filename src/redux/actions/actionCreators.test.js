import {
  createTaskAction,
  deleteTaskAction,
  loadTasksListAction,
  updateTaskAction,
} from "./actionCreators";
import actionTypes from "./actionTypes";
import {
  getRandomTask,
  getRandomTaskslist,
} from "../../components/factories/tasksFactory";

describe("Given a loadTasksListsAction", () => {
  describe("When it receives a list of tasks", () => {
    test("Then it should return an loadTasksListAction with the tasks received", () => {
      const tasksList = getRandomTaskslist();
      const expectedAction = {
        type: actionTypes.loadTasksList,
        taskslist: tasksList,
      };

      const actionResult = loadTasksListAction(tasksList);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a createTasklistAction", () => {
  describe("When it receives a task", () => {
    test("Then it should create a type action with the new task", () => {
      const newTask = getRandomTask();
      const expectedAction = {
        type: actionTypes.createTask,
        task: newTask,
      };

      const actionResult = createTaskAction(newTask);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteTaskslistAction", () => {
  describe("When it receives an id", () => {
    test("Then it should return a type action with the id", () => {
      const id = 2;
      const expectedAction = {
        type: actionTypes.deleteTask,
        id,
      };

      const actionResult = deleteTaskAction(id);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given an updateTaskAction", () => {
  describe("When it receives an id and a task", () => {
    test("Then it should return a type action with the id and task received", () => {
      const modifiedTask = getRandomTask();
      const expectedAction = {
        type: actionTypes.updateTask,
        task: modifiedTask,
      };

      const actionResult = updateTaskAction(modifiedTask);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
