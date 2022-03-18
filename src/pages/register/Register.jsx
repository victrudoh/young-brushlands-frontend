import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Styles
import { Wrapper, Card } from "./Register.Styles";

const Register = () => {

  const history = useHistory();

  const [userDetails, setUserDetails] = useState({
    username: "",
    full_name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://young-brushlands-24339.herokuapp.com/account/auth/register",
      userDetails,
      {
        headers: { "content-type": "application/json" },
      }
    );
    if (response.status === 201) {
      localStorage.setItem("token", response.data.access_token);
      history.push("/login")
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
    // <body className="text-center my-5">
    //   <main className="form-signin">
    <>
      <Wrapper>
        <Card>
          <form className="text-center my-5 form-signin" onSubmit={submit}>
            <h1 className="h3 mb-5 fw-bold">Register</h1>

            <label>Username: </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={onchangeHandler}
              defaultValue={userDetails.username}
            />
            <br />

            <label>User email: </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="name@example.com"
              onChange={onchangeHandler}
              defaultValue={userDetails.email}
            />
            <br />

            <label>Full name: </label>
            <input
              type="text"
              name="full_name"
              id="full_name"
              placeholder="John Doe"
              onChange={onchangeHandler}
              defaultValue={userDetails.full_name}
            />
            <br />

            <label>Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={onchangeHandler}
              defaultValue={userDetails.password}
            />
            <br />

            <button
              className="w-50 btn btn-md btn-outline-warning my-4"
              type="submit"
            >
              Register
            </button>
          </form>
        </Card>
      </Wrapper>
      {/* <form className="text-center my-5 form-signin" onSubmit={submit}>
        <h1 className="h3 mb-5 fw-bold">Register</h1>

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
            type="email"
            name="email"
            className="inputWidth"
            id="email"
            placeholder="name@example.com"
            onChange={onchangeHandler}
            defaultValue={userDetails.email}
          />
        </div>

        <div className="form-floating my-3">
          <input
            type="text"
            name="full_name"
            className="inputWidth"
            id="full_name"
            placeholder="John Doe"
            onChange={onchangeHandler}
            defaultValue={userDetails.full_name}
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

        <button className="w-50 my-4 btn btn-lg btn-primary" type="submit">
          Register
        </button>
      </form> */}
    </>
    //   </main>
    // </body>
  );
};

export default Register;
