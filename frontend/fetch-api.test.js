import FetchApi from './fetch-api'

describe('Single test for the FetchApi.get', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  
  it('should return a list of tasks', async () => {
    const response = {
      todos: [
        {
          id: 1,
          todoText: 'Task 1',
          completed: false
        },
        {
          id: 2,
          todoText: 'Task 2',
          completed: false
        }
      ]
    }
    
    fetch.mockResponseOnce(JSON.stringify(response))

    const data = await FetchApi.get('http://localhost:3001/todos/1')
    
    expect(data).toEqual(response)
  })
})