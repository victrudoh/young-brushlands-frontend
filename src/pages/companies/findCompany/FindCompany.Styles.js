import styled from 'styled-components'

export const Wrapper = styled.div `
  margin-top: 100px;
  
`;

export const TopContainer = styled.div `
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.span `
  font-size: 30px;
  font-weight: 500;
  display: flex;
  margin-bottom: 1rem;
  color: var(--txt-color);
`;

export const Body = styled.div `
  margin: 2rem auto;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-bottom: 1rem;
  border-radius: 10px;
  width: 450px;

  @media (max-width:768px) {
    width: 100%;
  }

  p {
    font-weight: 500;
    font-size: small;
    font-style: italic;
  }

  .cardHolder {
    margin: 1rem auto;
  }
`;

export const Card = styled.div `
  background-color: var(--accentColor);
  /* height: 400px; */
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-bottom: 2rem;

  .name {
    font-size: 23px;
    font-weight: 500;
  }

  .symbol {
    font-size: 23px;
    font-weight: 500;
  }

  h5 {
    font-size: 15px;
  }
`;