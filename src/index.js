import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

render(<App />, document.getElementById('root'));
render(<TodoList />, document.getElementById('root'));
