import React from 'react';
import Pet from './Pet';

function Friend(props) {
  const pets = props.pets.map(function (pet) {
    return <Pet name={pet.name} breed={pet.breed} />;
  });
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Age: {props.age}</h4>
      {pets}
    </div>
  );
}

export default Friend;
