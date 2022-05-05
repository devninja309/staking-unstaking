import React from "react";
import { Link } from "react-router-dom";
// import "./login.scss";
import "./personal.scss";
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import pt from "react-phone-input-2/lang/pt.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Personal = () => {
  // const [value, setValue] = useState()
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-mobile">
              <div className="box">
                <div className="field mt-5 self-title">
                  <h1 className="self-name">PERSONAL DETAILS</h1>
                  <Link to="/">
                    <button className="delete is-large"></button>
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
                      ></input>
                      <input
                        type="text"
                        className="first-input"
                        placeholder="Doe"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <div className="other-tables">
                    <div className="name-table">Email</div>
                    <input
                      type="email"
                      className="other-input"
                      placeholder="name@email.com"
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
                        onChange={(phone) => console.log({ phone })}
                      />
                    </div>

                    {/* <input type="tel" className="other-input" placeholder="+1 234 567 890" ></input> */}
                  </div>
                </div>

                <div className="field mt-5">
                  <button className="button is-link is-large is-fullwidth">
                    <Link className="get-link" to="/insurance">
                      SEND
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
