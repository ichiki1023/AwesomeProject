import React from 'react';
import styles from './style';
import { View, ListView } from 'react-native';
import TodoItem from 'components/molecules/TodoItem';

export default function render(props) {
  const {
    todos,
    //Actions
    //addTodo,
    completeTodo
  } = props;

  const todoItem = (todo) => {
    return <TodoItem todo={todo} completeTodo={completeTodo} />
  }

  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  return (
    <View style={styles.container}>
      {todos.length !== 0 ?
        <ListView dataSource={dataSource.cloneWithRows(todos)}
                  renderRow={todoItem} />
        : null
      }
    </View>
  );
}

