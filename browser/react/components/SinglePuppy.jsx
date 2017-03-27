import React from 'react';

export default (props) => (
  <div>
    <h1>Name: {props.puppy.name}</h1>
    <h2>Adorableness Level: {props.puppy.adorableness}</h2>
    <p>Size: {props.puppy.size}</p>
  </div>
);
