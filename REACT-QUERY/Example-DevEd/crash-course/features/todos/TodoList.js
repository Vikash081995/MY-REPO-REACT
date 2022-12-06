import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../../api/todosApi";
import { useState } from "react";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const queryClient = useQueryClient();

  const {
    isLoading,
    isError,
    error,
    data: todos
  } = useQuery("todos", getTodos, {
    select: (data) => data.sort((a, b) => b.id - a.id)
  });

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // invalidates cache and refetch
      queryClient.invalidateQueries("todos");
    }
  });

  const updateTodoMutation = useMutation(updateTodo, {
    onSuccess: () => {
      // invalidates cache and refetch
      queryClient.invalidateQueries("todos");
    }
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      // invalidates cache and refetch
      queryClient.invalidateQueries("todos");
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoMutation.mutate({ userId: 1, title: newTodo, completed: false });
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div>
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new Todo"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );

  let content;
  if (isLoading) {
    content = <p>Loading....</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else {
    content = todos.map((todo) => {
      return (
        <article key={todo.id}>
          <div className="todo">
            <input
              type="checkbox"
              checked={todo.completed}
              id={todo.id}
              onChange={() =>
                updateTodoMutation.mutate({
                  ...todo,
                  completed: !todo.completed
                })
              }
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <div>
            <button onClick={() => deleteTodoMutation.mutate({ id: todo.id })}>
              Delete
            </button>
          </div>
        </article>
      );
    });
  }

  return (
    <main>
      <h1>Todos List</h1>
      {newItemSection}
      {content}
    </main>
  );
};

export default TodoList;
