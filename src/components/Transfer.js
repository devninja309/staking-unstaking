import React from "react";
import { Link } from "react-router-dom";
import "./transfer.scss";

const Insurance = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-mobile">
              <form className="box">
                <div className="field mt-5 mb-5 self-title">
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
                <div className="field mt-5 stakings-line">
                  <div className="stakings">
                    <div className="staking-crypto">
                      <img
                        src="./cryptoicons/ethereum.png"
                        className="crypto-img"
                        alt=""
                      ></img>
                      <span className="crypto-name">ETH</span>
                    </div>
                    <div className="select">
                      <select className="staking-amount">
                        <option>0.00000000</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field mt-5 qr-center">
                  <img
                    src="./cryptoicons/QR.jpg"
                    className="qr-img"
                    alt=""
                  ></img>
                </div>
                <div className="field mt-5">
                  <div className="count-amount">
                    <div className="deposit">
                      <h3 className="deposit-address">
                        Deposit Address(<span>ETH</span>)
                      </h3>
                      <span className="deposit-passowrd">
                        0xdfC09A357654504Dcdfg654Dcdfg65
                      </span>
                    </div>
                    <div>
                      <i className=" fa-solid fa-copy deposit-icon"></i>
                    </div>
                  </div>
                </div>
                <div className="field mt-5 footer-note">
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
