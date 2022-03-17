import styled from "styled-components";

export const Wrapper = styled.div`
    /* background-color: red; */
    padding: .5rem;
    max-width: 300px;

    span {
        font-size: 5rem;
        color: var(--accentColor);
        padding: 1rem;
    }
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin: 0.8rem;

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 0.3rem;
  }
`;

export const Body = styled.div`
  font-size: 15px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;