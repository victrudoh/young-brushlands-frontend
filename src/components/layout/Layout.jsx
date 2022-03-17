import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//COMPONENTS
import Topbar from "../topbar/Topbar";
import Routes from "../Routes";
import Footer from "../footer/Footer";

// STYLES
import { LayoutStyle } from "./Layout.Styles";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Topbar className="my-5" />
            <LayoutStyle>
              <Routes />
              <Footer />
            </LayoutStyle>
          </>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
