import React from 'react';
import FetchApi from '../fetch-api';

import Button from './misc/Button'
import Label from './misc/Label'
import TodoCounter from './TodoCounter/TodoCounter'

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

	createTodo = () => {
		FetchApi
			.post('/todo', { text: this.state.newText })
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
    const oldState = [ ...this.state.todos ]

    for (let i = 0; i < oldState.length; i++) {
      if (oldState[i].id === todo.id) {
        oldState[i] = todo
        break
      }
    }

    this.setState({ todos: oldState })
  }

	handleChange = e => {
		this.setState({ newText: e.target.value });
	};

	handleKeyDown = e => {
		if (e.keyCode !== ENTER_KEY_CODE) return;
		this.createTodo();
	};

	render() {
		return (
			<div>
				<h1>todos</h1>

        <TodoCounter todos={ this.state.todos } />

				<input
					autoFocus
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
					placeholder="What needs to be done?"
					value={this.state.newText}
				/>

				<ul>
					{this.state.todos.map(todo => {
						return (
              <li key={todo.id}>
                <div className="view">
                  <Label
                    bgColor={ todo.completed ? 'red' : null }
                    labelText={ todo.text }
                  />

                  <Button
                    onClick={ () => this.handlePutRequest(todo.id) }
                    buttonText='Completed'
                  />
                </div>
              </li>
            )
          })}
				</ul>
			</div>
		);
	}
}
