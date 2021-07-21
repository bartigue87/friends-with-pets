import React from 'react';

function Pet(props) {
  return (
    <div>
      <h5>Pet's name: {props.name}</h5>
      <h6>Pet's breed: {props.breed}</h6>
    </div>
  );
}

export default Pet;
