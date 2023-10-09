function TodoList({ todos, setTodos }) {
  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) return { ...todo, completed };

        return todo;
      });
    });
  }
  return (
    <ul id="list">
      {Array.isArray(todos)
        ? todos.map((todo) => {
            return (
              <li key={crypto.randomUUID()}>
                <label className="list-item-label">
                  <input
                    onChange={(event) =>
                      toggleTodo(todo.id, event.target.value)
                    }
                    checked={todo.completed}
                    type="checkbox"
                    data-list-item-checkbox
                  />
                  <span data-list-item-text>{todo.todo}</span>
                </label>
                <button onClick={() => deleteTodo(todo.id)} data-button-delete>
                  Delete
                </button>
              </li>
            );
          })
        : null}
    </ul>
  );
}

export default TodoList;
