import React from 'react'
import styled from 'styled-components'

const LabelStyled = styled.label`
  background: ${({ bgColor=null }) => bgColor}
`

const Label = ({ bgColor, labelText }) => {
  return (
    <LabelStyled
      bgColor={ bgColor }
    >
      { labelText }
    </LabelStyled>
  )
}
 
export default Label