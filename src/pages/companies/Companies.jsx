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
import { Spinner } from "../../components/spinner/Spinner.Styles";

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
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  const getCompanies = async () => {
    try {
      // setError(false)
      setLoading(true)
        // "proxy": "https://young-brushland-24339.herokuapp.com",
        const response = await axios.get(
          "https://young-brushlands-24339.herokuapp.com/company"
        );
        setCompanies(response.data);
        setLoading(false)
        return response;      
    } catch (error) {
      console.log(error)
      // setError(true);
    }
  }

  useEffect(() => {
    getCompanies();
  }, []);

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

          {(loading) ? <Spinner /> : <></>}
          
        <Row>


        {companies.length > 0 ? 
          companies.map((company) => (
            <Col>
              <Card
                id={company.id}
                name={company.name}
                symbol={company.symbol}
                currency={company.currency}
                price={company.price}
                available={company.available_shares}
                type='update'
              />
            </Col>
          ))

         : <p>No Companies found</p>  }
        </Row>
      </Wrapper>
    </>
  );
};

export default Companies;
