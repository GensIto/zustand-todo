import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

export const Todo = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <AddTodo />
      <TodoList />
    </div>
  );
};
