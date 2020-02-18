import React, { Component } from "react";
import Dates from "./components/dates";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
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
        <Title>
          <h1>Our Prices</h1>
          <h2>Premier</h2>
          <h2>Premier Plus</h2>
          <h2>Catamaran</h2>
        </Title>
        <Container>
          <Dates dates={this.state.dates} />
        </Container>
      </Wrapper>
    );
  }
}

export default App;
