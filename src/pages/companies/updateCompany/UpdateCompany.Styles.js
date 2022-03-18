import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 100px;
`;

export const Header = styled.span`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  margin-bottom: 1rem;
  color: var(--txt-color);
`;

export const Body = styled.div`
  margin: 2rem auto;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-bottom: 150px;
  border-radius: 10px;
  width: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }

  input {
    padding: 0.5rem;
    border-radius: 8px;
    margin: 0.5rem 0;
    min-width: 400px;

    @media (max-width: 768px) {
      width: 280px;
      min-width: 200px;
      margin: 0 auto;
    }
  }

  label {
    font-weight: 500;
    padding: 0 0.3rem;
    margin-right: 15px;
  }

`;