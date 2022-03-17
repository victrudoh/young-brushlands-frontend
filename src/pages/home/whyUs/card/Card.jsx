import React from 'react'

// styles
import { Wrapper, Title, Body } from './Card.Styles'

const Card = ({ icon, title, body }) => {
  return (
    <>
      <Wrapper>
        <span className={icon}></span>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Wrapper>
    </>
  );
}

export default Card