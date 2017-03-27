import React from 'react';

const SinglePuppyComponent = (props) => (
  <div>
    <h1>Name: {props.puppy.name}</h1>
    <h2>Adorableness Level: {props.puppy.adorableness}</h2>
    <p>Size: {props.puppy.size}</p>
  </div>
);

export default SinglePuppyComponent;
