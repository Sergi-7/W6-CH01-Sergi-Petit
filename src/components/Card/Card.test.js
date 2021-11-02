import { render, screen } from "@testing-library/react";
import { random } from "faker";
import { getRandomTask } from "../../factories/tasksFactory";
import Card from "./Card";

describe("Given a card component", () => {
  describe("When it receives a task", () => {
    test("Then it should render the title and the description, and a button", () => {
      const randomTask = getRandomTask();
      render(
        <Card title={randomTask.title} description={randomTask.description} />
      );

      const title = screen.getByRole("heading");
      const description = screen.getByText(randomTask.description);
      const button = screen.getByRole("button", { name: "Delete" });

      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
