import React, { Component } from "react";
import './text-slide.css'

const textArray = [
  ` Registration Fees ? Nope`,
  "Capital Security ? 100% ",
  "Convinced ? Start Investing",
];

class TextSlide extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 4500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
      <section className=" dynamic-rendering ml-auto ">
        <p>Ovest Benefits</p>
        <h1>{textThatChanges}</h1>
      </section>
    );
  }
}

export default TextSlide;
