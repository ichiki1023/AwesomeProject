import React from 'react';
import { Text, View } from 'react-native';

export default function render(props) {
  const {
    todo,
    completeTodo
  } = props;

  return (
    <View>
      <Text>{todo.text}</Text>
    </View>
  );
}
