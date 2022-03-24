import React from "react";

import { Route, Switch } from "react-router-dom";

//PAGES
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

import Companies from "../pages/companies/Companies";
import CreateCompany from "../pages/companies/createCompany/CreateCompany";
import FindCompany from "../pages/companies/findCompany/FindCompany";
import UpdateCompany from "../pages/companies/updateCompany/UpdateCompany";
import DeleteCompany from "../pages/companies/deleteCompany/DeleteCompany";
import ConvertCurrency from "../pages/companies/convertCurrency/ConvertCurrency";

// SHARES
import Shares from "../pages/shares/Shares";
import BuyShares from "../pages/shares/buyShares/BuyShares";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      {/* COMPANY ROUTES */}
      <Route path="/companies" component={Companies} />
      <Route path="/create_company" component={CreateCompany} />
      <Route path="/find_company" component={FindCompany} />
      <Route path="/update_company/:id" component={UpdateCompany} />
      <Route path="/delete_company/:id" component={DeleteCompany} />
      <Route path={"/convert_currency/:id"} component={ConvertCurrency} />

      {/* SHARES ROUTES */}
      <Route path="/shares" component={Shares} />
      <Route path="/buy_shares/:id" component={BuyShares} />
    </Switch>
  );
};

export default Routes;
