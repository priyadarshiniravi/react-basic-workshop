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
            },
            {
                name: "RandomName",
                age: 25,
                gender: "Male"
            }
        ]
    };

    switchNameHandler = (name) => {
        this.setState({
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
                    name: name,
                    age: 25,
                    gender: "Male"
                }
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.switchNameHandler.bind(this, "RandomName")}>Reset Random Name</button>
                {this.state.people.map((person) => {
                    return (
                        <div>
                            <Person name={person.name}
                                    age={person.age}
                                    gender={person.gender}
                                    onNameClick={this.switchNameHandler}/>
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default App;
