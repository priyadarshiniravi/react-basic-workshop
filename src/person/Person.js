import React from 'react';

const Person = (props) => {
    return (
        <div>
            <div onClick={props.onNameClick.bind(this, props.name)}>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.gender}</div>
            <div>{props.children}</div>
        </div>
    )
};

export default Person;
