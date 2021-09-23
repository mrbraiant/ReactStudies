import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import Todolist from './components/TodolistOLD';
import TodoListApp from './container/TodoListApp';


ReactDOM.render(
  <TodoListApp />,
  document.getElementById('root')
);
