import React, {Component, PropTypes} from 'react';
import { compose, shouldUpdate } from 'recompose';
import TodoItem from './TodoItem';

export default compose(
  shouldUpdate((prop, next) => false)
)(class TodoItemContainer extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired
    //Actions
    //completeTodo
  };

  render() {
    return <TodoItem {...this.props} />;
  }
});

