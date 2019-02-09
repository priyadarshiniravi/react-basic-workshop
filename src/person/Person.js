import React from 'react';

const Person = (props) => {
    return (
        <div>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.gender}</div>
            <div>{props.children}</div>
        </div>
    )
};

export default Person;
