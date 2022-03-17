import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// styles
import { Wrapper, Header, Body } from "./UpdateCompany.Styles";

const UpdateCompany = ({ companyId }) => {

    const history = useHistory();

    const [company, setCompany] = useState({
        id: 0,
        name: "",
        symbol: "",
        price: 0,
        available_shares: 0
    })

    const submit = async (e) => {
        e.preventDefault();
        console.log("Company: ", company);
        const response = await axios.put(`/company/${company.id}`, company, {
          headers: { "content-type": "application/json" },
        });
        if (response.status === 200) {
            history.push("/companies")
        }
    };

    const onchangeHandler = async (e) => {
        e.persist();
        setCompany((company) => ({
          ...company,
          [e.target.name]: e.target.value,
        }));
    }


  return (
    <>
      <Wrapper className="container">
        <Header>Update company</Header>
        <br />
        <Body>
          <form className="text-center form-signin" onSubmit={submit}></form>
          <h1 className="h3 mb-5 fw-bold">Update Company</h1>

          <label>Company name: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Company name"
            onChange={onchangeHandler}
            defaultValue={company.name}
          />
          <br />

          <label>Symbol: </label>
          <input
            type="text"
            name="symbol"
            id="symbol"
            placeholder="Symbol"
            onChange={onchangeHandler}
            defaultValue={company.symbol}
          />
          <br />

          <label>Price: </label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            onChange={onchangeHandler}
            defaultValue={company.price}
          />
          <br />

          <label>Available Shares: </label>
          <input
            type="number"
            name="available_shares"
            id="available_shares"
            placeholder="Available Shares"
            onChange={onchangeHandler}
            defaultValue={company.available_shares}
          />
          <br />

          <button
            className="w-50 btn btn-md btn-outline-warning my-4"
            type="submit"
          >
            Update
          </button>
        </Body>
        Id: {companyId}
      </Wrapper>
    </>
  );
};

export default UpdateCompany;
