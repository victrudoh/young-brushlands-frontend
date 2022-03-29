import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

// styles
import { Wrapper, Top, Bottom } from "./Card.Styles";

// components
import { Spinner } from "../../../components/spinner/Spinner.Styles";

const Card = (props) => {
  const { id, name, symbol, currency, price, available, type, you_have } =
    props;
  const history = useHistory();

  const gotoUpdateCompanyHandler = (id) => {
    history.push(`/update_company/${id}`);
  };

  const gotoConvertCurrencyHandler = (id) => {
    history.push(`/convert_currency/${id}`);
  };

  const gotoDeleteCompanyHandler = (id) => {
    history.push(`/delete_company/${id}`);
  };

  const gotoBuySharesHandler = (id) => {
    history.push(`/buy_shares/${id}`);
  };

  const gotoSellSharesHandler = (id) => {
    history.push(`/sell_shares/${id}`);
  };

  const [loading, setLoading] = useState(false);

  if (type === "sell") {}

  // useEffect(() => {
  //   fetchUser();
  // }, []);



  return (
    <>
      <Wrapper>
        <Top>
          <div className="name">
            <span>{name}</span>
            <h2>{symbol}</h2>
          </div>
          <div className="price">
            <h3>{price}</h3>
            <h4>{currency}</h4>
          </div>
        </Top>
        <Bottom>
          {type === "sell" ? `You have: ${you_have}` : `Available: ${available}`}
          <br />
          <hr />
          {type === "update" ? (
            <>
              <button
                companyId={id}
                onClick={() => gotoUpdateCompanyHandler(id)}
                className="w-50 btn btn-sm btn-outline-warning"
              >
                Update Company
              </button>
              <button
                companyId={id}
                onClick={() => gotoConvertCurrencyHandler(id)}
                className="w-50 btn btn-sm btn-outline-info"
              >
                Convert Currency
              </button>
              <button
                companyId={id}
                className="w-50 btn btn-sm btn-outline-danger"
                onClick={() => gotoDeleteCompanyHandler(id)}
              >
                Delete Company
              </button>
            </>
          ) : (
            <></>
          )}
          {type === "buy" ? (
            <>
              <button
                companyId={id}
                onClick={() => gotoBuySharesHandler(id)}
                className="w-50 btn btn-md btn-outline-warning"
              >
                Buy shares
              </button>
              <button
                companyId={id}
                onClick={() => gotoSellSharesHandler(id)}
                className="w-50 btn btn-md btn-outline-info"
              >
                Sell shares
              </button>
            </>
          ) : (
            <></>
          )}
        </Bottom>
      </Wrapper>
    </>
  );
};

export default Card;
