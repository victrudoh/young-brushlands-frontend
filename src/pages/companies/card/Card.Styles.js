import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 200px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 150px;
  }

  &:hover {
    button {
      display: inline-block;
    }
  }

  button {
    z-index: 10;
    font-size: 10px;
    display: none;
    margin: 0.5rem;
  }
`;

export const Top = styled.div`
  border-radius: 8px 0 0 0;
  background: var(--accentColor);
  height: 150px;
  width: 100%;
  padding: 0.5rem;

  .name {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
          font-size: 16px;
    
          @media (max-width:768px) {
              font-size: 13px;
          }
      }

      h2 {
          font-family: ap;
          font-weight: 500;
      }
  }

  .price {
    display: flex;
    gap: .5rem;
    margin-top: 1rem;
    justify-content: end;

    h3 {
        font-weight: 500;
        font-style: oblique;
    }

    h4 {
        font-size: 14px;
        font-weight: 400;
        font-style: italic;
    }
  }

`;

export const Bottom = styled.div`
  background: var(--themeColor);
  color: var(--text-white);
  border-radius: 0 0 8px 0;
  /* height: 30px; */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


`;