import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #212529;
  color: whitesmoke;
  padding: 5rem;
  margin: 1rem 0;
`;

export const TitleText = styled.div`
    font-size: 50px;
    margin: 1rem 0;
    font-family: Georgia, 'Times New Roman', Times, serif;

    @media (max-width:768px) {
        font-size: 30px;
    }
`;

export const CardHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem;
  gap: 3rem;

  @media (max-width: 768px) {
    margin: 1rem;
    gap: 1rem;
    flex-direction: column;
  }
`;

export const GetStarted = styled.div`

  button {
    margin-top: 2rem;
    background: var(--accentColor);
    color: var(--text-white);
    padding: 1rem;
    border-radius: 2rem;
    width: 200px;

    &:hover {
      color: var(--accentColor);
      background: var(--text-white);
    }
  }

  span {
    font-size: 12px;
  }
`;



