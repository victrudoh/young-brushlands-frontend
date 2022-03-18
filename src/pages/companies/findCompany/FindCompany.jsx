import React, { useState } from "react";
import axios from "axios";


// styles
import { Wrapper, TopContainer, Header, Body } from "./FindCompany.Styles";

// components
import Search from "./search/Search";
import Card from "../card/Card";
import { Spinner } from "../../../components/spinner/Spinner.Styles";

const FindCompany = () => {
  const [searchField, setSearchField] = useState("");
  const [getCompany, setGetCompany] = useState('');
  const [loading, setLoading] = useState(false);

  const onSearchChangeHandler = (e) => {
    setSearchField(e.target.value);
  };

   const searchCompaniesHandler = () => {
      const searchCompanies = async () => {
        setLoading(true);
        const response = await axios.get(
          `https://young-brushlands-24339.herokuapp.com/company/${searchField}`
        );
        console.log("searched companies: ", response.data);
        setLoading(false);
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
            {loading ? <Spinner /> : 
            <Card
              name={getCompany.name}
              symbol={getCompany.symbol}
              currency={getCompany.currency}
              price={getCompany.price}
              available={getCompany.available_shares}
            />}
          </div>
        </Body>
      </Wrapper>
    </>
  );
};

export default FindCompany;
