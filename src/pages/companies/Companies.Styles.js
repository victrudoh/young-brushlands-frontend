import styled from "styled-components";

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

export const Right = styled.div`
  /* float: right; */
  right: 0;
  /* margin-right: 10px; */
  display: flex;
  justify-content: space-between;
  /* background-color: aqua; */
  /* position: fixed; */
`;

export const Create = styled.div`
  background-color: var(--themeColor);
  color: var(--text-white);
  border-radius: 8px;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  transform: all 3s ease-in;
  margin: auto 0;
  padding: 0.4rem;
  cursor: pointer;

  &:hover {
      h4 {
          display: block;
      }
  }

  h4 {
    font-size: 20px;
    display: none;
  }

  span {
    font-size: 30px;
    font-weight: 500;
    color: var(--accentColor);
    border-radius: 100%;
    /* background-color: red; */
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Col = styled.div`
  margin: 2rem;

  @media (max-width:768px) {
    margin: 1rem;
  }
`;
