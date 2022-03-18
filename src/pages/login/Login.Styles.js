import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: var(--themeColor); */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: var(--themeColor);
  padding: 1rem;
  /* height: 50vh; */
  width: 50%;
  margin: 100px auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 200px 3rem;
    width: 80%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  input {
      width: 500px;
      padding: .5rem;
      border-radius: 8px;
      margin: .5rem 0;

      @media (max-width:768px) {
          width: fit-content;
      }
  }

  label {
      font-weight: 500;
      padding: 0 .3rem;
  }

`;
