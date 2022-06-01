import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./insurance.scss";

const Insurance = () => {

  const[crypto, setCrypto]= useState("")
  const[count, setCount] = useState(1000000)
  const posi_Number = new RegExp(
    '^[0-9]+[0-9]*$'
 );

 const changeValue = (value) => {
    if(posi_Number.test(value)) {
      setCount(parseInt(value))
    }
 }

  return (
              <div className="box">
                <div className="field mt-5 mb-5 self-title">
                  <Link to="/personal">
                    <button className="title-btn">
                      <span className="icon">
                        <i className="fas fa-arrow-left"></i>
                      </span>
                    </button>
                  </Link>
                  <h1 className="self-name">WHOLE LIFE INSURANCE</h1>
                  <Link to="/">
                    <button className="title-btn">
                      <span className="icon">
                        <i className="fas fa-times"></i>
                      </span>
                    </button>
                  </Link>
                </div>
                <div className="field mt-5 amount">
                  <h3 className="amount-name">Coverage amount</h3>
                </div>
                <div className="field mt-1 count-amountn">
                  <button className="amount-btn" onClick={()=> setCount(count-1)} >
                  
                    <span className="icon">
                      <i className="fa-solid fa-minus"></i>
                    </span>
                  </button>
                  <div className="amounts">
                    <input
                      type="text"
                      className="amounts-number"
                      placeholder="$1,000,000"
                      value={count}
                      onChange={(e) => {changeValue(e.target.value);}}
                    ></input>
                      {console.log(crypto)}
                      {console.log(count)}
                  </div>
                  <button className="amount-btn" onClick={()=> setCount(count+1)}>
                  
                    <span className="icon">
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </button>
                </div>

                <div className="field mt-5 select-crytos">
                  <div className="field mt-5 amount">
                    <h3 className="amount-name select-stake">SELECT CRYPTO TO STAKE</h3>
                  </div>
                  <div className="field mt-3 select-cryto">
                    <div className="select-crypto-lines">
                      <div className="select-crypto-line mb-5">
                        <img
                          src="./cryptoicons/bitcoin.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">BTC</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                          onClick={()=> setCrypto("bitcoin")}
                        ></input>
                      </div>
                      <div className="select-crypto-line mb-5">
                        <img
                          src="./cryptoicons/ethereum.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">ETH</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                          onClick={()=> setCrypto("ethereum")}
                        ></input>
                      </div>
                    </div>
                    <div className="select-crypto-lines">
                      <div className="select-crypto-line mb-5">
                        <img
                          src="./cryptoicons/solana.jpg"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">SOL</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                          onClick={()=> setCrypto("solana")}
                        ></input>
                      </div>
                      <div className="select-crypto-line mb-5">
                        <img
                          src="./cryptoicons/binance.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">BNB</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                          onClick={()=> setCrypto("binance")}
                        ></input>
                      </div>
                    </div>
                    <div className="select-crypto-lines">
                      <div className="select-crypto-line mb-5">
                        <img
                          src="./cryptoicons/bitcoincash.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">BCH</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                          onClick={()=> setCrypto("bitcoin_cash")}
                        ></input>
                      </div>
                      <div className="select-crypto-line mb-5">
                        <img
                          src="./cryptoicons/caradano.jpg"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">ADA</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                          onClick={()=> setCrypto("caradano")}
                        ></input>
                      </div>
                    </div>
                    <div className="select-crypto-lines">
                      <div className="select-crypto-line mb-5">
                        <img
                          src="./cryptoicons/xrp.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name">XRP</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                          onClick={()=> setCrypto("xrp")}
                        ></input>
                      </div>
                      <div className="select-crypto-line mb-5">
                        <img
                          src="./cryptoicons/luna.png"
                          className="crypto-img"
                          alt=""
                        ></img>
                        <span className="crypto-name-luna">LUNA</span>
                        <input
                          type="radio"
                          name="crypto"
                          className="crypto-check"
                          onClick={()=> setCrypto("luna")}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field mt-5">
                  <Link to="/transfer">
                    <button className="button is-link is-large is-fullwidth">
                      GET QUOTE
                    </button>
                  </Link>
                </div>
                <li className="foot-more">
                  <Link className="get-link" to="/">
                    Learn More {">"}
                  </Link>
                </li>
              </div>
  );
};

export default Insurance;
