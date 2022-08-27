import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";
import { Navbar, MainContent, SideBar } from "./components";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <MainContent />
      </div>
      {/* <SideBar /> */}
    </>
  );
};

export default App;
