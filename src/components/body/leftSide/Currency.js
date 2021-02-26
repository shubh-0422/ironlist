import React, { Component } from "react";
import "./leftside.css"
class Currency extends Component {
    
    render() {
     
      return (
        <div className="">
          <h2 className="">Countries</h2>
          <ul className="list-unstyled">
         
          <li className="cat-list">
            <div>
              <a
                className=""
                href="#"  onClick ={() => this.props.handleClickCurrencySelection('$')}
              >United States</a>
            </div>
            </li>     
            <li className="cat-list">
            <div>
              <a
                className=""
                href="#"  onClick ={() => this.props.handleClickCurrencySelection('€ ')}
              >Germany</a>
            </div>
            </li>     
            <li className="cat-list">
            <div>
              <a
                className=""
                href="#"  onClick ={() => this.props.handleClickCurrencySelection('₹')}
              >India</a>
            </div>
            </li>     
            <li className="cat-list">
            <div>
              <a
                className=""
                href="#"  onClick ={() => this.props.handleClickCurrencySelection('¥')}
              >China</a>
            </div>
            </li>          
          </ul>
        </div>
      );
    }
  }
  export default Currency;