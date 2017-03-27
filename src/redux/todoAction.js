import { createAction, handleActions } from 'redux-actions';
import { compose } from 'recompose';
import { initialState } from './utils';

const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const SET_VISIBILITY_FILTER_SHOW_ALL = 'SET_VISIBILITY_FILTER' + '_SHOW_ALL';
const SET_VISIBILITY_FILTER_SHOW_COMPLETED = 'SET_VISIBILITY_FILTER' + 'SHOW_COMPLETED';
const SET_VISIBILITY_FILTER_SHOW_ACTIVE = 'SET_VISIBILITY_FILTER' + 'SHOW_ACTIVE';

/*
 * actions
 */
export function addTodo(text) {
  return createAction(ADD_TODO)(text);
}

export function completeTodo(index) {
  return createAction(COMPLETE_TODO)(index);
}

export function setVisibilityFilter(filter) {
  return createAction(SET_VISIBILITY_FILTER)(filter);
}

// ------------------------------------
// Reducer
// ------------------------------------
export default compose(
  initialState({
    todos: [
      { text:'Buy milk', id: '1', isComplete: false },
      { text:'Drink milk', id: '2', isComplete: false  },
      { text:'Repeat', id:'3', isComplete: false  }
      ]
  })
)(handleActions({
    [ADD_TODO]: (state, {payload}) => ({
      ...state,
      text: payload.text,
      completed: false
    }),
    [COMPLETE_TODO]: (state, {payload}) => ({
      ...state
    }),
    [SET_VISIBILITY_FILTER_SHOW_ALL]: (state, {payload}) => ({
      ...state
    }),
    [SET_VISIBILITY_FILTER_SHOW_COMPLETED]: (state, {payload}) => ({
        ...state
    }),
    [SET_VISIBILITY_FILTER_SHOW_ACTIVE]: (state, {payload}) => ({
        ...state
    }),
}));


