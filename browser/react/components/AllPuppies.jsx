import React from 'react';
import store from '../../redux/store';
import SinglePuppyComponent from './SinglePuppy';

class AllPuppiesComponent extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    this.unsubscribe;
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>You have {this.state.puppies.length} Puppies:</h1>
        {this.state.puppies.map(puppy => <SinglePuppyComponent puppy={puppy} />)}
      </div>
    );
  }
}

export default AllPuppiesComponent;
