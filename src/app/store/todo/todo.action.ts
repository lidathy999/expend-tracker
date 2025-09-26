import { createAction, props } from "@ngrx/store";

export const addTodo = createAction('[Todo Page] Add Todo', props<{ todo: string }>());
export const removeTodo = createAction('[Todo Page] Remove Todo', props<{ index: number }>());