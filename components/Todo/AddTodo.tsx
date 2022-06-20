import { useStore } from "../../store";
import { useState } from "react";

export const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useStore();
  return (
    <>
      <input
        className='py-2 border'
        type='text'
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button
        onClick={() => {
          if (todoText.length) {
            addTodo(todoText);
            setTodoText("");
          }
        }}>
        Add Todo
      </button>
    </>
  );
};
