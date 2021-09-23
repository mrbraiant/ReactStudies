import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './components/Todolist';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todolist />, div);
});
