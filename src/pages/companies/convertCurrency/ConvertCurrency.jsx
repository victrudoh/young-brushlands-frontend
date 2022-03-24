import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

// styles
import { Wrapper, Body } from "./ConvertCurrency.Styles";

// components
import { Spinner } from "../../../components/spinner/Spinner.Styles";

const ConvertCurrency = () => {
  const history = useHistory();
  const { id } = useParams();

  const gotoGetCompaniesHandler = () => {
    history.push("/companies");
  };

    const [company, setCompany] = useState({
      id: 0,
      name: "",
    //   symbol: "",
    //   price: 0,
    //   available_shares: 0,
      currency: "",
    });
    console.log("Company from top: ", company)

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
            `https://young-brushlands-24339.herokuapp.com/company/${company.id}?currency=${company.currency}`,
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
      <Wrapper>
        <Body>
          <form className="text-center form-signin" onSubmit={submit}>
            <h1 className="h3 mb-5 fw-bold">Convert Currency</h1>

            <div className="spacing">
              <label>Company name: </label>
              <h3>{company.name}</h3>
              {/* <input
                type="text"
                name="name"
                id="name"
                placeholder="Company name"
                onChange={onchangeHandler}
                defaultValue={company.name}
              /> */}
            </div>
            <br />

            <label>New currency:</label>
            <select
              name="currency"
              id="currency"
              onChange={onchangeHandler}
              defaultValue={company.currency}
            >
              <option value="">Select new currency</option>
              <option value="AED">AED</option>
              <option value="AFN">AFN</option>
              <option value="AUD">AUD</option>
              <option value="AUD">AUD</option>
              <option value="BTC">BTC</option>
              <option value="EGP">EGP</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
              <option value="MAD">MAD</option>
              <option value="NGN">NGN</option>
              <option value="PHP">PHP</option>
              <option value="QAR">QAR</option>
              <option value="RSD">RSD</option>
              <option value="SOS">SOS</option>
              <option value="SZL">SZL</option>
              <option value="USD">USD</option>
              <option value="XDR">XDR</option>
              <option value="YER">YER</option>
              <option value="ZAR">ZAR</option>
            </select>
            {/* <div className="spacing">
            </div> */}
            <br />

            {loading ? (
              <Spinner />
            ) : (
              <>
                <div>
                  <button
                    className="mx-2 btn btn-md btn-outline-info my-4"
                    type="submit"
                  >
                    Convert
                  </button>
                  <button
                    className="mx-2 btn btn-md btn-outline-warning my-4"
                    onClick={gotoGetCompaniesHandler}
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </form>
        </Body>
      </Wrapper>
    </>
  );
};

export default ConvertCurrency;
