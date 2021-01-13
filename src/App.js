import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          time: 0,
          textMap: [],
        }
        
        this.textToAnimate.forEach(element => {
          this.state.textMap.push(this.returnTest(element))
        }
        );
    }
    
  onClick(e) {
    // 1. Make a shallow copy of the items
    let items = [...this.state.textMap[0]];
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[1]};
    // 3. Replace the property you're intested in
    item.color = 'blue';
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[1] = item;
    // 5. Set the state to our new copy
    this.setState({items});
  }
  
  render() {
    return (
      <div className="App">
      <h1>LED-ANIMATIONS</h1>
      <p> Test pour l'animation de lumières LED avec un Arduino </p>
      
        <div className="Animate">
          <span className="textToAnimate">
          {
          [this.state.textMap.map(element => <span key={element.id} className={element.color}>{element.letter}</span>),
          console.log(this.state.textMap[0])]
          }
          </span>
        </div>
        <button onClick={this.onClick}>Run</button>
      </div>
    );
  }
}

export default App;
