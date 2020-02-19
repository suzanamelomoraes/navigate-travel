import React, { Component } from "react";
import styled from "styled-components";
import Dates from "./components/dates";
import Titles from "./components/titles";

const Container = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  font-family: "Roboto", sans-serif, Arial, Helvetica, sans-serif;
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
      <Wrapper>
        <Titles />
        <Container>
          <Dates dates={this.state.dates} />
        </Container>
      </Wrapper>
    );
  }
}

export default App;
