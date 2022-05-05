import React from "react";
import {Link} from "react-router-dom"
import "./login.scss";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const country = useState([
  //   "United Kingdom, Australia, Russia, Colombia, Spain",
  // ]);

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-mobile">
              <div className="box">
                <div className="field mt-5 self-title">
                  <h1 className="self-name">TELL US ABOUT YOURSELF</h1>
                  <Link to="/" >
                  <button className="delete is-large"></button>
                  </Link>
                </div>
                <div className="field mt-5">
                  <div className="switch-button">
                    <input
                      className="switch-button-checkbox"
                      type="checkbox"
                    ></input>
                    <label className="switch-button-label" >
                      <span className="switch-button-label-span">MALE</span>
                    </label>
                  </div>
                </div>
                <div className="field mt-5">
                  <div className="self-tables">
                    <div className="name-table">Birthday</div>
                    <div className="info-table">
                      <span>MM</span>
                      <input type="text" className="info-input" placeholder="08"></input>
                    </div>
                    <div className="info-table">
                      <span>DD</span>
                      <input type="text" className="info-input" placeholder="29"></input>
                    </div>
                    <div className="info-table">
                      <span>YYYY</span>
                      <input type="text" className="info-input" placeholder="1974"></input>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <div className="self-tables">
                    <div className="name-table">Height</div>
                    <div className="h-info-table">
                      <span>ft</span>
                      <input type="text" className="info-input" placeholder="5"></input>
                    </div>
                    <div className="h-info-table" >
                      <span>in</span>
                      <input type="text" className="info-input" placeholder="11"></input>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <div className="self-tables">
                    <div className="name-table">Weight</div>
                    <div className="w-info-table">
                      <span>Ibs</span>
                      <input type="text" className="info-input" placeholder="175"></input>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <div className="self-tables">
                    <div className="name-table">Country</div>
                    <div className="c-info-table">
                      <div className="select">
                        <select>
                          <option>United States</option>
                          
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="checkbox">
                    <input className="check-nicotine" type="checkbox" /> 
                    <p>I currently use nicotine products.</p>
                  </label>
                </div>
                <div className="field mt-5">
                  <button className="button is-link is-large is-fullwidth">
                    <Link className="get-link" to="./personal">LET'S GET ESTIMATING</Link>
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

export default Login;
