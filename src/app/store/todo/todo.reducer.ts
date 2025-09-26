import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from './todo.action';

export interface TodoState {
  todos: string[];
}

export const initialTodoState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialTodoState,
  on(addTodo, (state, action) => {
    console.log('oacton', action.todo);
    return { ...state, todos: [...state.todos, action.todo] };
  }),
  on(removeTodo, (state, action) => ({
    ...state,
    todos: state.todos.filter((_, index) => index !== action.index),
  }))
);
