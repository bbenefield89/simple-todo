import React from 'react'

const Header = ({ text }) => {
  return (
    <h1>{ text }</h1>
  )
}

Header.defaultProps = {
  text: 'todos'
}
 
export default Header