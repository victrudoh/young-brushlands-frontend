import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 100px auto;
  width: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    margin: 200px auto;
    width: 50%;
  }
`;