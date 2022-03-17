import React from 'react'

// styles
import { Wrapper } from './Search.Styles'

const Search = ({ searchCompany }) => {
  return (
    <>
      <Wrapper>
        <input
          type="search"
          name="search"
          id="search"
          onKeyUp={searchCompany}
        />
      </Wrapper>
    </>
  );
};

export default Search