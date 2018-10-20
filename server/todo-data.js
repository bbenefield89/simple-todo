import Todo from './database/models/Todo'

export default class TodoData {
	static async create({ text }) {
    const todo = await Todo.create({ text, completed: false })
    return todo
	}

	static findAll() {
    return Todo.findAll({
      order: [
        [ 'createdAt', 'ASC' ]
      ]
    })
	}

  // no longer needed
	static delete(id) {
		return new Promise((resolve, reject) => {
      const todoIndex = todos.findIndex(todo => todo.id.toString() === id.toString());
			if (todoIndex < 0 || todoIndex >= todos.length) return reject();
			todos.splice(todoIndex, 1);
			resolve();
		})
	}

	static async update(id) {
    const todo = await Todo.findById(id)

    await todo.update({
      completed: !todo.completed
    })

    return todo
	}
}
