import { useQuery } from "react-query";

// https call will mde here
const fetchTodoList = () => {};

function Todos() {
  const { isLoading, isError, error, data } = useQuery("todos", fetchTodoList);
  if (isLoading) {
    return <spna>Loading....</spna>;
  }

  if (isError) {
    return <span>Error:{error.message}</span>;
  }
  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
