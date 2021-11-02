import { createTaskAction, deleteTaskAction } from "../actions/actionCreators";
import tasksReducer from "./tasksReducer.js";

describe("Given a tasksReducer", () => {
  describe("When it receives a deleteTask action", () => {
    test("Then it should return a list without the specified id task", () => {
      const taskList = [
        { id: 1, title: "test1", description: "test1" },
        { id: 2, title: "test2", description: "test2" },
        { id: 3, title: "test3", description: "test3" },
      ];
      const deletedTask = taskList[1];

      const action = deleteTaskAction(deletedTask.id);
      const newTaskList = tasksReducer(taskList, action);

      expect(newTaskList).not.toContain(deletedTask);
    });
  });
  describe("When it receives a createTask action", () => {
    test("Then it should return a list with the new task", () => {
      const taskList = [
        { id: 1, title: "test1", description: "test1" },
        { id: 2, title: "test2", description: "test2" },
        { id: 3, title: "test3", description: "test3" },
      ];
      const newTask = { id: 4, title: "test4", description: "test4" };

      const action = createTaskAction(newTask);
      const newTaskList = tasksReducer(taskList, action);

      expect(newTaskList).toContain(newTask);
    });
  });
  describe("When it receives an updateTask action", () => {
    test("Then it should return a list with specified task updated", () => {});
  });
});
