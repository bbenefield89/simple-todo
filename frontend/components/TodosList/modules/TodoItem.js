import React from 'react'

import Button from '../../misc/Button'
import Label from '../../misc/Label'

const TodoItem = ({ id, completed, handlePutRequest, text }) => {
  return (
    <li>
      <div className="view">
        <Label
          bgColor={ completed ? 'red' : null }
          labelText={ text }
        />

        <Button
          onClick={ () => handlePutRequest(id) }
          buttonText='Completed'
        />
      </div>
    </li>
  )
}
 
export default TodoItem