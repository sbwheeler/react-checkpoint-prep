import React from 'react';

const SingleKittyComponent = (props) => (
  <div>
    <h1>{props.kitty.name}</h1>
    <h2>Adorableness Level: {props.kitty.adorableness}</h2>
    <p>Size: {props.kitty.size}</p>
  </div>
);

export default SingleKittyComponent;
