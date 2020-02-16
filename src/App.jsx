import React, { Component } from "react";
import Dates from "./components/dates";

class App extends Component {
  state = {
    dates: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        "https://frontend-navigatetravel.ntstage.com/api"
      );
      const data = await res.json();
      this.setState({ dates: data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return <Dates dates={this.state.dates} />;
  }
}

export default App;
