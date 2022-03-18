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

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Col = styled.div`
  margin: 2rem;

  @media (max-width: 768px) {
    margin: 1rem;
  }
`;