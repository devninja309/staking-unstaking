import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "././components/Login.js";
import Personal from "././components/Personal.js";
import Insurance from "././components/Insurance.js";
import Transfer from "././components/Transfer.js";

axios.defaults.withCredentials = true;

const Demo = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/transfer" element={<Transfer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<Demo />, document.getElementById("root"));
