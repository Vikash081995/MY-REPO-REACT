import { Component } from "react";
export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Initial text"
    };
  }
  update(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Example Class</h1>
        <h2>{this.state.text}</h2>
        <input type="text" onChange={this.update.bind(this)} />
      </div>
    );
  }
}
