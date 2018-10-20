import React from 'react'

import TodoItem from './modules/TodoItem'

const TodosList = ({ todos, handlePutRequest }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <TodoItem
          key={ id }
          id={ id }
          completed={ completed }
          handlePutRequest={ handlePutRequest }
          text={ text }
        />
      ))}
    </ul>
  )
}
 
export default TodosList