import React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'
import 'jest-dom/extend-expect'

import TodoList from './TodosList'

describe('<TodoList />', () => {
  it('should render two <TodoItem /> components', () => {
    const tasks = [
      {
        id: 1,
        text: 'Task 1',
        completed: false
      },
      {
        id: 2,
        text: 'Task 2',
        completed: false
      }
    ]

    // mock 'handlePutRequest'
    const handlePutRequest = jest.fn(id => {
      // shallow copy
      const task = tasks.find(task => task.id === id)
      task.completed = true
    })
    
    const tree = render(
      <TodoList
        todos={ tasks }
        handlePutRequest={ handlePutRequest }
      />
    )
    
    const { getByText } = tree

    // get necessary elements needed to test
    const task1 = getByText(/task 1/i)
    const task2 = getByText(/task 2/i)
    const button = getByText(/completed/i)

    // check that the two tasks have been properly loaded into the DOM
    expect(task1).toBeInTheDocument()
    expect(task2).toBeInTheDocument()

    fireEvent.click(button)

    expect(handlePutRequest).toHaveBeenCalledTimes(1)
    // make sure 'handlePutRequest' is called with the correct todo ID
    expect(handlePutRequest).toHaveBeenCalledWith(1)
    // ensure our component will look the same for future updates to the actual component
    expect(tree).toMatchSnapshot()
  })
})