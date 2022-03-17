import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: aliceblue;

  height: 80vh;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 50vh;

    img {
      margin-top: -1rem;
      height: 110%;
    }
  }
`;