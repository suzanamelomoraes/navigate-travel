import React, { Component } from "react";

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
    return <div>{this.state.dates.map(date => date.date)}</div>;
  }
}

export default App;
