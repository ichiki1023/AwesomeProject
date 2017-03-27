import React, {Component} from 'react';
import { Provider } from 'react-redux';
import createStore from '../redux/create';
//import TodoApp from './TodoApp';
//TODO: NavigatorでTOPから遷移させる
import List from '../components/organisms/contents/List';

const store = createStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}