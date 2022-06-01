import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./personal.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Personal = () => {

const[name, setName] = useState({
  firstname:"",
  lastname:""
})
const[email, setEmail] = useState("")
const[mobile, setMobile] = useState("")




  return (
    <div className="box">
      <div className="field mt-5 self-title">
        <h1 className="self-name">PERSONAL DETAILS</h1>
        <Link to="/">
          <button className="title-btn">
            <span className="icon">
              <i className="fas fa-times"></i>
            </span>
          </button>
        </Link>
      </div>
      <div className="field mt-5">
        <div className="first-tables">
          <div className="first-table">Name</div>
          <div className="f-table">
            <input
              type="text"
              className="first-input"
              placeholder="John"
              onChange={(e)=>setName({...name, firstname: e.target.value})}
            ></input>
            <input
              type="text"
              className="first-input"
              placeholder="Doe"
              onChange={(e)=>setName({...name, lastname: e.target.value})}
            ></input>
          </div>
          {console.log(mobile)}
          {console.log(email)}
        </div>
      </div>
      <div className="field mt-5">
        <div className="other-tables">
          <div className="name-table">Email</div>
          <input
            type="email"
            className="other-input"
            placeholder="name@email.com"
            onChange={(e)=> setEmail(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="field mt-5">
        <div className="other-tables">
          <div className="name-table">Mobile</div>
          <div className="phone-field">
            <PhoneInput
              country={"us"}
              value="1234567"
              onChange={(phone)=> setMobile(phone)}
              // onChange={(phone) => console.log({ phone })}
            />
          </div>
        </div>
      </div>

      <div className="field mt-5">
        <Link className="get-link" to="/insurance">
          <button className="button is-link is-large is-fullwidth">SEND</button>
        </Link>
      </div>
    </div>
  );
};

export default Personal;
