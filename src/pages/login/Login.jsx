import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// STYLES
import "./Login.css";
import { Wrapper, Card } from "./Login.Styles";
import { Spinner } from "../../components/spinner/Spinner.Styles";

const Login = () => {

    const history = useHistory();

    const [userDetails, setUserDetails] = useState({
      username: "",
      password: "",
      grant_type: "",
      scope :"",
      client_id: "",
      client_secret: ""
    });
    const [loading, setLoading] = useState(false);

    const submit = async (e) => {
      setLoading(true);
      e.preventDefault();
      console.log(userDetails)
      const formData = new FormData()
      for(const value in userDetails){
          formData.append(value, userDetails[value])
      }
      const response = await axios.post(
        "https://young-brushlands-24339.herokuapp.com/account/login",
        formData,
        {}
      );
      setLoading(false);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.access_token);
        history.push("/");
      }
    };

     const onchangeHandler = async (e) => {
       e.persist();
       setUserDetails((userDetails) => ({
         ...userDetails,
         [e.target.name]: e.target.value,
       }));
     };

  return (
    // <body className="text-center my-5 d-flex flex-column">
    //   <main class="form-signin card p-4 ">
    <>
      <Wrapper>
        <Card>
          <form className="text-center form-signin" onSubmit={submit}>
            <h1 className="h3 mb-5 fw-bold">Login</h1>

            <label>Username: </label>
            <input
              type="text"
              name="username"
              // className="inputWidth"
              id="username"
              placeholder="username"
              onChange={onchangeHandler}
              defaultValue={userDetails.username}
            />
            <br />

            <label>Password: </label>
            <input
              type="password"
              className="inputWidth"
              id="password"
              name="password"
              placeholder="Password"
              onChange={onchangeHandler}
              defaultValue={userDetails.password}
            />
            <br />

            {loading ? <Spinner /> : <></>}

            <button
              className="w-50 btn btn-md btn-outline-warning my-4"
              type="submit"
            >
              Sign in
            </button>
          </form>
        </Card>
      </Wrapper>
      {/* <form className="text-center my-5 form-signin" onSubmit={submit}>
        <h1 className="h3 mb-5 fw-bold">Login</h1>

        <div className="form-floating my-3">
          <input
            type="text"
            name="username"
            className="inputWidth"
            id="username"
            placeholder="username"
            onChange={onchangeHandler}
            defaultValue={userDetails.username}
          />
        </div>

        <div className="form-floating my-3">
          <input
            type="password"
            className="inputWidth"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onchangeHandler}
            defaultValue={userDetails.password}
          />
        </div>
        <button className="w-50 btn btn-lg btn-primary my-4" type="submit">
          Sign in
        </button>
      </form> */}
    </>
    //   </main>
    // </body>
  );
};

export default Login;
