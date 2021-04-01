import { ADD_IMP, DEL_IMP } from '../actionTypes';

const newState = {
  imp_task: [],
};

export default function(state = newState, action) {
  switch (action.type) {
    case ADD_IMP: {
      const { id, task } = action.payload
      return {
        ...state,
        imp_task: [ ...state.imp_task, { id, task }]
      };
    }
    case DEL_IMP: {
      const { id } = action.payload
      return {
        ...state,
        imp_task: state.imp_task.filter((todo) => todo.id != id),
      };
    }
    default:
      return state;
  }
}
