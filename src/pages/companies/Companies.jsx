import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// styles
import {
  Wrapper,
  Right,
  TopContainer,
  Header,
  Create,
  Row,
  Col,
} from "./Companies.Styles";

// Components
import Card from "./card/Card";

const Companies = () => {

  // REDIRECT HANDLERS
  const history = useHistory();

  const gotoCreateCompanyHandler = () => {
    history.push("/create_company");
  };
  const gotoFindCompanyHandler = () => {
    history.push("/find_company");
  };


  // state
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const response = await axios.get("/company");
      // console.log("Companies: ", response.data);
      setCompanies(response.data);
      return response;
    };
    getCompanies();
    // console.log("State: ", companies);
  }, [companies]);

  return (
    <>
      <Wrapper className="container">
        <TopContainer>
          <Header>Companies</Header>
        </TopContainer>
        <Right>
          <Create onClick={gotoCreateCompanyHandler}>
            <h4>Create Company</h4>
            <span className="bx bx-plus-circle"></span>
          </Create>
          <Create onClick={gotoFindCompanyHandler}>
            <h4>Find a Company</h4>
            <span className="bx bx-search-alt"></span>
          </Create>
        </Right>

        <Row>
          {companies.map((company) => (
            <Col>
              <Card
                id={company.id}
                name={company.name}
                symbol={company.symbol}
                currency={company.currency}
                price={company.price}
                available={company.available_shares}
              />
            </Col>
          ))}
        </Row>
      </Wrapper>
    </>
  );
};

export default Companies;
