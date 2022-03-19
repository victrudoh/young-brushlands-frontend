import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

// styles
import { Wrapper, Card } from "./DeleteCompany.Styles";

// components
import { Spinner } from "../../../components/spinner/Spinner.Styles";

const DeleteCompany = () => {
    const history = useHistory();
    const { id } = useParams();

    const gotoGetCompaniesHandler = () => {
      history.push("/companies");
    };

    // states
    const [company, setCompany] = useState({
      id: 0,
      name: "",
      symbol: "",
      price: 0,
      available_shares: 0,
    });

    const [loading, setLoading] = useState(false); 

    // fetch company data
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

    useEffect(() => {
      fetchCompany();
    }, []);

    const submit = async () => {
        setLoading(true);
        console.log("Company: ", company);
        const response = await axios.delete(
          `https://young-brushlands-24339.herokuapp.com/company/${id}`
        );
        setLoading(false);
        if (response.status === 204) {
            history.push("/companies");
        }
    }


  return (
    <>
      <Wrapper></Wrapper>
      <Card>
        <h1 className="h3 mb-5 fw-bold">Delete company</h1>
        Do you want to delete <b>{company.name}</b>?
        <br />
        {loading ? <Spinner /> : <>
        <button
          className="mx-2 btn btn-md btn-outline-danger my-4"
          type="submit"
          onClick={submit}
        >
          Yes
        </button>
        <button
          className="mx-2 btn btn-md btn-outline-warning my-4"
          type="submit"
          onClick={gotoGetCompaniesHandler}
        >
          No
        </button>
        </>}
      </Card>
    </>
  );
};

export default DeleteCompany;
