import React, { useState, useEffect } from "react";
import axios from 'axios'

// styles
import { Wrapper, Header, TopContainer,  Row, Col } from './Shares.Styles'

// components
import { Spinner } from '../../components/spinner/Spinner.Styles'
import Card from '../companies/card/Card'

const Shares = () => {

    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCompanies = async () => {
        try {
            setLoading(true)
            const response = await axios.get(
                "https://young-brushlands-24339.herokuapp.com/company"
            );
            setCompanies(response.data);
            setLoading(false);
            return response;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
    getCompanies();
  }, []);


  return (
    <>
      <Wrapper className="container mb-5">
        <TopContainer>
          <Header>Buy shares</Header>
        </TopContainer>
        {loading ? <Spinner /> : <></>}

        <Row>
          {companies.length > 0 ? (
            companies.map((company) => (
              <Col>
                <Card
                  id={company.id}
                  name={company.name}
                  symbol={company.symbol}
                  currency={company.currency}
                  price={company.price}
                  available={company.available_shares}
                  type='buy'
                />
              </Col>
            ))
          ) : (
            <p>No Companies found</p>
          )}
        </Row>
      </Wrapper>
    </>
  );
}

export default Shares