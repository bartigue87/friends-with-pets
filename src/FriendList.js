import React from 'react';
import friends from './friends';
import Friend from './Friend';

function FriendList() {
  const friendList = friends.map(function (friend) {
    return <Friend name={friend.name} age={friend.age} pets={friend.pets} />;
  });
  return <div>{friendList}</div>;
}

export default FriendList;
