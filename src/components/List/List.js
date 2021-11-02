import { useEffect } from "react";
import useTasks from "../../hooks/useTasks";
import Card from "../Card/Card";

const List = () => {
  const { tasks, loadTasks, deleteTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const onclickDeleteTasks = (id) => {
    deleteTasks(id);
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
          />
        ))}
      </ul>
    </>
  );
};

export default List;
