import React, { Component } from "react";
import "./App.css";

import Body from "./components/body/Body";
import { Provider } from "react-redux";
import store from "./store";

// class Footer extends Component {
//   render() {
//     return <div />;
//   }
// }

class App extends Component {
  render() {
    return (
      <Provider store={store}>
    
        <div>
          <Body />
          {/* <Footer /> */}
    </div>
      </Provider>
    );
  }
}

export default App;