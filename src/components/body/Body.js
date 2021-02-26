import React, { Component } from "react";
import LeftSide from "./leftSide";
import RightSide from "./rightSide/RightSide";
import { getTrendngProducts, getAllProducts } from "../../actions/products";
import { connect } from "react-redux";
import "./index.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      displayProducts: [],
      filterProperties: {
        category: null,
        rating:null, 
        RatingValue: "",
        currencyName:"$",
        categoryName: "",
        pricing: {
          currentValue:[0, 1000],   
          step:1,
          min: 0,
          max: 10000
        },
      }
    };
  }



  componentWillMount = () => {
    this.props.getAllProducts();
    this.props.getTrendngProducts();
  }

  componentWillReceiveProps = (nextProps) =>{
    let state = JSON.parse(JSON.stringify(this.state));
    state.displayProducts = nextProps.allProducts;
    state.filterProperties.categoryName=  "All Products";
    this.setState(state); 
  }

  setCategory = selectedCategory => {
    let  data  = this.props.allProducts;
    let products = [];
        data.map((data, index) => {
            if(data.category == selectedCategory){
             products.push(data);
            }
            
          });  
    let state = JSON.parse(JSON.stringify(this.state));
    state.filterProperties.category = selectedCategory;
    state.displayProducts = products;
    state.filterProperties.categoryName = selectedCategory;
    this.setState(state);
  };

  setCurrency = selectedCurrency => {
    this.setState({currencyName:selectedCurrency})
    let  data  = this.props.allProducts;
    let products = [];
        data.map((data, index) => {
            if(data.currency == selectedCurrency)
            {
             products.push(data);
            }
            
          });  
    let state = JSON.parse(JSON.stringify(this.state));
    state.filterProperties.currency = selectedCurrency;
    state.displayProducts = products;
    state.filterProperties.currencyName = selectedCurrency;
    this.setState(state);
  };

  setRating = selectedRating => {
    let  data  = this.props.allProducts;
    let products = [];
        data.map((data, index) => {
            if(data.rating == selectedRating){
             products.push(data);
            }
            
          });  
    let state = JSON.parse(JSON.stringify(this.state));
    state.filterProperties.rating = selectedRating;
    state.displayProducts = products;
    state.filterProperties.ratingValue = selectedRating;
    this.setState(state);
  };





  filteredPricing = (data) =>{
    let response = [];
    let min = this.state.filterProperties.pricing.currentValue[0];
    let max = this.state.filterProperties.pricing.currentValue[1];
    data.map((data, index) => {
      if(data.price > min && data.price < max){
        response.push(data);
      }
    });  
    return response;
  }
    
  setPricing = selectedPrice => {
    let state = JSON.parse(JSON.stringify(this.state));
    state.filterProperties.pricing = selectedPrice;
    this.setState(state);
  };

  setReset = () => {
    let state = JSON.parse(JSON.stringify(this.state));
    state.displayProducts = this.props.allProducts;
    state.filterProperties.pricing.category = null;
    state.filterProperties.pricing.min = 0;
    state.filterProperties.pricing.max = 1000;
    state.filterProperties.pricing.currentValue[0] = 0;
    state.filterProperties.pricing.currentValue[1] = 1000;
    state.filterProperties.categoryName=  "All Products";
    this.setState(state);
  };   


  changefilterValue = (min, max) =>{
    let state = JSON.parse(JSON.stringify(this.state));
    state.filterProperties.pricing.currentValue[0] = min;
    state.filterProperties.pricing.currentValue[1] = max;
    this.setState(state);
  }

  render() {
    let products = this.props.allProducts;
    let data = this.filteredPricing(this.state.displayProducts);
    let productsData = data
    let filterData = this.state.filterProperties.pricing;
    return (
      <div className="main">
        {/* <div className="row"> */}
          <LeftSide className="leftside"
          products={products} 
          setCategory={this.setCategory} 
          setReset={this.setReset}
          setRating={this.setRating}   //for rating
          setCurrency={this.setCurrency} 
          changefilterValue={this.changefilterValue}
          filterData={filterData}
          />
          {/* {console.log(this.state.filterProperties.currencyName)} */}
          <RightSide
          products={productsData}
          currencyName={this.state.filterProperties.currencyName}
          categoryName={this.state.filterProperties.categoryName}
          />          
        </div>
      // </div>?
    );
  }
}
const mapStateToprops = state => ({
  allProducts: state.products.allProducts,
  trendingProducts: state.products.trendingItems,

});



export default connect(
  mapStateToprops,
  { getTrendngProducts, getAllProducts }
)(Body);
