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
        ],
        showPerson: true
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

    hidePerson = () => {
        this.setState({showPerson: !this.state.showPerson})
    };

    renderPerson = () => {
        return this.state.people.map((person) => {
            return (
                <div>
                    <Person name={person.name}
                            age={person.age}
                            gender={person.gender}
                            onNameClick={this.switchNameHandler}/>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.hidePerson} >Toggle showing Person</button>
                {this.state.showPerson ? this.renderPerson() : null}
            </div>
        );
    }
}

export default App;
