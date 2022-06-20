import { useStore } from "../../store";

export const TodoList = () => {
  const { removeTodo, toggleCompletedState, todos } = useStore();
  return (
    <ul>
      {todos.map((todo) => (
        <li className='flex items-center' key={todo.id}>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => toggleCompletedState(todo.id)}
          />
          <p className='px-3'>{todo.description}</p>
          <button
            onClick={() => {
              removeTodo(todo.id);
            }}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
