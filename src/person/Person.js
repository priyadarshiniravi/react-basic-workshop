import React from 'react';
import './Person.css'

const Person = (props) => {
    let onChangeInput = (event) => props.onNameClick.bind(this, event.target.value)();
    return (
        <div className="person">
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.gender}</div>
            <div>{props.children}</div>
            <input onChange={onChangeInput} value={props.name}/>
        </div>
    )
};

export default Person;
