import React, { Component } from 'react';
import './App.css';
import Character from "./Character"

class App extends Component {

  constructor(props) {
    super(props);

    const colors = ['red', 'green', 'blue'];
    this.textToAnimate = "Puzzle's".split("");
    this.counter = 0
    this.colors = ['red', 'green', 'blue']


    this.onClick = this.onClick.bind(this);
    this.changeText = this.changeText.bind(this);


    this.returnTest = function(e){
      let temp = {}
      temp.letter = e
      temp.color = colors[Math.floor(Math.random() * colors.length)];
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

    this.state.textString.split("").forEach(element => {
      this.state.textMap.push(this.returnTest(element))
    }
    );
  }

  onClick(e) {
    console.log('clicked')
    this.setState(prevState => {
          let randomColor = this.colors[Math.floor(Math.random() * this.colors.length)] //item gets random color
          const updatedCharacters = prevState.textMap.map(item => {
               item.color = randomColor
               return item
           })
           return {
               textMap: updatedCharacters
           }
       })
  }

  changeText(event) {
    this.setState({textString: event.target.value});
    console.log(event.target.value)
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
        <input onChange={this.changeText} value={this.state.textString}/>
      </div>
    );
  }
}

export default App;
