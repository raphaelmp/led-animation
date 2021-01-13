import React, { Component } from 'react';
import './App.css';
import Character from "./Character"

class App extends Component {
  constructor(props) {
        super(props);
        this.textToAnimate = "Puzzle's".split("");
        this.counter = 0
        this.colors = ['red', 'green', 'blue']
        this.onClick = this.onClick.bind(this);


        this.returnTest = function(e){
          let temp = {}
          temp.letter = e
          temp.color = this.colors[Math.floor(Math.random() * this.colors.length)];
          temp.id = this.counter;
          this.counter++;
          return temp
        }

        this.state = {
          textString: "Puzzle's",
//          textArray: this.state.textString.split(""),
          time: 0,
          textMap: [],
        }

        this.textToAnimate.forEach(element => {
          this.state.textMap.push(this.returnTest(element))
        }
        );
    }

  onClick(e) {
    console.log('clicked')
  }

  render() {
    return (
      <div className="App">
      <h1>LED-ANIMATIONS</h1>
      <p> Test pour l'animation de lumières LED avec un Arduino </p>

        <div className="Animate">
          <div className="textToAnimate">
            {this.state.textMap.map(item => <Character key={item.id} item={item} /> )}
          </div>

        </div>
        <button onClick={this.onClick}>Run</button>
      </div>
    );
  }
}

export default App;
