import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 100px;
  
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-bottom: 1rem;
  border-radius: 10px;
  width: 450px;

  p {
    font-weight: 500;
    font-size: small;
    font-style: italic;
  }

  .cardHolder {
    margin: 1rem auto;
  }
`;