import React from 'react'

const TodoCounter = ({ todos }) => {
  const todosCompleted = () => {
    return todos.reduce((total, next) => {
      total = total
      
      if (next.completed) {
        total++
      }

      return total
    }, 0)
  }

  const todoPending = () => {
    const pending = todos.length - todosCompleted()
    const message = `${ pending } Tasks Left`
    return message
  }
  
  return (
    <React.Fragment>
      <p>{ todosCompleted() } Tasks Completed</p>
      <p>{ todoPending() }</p>
    </React.Fragment>
  )
}
 
export default TodoCounter