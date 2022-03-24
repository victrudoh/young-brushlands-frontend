import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  color: var(--themeColor);
  padding: 1rem;
  width: 50%;
  margin: 100px auto;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 200px 3rem;
    width: 80%;
  }
`;

export const Header = styled.span`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  margin-bottom: 1rem;
  color: var(--txt-color);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  .spacing {
    display: flex;
    margin: auto;
    text-align: left;
    /* justify-content: space-between; */
    align-items: center;
    padding: 0 2rem;

    @media (max-width: 768px) {
      display: flex;
      margin: auto;
      justify-content: space-between;
    }
  }

  p {
    background-color: var(--accentColor);
    /* opacity: 60%; */
    /* font-weight: bolder; */
    font-size: 13px;
    border-radius: 8px;
  }

  .cardHolder {
    display: flex;
    justify-content: center;
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

  select {
    width: 500px;
    padding: 0.5rem;
    border-radius: 8px;
    margin: 0.5rem 0;

    @media (max-width: 768px) {
      width: 60%;
      padding: 0.3rem;
    }
  }
`;
