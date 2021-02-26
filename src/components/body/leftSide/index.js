import React, { Component } from "react";
import Categories from "./categories";
import Currency from "./Currency";
import Pricing from "./pricing";
import Reset from "./reset";
import Rating from "./ratings";
import "./../index.css";

class LeftSide extends Component {
  handleClickcategorySelection = selectedCategory => {
    this.props.setCategory(selectedCategory);
  };


  handleClickcurrencySelection = selectedCurrency => {
    this.props.setCurrency(selectedCurrency);
  };

  handleClickratingSelection = (selectedRating) => {
    this.props.setRating(selectedRating);

  };
 
 
  handleClickReset = () => {
    this.props.setReset();
  };
  handleClickFilterChangevalue = (min, max) =>{
    this.props.changefilterValue(min, max);
  }

  render() {
    if (this.props.products !== undefined) {
      let { products } = this.props;
 
      let mobile = 0;
      let laptop = 0;
      let subCat = products.map((row, index) => {
        if (row.category == "Mobile") {
          mobile = mobile + 1;
        } else {
          laptop = laptop + 1;
        }
      });

    
     
      let filterData = this.props.filterData;
      return (
          <div className="leftside">
            <Categories 
              mobileCount={mobile}
              laptopCount={laptop}
              subCat={subCat}
              handleClickCategorySelection={this.handleClickcategorySelection}
            />
            <Currency
              handleClickCurrencySelection={this.handleClickcurrencySelection}
            />
            <Pricing 
              filterData={filterData}
              handleClickFilterChangevalue={this.handleClickFilterChangevalue}
            />
            <Rating
              handleClickRatingSelection={this.handleClickratingSelection}
            />
            <Reset 
              handleClickReset={this.handleClickReset}
            />
          </div>
    );
    } else {
      return (
        <div className="">
          <div className="">
            <Categories />
            //pricing is here..
            <Reset />
          </div>
        </div>
      );
    }
  }
}
export default LeftSide;
