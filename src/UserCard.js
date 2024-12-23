import React from 'react';

function UserCard(props) {
    return <h1>Привет, {props.name}! Ваш возраст {props.age}.</h1>;
}


export default UserCard;