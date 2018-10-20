import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoText: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  render() {
    return (
      <input
        autoFocus
        name='todoText'
        onChange={ this.handleChange }
        onKeyDown={ e => this.props.handleKeyDown(e, this.state.todoText) }
        placeholder={ this.props.placeholder }
        value={ this.state.newText }
      />
    )
  }
}

Input.defaultProps = {
  placeholder: 'What needs to be done?'
}

export default Input