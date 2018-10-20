import { Sequelize } from 'sequelize'

import db from '../connection'

const Todo = db.define(
  'todo',
  {
    text: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [1, 256],
        notEmpty: true
      }
    },

    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    }
  }
)

export default Todo