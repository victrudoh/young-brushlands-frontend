import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--themeColor);
  color: var(--text-white);
  padding: 1rem;
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
  justify-content: space-evenly;


  .spacing {
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  input {
    padding: 0.5rem;
    border-radius: 8px;
    margin: 0.5rem 0;

    @media (max-width: 768px) {
      width: fit-content;
    }
  }

  label {
    font-weight: 500;
    padding: 0 0.3rem;
    margin-right: 15px;
}
`;
