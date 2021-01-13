import React, { Component } from "react"

class Character extends Component {
  render() {
    return (
        <span className={this.props.item.color}>{this.props.item.letter}</span>
    )
  }
}

export default Character
