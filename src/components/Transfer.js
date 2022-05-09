import React from "react";
import { Link } from "react-router-dom";
import "./transfer.scss";

const Insurance = () => {
  return (
    // <section className="hero has-background-grey-light is-fullheight is-fullwidth">
    //   <div className="hero-body">
    //     <div className="container">
    //       <div className="columns is-centered">
    //         <div className="column is-mobile">
              <div className="box">
                <div className="field self-title">
                  <Link to="/insurance">
                    <button className="title-btn">
                      <span className="icon">
                        <i className="fas fa-arrow-left"></i>
                      </span>
                    </button>
                  </Link>
                  <h1 className="self-name">STAKING TRANSFER</h1>
                  <Link to="/">
                    <button className="title-btn">
                      <span className="icon">
                        <i className="fas fa-times"></i>
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="field mt-2 stakings-line">
                  <div className="stakings">
                    <div className="staking-crypto">
                      <img
                        src="./cryptoicons/ethereum1.png"
                        className="crypto-img"
                        alt=""
                      ></img>
                      <span className="crypto-names">ETH</span>
                    </div>
                    <div className="select select-staing">
                      <select className="staking-amount">
                        <option>0.00000000</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-2 qr-center">
                  <img
                    src="./cryptoicons/QR.jpg"
                    className="qr-img"
                    alt=""
                  ></img>
                </div>
                <div className="field ">
                  <div className="count-amount">
                    <div className="deposit">
                      <h3 className="deposit-address">
                        Deposit Address(<span>ETH</span>)
                      </h3>
                      <span className="deposit-password">
                        0xdfC09A357654504Dcdfg654Dcdfg65
                      </span>
                    </div>
                    <div>
                      <button className="copy-url">
                      <img  className="deposit-icon" src="./cryptoicons/copy-icon.png" alt=""></img>
                      </button>
                      
                    </div>
                  </div>
                </div>
                <div className="field mt-1 footer-note">
                  <p>NOTE</p>
                  <p>ETH Chain Only</p>
                  <p>
                    Minimum Direct Deposit: <span>0.00005000 ETH</span>
                  </p>
                  <p>
                    Minimum FaucetPay Deposit: <span>0.00000001 ETH</span>
                  </p>
                  <p>
                    Confirmations Required: <span>6</span>
                  </p>
                  <p>Please do not deposit invalid assets to this address.</p>
                  <p>We are not responsible for lost funds</p>
                  <p>We do not support deposits from smart contracts. A</p>
                  <p>Recovery fee will be charged for such transactions.</p>
                </div>
                <div className="field mt-5"></div>
              </div>
    //         {/* </div>
    //       </div>
    //     </div>
    //   </div>
    // </section> */}
  );
};

export default Insurance;
