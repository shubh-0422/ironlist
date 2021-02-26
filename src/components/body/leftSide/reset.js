import React, { Component } from "react";

class Reset extends Component {
    render() {
      return (
        <div className="">
          <hr />
          <button
            className="reset"
            type="button" onClick ={() => this.props.handleClickReset()}
          >
            Reset
          </button>
        </div>
      );
    }
  }
  export default Reset;