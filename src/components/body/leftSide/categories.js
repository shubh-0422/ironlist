import React, { Component } from "react";
class Categories extends Component {
    
    render() {
     
      return (
        <div className="categories">
          <h2 className="">Categories</h2>
          <ul className="list-unstyled">
         
            <li className="cat-list">
            <div>
              <a
                className=""
                href="#" onClick ={() => this.props.handleClickCategorySelection('Laptop')}
              >Laptops</a>
            </div>
            <div>
              <span className="">{this.props.laptopCount}</span>
            </div>
            </li>
            <li className="cat-list">
              <div><a
                className=""
                href="#" onClick ={() => this.props.handleClickCategorySelection('Mobile')}
              >
                Mobile Phones
                </a></div>
              <div>
              <span className="">{this.props.mobileCount}</span>
              
              </div>

            </li>
          
          </ul>
        </div>
      );
    }
  }
  export default Categories;