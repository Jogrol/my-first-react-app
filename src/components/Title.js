import React, { Component } from 'react'

export default class Title extends Component {
    state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    return <div>
                <h1>{ this.props.content }</h1>
                <use></use>
            </div>
  }
}