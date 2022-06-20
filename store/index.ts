import create from "zustand";
import { Todo } from "../types";

type State = {
  todos: Todo[];
  //
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  toggleCompletedState: (id: string) => void;
};

export const useStore = create<State>((set) => ({
  todos: [],
  addTodo: (description: string) => {
    set((state) => ({
      todos: [
        // 一度展開する
        ...state.todos,
        // 最後に▼を追加
        {
          id: Math.random().toString(),
          description,
          completed: false,
        },
      ],
    }));
  },
  //
  removeTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  //
  toggleCompletedState: (id: string) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },
}));
