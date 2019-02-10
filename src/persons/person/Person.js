import React from 'react';
import styles from './Person.module.css'

const Person = (props) => {
    let onChangeInput = (event) => props.onNameClick.bind(this, event.target.value)();
    return (
        <div className={styles.person}>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.gender}</div>
            <div>{props.children}</div>
            <input onChange={onChangeInput} value={props.name}/>
            <button className={styles.delete} onClick={props.delete}> Delete</button>
        </div>
    )
};

export default Person;
