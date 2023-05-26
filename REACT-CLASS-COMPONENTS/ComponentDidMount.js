import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Anil"
    };
  }
  componentDidMount() {
    console.log("componentDid Mount");
  }

  render() {
    return (
      <div>
        <h1>Component Did Mount {this.state.name}</h1>
        <button
          onClick={() => {
            this.setState({ name: "Sidhu" });
          }}
        >
          Update Name
        </button>
      </div>
    );
  }
}
