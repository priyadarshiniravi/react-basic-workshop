import React from 'react';

const Person = (props) => {
    let onChangeInput = (event) => props.onNameClick.bind(this, event.target.value)();
    return (
        <div>
            <div onClick={props.onNameClick.bind(this, props.name)}>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.gender}</div>
            <div>{props.children}</div>
            <input onChange={onChangeInput} value={props.name}/>
        </div>
    )
};

export default Person;
