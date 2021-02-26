import React, { Component } from "react";
class Ratings extends Component {
    
    render() {
     
      return (
        <div className="">
          <h2 className="">Ratings</h2>
  
          <ul className="list-unstyled">
           
          <li className="cat-list">
            <div>
              <a
                className=""
                href="#" onClick ={() => this.props.handleClickRatingSelection('5')}
              >5 Stars</a>
            </div>
            <div>
              <span className="">{this.props.ratingcount}</span>
            </div>
            </li> 
          <li className="cat-list">
            <div>
              <a
                className=""
                href="#" onClick ={() => this.props.handleClickRatingSelection('3')}
              >3 Stars</a>
            </div>
            <div>
              <span className="">{this.props.ratingcount}</span>
            </div>
            </li> 
          </ul>
        </div>
      );
    }
  }
  export default Ratings;