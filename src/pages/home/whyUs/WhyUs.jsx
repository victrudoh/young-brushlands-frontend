import React from 'react'
import { useHistory } from "react-router-dom";


// styles
import { Wrapper, TitleText, CardHolder, GetStarted } from "./WhyUs.Styles";

// Card
import Card from './card/Card';

const WhyUs = () => {

  const history = useHistory();

  const gotoLoginHandler = () => {
    history.push("/login")
  }

  return (
    <>
      <Wrapper>
        <TitleText>Why choose us?</TitleText>
        <CardHolder>
          <Card
            icon={"bx bx-check-shield"}
            title={"Limit your exposure to risk"}
            body={
              "By trading the price of a group of companies, you’re less likely to make big losses if an individual company’s stock price drops."
            }
          />
          <Card
            icon={"bx bx-wallet"}
            title={"Lowest-cost account"}
            body={
              "Trade stock baskets on the Advantage account and enjoy competitive commission rates based on trading volume and equity."
            }
          />
          <Card
            icon={"bx bx-hourglass"}
            title={"24-hour support"}
            body={
              "Get help with your trading account around the clock, Monday to Friday."
            }
          />
        </CardHolder>
        <GetStarted>
          <button onClick={gotoLoginHandler} >Get started</button>
          <br />
          <span>Trading is risky. Your capital is at risk</span>
        </GetStarted>
      </Wrapper>
    </>
  );
}

export default WhyUs