import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// styles
import { Wrapper, Card } from "./CreateCompany.Styles";

const CreateCompany = () => {
  const history = useHistory();

  const [company, setCompany] = useState({
    name: "",
    symbol: "",
    price: 0,
    available_shares: 0,
    currency: "",
  });

  const create = async (e) => {
    e.preventDefault();
    console.log(company);
    const response = await axios.post(
      "https://young-brushlands-24339.herokuapp.com/company",
      company,
      {
        headers: { "content-Type": "application/json" },
      }
    );
    if (response.status === 201) {
      history.push("/companies");
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
      <Wrapper>
        <Card>
          <form className="text-center form-signin" onSubmit={create}>
            <h1 className="h3 mb-5 fw-bold">Create Company</h1>

            <div className="spacing">
              <label>Company name: </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Company name"
                onChange={onchangeHandler}
                defaultValue={company.name}
              />
            </div>
            <br />

            <div className="spacing">
            <label>Symbol: </label>
            <input
              type="text"
              name="symbol"
              id="symbol"
              placeholder="Symbol"
              onChange={onchangeHandler}
              defaultValue={company.symbol}
            />
            </div>
            <br />

            <div className="spacing">
            <label>Price: </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              onChange={onchangeHandler}
              defaultValue={company.price}
            />
            </div>
            <br />

            <div className="spacing">
            <label>Available shares: </label>
            <input
              type="number"
              id="available_shares"
              name="available_shares"
              placeholder="Available shares"
              onChange={onchangeHandler}
              defaultValue={company.available_shares}
            />
            </div>
            <br />

            <div className="spacing">
            <label>Currency: </label>
            <input
              type="text"
              className="inputWidth"
              id="currency"
              name="currency"
              placeholder="Currency"
              onChange={onchangeHandler}
              defaultValue={company.currency}
            />
            </div>
            <br />

            <button
              className="w-50 btn btn-md btn-outline-warning my-4"
              type="submit"
            >
              Create company
            </button>
          </form>
        </Card>
      </Wrapper>
    </>
  );
};

export default CreateCompany;
