import './Numbers.css';
import React from "react";
import Number from "./Number.jsx"

export default class Numbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        numbers: [1, 2, 3, 4, 5 ,6],
        show: false,
    };
  }

  randomize = () => {
    const numbers = [];
    while (numbers.length < 6) {
      const randomNumber = Math.round(Math.random() * 48 + 1);
      if (!numbers.find(number => number === randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    this.setState(state => ({numbers: numbers}) )
  }

  show = () => {
      this.randomize();
      this.setState(state => ({show: true}))
  }
  reset = () => {
      this.setState(state => ({show: false}))
  }

  render() {
    return (
        <>
          <div className="title">Lotto 6/49</div>
            {
                this.state.show ?
                    <div className="numbers">
                        {this.state.numbers.map((number, id) => <Number key={id} value={number}/>)}
                    </div>
                : null
            }

            <div className="buttons">
                <input type="button" value="Reset" onClick={this.reset}/>
                <input type="button" value="Show me lucky numbers" onClick={this.show}/>
            </div>
        </>
    )
  }
}