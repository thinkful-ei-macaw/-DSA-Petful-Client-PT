import React, { Component } from 'react';
import '../MainPage/MainPage.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PetList from '../PetList/PetList';

export default class Main extends Component {
  render() {
    return (
      <div className='main-page'>
        <img
          src='https://pethavenmn.org/wp-content/uploads/2017/08/5a898cc6f6567557b5376222cfa764d593fd7cbb.jpg'
          alt='pets'
        />
        <p className='description'>
          Welcome to Petful, presented by FIFO. We only have 2 animals in the shelter at one time. The adoption process
          is strinctly "First-In, First-Out", so you can only adopt the animals that came first. You can adopt a dog,
          cat, or both, as long as it's the animal that came first. When it is your turn, you will be called from a
          Queue.{' '}
        </p>
        <Link to='/pets'>
          <input type='button' value='Click to view pets' />
        </Link>
      </div>
    );
  }
}
