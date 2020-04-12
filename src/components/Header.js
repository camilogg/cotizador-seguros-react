import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #fff;
`

const TextoHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', Arial, Helvetica, sans-serif;
  text-align: center;
`

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  )
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header
