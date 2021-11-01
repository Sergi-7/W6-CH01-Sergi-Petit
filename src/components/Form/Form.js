import { useState } from "react";
import useTasks from "../../hooks/useTasks";

const Form = () => {
  const { createTasks } = useTasks();
  const [task, setTask] = useState({ task: "", description: "" });

  const handleSubmit = (event) => {
    createTasks(task);
    console.log(task);
    event.preventDefault();
  };

  const handleTitleOnChange = (event) => {
    setTask({ ...task, task: event.target.value });
  };

  const handleDescriptionOnChange = (event) => {
    setTask({ ...task, description: event.target.value });
    console.log(task);
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
      <input type="submit" value="submit"></input>
    </form>
  );
};

export default Form;
