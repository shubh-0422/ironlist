import React from "react";
import axios from "axios";
// import converter from "./converter.css";

import "./../index.css";
import Currency from "../leftSide/Currency";
class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      fromCurrency: "USD",
      toCurrency: "INR",
      amount: 1,
      currencies: []
    };
  }
  componentDidMount() {
    axios
      .get("http://api.openrates.io/latest")
      .then(response => {
        const currencyAr = ["EUR"];
        for (const key in response.data.rates) {
          currencyAr.push(key);
        }
        this.setState({ currencies: currencyAr });
      })
      .catch(err => {
        console.log("oppps", err);
      });
  }
  convertHandler = () => {
    
  };
  selectHandler = event => {
    if (event.target.name === "from") {
      this.setState({ fromCurrency: event.target.value });
    } else {
      if (event.target.name === "to") {
        this.setState({ toCurrency: event.target.value });
      }
    }
  };
  render() {
    return (
      <div className="Converter">
        <h2>
          <span>Currency</span>Converter
          <span role="img" aria-label="money">
            &#x1f4b5;
          </span>
        </h2>
        <div className="From">
        <button onClick={this.convertHandler}>Convert</button>
          {this.state.result && <h3>{this.state.result}</h3>}
          <div>{this.state.toCurrency} {this.state.amount}</div>
        </div>
      </div>
    );
  }
}
export default Converter;