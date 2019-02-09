import React, {useState} from 'react';
import './App.css';
import Person from "./person/Person";

const App = () => {
    const [currentState, setState] = useState({
        people: [
            {
                name: "Priya",
                age: 25,
                gender: "Female"
            },
            {
                name: "Uday",
                age: 25,
                gender: "Male"
            },
            {
                name: "RandomName",
                age: 25,
                gender: "Male"
            }
        ],
        otherState: "Any other State"
    });

    const switchNameHandler = () => {
        setState({
            ...currentState,
            people: [
                {
                    name: "Priya",
                    age: 25,
                    gender: "Female"
                },
                {
                    name: "Uday",
                    age: 25,
                    gender: "Male"
                },
                {
                    name: "RandomNameSwitched",
                    age: 28,
                    gender: "Female"
                }
            ]
        })
    };

    return (
        <div className="App">
            <button onClick={switchNameHandler}>Switch Name</button>
            {currentState.people.map((person) => {
                return (
                    <div>
                        <Person name={person.name} age={person.age} gender={person.gender}/>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );

}

export default App;
