import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

// styles
import { Wrapper, Body } from "./SellShares.Styles";

// components
import { Spinner } from "../../../components/spinner/Spinner.Styles";
import Card from "../../companies/card/Card";

const SellShares = () => {

  const history = useHistory();
  const { id } = useParams();

  const gotoGetSharesHandler = () => {
    history.push("/shares");
  };

  // STATES
  const [company, setCompany] = useState({
    id: 0,
    name: "",
    symbol: "",
    price: 0,
    available_shares: 0,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCompany();
  }, []);

  const fetchCompany = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://young-brushlands-24339.herokuapp.com/company/${id}`
    );
    setLoading(false);
    if (response.status === 200) {
      setCompany((company) => ({
        ...company,
        ...response.data,
      }));
    }
  };

  const submit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log("Company: ", company);
    console.log("token: ", localStorage.getItem("token"));
    const response = await axios.post(
      `https://young-brushlands-24339.herokuapp.com/shares/sell/${company.id}`,
      company,
      {
        headers: { "content-type": "application/json" },
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    );
    setLoading(false);
    if (response.status === 200) {
      history.push("/shares");
    }
  };

  const onchangeHandler = async (e) => {
    e.persist();
    setCompany((company) => ({
      ...company,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <>
      <Wrapper className="container">
        <div className="my-2 fw-bold fs-4 ">
          Sell your <b>{company.name}</b> Shares
        </div>
        <div className="d-flex justify-content-center my-3">
          <Card
            id={company.id}
            name={company.name}
            symbol={company.symbol}
            currency={company.currency}
            price={company.price}
            available={company.available_shares}
          />
        </div>
        <div>
          <Body>
            <form onSubmit={submit}>
              <div className="spacing">
                <label className="mx-2 py-1">Please enter quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  onChange={onchangeHandler}
                />
              </div>

              {loading ? (
                <Spinner />
              ) : (
                <>
                  <div>
                    <button
                      className="mx-3 btn btn-md btn-outline-info my-4"
                      type="submit"
                    >
                      Sell
                    </button>
                    <button
                      className="mx-3 btn btn-md btn-outline-warning my-4"
                      onClick={gotoGetSharesHandler}
                    >
                      Back
                    </button>
                  </div>
                </>
              )}
            </form>
          </Body>
        </div>
      </Wrapper>
    </>
  );
};

export default SellShares;
