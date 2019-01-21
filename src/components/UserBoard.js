import React, { Component } from 'react'
import User from './User';

export default class UserBoard extends Component {
  render() {
    return  <div>
                <h3>User board</h3>
                <User name="Joey" />
                <User name="Alex" />
                <User name="Pieter" />
                <User name="Anniek" />
            </div>
  }
}