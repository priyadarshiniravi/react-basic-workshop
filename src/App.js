import React, {Component} from 'react';
import './App.css';
import Person from "./person/Person";

class App extends Component {
    state = {
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
            }
        ]
    };

    render() {
        return (
            <div className="App">
                <button>Switch Name</button>
                {this.state.people.map((person) => {
                    return (
                        <div>
                            <Person name={person.name} age={person.age} gender={person.gender} />
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default App;
