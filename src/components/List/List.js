import Card from "../Card/Card";

const List = ({ taskslist }) => {
  const testList = [
    { id: 1, title: "test1", description: "test1" },
    { id: 2, title: "test2", description: "test2" },
    { id: 3, title: "test3", description: "test3" },
  ];

  return (
    <>
      {testList.map((task) => (
        <Card title={task.title} description={task.description} key={task.id} />
      ))}
    </>
  );
};

export default List;
