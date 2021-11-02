import { useEffect, useState } from "react";
import useTasks from "../../hooks/useTasks";

const Form = () => {
  const initialTask = { task: "", description: "" };
  const { createTasks } = useTasks();
  const [task, setTask] = useState(initialTask);

  const handleSubmit = (event) => {
    createTasks(task);
    event.preventDefault();
    setTask(initialTask);
  };

  const handleTitleOnChange = (event) => {
    setTask({ ...task, task: event.target.value });
  };

  const handleDescriptionOnChange = (event) => {
    setTask({ ...task, description: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Title</label>
      <input type="text" id="text" onChange={handleTitleOnChange} />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        onChange={handleDescriptionOnChange}
      />
      <button type="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
