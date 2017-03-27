import { createAction, handleActions } from 'redux-actions';
import { compose } from 'recompose';
import { initialState } from '../utils';

const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';

/*
 * actions
 */
export function addTodo(text) {
  return createAction(ADD_TODO)(text);
}

export function completeTodo(index) {
  return createAction(COMPLETE_TODO)(index);
}

// ------------------------------------
// Reducer
// ------------------------------------
export default compose(
  initialState({
    //TODO: todosはservice層から持ってくる
    todos: [
      { text:'Buy milk', id: '1', isComplete: false },
      { text:'Drink milk', id: '2', isComplete: false  },
      { text:'Repeat', id:'3', isComplete: false  }
      ]
  })
)(handleActions({
    [ADD_TODO]: (state, {payload}) => ({
      //TODO:
      ...state
    }),
    [COMPLETE_TODO]: (state, {payload}) => ({
      //TODO:
      ...state
    })
}));


