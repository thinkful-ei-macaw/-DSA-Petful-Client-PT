import React, { Component } from 'react';
import PetsApiService from '../Services/pets-api-service';

export default class PetList extends Component {
  state = {
    pets: {
      cat: null,
      dog: null
    },
    error: null
  };
  componentDidMount() {
    PetsApiService.getPets().then(this.state.setState);
    console.log(this.state);
  }

  render() {
    return <p>{this.state.cat}</p>;
  }
}
