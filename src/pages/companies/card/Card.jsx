import React from "react";
import { useHistory } from "react-router-dom";

// styles
import { Wrapper, Top, Bottom } from "./Card.Styles";

const Card = (props) => {
  const { id, name, symbol, currency, price, available, type } = props
  const history = useHistory();

  const gotoUpdateCompanyHandler = (id) => {
    history.push(`/update_company/${id}`);
  };

  const gotoDeleteCompanyHandler = (id) => {
    history.push(`/delete_company/${id}`);
  };

  const gotoBuySharesHandler = () => {
    history.push("/buy_shares");
  };

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
          Available: {available}
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
            <button
              companyId={id}
              onClick={gotoBuySharesHandler}
              className="w-50 btn btn-md btn-outline-warning"
            >
              Buy shares
            </button>
          ) : (
            <></>
          )}
        </Bottom>
      </Wrapper>
    </>
  );
};

export default Card;
