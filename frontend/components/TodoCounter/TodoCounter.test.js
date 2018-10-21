/**
 * TODO: DRY up tests
 */

import React from 'react'
import { cleanup, render } from 'react-testing-library'
import 'jest-dom/extend-expect'

import TodoCounter from './TodoCounter'

afterEach(() => {
  cleanup()
})

describe('<TodoCounter />', () => {
  it('should render 0 tasks completed and 2 tasks left', () => {
    const tasks = [
      {
        id: 1,
        taskText: 'Task 1',
        completed: false
      },
      {
        id: 1,
        taskText: 'Task 1',
        completed: false
      }
    ]

    const { getByText } = render(<TodoCounter todos={ tasks } />)
    const tasksCompleted = getByText(/0 Tasks Completed/i)
    const tasksPending = getByText(/2 Tasks Left/i)

    expect(tasksCompleted).toBeInTheDocument()
    expect(tasksPending).toBeInTheDocument()
  })

  it('should render 1 task completed and 1 task left', () => {
    const tasks = [
      {
        id: 1,
        taskText: 'Task 1',
        completed: true
      },
      {
        id: 1,
        taskText: 'Task 1',
        completed: false
      }
    ]

    const { getByText } = render(<TodoCounter todos={ tasks } />)
    const tasksCompleted = getByText(/1 Tasks Completed/i)
    const tasksPending = getByText(/1 Tasks Left/i)

    expect(tasksCompleted).toBeInTheDocument()
    expect(tasksPending).toBeInTheDocument()
  })

  it('should render 2 task completed and 0 task left', () => {
    const tasks = [
      {
        id: 1,
        taskText: 'Task 1',
        completed: true
      },
      {
        id: 1,
        taskText: 'Task 1',
        completed: true
      }
    ]

    const { getByText } = render(<TodoCounter todos={ tasks } />)
    const tasksCompleted = getByText(/2 Tasks Completed/i)
    const tasksPending = getByText(/0 Tasks Left/i)

    expect(tasksCompleted).toBeInTheDocument()
    expect(tasksPending).toBeInTheDocument()
  })
})