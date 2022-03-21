import React, { useState } from "react";
import axios from "axios";


// styles
import { Wrapper, TopContainer, Header, Body, Card } from "./FindCompany.Styles";

// components
import Search from "./search/Search";
// import Card from "../card/Card";
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
          `https://young-brushlands-24339.herokuapp.com/company/quotes/${searchField}`
        );
        console.log("searched companies: ", response.data.Symbol);
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
          <p>Please enter company symbol;</p>
          <Search searchCompany={onSearchChangeHandler} />
          <button
            onClick={searchCompaniesHandler}
            className=" cardHolder w-50 btn btn-md btn-outline-warning my-4"
          >
            Search
          </button>
          <div className="cardHolder">
            {
              loading ? (
                <Spinner />
              ) : (
                <Card>
                  <div className="name mb-1">
                    {getCompany.Name}({getCompany.Symbol})
                  </div>
                  <p>
                    Address: {getCompany.Address}
                    <br />
                    Market Capitalization: {getCompany.MarketCapitalization} (
                    {getCompany.Currency})
                    <br />
                    Asset Type: {getCompany.AssetType}
                    <br />
                    Earnings per share: {getCompany.EPS}
                    <br />
                  </p>

                  <h5>{getCompany.Description}</h5>
                </Card>
              )
              // <Card
              //   name={getCompany.name}
              //   symbol={getCompany.symbol}
              //   currency={getCompany.currency}
              //   price={getCompany.price}
              //   available={getCompany.available_shares}
              // />
            }
          </div>
        </Body>
      </Wrapper>
    </>
  );
};

export default FindCompany;
