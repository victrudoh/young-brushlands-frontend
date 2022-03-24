import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

// styles
import { Wrapper, Body } from "./UpdateCompany.Styles";

// components
import { Spinner } from "../../../components/spinner/Spinner.Styles";

const UpdateCompany = () => {
  const history = useHistory();
  const { id } = useParams();

  const gotoGetCompaniesHandler = () => {
    history.push("/companies");
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
    const response = await axios.put(
      `https://young-brushlands-24339.herokuapp.com/company/${company.id}`,
      company,
      {
        headers: { "content-type": "application/json" },
      }
    );
    setLoading(false);
    if (response.status === 200) {
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
  console.log(company);


  return (
    <>
      <Wrapper className="container">
        {/* <Header>Update company</Header> */}
        <br />
        <Body>
          <form className="text-center form-signin" onSubmit={submit}>
            <h1 className="h3 mb-5 fw-bold">Update Company</h1>

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
              <label>Product symbol: </label>
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
            <label>Product price: </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              onChange={onchangeHandler}
              defaultValue={company.price}
            />
            </div>
            <br />

            <div className="spacing">
            <label>Available Shares: </label>
            <input
              type="number"
              name="available_shares"
              id="available_shares"
              placeholder="Available Shares"
              onChange={onchangeHandler}
              defaultValue={company.available_shares}
            />
            </div>
            <br />

            {loading ? <Spinner /> : <>
            <div>
              <button
                className="mx-2 btn btn-md btn-outline-warning my-4"
                type="submit"
              >
                Update
              </button>
              <button
                className="mx-2 btn btn-md btn-outline-warning my-4"
                onClick={gotoGetCompaniesHandler}
              >
                Back
              </button>
            </div>
            </>}

          </form>
        </Body>
      </Wrapper>
    </>
  );
};

export default UpdateCompany;
