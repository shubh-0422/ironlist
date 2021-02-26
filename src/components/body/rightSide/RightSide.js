import React, { Component } from "react";

import "./../index.css";
import ListItem from "./listItem"

class RightSide extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { products } = this.props;
    if(this.props.categoryName != undefined){
      var Name = this.props.categoryName;
      // console.log(this.props.setCurreny)
    }
    
    return (
        <div className="rightside">
          <h1 className=""> {Name} {this.props.setCurreny} </h1>
          <ul className="list-unstyled list">
            <div className="itemlist">
{/* {console.log(this.props.currenyName)} */}
              <ListItem products={products}/>  
            </div>
          </ul>
      </div>
    );
  }
}

// class ListItem extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
    
// }
export default RightSide;
