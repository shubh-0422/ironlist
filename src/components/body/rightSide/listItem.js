import React, { Component } from "react";
// import Converter from "./priceconvert.js";
import "./../index.css";
import allProducts from "../../../mock/productInfo.js";
class ListItem extends Component {
    constructor(props) {
      super(props);
      
    }
    

    render() {
      if (this.props.products !== undefined) {
        let  products  = this.props.products;
        let populate = []; 
        populate = products.map((products, index) => {
         
          let image = null;
          if (products.category == "Mobile") {
            image = "mobile.jpg";
          } else {
            image = "laptop.png";
          }
          
          return (
            <li className="item" key={index} >
                <img src={products.image} className="image" />
              <div>
              <div className="name">
                <div className="productname" key={products.id}>
                  {" "}
                  {products.company}{" "}                 
                </div>
                <div className="rating">{(products.rating)}.0 ★</div>
                <div className="stoage">
              <div className="category">Category: {products.category}</div> 
              </div>
              <div className="description">{products.description}</div>
                </div></div>
              
                <div className="price">
                 {products.currency} {products.price}
                 </div>
              
            </li>
          );
        });
        return <div> {populate} </div>;
      } else {
        return <div />;
      }
    }
  }

  const state = {

    currency: [
      {code: "INR", name: "INR",  rate: 1},
      {code: "USD", name: "USD", rate: 0.015},
      {code: "GBP", name: "GBP", rate: 0.012},
      {code: "EUR", name: "EUR", rate: 0.013},
    ],
    selectedCurrency: 'INR'
  };
  
  

  
  export default ListItem;