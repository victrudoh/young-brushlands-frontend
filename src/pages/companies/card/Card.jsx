import React from 'react'
import { useHistory } from "react-router-dom";

// styles
import { Wrapper, Top, Bottom } from './Card.Styles'

const Card = ({ id, name, symbol, currency, price, available }) => {

  const history = useHistory();

  const gotoUpdateCompanyHandler = () => {
    history.push("/update_company/");
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
          <button
            companyId={id}
            onClick={gotoUpdateCompanyHandler}
            className="w-50 btn btn-sm btn-outline-warning"
          >
            Update Company
          </button>
          <button companyId={id} className="w-50 btn btn-sm btn-outline-danger">
            Delete Company
          </button>
        </Bottom>
      </Wrapper>
    </>
  );
}

export default Card