import React from 'react';
import Main from '../MainPage/MainPage';
import { Route, Link } from 'react-router-dom';
import PetList from '../PetList/PetList';

function Root() {
  return (
    <div>
      <Link to='/'>
       <h1>Petful</h1>
      </Link>
      
      <Route exact path='/' component={Main} />
      <Route path='/pets' component={PetList} />
    </div>
  );
}

export default Root;
