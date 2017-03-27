import React from 'react';
import store from '../redux/store';
import SinglePuppyComponent from './SinglePuppy';

//THIS WILL RENDER A NUMBER OF THE SINGLE PUPPY COMPONENTS BASED ON PASSED IN STATE
export default class extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Inbox</h1>
      </div>
    );
  }
}
