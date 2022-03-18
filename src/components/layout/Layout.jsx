import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//COMPONENTS
import Topbar from "../topbar/Topbar";
import Routes from "../Routes";
import Footer from "../footer/Footer";
// import Sidebar from "../sidebar/Sidebar";


// STYLES
import { LayoutStyle } from "./Layout.Styles";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Topbar className="my-5" />
            {/* <Sidebar /> */}
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
