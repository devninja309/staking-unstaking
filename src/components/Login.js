import React, { useState } from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";
import "./login.scss";

import CountrySelect from "react-bootstrap-country-select";

const Login = () => {

  // Set variable name! /////////////////////////////////////////////
  const chooseMale = () => {
    setSex("man");
    console.log(sex)
    setTranc("left-animation");
  };
  const chooseFemale = () => {
    setSex("woman");
    console.log(sex)
    setTranc("right-animation");
  };
  const monthOptions = () => {
    var arr = [];

    for (let i = 1; i <= 12; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };
  const dayOptions = () => {
    var arr = [];

    for (let i = 1; i <= 31; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };
  const yearOptions = () => {
    var arr = [];

    for (let i = 1950; i <= 2004; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };
  const ftOptions = () => {
    var arr = [];

    for (let i = 4; i <= 7; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };
  const inOptions = () => {
    var arr = [];

    for (let i = 4; i <= 7; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };
  const ibsOptions = () => {
    var arr = [];

    for (let i = 100; i <= 1000; i++) {
      arr.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    return arr;
  };
  const [tranc, setTranc] = useState("");
  const [value, setValue] = useState("null");
  const [sex, setSex] = useState("man");
  const [birthday, setBirthday] = useState({
    month: "",
    day: "",
    year: ""
  });
  const [height, setHeight] = useState({
    ft: "",
    in: ""
  });
  const [weight, setWeight] = useState(0);
  const [country, setCountry] = useState("");

  const onChangeCountry = (value) => {
    setValue(value);
    setCountry(value.name);
  }


    // Functions! ///////////////////////
  const onChangeBirthday = (e) => {
    console.log(birthday);
    console.log({ ...birthday, [e.target.name]: e.target.value });

    setBirthday({ ...birthday, [e.target.name]: e.target.value });
  };
  const onChangeHeight = (e) => {
    console.log(height);
    console.log({ ...height, [e.target.name]: e.target.value });
    setHeight({ ...height, [e.target.name]: e.target.value });
  };




  return (
    <div className="box">
      <div className="field mt-5 self-title">
        <h1 className="self-name">TELL US ABOUT YOURSELF</h1>
        <Link to="/">
          <button className="title-btn">
            <span className="icon">
              <i className="fas fa-times"></i>
            </span>
          </button>
        </Link>
      </div>
      <div className="field mt-5">
        <div className="total">
          <div className="trans">
            <div className="trans-a" onClick={chooseMale}>
              <p className={classNames({ active: tranc === "left-animation" })}>
                MALE
              </p>
            </div>
            <div className="trans-b" onClick={chooseFemale}>
              <p
                className={classNames({ active: tranc === "right-animation" })}
              >
                FEMALE
              </p>
            </div>
            <div className={`tranc ${tranc}`}></div>
          </div>
        </div>
      </div>
      <div className="field mt-4">
        <div className="self-tables">
          <div className="name-table">Birthday</div>
          <div className="info-table">
            <span>MM</span>
            <select
              className="custom-select info-input"
              name="month"
              onChange={(e) => onChangeBirthday(e)}
            >
              {monthOptions()}
            </select>
          </div>
          <div className="info-table">
            <span>DD</span>
            <select
              className="custom-select info-input"
              name="day"
              onChange={(e) => onChangeBirthday(e)}
            >
              {dayOptions()}
            </select>
          </div>
          <div className="info-table">
            <span>YYYY</span>
            <select
              className="custom-select info-input"
              name="year"
              onChange={(e) => onChangeBirthday(e)}
            >
              {yearOptions()}
            </select>
          </div>
        </div>
      </div>
      <div className="field mt-4">
        <div className="self-tables">
          <div className="name-table">Height</div>
          <div className="h-info-table">
            <span>ft</span>
            <select
              className="custom-select info-input"
              name="ft"
              onChange={(e) => onChangeHeight(e)}
            >
              {ftOptions()}
            </select>
          </div>
          <div className="h-info-table">
            <span>in</span>
            <select
              className="custom-select info-input"
              name="in"
              onChange={(e) => onChangeHeight(e)}
            >
              {inOptions()}
            </select>
          </div>
        </div>
      </div>
      <div className="field mt-4">
        <div className="self-tables">
          <div className="name-table">Weight</div>
          <div className="w-info-table">
            <span>Ibs</span>
            <select className="custom-select info-input"
              onChange={(e)=> setWeight(e.target.value)}
            >{ibsOptions()}</select>
          </div>
          {console.log(weight)}
        </div>
      </div>
      <div className="field mt-4">
        <div className="self-tables">
          <div className="name-table">Country</div>
          <div className="c-info-table">
            <div className="select select-country">
              <CountrySelect
                placeholder="United states"
                value={value}
                onChange={onChangeCountry}
              />
            </div>
            {console.log(country)}
          </div>
        </div>
      </div>
      <div className="field mt-5">
        <label className="checkbox">
          <input className="check-nicotine" type="checkbox" />
          <p>I currently use nicotine products.</p>
        </label>
      </div>
      <div className="field mt-4">
        <Link className="get-link" to="./personal">
          <button className="button is-link is-large is-fullwidth">
            LET'S GET ESTIMATING
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
