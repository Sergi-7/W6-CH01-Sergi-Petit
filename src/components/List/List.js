import { useEffect } from "react";
import useTasks from "../../hooks/useTasks";
import Card from "../Card/Card";

const List = () => {
  const { tasks, loadTasks, deleteTasks, loadTask } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const onclickDeleteTasks = (id) => {
    deleteTasks(id);
  };

  const onClickLoadCurrentTask = (task) => {
    loadTask(task);
  };
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Card
            title={task.task}
            description={task.description}
            id={task.id}
            key={task.id}
            actionOnClick={() => onclickDeleteTasks(task.id)}
            editActionOnClick={() => onClickLoadCurrentTask(task)}
          />
        ))}
      </ul>
    </>
  );
};

export default List;
