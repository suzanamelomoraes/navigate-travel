import React, { Component } from "react";
import Dates from "./components/dates";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

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
    return (
      <Container>
        <Dates dates={this.state.dates} />
      </Container>
    );
  }
}

export default App;
