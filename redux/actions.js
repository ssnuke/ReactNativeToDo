import {ADD_TODO, DELETE_TODO, DEL_IMP, ADD_IMP} from './actionTypes';

let nextTodoId = 0;
let impId = 0;

export const addTodo = (task,date) => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    task,
    date,
  },
});

export const impAdd = task => ({
  type: ADD_IMP,
  payload: {
    id: ++impId,
    task,
  },
});

export const impDel = id => ({
  type: DEL_IMP,
  payload: {
    id,
  },
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});
