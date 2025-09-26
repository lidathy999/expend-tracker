import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Page] Increment');
export const decrement = createAction('[Counter Page] Decrement');
export const reset = createAction('[Counter Page] Reset', props<{ value: number }>());