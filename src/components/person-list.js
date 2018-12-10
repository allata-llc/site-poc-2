import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  &::after {
    content: '';
    flex: 0 0 20%;
  }
`

const PersonList = props => {
  return <List>{props.children}</List>
}

export default PersonList
