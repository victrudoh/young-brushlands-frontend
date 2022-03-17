import React, { useState } from "react";
import axios from "axios";


// styles
import { Wrapper, TopContainer, Header, Body } from "./FindCompany.Styles";

// components
import Search from "./search/Search";
import Card from "../card/Card";

const FindCompany = () => {
  const [searchField, setSearchField] = useState("");
  const [getCompany, setGetCompany] = useState('');

  const onSearchChangeHandler = (e) => {
    setSearchField(e.target.value);
  };

   const searchCompaniesHandler = () => {
      const searchCompanies = async () => {
        const response = await axios.get(`/company/${searchField}`);
        console.log("searched companies: ", response.data);
        setGetCompany(response.data);
      };
      searchCompanies();
   };

  return (
    <>
      <Wrapper className="container">
        <TopContainer>
          <Header>Find a company</Header>
        </TopContainer>
        <Body>
          <p>Please enter company id;</p>
          <Search searchCompany={onSearchChangeHandler} />
          <button
            onClick={searchCompaniesHandler}
            className=" cardHolder w-50 btn btn-md btn-outline-warning my-4"
          >
            Search
          </button>
          <div className="cardHolder">
              <Card
                name={getCompany.name}
                symbol={getCompany.symbol}
                currency={getCompany.currency}
                price={getCompany.price}
                available={getCompany.available_shares}
              />
          </div>
        </Body>
      </Wrapper>
    </>
  );
};

export default FindCompany;
