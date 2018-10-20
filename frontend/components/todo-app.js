import React from 'react';
import FetchApi from '../fetch-api';

import Header from './misc/Header'
import Input from './misc/Input'
import TodoCounter from './TodoCounter/TodoCounter'
import TodosList from './TodosList/TodosList'

const ENTER_KEY_CODE = 13;

export default class TodoApp extends React.Component {
	state = { todos: [], newText: '' };

	constructor(props) {
		super(props);
		this.getTodos();
	}

	getTodos = () => {
		return FetchApi
			.get('/todo')
			.then(todos => this.setState({ todos }))
			.catch(() => alert('There was an error getting todos'));
	};

	createTodo = text => {
		FetchApi
			.post('/todo', { text })
			.then((newTodo) => {
				const newTodos = Array.from(this.state.todos);
        newTodos.push(newTodo);
				this.setState({ todos: newTodos, newText: '' });
			})
			.catch(() => alert('There was an error creating the todo'));
	};

  // as of right now this method isnt needed
	handleDeleteRequest = (id) => {
		FetchApi
			.delete(`/todo/${id}`)
			.then(() => {
				const newTodos = Array.from(this.state.todos);
				const todoIndex = newTodos.findIndex(todo => todo.id.toString() === id.toString());
				newTodos.splice(todoIndex, 1);
				this.setState({ todos: newTodos });
			})
			.catch(() => alert('Error removing todo'));
  };
  
  handlePutRequest = async (id) => {
    const todo = await FetchApi.put(`/todo/${ id }`)
    const state = [ ...this.state.todos ]

    for (let i = 0; i < state.length; i++) {
      if (state[i].id === todo.id) {
        state[i] = todo
        break
      }
    }

    this.setState({ todos: state })
  }

	handleChange = e => {
		this.setState({ newText: e.target.value });
	};

	handleKeyDown = (e, text) => {
    if (e.keyCode !== ENTER_KEY_CODE) return;
		this.createTodo(text);
	};

	render() {
		return (
			<div>
				<Header />

        <TodoCounter todos={ this.state.todos } />

        <Input
          handleChange={ this.handleChange }
          handleKeyDown={ this.handleKeyDown }
        />

        <TodosList
          todos={ this.state.todos }
          handlePutRequest={ this.handlePutRequest }
        />
			</div>
		);
	}
}
