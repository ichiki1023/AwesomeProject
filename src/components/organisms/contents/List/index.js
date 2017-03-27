import React, {Component, PropTypes} from 'react';
import * as Actions from 'redux/todoAction';
import { connectActionAndState } from  'helpers/Connector';
import { compose, onlyUpdateForPropTypes } from 'recompose';
import List from './List';

export default compose(
  //TODO: AsyncLoaderを採用してtodosをfetchする
  connectActionAndState((state) => {
    return state.todos;
  },Actions),
  onlyUpdateForPropTypes
)(class ListContainer extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired
    //Actions
    //addTodo,
    //completeTodo
  };

  render() {
    return <List {...this.props} />;
  }
});

