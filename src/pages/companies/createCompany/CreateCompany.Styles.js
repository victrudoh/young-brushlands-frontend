import styled from "styled-components";

export const Wrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: var(--themeColor);
  padding: 1rem;
  width: 50%;
  margin: 100px auto;
  border-radius: 10px;

  @media (max-width: 1000px) {
    margin: 200px auto;
    width: 80%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  .spacing {
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  input {
    width: 500px;
    padding: 0.5rem;
    border-radius: 8px;
    margin: 0.5rem 0;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0.3rem;
    }
  }

  label {
    font-weight: 500;
    padding: 0 0.3rem;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
